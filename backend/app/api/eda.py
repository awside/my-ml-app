from fastapi import APIRouter, UploadFile, File
from app.services.eda_service import get_numerical_columns

import pandas as pd
import io

router = APIRouter()


@router.post("/get-numerical-columns")
async def numerical_columns(file: UploadFile = File(...)):
    # Read uploaded file into pandas DataFrame
    contents = await file.read()
    df = pd.read_csv(io.BytesIO(contents))

    # Use service function to get numerical columns
    numerical_cols = get_numerical_columns(df)

    return {"numerical_columns": numerical_cols}
