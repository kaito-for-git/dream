from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from database import engine, get_db, SessionLocal
import models, schemas

# テーブル作成
models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# DBセッションの依存注入
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# ==========================================
# アカウント
# - アカウント設定の取得
# ==========================================

# アカウント設定の取得
@app.get("/config/{user_id}", response_model=schemas.UserConfigBase)
def get_user_config(user_id: str, db: Session = Depends(get_db)):
    config = db.query(models.UserConfig).filter(models.UserConfig.id == user_id).first()
    if not config:
        # 初回アクセス時などにデータがない場合のハンドリング
        raise HTTPException(status_code=404, detail="Config not found")
    return config

# ==========================================
# ノート
# - ノート設定の取得
# - ノート設定の更新
# - ノート新規作成
# - ノートの削除
# ==========================================

# ノートの取得
@app.get("/notes/{user_id}", response_model=list[schemas.NoteConfig])
def get_user_notes(user_id: str, db: Session = Depends(get_db)):
    # ユーザーに紐づくノートを「全件」取得する
    return db.query(models.Note).filter(models.Note.user_id == user_id).all()

# ノートの更新
@app.put("/notes/{note_id}", response_model=schemas.NoteConfig)
def update_note(note_id: str, note_update: schemas.NoteUpdate, db: Session = Depends(get_db)):
    # 指定されたIDのノートをDBから探す
    db_note = db.query(models.Note).filter(models.Note.id == note_id).first()
    
    if not db_note:
        raise HTTPException(status_code=404, detail="Note not found")

    # 送信されたデータ（Optional）がある項目だけ上書きする
    # exclude_unset=True にすることで、送られてこなかった項目は無視される
    update_data = note_update.model_dump(exclude_unset=True)
    for key, value in update_data.items():
        setattr(db_note, key, value)

    # DBに保存して最新の状態を返す
    db.commit()
    db.refresh(db_note)
    return db_note

# ノートの新規作成
@app.post("/notes/", response_model=schemas.NoteConfig)
def create_note(note: schemas.NoteCreate, db: Session = Depends(get_db)):
    # フロントから送られた全データをそのまま保存する
    db_note = models.Note(**note.model_dump())
    db.add(db_note)
    db.commit()
    db.refresh(db_note)
    return db_note

# ノートの削除
@app.delete("/notes/{note_id}", status_code=204)
def delete_note(note_id: str, db: Session = Depends(get_db)):
    # 指定されたUUIDのノートをDBから探す
    db_note = db.query(models.Note).filter(models.Note.id == note_id).first()
    
    # もし存在しなければ 404 エラー
    if not db_note:
        raise HTTPException(status_code=404, detail="Note not found")

    # 削除を実行
    db.delete(db_note)
    db.commit()

    # 204 No Content を返す
    return None