from pathlib import Path
import pandas as pd

csv_path = Path(__file__).resolve().parents[2] / "data" / "smoker.csv"
df = pd.read_csv(csv_path)


def get_static_df() -> pd.DataFrame:
    return df
