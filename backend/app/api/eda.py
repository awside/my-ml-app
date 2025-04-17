import pandas as pd
import numpy as np
from fastapi import APIRouter
from app.df_store.static_df import get_static_df

router = APIRouter()


@router.get("/shape")
def get_df_shape():
    df = get_static_df()
    return {"shape": df.shape}


@router.get("/column-categories")
def get_column_categories():
    df = get_static_df()
    simplified_types = []

    for col in df.columns:
        dtype = df[col].dtype

        if pd.api.types.is_numeric_dtype(dtype):
            category = "numerical"
        elif pd.api.types.is_datetime64_any_dtype(dtype):
            category = "date"
        else:
            category = "categorical"

        simplified_types.append({"name": col, "type": category})

    return simplified_types


@router.get("/describe/{column_name}")
def get_column_description(column_name: str):
    df = get_static_df()

    if column_name not in df.columns:
        return None  # Will become `null` in JSON
    
    return df[column_name].describe().to_dict()


@router.get("/value-counts/{column_name}")
def get_value_counts(column_name: str):
    df = get_static_df()
    if column_name not in df.columns:
        return {"error": "Column not found"}
    return df[column_name].value_counts().to_dict()


@router.get("/unique/{column_name}")
def get_unique_values(column_name: str):
    df = get_static_df()
    if column_name not in df.columns:
        return {"error": "Column not found"}
    return {"unique_values": df[column_name].unique().tolist()}


@router.get("/histogram/{column_name}")
def get_histogram_data(column_name: str, bins: int = 10):
    df = get_static_df()

    if column_name not in df.columns:
        return {"error": "Column not found"}

    if not pd.api.types.is_numeric_dtype(df[column_name]):
        return {"error": "Column is not numerical"}

    counts, bin_edges = np.histogram(df[column_name].dropna(), bins=bins)

    return {"bins": bin_edges.tolist(), "counts": counts.tolist()}


@router.get("/correlation-matrix")
def get_correlation_matrix():
    df = get_static_df()
    corr_matrix = df.corr(numeric_only=True).round(3)

    return {
        "columns": corr_matrix.columns.tolist(),
        "matrix": corr_matrix.values.tolist(),
    }
