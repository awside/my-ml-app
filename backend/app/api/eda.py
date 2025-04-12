from fastapi import APIRouter
from app.df_store.static_df import get_static_df

router = APIRouter()

@router.get("/test-df-load")
def test_df_load():
    df = get_static_df()
    return {
        "status": "success",
        "rows": len(df),
        "columns": list(df.columns)
    }
