/**
 * Create an empty maze structure based on the provided dimensions.
 * @param {number[]} dimensions - The dimensions of the maze.
 * @returns {number[][][]} - The created maze structure.
 */

function createMaze(dimensions) {
    return Array(dimensions[0]).fill(0).map(() => Array(dimensions[1]).fill(0).map(() => Array(dimensions[2]).fill(0)));
}
