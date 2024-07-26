import logging
from fastapi import FastAPI  # Starlette-basert
from .routers import misc
from .routers.filestorage import assignments

logging.basicConfig(level=logging.INFO)

def create_application() -> FastAPI:

    app = FastAPI()
    @app.get("/version")
    def read_version():
        return {"version": "1.0.0"}
    app.include_router(misc.router, prefix="/misc", tags=["misc"])
    app.include_router(assignments.router, prefix="/assignments", tags=["assignments"])
    return app

app = create_application()