from datetime import datetime, timedelta
from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordRequestForm, OAuth2PasswordBearer
from typing import Annotated
from jose import jwt, JWTError, ExpiredSignatureError
from starlette import status


from app.models import Url
from app.config import TIMEZONE, AUTH_ALGORITHM, AUTH_SECRET_KEY

oauth2_bearer = OAuth2PasswordBearer(tokenUrl="api/v1/auth")


def create_access_token(username: str, user_id: int, expires_delta: timedelta):
    encode = {"sub": username, "id": user_id}
    expires = datetime.now(TIMEZONE) + expires_delta
    encode.update({"exp": expires})
    return jwt.encode(encode, AUTH_SECRET_KEY, AUTH_ALGORITHM)


def authenticate_user(username: str, token: str, db):
    user = db.query(Url).filter(Url.username == username).first()
    if not user:
        return False
    if user.token != token:
        return False
    return user


async def get_current_user(token: Annotated[str, Depends(oauth2_bearer)]):
    try:
        payload = jwt.decode(token, AUTH_SECRET_KEY, algorithms=[AUTH_ALGORITHM])
        username: str = payload.get("sub")
        user_id: int = payload.get("id")
        if username is None or user_id is None:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Could not validate user.",
            )
        return {"username": username, "id": user_id}
    except ExpiredSignatureError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail="Token expired."
        )
    except JWTError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail="Could not validate user."
        )
