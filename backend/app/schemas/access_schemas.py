from pydantic import BaseModel


class AccessCreate(BaseModel):
    id: int
    os: str
    platform: str
    city: str
    country: str
    location: str
    net_provider: str
    postal: str
    region: str
    hostname: str
    token: str
    access_timestamp: int


class AccessRead(BaseModel):
    id: int
    os: str
    platform: str
    city: str
    country: str
    location: str
    net_provider: str
    postal: str
    region: str
    hostname: str
    access_timestamp: int
    url_id: int

    model_config = {"from_attributes": True}


class AccessList(BaseModel):
    access_list: list[AccessRead]

    model_config = {"from_attributes": True}
