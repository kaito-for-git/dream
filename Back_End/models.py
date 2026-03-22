from sqlalchemy import Column, Integer, String, Boolean, ForeignKey
from database import Base

class User(Base):
    __tablename__ = "user_config"

    id = Column(String, primary_key=True, index=True)
    user_id = Column(String, unique=True, index=True)
    user_password = Column(String,index=True) #パスワードの設定外部に出さない
    
    ##共通設定
    theme_color = Column(String, default="#3B82F6") #青
    font_size = Column(Integer, default=16)
    is_dark_mode = Column(Boolean, default=False)
    language = Column(String, default="ja") 

class Note(Base):
    __tablename__ = "note"

    #どのユーザのノートなのか
    user_id = Column(String,index=True)

    #frontの型と合わせる
    id = Column(String, primary_key=True, index=True)
    title = Column(String)
    content = Column(String)
    created = Column(Integer)
    updated = Column(Integer)
    