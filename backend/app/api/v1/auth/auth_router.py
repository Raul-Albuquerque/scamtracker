from fastapi import APIRouter, HTTPException, Depends
from datetime import datetime, timedelta
from starlette import status
from typing import Annotated

from app.schemas.auth_schemas import LoginRequest, LoginResponse
from app.database import db_dependency
from app.services.auth_service import (
    authenticate_user,
    create_access_token,
    get_current_user,
)

router = APIRouter(tags=["auth"])


@router.post("", response_model=LoginResponse)
async def login_for_access_token(credencials: LoginRequest, db: db_dependency):
    user = authenticate_user(credencials.username, credencials.token, db)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail="Could not validate user."
        )
    token = create_access_token(user.username, user.id, timedelta(minutes=20))
    return {"access_token": token, "token_type": "bearer"}


@router.get("/user", status_code=status.HTTP_200_OK)
async def get_auth_user_info(
    user: Annotated[dict, Depends(get_current_user)], db: db_dependency
):
    if user is None:
        raise HTTPException(status_code=401, detail="Authentication Failed")
    return {"user": user}
