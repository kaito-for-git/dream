from sqlalchemy import Column, Integer, String, Boolean, ForeignKey
from .database import Base

class UserConfig(Base):
    __tablename__ = "user_configs"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, unique=True, index=True)
    
    ##共通設定
    theme_color = Column(String, default="#3B82F6") #青
    font_size = Column(Integer, default=16)
    is_dark_mode = Column(Boolean, default=False)
    language = Column(String, default="ja") 