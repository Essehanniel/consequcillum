const RenderType = {
    Canvas: 'canvas',
    SVG: 'svg',
    PNG: 'png'
};

function checkRenderType(type) {
    if (type !== RenderType.Canvas && type !== RenderType.SVG && type !== RenderType.PNG) {
        console.log('Invalid render type!');
        // Handle invalid render type here
    } else {
        console.log('Valid render type.');
        // Proceed with valid render type
    }
}

// Example usage
checkRenderType('pdf');  // Output: Invalid render type!
checkRenderType('canvas');  // Output: Valid render type.
