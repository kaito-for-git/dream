from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from database import engine, get_db, SessionLocal
import models, schemas

# テーブル作成
models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# ==========================================
# アカウント
# - アカウント設定の取得
# - アカウント設定の更新
# - アカウント新規作成
# - アカウント削除
# ==========================================

# アカウント設定の取得
@app.get("/user/{user_id}", response_model=schemas.UserBase)
def get_user_config(user_id: str, db: Session = Depends(get_db)):
    config = db.query(models.User).filter(models.User.user_id == user_id).first()
    if not config:
        # 初回アクセス時などにデータがない場合のハンドリング
        raise HTTPException(status_code=404, detail="Config not found")
    return config

# アカウント設定の更新
@app.put("/user/config/{user_id}", response_model=schemas.UserBase)
def update_user_config(user_id: str, config_update: schemas.UserConfigUpdate, db: Session = Depends(get_db)):
    db_config = db.query(models.User).filter(models.User.user_id == user_id).first()
    
    if not db_config:
        raise HTTPException(status_code=404, detail="Config not found")

    # 送信されたデータのみを更新
    update_data = config_update.model_dump(exclude_unset=True)
    for key, value in update_data.items():
        setattr(db_config, key, value)

    db.commit()
    db.refresh(db_config)
    return db_config

# ユーザアカウント新規作成
@app.post("/user/",status_code=201)
def create_account(new_account:schemas.UserCreate,db: Session = Depends(get_db)):
    db_user = models.User(**new_account.model_dump())
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

# ユーザアカウント削除
@app.delete("/user/{user_id}", status_code=204)
def delete_account(user_id: str, db: Session = Depends(get_db)):
    # ユーザー設定を探す
    db_user = db.query(models.User).filter(models.User.user_id == user_id).first()
    
    if not db_user:
        raise HTTPException(status_code=404, detail="User not found")

    # そのユーザーのノートもすべて削除する
    db.query(models.Note).filter(models.Note.user_id == user_id).delete()

    # ユーザー設定（アカウント）を削除
    db.delete(db_user)
    db.commit()

    return None

# ユーザログイン
@app.post("/login/")
def login_account(user_id:str,user:schemas.UserLogIn,db:Session = Depends(get_db)):
    db_user = db.query(models.User).filter(models.User.user_id == user_id).first()
    if db_user.password != user_password:
        raise HTTPException(status_code=401, detail="Password is not True or User id is not True")

    elif not db_user:
        raise HTTPException(status_code=404, detail="User not found ¥n Please create account")
     
    return  db_user

# ==========================================
# ノート
# - ノート設定の取得
# - ノート設定の更新
# - ノート新規作成
# - ノートの削除
# ==========================================

# ノートの取得
@app.get("/notes/{user_id}", response_model=list[schemas.NoteRespoonse])
def get_user_notes(user_id: str, db: Session = Depends(get_db)):
    # ユーザーに紐づくノートを「全件」取得する
    return db.query(models.Note).filter(models.Note.user_id == user_id).all()

# ノートの更新
@app.put("/notes/{note_id}", response_model=schemas.NoteUpdate)
def update_note(note_id: str, note_update: schemas.NoteBase, db: Session = Depends(get_db)):
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
@app.post("/notes/", response_model=schemas.NoteCreate)
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