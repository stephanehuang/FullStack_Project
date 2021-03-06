import motor.motor_asyncio
from model import *
from login import *
from bson.objectid import ObjectId

client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://localhost:27017/')
database = client.TodoList
todolist = database.todo
users = database.users


async def fetch_one_todo(title):
    document = await todolist.find_one({"title": title})
    return document


async def fetch_all_todos(username):
    todos = []
    cursor = todolist.find({"user": username})
    async for document in cursor:
        todos.append(Todo(**document))
    return todos


async def create_todo(todo, username):
    document = todo
    document["user"] = username
    result = todolist.insert_one(document)
    return document


async def get_user(username: str):
    document = await users.find_one({"Name": username})
    return UserInDB(**document)


async def create_user(user):
    document = user
    del document["password"]
    result = await users.insert_one(document)
    return document


async def update_todo(title, desc):
    await todolist.update_one({"title": title}, {"$set": {"description": desc}})
    document = await todolist.find_one({"title": title})
    return document


async def remove_todo(title):
    await todolist.delete_one({"title": title})
    return True
