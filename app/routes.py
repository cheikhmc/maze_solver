from flask import request, jsonify, render_template, current_app, Flask, Response
import requests

def create_routes(app: Flask) -> None:
    """Define the routes for the Flask application."""

    @app.route('/')
    def index() -> str:
        """Render the main page."""
        return render_template('index.html')

    @app.route('/solve_maze', methods=['POST'])
    def solve_maze() -> Response:
        """
        Solve the maze by calling the external API.

        Returns:
            The JSON response containing the path or an error message.
        """
        data = request.json
        api_url = current_app.config['API_URL']
        response = requests.post(api_url, json=data)
        return jsonify(response.json())
