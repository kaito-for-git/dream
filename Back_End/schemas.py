from pydantic import BaseModel
from typing import Optional

# ==========================================
# アカウント設定 (UserConfig)
# - ユーザ設定の更新
# ==========================================

# アカウントベース
class UserBase(BaseModel):
    theme_color:str = "3B82F6"
    font_size:int = 14
    is_dark_mode:bool  = False
    language:str ="ja"

    class Config:
        from_attributes = True # SQLAlchemyモデルをPydanticに変換可能にする

class UserConfigGet(UserBase):
    pass

# アカウント設定の更新
class UserConfigUpdate(BaseModel):
    theme_color: Optional[str] = None
    font_size: Optional[int] = None
    is_dark_mode: Optional[bool] = None
    language: Optional[str] = None

# アカウントログイン(認証)
class UserLogIn(BaseModel):
    user_id:str
    user_password:str

# アカウントログアウト
class UserLogOut(BaseModel):
    user_id:str

# アカウント新規作成
class UserCreate(UserBase):
    user_id:str
    user_password:str

#アカウント削除
class UserDelete(BaseModel):
    pass

# ==========================================
# ノート機能 (Note)
# - ノートベース    
# - ノート新規作成    
# - ノート更新  
# - ノート取得
# ==========================================

# ノートベース
class NoteBase(BaseModel):
    #ノートの型
    title:str
    content:str
    created:int

    class Config:
        from_attributes = True

# ノート新規作成
class NoteCreate(NoteBase):
    pass

# ノート更新(put)
class NoteUpdate(BaseModel):
    title: Optional[str] = None
    content: Optional[str] = None
    updated:int

# ノート取得用
class NoteConfig(NoteBase):
    pass

# ノート削除
class  NoteDelete(NoteBase):
    pass

# ノートレスポンス
class NoteRespoonse(NoteBase):
    updated:int