import pandas as pd
from app.services.eda_service import get_numerical_columns


def test_get_numerical_columns():
    data = {
        "Age": [25, 30, 35],
        "Name": ["Alice", "Bob", "Charlie"],
        "Salary": [50000.0, 60000.0, 70000.0],
    }
    df = pd.DataFrame(data)

    result = get_numerical_columns(df)

    # Should only return numerical columns (int, float)
    assert result == ["Age", "Salary"]
