from typing import Optional, Any
from pydantic import BaseModel


class APIResponse(BaseModel):
    count: Optional[int] = None
    data: Optional[Any] = None
    message: str
