from pydantic import BaseModel


class LoginRequest(BaseModel):
    username: str
    token: str


class LoginResponse(BaseModel):
    access_token: str
    token_type: str
