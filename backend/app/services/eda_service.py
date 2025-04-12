import pandas as pd
from typing import List


def get_numerical_columns(df: pd.DataFrame) -> List[str]:
    """Return list of numerical (int or float) column names from DataFrame."""
    numerical_cols = df.select_dtypes(include=["number"]).columns.tolist()
    return numerical_cols
