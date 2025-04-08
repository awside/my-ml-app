cd backend
python3 -m venv venv
source venv/bin/activate
deactivate (after done working on backend)

pip freeze > requirements.txt
pip install -r requirements.txt

uvicorn main:app --reload