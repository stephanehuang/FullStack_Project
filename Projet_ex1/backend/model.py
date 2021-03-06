# Pydantic allows auto creation of JSON Schemas from models
from pydantic import BaseModel
from typing import Optional


class Todo(BaseModel):
    title: str
    description: str
    user: str


class User(BaseModel):
    Name: str


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    username: Optional[str] = None


class NewUser(User):
    password: str


class UserInDB(User):
    hashed_password: str
