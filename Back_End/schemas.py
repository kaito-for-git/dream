from pydantic import BaseModel
from typing import Optional

# ==========================================
# アカウント設定 (UserConfig)
# - ユーザ設定の更新
# ==========================================

# アカウントベース
class UserConfigBase(BaseModel):
    user_id:str
    theme_color: str
    is_dark_mode: bool
    language: str
    font_size: int

    class Config:
        from_attributes = True # SQLAlchemyモデルをPydanticに変換可能にする

# アカウント設定の更新
class UserConfigUpdate(BaseModel):
    user_id:Optional[str] = None
    theme_color: Optional[str] = None
    is_dark_mode: Optional[bool] = None
    language: Optional[str] = None
    font_size: Optional[int] = None

# ==========================================
# ノート機能 (Note)
# - ノートベース    
# - ノート新規作成    
# - ノート更新  
# - ノート取得
# ==========================================

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

# ノート新規作成
class NoteCreate(NoteConfigBase):
    pass

# ノート更新
class NoteUpdate(BaseModel):
    user_id:str
    id:str
    title: Optional[str] = None
    content: Optional[str] = None
    updated:int

# ノート取得用
class NoteConfig(NoteConfigBase):
    pass