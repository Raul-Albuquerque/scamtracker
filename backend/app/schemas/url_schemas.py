from pydantic import BaseModel


class UrlCreateSchema(BaseModel):
    username: str


class UrlReadSchema(BaseModel):
    id: int
    token: str
    username: str
    shortened_url: str
    original_url: str
    creation_date: int
    expiration_date: int

    model_config = {"from_attributes": True}


class UrlListSchema(BaseModel):
    urls: list[UrlReadSchema]

    model_config = {"from_attributes": True}
