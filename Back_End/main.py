from fastapi import FastAPI

app =  FastAPI()

@app.get("/config/{user_id}", response_model=UserConfigResponse)
def get_user_config(user_id: int, db: Session = Depends(get_db)):
    # DBからそのユーザーの設定を探して返す
    config = db.query(models.UserConfig).filter(models.UserConfig.user_id == user_id).first()
    return config

@app.put("/config/{user_id}")
def update_user_config(user_id: int, config_update: UserConfigBase, db: Session = Depends(get_db)):
    # DBの設定を書き換える
    db_config = db.query(models.UserConfig).filter(models.UserConfig.user_id == user_id).first()
    db_config.theme_color = config_update.theme_color
    db.commit()
    return {"message": "設定を更新しました"}