@echo off

REM Create a virtual environment if it doesn't exist
if not exist .venv (
    python -m venv .venv
)

REM Activate the virtual environment
if exist .venv\Scripts\activate (
    call .venv\Scripts\activate
) else (
    echo Failed to activate virtual environment.
    exit /b
)

REM Install dependencies
pip install -r requirements.txt
if errorlevel 1 (
    echo Failed to install dependencies.
    exit /b
)

REM Run the Flask app with Uvicorn
uvicorn run:asgi_app --host 0.0.0.0 --port 8000 --lifespan off
if errorlevel 1 (
    echo Failed to start the server.
    exit /b
)
