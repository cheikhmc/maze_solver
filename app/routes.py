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
        
        try:
            response = requests.post(api_url, json=data, timeout=30)  # Set a timeout of 30 seconds
            response.raise_for_status()  # Raise an HTTPError for bad responses
            # Attempt to parse JSON response
            response_data = response.json()
        except requests.exceptions.Timeout:
            # Handle request timeout
            return jsonify({"error": "The request to the maze solving API timed out. Please try with smaller dimensions."}), 408
        except requests.exceptions.RequestException as e:
            # Handle other network errors or invalid HTTP responses
            return jsonify({"error": "Failed to connect to the maze solving API."}), 500
        except requests.exceptions.JSONDecodeError:
            # Handle errors in JSON decoding
            return jsonify({"error": "Invalid response format from the maze solving API."}), 500
        
        return jsonify(response_data)
