#  @bekbrace
#  FARMSTACK Tutorial - Sunday 13.06.2021

from fastapi import FastAPI, HTTPException
from fastapi.security import OAuth2PasswordRequestForm
from model import *
from login import *
from database import *

# an HTTP-specific exception class  to generate exception information

from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")
origins = [
    "http://localhost:3000",
]

# what is a middleware? 
# software that acts as a bridge between an operating system or database and applications, especially on a network.

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def read_root():
    return {"Hello": "World"}


@app.post("/api/register", response_model=NewUser)
async def add_user(newuser: NewUser):
    document = newuser.dict()
    document["hashed_password"] = get_password_hash(document["password"])
    response = await create_user(document)
    if response:
        return response
    raise HTTPException(400, "Something went wrong")


@app.post("/token", response_model=Token)
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    user = await authenticate_user(form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = await create_access_token(
        data={"sub": user.Name}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}


@app.get("/api/todo")
async def get_todo(current_user: User = Depends(get_current_user)):
    response = await fetch_all_todos(current_user.Name)
    return response


@app.get("/api/todo/{title}", response_model=Todo)
async def get_todo_by_title(title):
    response = await fetch_one_todo(title)
    if response:
        return response
    raise HTTPException(404, f"There is no todo with the title {title}")


@app.post("/api/todo/", response_model=Todo)
async def post_todo(todo: Todo, current_user: User = Depends(get_current_user)):
    response = await create_todo(todo.dict(), current_user.Name)
    if response:
        return response
    raise HTTPException(400, "Something went wrong")


@app.put("/api/todo/{title}/", response_model=Todo)
async def put_todo(title: str, desc: str):
    response = await update_todo(title, desc)
    if response:
        return response
    raise HTTPException(404, f"There is no todo with the title {title}")


@app.delete("/api/todo/{title}")
async def delete_todo(title):
    response = await remove_todo(title)
    if response:
        return "Successfully deleted todo"
    raise HTTPException(404, f"There is no todo with the title {title}")
