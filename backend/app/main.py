from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api import eda  # import your eda router

app = FastAPI(
    title="ML EDA Backend",
    version="0.1.0",
    description="API for exploratory data analysis on uploaded datasets.",
)

# Allow frontend dev from anywhere (adjust for production)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include the EDA API router
app.include_router(eda.router, prefix="/eda", tags=["EDA"])
