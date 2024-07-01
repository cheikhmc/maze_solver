
/**
 * Handle the result returned from the maze solving API.
 * @param {object} result - The result object returned from the API.
 * @param {number[]} dimensions - The maze dimensions.
 * @param {number[][][]} maze - The maze structure.
 * @param {number[]} start - The start position.
 * @param {number[]} stop - The stop position.
 */

function handleResult(result, dimensions, maze, start, stop) {
    const visualization = document.getElementById('visualization').value;

    if (result.path === null) {
        Swal.fire({
            title: 'Path Not Found',
            text: 'No path found from the start to the stop position.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    } else if (result.path) {
        if (visualization === 'text') {
            Swal.fire({
                title: 'Maze Solved!',
                text: `Path: ${JSON.stringify(result.path, null, 2)}`,
                icon: 'success',
                confirmButtonText: 'OK'
            });
        } else if (visualization === '3d') {
            visualizeMaze3D(dimensions, maze, result.path);
            Swal.fire({
                title: 'Maze Solved!',
                text: 'Use your mouse to move around the 3D maze to see the path.',
                icon: 'success',
                confirmButtonText: 'OK'
            });
        }
    } else {
        Swal.fire({
            title: 'Error',
            text: result.error || 'Unable to solve the maze',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
}
