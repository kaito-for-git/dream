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
# ==========================================

# ノートの取得
@app.get("/notes/{user_id}", response_model=list[schemas.NoteConfigBase])
def get_user_notes(user_id: str, db: Session = Depends(get_db)):
    # ユーザーに紐づくノートを「全件」取得する
    return db.query(models.Note).filter(models.Note.user_id == user_id).all()