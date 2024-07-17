/**
 * Create an empty maze structure based on the provided dimensions.
 * @param {number[]} dimensions - The dimensions of the maze.
 * @returns {number[][][]} - The created maze structure.
 */

function createMaze(dimensions) {
    // Create a 3D array filled with random 0s or 1s as obstacles
    return Array.from({length: dimensions[0]}, () =>
        Array.from({length: dimensions[1]}, () =>
            Array.from({length: dimensions[2]}, () => Math.round(Math.random()))
        )
    );
}
