cd ../backend
cd ../frontend

python3 -m venv venv

source venv/bin/activate
deactivate (after done working on backend)

#### this is to run the tests
From my-ml-app/, run: 
PYTHONPATH=backend pytest

pip freeze > requirements.txt (Capture current venv)
pip install -r requirements.txt (new install)

uvicorn main:app --reload