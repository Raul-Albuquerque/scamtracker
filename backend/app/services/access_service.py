from datetime import datetime
from fastapi import HTTPException, status
from sqlalchemy.orm import Session

from app.models import Access, Url
from app.schemas.access_schemas import AccessCreate
from app.config import TIMEZONE


def generate_access_data(access: AccessCreate, db: Session) -> Access:

    url = db.query(Url).filter_by(token=access.token).first()
    if not url:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Token não encontrado."
        )

    try:
        access = Access(
            os=access.os,
            browser=access.browser,
            ip=access.ip,
            city=access.city,
            state=access.state,
            country=access.country,
            country_flag_url=access.country_flag_url,
            latitude=access.latitude,
            longitude=access.longitude,
            postal=access.postal,
            access_timestamp=int(datetime.now(TIMEZONE).timestamp()),
            url_id=url.id,
        )

        return access
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Erro ao registrar acesso: {e}",
        )
