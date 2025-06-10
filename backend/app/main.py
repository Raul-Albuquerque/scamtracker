from typing import Union

from fastapi import FastAPI, HTTPException, Depends

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "Raul"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}
