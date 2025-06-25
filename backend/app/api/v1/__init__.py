from fastapi import APIRouter

from .url_router import router as url_router
from .access_router import router as access_router
from .health import health_router
from .auth.auth_router import router as auth_router

api_v1_router = APIRouter()
api_v1_router.include_router(url_router, prefix="/url")
api_v1_router.include_router(access_router, prefix="/access")
api_v1_router.include_router(health_router)
api_v1_router.include_router(auth_router, prefix="/auth")
