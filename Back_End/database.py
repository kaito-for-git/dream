from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# 接続先URL（Dockerで設定した user, password, db名 を使用）
SQLALCHEMY_DATABASE_URL = "postgresql://user:password@localhost:5432/dream_db"

# 1. データベースエンジンを作成
engine = create_engine(SQLALCHEMY_DATABASE_URL)

# 2. データベースと会話するためのセッション（窓口）を作成
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# 3. テーブル作成のベースとなるクラス
Base = declarative_base()

# 4. DB接続を取得するための関数（FastAPIでよく使う形）
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()