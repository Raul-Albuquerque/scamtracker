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

    class Config:
        from_attributes = True


class UrlList(BaseModel):
    urls: list[UrlRead]

    class Config:
        from_attributes = True
