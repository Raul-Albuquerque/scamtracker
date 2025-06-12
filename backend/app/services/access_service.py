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
            platform=access.platform,
            city=access.city,
            country=access.country,
            location=access.location,
            net_provider=access.net_provider,
            postal=access.postal,
            region=access.region,
            hostname=access.hostname,
            access_timestamp=int(datetime.now(TIMEZONE).timestamp()),
            url_id=url.id,
        )

        return access
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Erro ao registrar acesso: {e}",
        )
