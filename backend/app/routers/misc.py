from fastapi import APIRouter

router = APIRouter()

@router.get("/available_stations/")
async def get_available_stations():
    return str("Novi Sad")