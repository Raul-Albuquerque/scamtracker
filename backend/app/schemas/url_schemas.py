from pydantic import BaseModel


class UrlCreateSchema(BaseModel):
    owner_name: str


class UrlReadSchema(BaseModel):
    id: int
    token: str
    owner_name: str
    shortened_url: str
    original_url: str
    creation_date: int
    expiration_date: int

    model_config = {"from_attributes": True}


class UrlListSchema(BaseModel):
    urls: list[UrlReadSchema]

    model_config = {"from_attributes": True}
