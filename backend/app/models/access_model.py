from sqlalchemy import Column, String, Integer, ForeignKey, Float
from sqlalchemy.orm import relationship
from app.database import Base


class Access(Base):
    __tablename__ = "access"

    id = Column(Integer, primary_key=True, autoincrement=True)
    os = Column(String)
    browser = Column(String)
    device_vendor = Column(String)
    device_model = Column(String)
    ip = Column(String)
    city = Column(String)
    state = Column(String)
    country = Column(String)
    country_code2 = Column(String)
    country_flag_url = Column(String)
    country_emoji = Column(String)
    latitude = Column(Float)
    longitude = Column(Float)
    access_timestamp = Column(Integer, nullable=False)
    url_id = Column(Integer, ForeignKey("urls.id"), nullable=False)

    urls = relationship("Url", back_populates="access")
