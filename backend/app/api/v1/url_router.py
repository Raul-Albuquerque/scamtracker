from fastapi import HTTPException, Depends, APIRouter, status
from sqlalchemy.orm import Session

from app.models import Url
from app.database import get_db
from app.schemas.url_schemas import UrlCreate, UrlList, UrlRead
from app.services.url_service import generate_url_data

router = APIRouter()


@router.get("/all", response_model=UrlList)
def get_all_urls(db: Session = Depends(get_db)):
    try:
        data = db.query(Url).all()
        return {"urls": data}

    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Erro ao buscar URLs: {str(e)}",
        )


@router.get("/{token}")
def get_url_from_token(token: str, db: Session = Depends(get_db)):
    try:
        url = db.query(Url).filter(Url.token == token).first()
        if not url:
            raise HTTPException(status_code=404, detail="Url não encontrada.")
        return url
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Erro ao buscar URL: {str(e)}",
        )


@router.post("/create", response_model=UrlRead)
def create_url(url: UrlCreate, db: Session = Depends(get_db)):
    try:
        url_data = generate_url_data(db=db, owner_name=url.owner_name)
        db.add(url_data)
        db.commit()
        db.refresh(url_data)
        return url_data

    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Erro ao criar URL: {str(e)}",
        )
