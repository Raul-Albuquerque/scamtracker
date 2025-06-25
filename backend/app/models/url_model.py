from sqlalchemy import Column, String, Integer
from sqlalchemy.orm import relationship
from app.database import Base


class Url(Base):
    __tablename__ = "urls"

    id = Column(Integer, primary_key=True, autoincrement=True)
    token = Column(String, nullable=False, unique=True, index=True)
    username = Column(String, nullable=False, index=True)
    shortened_url = Column(String, nullable=False)
    original_url = Column(String, nullable=False)
    creation_date = Column(Integer, nullable=False)
    expiration_date = Column(Integer, nullable=False)

    access = relationship("Access", back_populates="urls")
