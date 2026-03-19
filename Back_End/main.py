from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from database import engine, get_db
import models, schemas

# テーブルを自動作成する行も忘れずに（app = FastAPIの上がおすすめ）
models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# 修正ポイント：response_model=schemas.UserConfigResponse にする
@app.get("/config/{user_id}", response_model=schemas.UserConfigResponse)
def get_user_config(user_id: int, db: Session = Depends(get_db)):
    config = db.query(models.UserConfig).filter(models.UserConfig.user_id == user_id).first()
    return config

@app.put("/config/{user_id}")
def update_user_config(user_id: int, config_update: schemas.UserConfigBase, db: Session = Depends(get_db)):
    db_config = db.query(models.UserConfig).filter(models.UserConfig.user_id == user_id).first()
    
    # 万が一設定が存在しなかった時のエラー回避（念のため）
    if not db_config:
        return {"message": "設定が見つかりません"}

    db_config.theme_color = config_update.theme_color
    db_config.is_dark_mode = config_update.is_dark_mode
    db_config.language = config_update.language
    
    db.commit()
    return {"message": "設定を更新しました"}