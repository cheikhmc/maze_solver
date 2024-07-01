document.getElementById('maze-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const dimensionsInput = document.getElementById('dimensions').value;
    const startInput = document.getElementById('start').value;
    const stopInput = document.getElementById('stop').value;

    try {
        // Validate dimensions
        const dimensions = validateDimensions(dimensionsInput);
        // Validate start and stop positions
        const start = validatePosition(startInput, dimensions);
        const stop = validatePosition(stopInput, dimensions);

        // Create maze structure
        const maze = createMaze(dimensions);

        const response = await fetch('/solve_maze', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ maze, start, stop })
        });

        if (!response.ok) {
            const errorResponse = await response.json();
            throw new Error(errorResponse.error || 'An unexpected error occurred');
        }

        const result = await response.json();
        handleResult(result, dimensions, maze, start, stop);

    } catch (error) {
        showError(error.message);
    }
});

document.getElementById('reset-button').addEventListener('click', resetForm);

function resetForm() {
    // Clear form inputs
    document.getElementById('dimensions').value = '';
    document.getElementById('start').value = '';
    document.getElementById('stop').value = '';
    document.getElementById('visualization').value = 'text';

    // Clear result
    document.getElementById('result').innerHTML = '';

    // Clear 3D visualization
    document.getElementById('maze3d').innerHTML = '';
}

function showError(message) {
    Swal.fire({
        title: 'Error',
        text: message || 'An unexpected error occurred',
        icon: 'error',
        confirmButtonText: 'OK'
    });
}
