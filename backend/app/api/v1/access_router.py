from fastapi import HTTPException, Depends, APIRouter, status
from sqlalchemy.orm import Session

from app.models import Access, Url
from app.database import get_db
from app.schemas.access_schemas import AccessCreate, AccessList, AccessRead
from app.services.access_service import generate_access_data

router = APIRouter()


@router.get("/all", response_model=AccessList)
def get_all_access(db: Session = Depends(get_db)):
    try:
        data = db.query(Access).all()
        return {"access_list": data}
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Erro ao buscar acessos: {str(e)}",
        )


@router.get("/{token}", response_model=AccessList)
def get_all_url_access(token: str, db: Session = Depends(get_db)):
    try:
        accesses = db.query(Access).join(Url).filter(Url.token == token).all()
        return accesses
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Erro ao registrar acesso, erro:{e}",
        )


@router.post("/create", response_model=AccessRead)
def create_access(access: AccessCreate, db: Session = Depends(get_db)):
    try:
        access_data = generate_access_data(access=access, db=db)
        db.add(access_data)
        db.commit()
        db.refresh(access_data)
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Erro ao registrar acesso, erro:{e}",
        )
    return access_data
