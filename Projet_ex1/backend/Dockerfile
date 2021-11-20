FROM tiangolo/uvicorn-gunicorn-fastapi:python3.7

WORKDIR /app/backend

ADD ../requirement.txt .

RUN pip install -r requirements.txt

COPY . .

