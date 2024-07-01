/**
 * Validate the dimensions input by the user.
 * @param {string} dimensionsInput - The dimensions input as a string.
 * @returns {number[]} - The validated dimensions as an array of numbers.
 * @throws {Error} - If the dimensions are invalid.
 */
function validateDimensions(dimensionsInput) {
    const dimensions = dimensionsInput.split('x').map(Number);
    if (dimensions.length !== 3 || dimensions.some(dim => dim <= 0 || isNaN(dim))) {
        throw new Error('Invalid dimensions. Please enter positive integers in the format NxMxK.');
    }
    return dimensions;
}

/**
 * Validate the position input by the user.
 * @param {string} positionInput - The position input as a string.
 * @param {number[]} dimensions - The maze dimensions.
 * @returns {number[]} - The validated position as an array of numbers.
 * @throws {Error} - If the position is invalid.
 */
function validatePosition(positionInput, dimensions) {
    const position = positionInput.split(',').map(Number);
    if (position.length !== 3 || 
        position.some((coord, index) => coord < 0 || coord >= dimensions[index])) {
        throw new Error('Invalid start or stop position. Please enter valid coordinates within the maze dimensions.');
    }
    return position;
}
