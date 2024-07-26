import logging
from fastapi import FastAPI  # Starlette-basert
from .routers import misc

logging.basicConfig(level=logging.INFO)

def create_application() -> FastAPI:

    app = FastAPI()
    @app.get("/version")
    def read_version():
        return {"version": "1.0.0"}
    app.include_router(misc.router, prefix="/misc", tags=["misc"])

    return app

app = create_application()