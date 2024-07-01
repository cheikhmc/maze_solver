/**
 * Visualize the maze and the path in 3D using Babylon.js.
 * @param {number[]} dimensions - The maze dimensions.
 * @param {number[][][]} maze - The maze structure.
 * @param {number[][]} path - The path through the maze.
 */

function visualizeMaze3D(dimensions, maze, path) {
    // Clear previous visualization
    document.getElementById('maze3d').innerHTML = '';

    // Create canvas element
    let canvas = document.createElement('canvas');
    canvas.id = 'renderCanvas';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    document.getElementById('maze3d').appendChild(canvas);

    // Create Babylon.js engine and scene
    let engine = new BABYLON.Engine(canvas, true);
    let scene = new BABYLON.Scene(engine);

    // Create a basic light
    let light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(1, 1, 0), scene);

    // Create an ArcRotateCamera
    let camera = new BABYLON.ArcRotateCamera('camera1', -Math.PI / 2, Math.PI / 2.5, Math.max(dimensions[0], dimensions[1], dimensions[2]) * 6, new BABYLON.Vector3(0, 0, 0), scene);
    camera.attachControl(canvas, true);

    // Create maze cells
    createMazeCells(dimensions, maze, scene);

    // Create path as a tube
    createPathTube(path, dimensions, scene);

    // Run the render loop
    engine.runRenderLoop(() => {
        scene.render();
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        engine.resize();
    });
}

/**
 * Create the cells of the maze.
 * @param {number[]} dimensions - The maze dimensions.
 * @param {number[][][]} maze - The maze structure.
 * @param {BABYLON.Scene} scene - The Babylon.js scene.
 */

function createMazeCells(dimensions, maze, scene) {
    for (let x = 0; x < dimensions[0]; x++) {
        for (let y = 0; y < dimensions[1]; y++) {
            for (let z = 0; z < dimensions[2]; z++) {
                let box = BABYLON.MeshBuilder.CreateBox(`box_${x}_${y}_${z}`, {size: 2}, scene);
                box.position = new BABYLON.Vector3(x * 3 - dimensions[0], y * 3 - dimensions[1], z * 3 - dimensions[2]);
                box.material = new BABYLON.StandardMaterial(`mat_${x}_${y}_${z}`, scene);
                box.material.diffuseColor = maze[x][y][z] === 0 ? new BABYLON.Color3(0, 1, 0) : new BABYLON.Color3(1, 0, 0);
            }
        }
    }
}


/**
 * Create a tube to represent the path through the maze.
 * @param {number[][]} path - The path through the maze.
 * @param {number[]} dimensions - The maze dimensions.
 * @param {BABYLON.Scene} scene - The Babylon.js scene.
 */

function createPathTube(path, dimensions, scene) {
    let pathPoints = path.map(coord => new BABYLON.Vector3(coord[0] * 3 - dimensions[0], coord[1] * 3 - dimensions[1], coord[2] * 3 - dimensions[2]));
    let tube = BABYLON.MeshBuilder.CreateTube("tube", {path: pathPoints, radius: 0.5, sideOrientation: BABYLON.Mesh.DOUBLESIDE}, scene);
    tube.material = new BABYLON.StandardMaterial("tubeMat", scene);
    tube.material.diffuseColor = new BABYLON.Color3(0, 0, 1);

    // Add labels for path coordinates
    path.forEach(coord => {
        const textPlane = createTextPlane(`[${coord[0]}, ${coord[1]}, ${coord[2]}]`, "white", scene);
        textPlane.position = new BABYLON.Vector3(coord[0] * 3 - dimensions[0], coord[1] * 3 - dimensions[1], coord[2] * 3 - dimensions[2]);
    });
}

/**
 * Create a text plane for labeling coordinates.
 * @param {string} text - The text to display.
 * @param {string} color - The color of the text.
 * @param {BABYLON.Scene} scene - The Babylon.js scene.
 * @returns {BABYLON.Mesh} - The created text plane mesh.
 */

function createTextPlane(text, color, scene) {
    let dynamicTexture = new BABYLON.DynamicTexture("DynamicTexture", {width:512, height:256}, scene, true);
    dynamicTexture.hasAlpha = true;
    dynamicTexture.drawText(text, null, null, "bold 44px Arial", color, "transparent", true);
    let plane = BABYLON.MeshBuilder.CreatePlane("TextPlane", {size: 4}, scene);
    plane.material = new BABYLON.StandardMaterial("TextPlaneMaterial", scene);
    plane.material.backFaceCulling = false;
    plane.material.specularColor = new BABYLON.Color3(0, 0, 0);
    plane.material.diffuseTexture = dynamicTexture;
    return plane;
}
