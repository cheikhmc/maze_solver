# 3D Maze Solver

## Overview

The 3D Maze Solver is a web application that allows users to solve a 3D maze. Users can input the dimensions of the maze, the start and stop positions, and choose the type of visualization (text or 3D). The app uses a backend service to find the path from the start to the stop position and displays the path in the chosen visualization.

## Features

- Solve 3D mazes by providing dimensions, start, and stop positions.
- Visualize the solution in text format or 3D using Babylon.js.
- Interactive 3D visualization where users can navigate around the maze.
- Error handling for invalid inputs and network issues.
- Responsive and user-friendly interface.

## Libraries and Technologies Used

- **Flask**: Micro web framework for the backend.

- **Babylon.js**: JavaScript library for 3D visualization.
- **Bootstrap**: CSS framework for responsive design.
- **SweetAlert2**: Library for beautiful alerts and modals.
- **Docker**: Containerization platform for packaging the app.
- **Requests**: Python HTTP library for making API requests.


## Setup and Running the Project

### Prerequisites

- Python 3.9 or higher
- Docker (optional)
- Virtual environment tools (venv, virtualenv)
- Git

### Cloning the Project

Clone the repository from GitHub:

```bash
git clone https://github.com/cheikhmc/maze_solver.git
cd maze_solver
```

### Running Manually

1. **Create a Virtual Environment**:
    ```sh
    python -m venv .venv
    ```

2. **Activate the Virtual Environment**:
    - On Windows:
      ```sh
      .venv\Scripts\activate
      ```
    - On Unix or MacOS:
      ```sh
      source .venv/bin/activate
      ```

3. **Install Dependencies**:
    ```sh
    pip install -r requirements.txt
    ```

4. **Run the Application**:
    ```sh
    python run.py
    ```

### Running with Bash or Batch Scripts

1. **On Windows (Batch Script)**:
    - run the file named `.\run.bat`

2. **On Unix or MacOS (Bash Script)**:
    - run the file named `run.sh`, do not forget to make it executable with the `chmod +x` command.

### Running with Docker

1. **Build the Docker Image**:
    ```sh
    docker build -t maze_solver .
    ```

2. **Run the Docker Container**:
    ```sh
    docker run -p 8000:8000 maze_solver
    ```

## Running in Production

In a production environment, it's recommended to run the app with Gunicorn and Uvicorn. These are production-grade servers that provide better performance, scalability, and reliability compared to the built-in Flask development server. They handle multiple requests concurrently and manage worker processes efficiently.


## Conclusion

This project provides a 3D maze solver with both text and 3D visualizations. By using Flask, Uvicorn, and Babylon.js, it offers an interactive and responsive web interface. The Docker support ensures that the application can be easily containerized and run in different environments.
