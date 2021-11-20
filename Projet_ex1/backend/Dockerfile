FROM tiangolo/uvicorn-gunicorn-fastapi:python3.7

WORKDIR /app/backend

ADD requirement.txt .

RUN /usr/local/bin/python -m pip install --upgrade pip

RUN pip install -r requirement.txt

COPY . .

