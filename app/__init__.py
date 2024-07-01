from flask import Flask

def create_app() -> Flask:
    """Create and configure the Flask application."""
    app = Flask(__name__, template_folder='../templates', static_folder='../static')
    app.config.from_object('app.config.Config')

    with app.app_context():
        from . import routes
        routes.create_routes(app)
    return app
