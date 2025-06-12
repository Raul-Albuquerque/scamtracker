from fastapi import FastAPI

from app.database import Base, engine
from app.models import url_model, access_model
from .api.v1 import api_v1_router

app = FastAPI()

Base.metadata.create_all(bind=engine)

app.include_router(api_v1_router, prefix="/api/v1")
