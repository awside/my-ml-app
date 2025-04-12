from fastapi import APIRouter
from app.df_store.static_df import get_static_df

router = APIRouter()


@router.get("/columns")
async def get_column_names():
    df = get_static_df()
    return {"columns": list(df.columns)}


@router.get("/numerical-columns")
def get_numerical_column_names():
    df = get_static_df()
    return {"numerical_columns": get_numerical_column_names(df)}
