from fastapi import FastAPI, UploadFile, File
from fastapi.responses import FileResponse
from typing import List
from fastapi import APIRouter
import os


router = APIRouter()

os.makedirs("files", exist_ok=True)

@router.post("/files/single")
async def save_single_file(file: UploadFile = File(...)):
    file_location = os.path.join("files", file.filename)
    with open(file_location, "wb") as f:
        f.write(await file.read())
    return {"message": "File saved successfully"}

@router.post("/files/multiple")
async def save_multiple_files(files: List[UploadFile] = File(...)):
    for file in files:
        file_location = os.path.join("files", file.filename)
        with open(file_location, "wb") as f:
            f.write(await file.read())
    return {"message": "Files saved successfully"}

@router.get("/files/{filename}")
async def get_file(filename: str):
    file_location = os.path.join("files", filename)
    return FileResponse(file_location)