import uvicorn
from asgiref.wsgi import WsgiToAsgi
from app import create_app

app = create_app()

# Wrap the Flask app with WsgiToAsgi to make it ASGI compatible
asgi_app = WsgiToAsgi(app)

if __name__ == '__main__':
    uvicorn.run(asgi_app, host="0.0.0.0", port=8000, reload=True)
