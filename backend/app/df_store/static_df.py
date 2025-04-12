import pandas as pd

# Load the static dataset ONCE
df = pd.read_csv("app/models/data/smoker.csv")

def get_static_df() -> pd.DataFrame:
    return df
