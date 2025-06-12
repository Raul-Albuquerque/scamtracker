from fastapi import HTTPException, Depends, APIRouter, status
from sqlalchemy.orm import Session

from app.models import Url, APIResponse
from app.database import get_db
from app.schemas.url_schemas import UrlCreate, UrlList, UrlRead
from app.services.url_service import generate_url_data

router = APIRouter()


@router.get("/all", response_model=APIResponse)
def get_all_urls(db: Session = Depends(get_db)):
    try:
        data = db.query(Url).all()
        result = [UrlRead.model_validate(a) for a in data]
        return APIResponse(
            count=len(result), data=result, message="Urls recuperadas com sucesso!"
        )

    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Erro ao buscar URLs: {str(e)}",
        )


@router.get("/{token}", response_model=APIResponse)
def get_url_from_token(token: str, db: Session = Depends(get_db)):
    try:
        url = db.query(Url).filter(Url.token == token).first()
        if not url:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND, detail="Url não encontrada."
            )
        url = UrlRead.model_validate(url)
        return APIResponse(data=url, message="URL recuperada com sucesso!")
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Erro ao buscar URL: {str(e)}",
        )


@router.post("/create", response_model=APIResponse)
def create_url(url: UrlCreate, db: Session = Depends(get_db)):
    try:
        url_data = generate_url_data(db=db, owner_name=url.owner_name)
        db.add(url_data)
        db.commit()
        db.refresh(url_data)
        return APIResponse(message="URL criada com sucesso!")

    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Erro ao criar URL: {str(e)}",
        )
