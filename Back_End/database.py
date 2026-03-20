from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# 接続先URL
SQLALCHEMY_DATABASE_URL = "postgresql://user:password@localhost:5432/dream_db"

# データベースエンジンを作成
engine = create_engine(SQLALCHEMY_DATABASE_URL)

# データベースと会話するためのセッションを作成
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# テーブル作成のベースとなるクラス
Base = declarative_base()

# DB接続を取得するための関数
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()