from pydantic import BaseModel


class UrlCreate(BaseModel):
    owner_name: str


class UrlRead(BaseModel):
    id: int
    token: str
    owner_name: str
    shortened_url: str
    original_url: str
    creation_date: int
    expiration_date: int

    model_config = {"from_attributes": True}


class UrlList(BaseModel):
    urls: list[UrlRead]

    model_config = {"from_attributes": True}
