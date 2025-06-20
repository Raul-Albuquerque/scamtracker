from pydantic import BaseModel


class AccessCreateSchema(BaseModel):
    id: int
    os: str
    browser: str
    device_vendor: str
    device_model: str
    ip: str
    city: str
    state: str
    country: str
    country_code2: str
    country_flag_url: str
    country_emoji: str
    latitude: float
    longitude: float
    token: str
    access_timestamp: int


class AccessReadSchema(BaseModel):
    id: int
    os: str
    browser: str
    device_vendor: str
    device_model: str
    ip: str
    city: str
    state: str
    country: str
    country_flag_url: str
    country_emoji: str
    latitude: float
    longitude: float
    access_timestamp: int
    url_id: int

    model_config = {"from_attributes": True}


class AccessListSchema(BaseModel):
    access_list: list[AccessReadSchema]

    model_config = {"from_attributes": True}
