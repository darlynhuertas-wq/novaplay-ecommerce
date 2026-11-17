# NOVA PLAY · Tienda virtual de juegos de mesa

Estructura inicial de una aplicación de comercio electrónico con ReactJS (Vite, Tailwind CSS, shadcn/ui) y Django REST Framework.

## Backend

cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

API: http://127.0.0.1:8000/api/categorias/ y http://127.0.0.1:8000/api/productos/

## Frontend

cd frontend
npm install
npm run dev

Tienda: http://localhost:5173