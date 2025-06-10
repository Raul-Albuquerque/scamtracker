from sqlalchemy import Column, String, Integer, ForeignKey
from sqlalchemy.orm import relationship
from database import Base


class Access(Base):
    __tablename__ = "access"

    id = Column(Integer, primary_key=True, autoincrement=True)
    os = Column(String)
    platform = Column(String)
    ip = Column(String)
    city = Column(String)
    country = Column(String)
    location = Column(String)
    net_provider = Column(String)
    postal = Column(String)
    region = Column(String)
    hostname = Column(String)
    access_timestamp = Column(Integer, nullable=False)
    url_id = Column(Integer, ForeignKey("urls.id"), nullable=False)

    urls = relationship("Url", back_populates="Access")
