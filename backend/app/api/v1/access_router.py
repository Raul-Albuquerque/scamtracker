from fastapi import HTTPException, Depends, APIRouter, status
from sqlalchemy.orm import Session

from app.models import Access, APIResponse, Url
from app.database import get_db
from app.schemas.access_schemas import AccessCreate, AccessList, AccessRead
from app.services.access_service import generate_access_data

router = APIRouter()


@router.get("/all", response_model=APIResponse)
def get_all_access(db: Session = Depends(get_db)):
    try:
        accesses = db.query(Access).all()
        result = [AccessRead.model_validate(a) for a in accesses]
        return APIResponse(
            count=len(result), data=result, message="Acessos recuperados com sucesso!"
        )
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Erro ao buscar acessos: {str(e)}",
        )


@router.get("/{token}", response_model=APIResponse)
def get_all_url_access(token: str, db: Session = Depends(get_db)):
    try:
        accesses = db.query(Access).join(Url).filter(Url.token == token).all()

        if not accesses:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Nenhum acesso encontrado para o token: {token}",
            )

        result = [AccessRead.model_validate(a) for a in accesses]
        return APIResponse(
            count=len(result),
            data=result,
            message="Acessos recuperados com sucesso!",
        )
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Erro ao buscar acessos pelo token: {token}",
        )


@router.post("/create", response_model=APIResponse)
def create_access(access: AccessCreate, db: Session = Depends(get_db)):
    try:
        access_data = generate_access_data(access=access, db=db)
        db.add(access_data)
        db.commit()
        db.refresh(access_data)
        return APIResponse(message="Acesso registrado com sucesso!")
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Erro ao registrar acesso, erro:{e}",
        )
