from pydantic import BaseModel


class AccessCreate(BaseModel):
    id: int
    os: str
    browser: str
    ip: str
    city: str
    state: str
    country: str
    country_flag_url: str
    latitude: float
    longitude: float
    postal: str
    token: str
    access_timestamp: int


class AccessRead(BaseModel):
    id: int
    os: str
    browser: str
    ip: str
    city: str
    state: str
    country: str
    country_flag_url: str
    latitude: float
    longitude: float
    postal: str
    access_timestamp: int
    url_id: int

    model_config = {"from_attributes": True}


class AccessList(BaseModel):
    access_list: list[AccessRead]

    model_config = {"from_attributes": True}
