import string
from datetime import datetime
from fastapi import HTTPException
from nanoid import generate
from sqlalchemy.orm import Session
from sqlalchemy.exc import SQLAlchemyError

from app.models.url_model import Url
from app.config import TIMEZONE, BASE_URL

alphabet = string.ascii_lowercase + string.digits


def generate_unique_token(db: Session, size: int) -> str:
    while True:
        token = generate(alphabet, size=size)
        try:
            exists = db.query(Url).filter(Url.token == token).first()
        except SQLAlchemyError as e:
            raise HTTPException(
                status_code=404, detail="Erro ao consultar token no banco: {e}"
            )
        if not exists:
            return token


def generate_url_data(db: Session, owner_name: str) -> Url:
    token = generate_unique_token(db=db, size=8)
    creation_date = int(datetime.now(TIMEZONE).timestamp())
    expiration_date = creation_date + (3600 * 24 * 30)
    shortened_url = f"{BASE_URL}/{token}"
    original_url = f"{BASE_URL}/home?target={token}"

    try:
        url = Url(
            token=token,
            owner_name=owner_name,
            shortened_url=shortened_url,
            original_url=original_url,
            creation_date=creation_date,
            expiration_date=expiration_date,
        )
    except Exception as e:
        raise HTTPException(status_code=404, detail="Erro ao cadastrar o link: {e}")

    return url
