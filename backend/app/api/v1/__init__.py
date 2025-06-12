from fastapi import APIRouter

from .url_router import router as url_router

api_v1_router = APIRouter()
api_v1_router.include_router(url_router)
