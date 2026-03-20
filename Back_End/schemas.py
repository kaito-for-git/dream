from pydantic import BaseModel
from typing import Optional

# アカウントベース
class UserConfigBase(BaseModel):
    user_id:str
    theme_color: str
    is_dark_mode: bool
    language: str
    font_size: int

    class Config:
        from_attributes = True # SQLAlchemyモデルをPydanticに変換可能にする

# ノートベース
class NoteConfigBase(BaseModel):
    user_id:str             #ユーザとの紐付け
    #ノートの型
    id:str
    title:str
    content:str
    created:int
    updated:int

    class Config:
        from_attributes = True