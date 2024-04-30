registerPaint('arc', class {
    static get inputArguments() {
        return ['<color>'];
    }

    // static get inputProperties() {
    //     return ["--fillC"];
    // }

    static get contextOptions() { return {alpha: true}; }
    
    // https://chromium.googlesource.com/external/github.com/web-platform-tests/wpt/+/refs/heads/chromium-export-cl-1188643/css/css-paint-api/paint-arguments.https.html
    paint(ctx, size, props, args) {
        const fillColor = args[0].toString();
        console.log('Fill color:', fillColor); // Log the fillColor value

        // Set the fill color using the provided parameter
        ctx.fillStyle = fillColor; // props.get('--fillC');

        // Draw a shape (for example, a rectangle) using the provided color
        ctx.fillRect(0, 0, size.width, size.height);
    }
    // static get inputArguments() {
    //   return [
    //     '<color>',
    //     '<angle>',  // startAngle
    //     '<angle>',  // endAngle
    //     '<length>', // radius
    //     '<length>', // lineWidth
    //   ];
    // }

    // paint(ctx, geom, _, args) {
    //   ctx.strokeStyle = args[0].cssText;

    //   // Determine the center point.
    //   const x = geom.width / 2;
    //   const y = geom.height / 2;

    //   // Convert the start and end angles to radians.
    //   const startAngle = this.convertAngle(args[1]) - Math.PI / 2;
    //   const endAngle = this.convertAngle(args[2]) - Math.PI / 2;

    //   // Convert the radius and lineWidth to px.
    //   const radius = this.convertLength(args[3]);
    //   const lineWidth = this.convertLength(args[4]);

    //   ctx.lineWidth = lineWidth;

    //   ctx.beginPath();
    //   ctx.arc(x, y, radius, startAngle, endAngle, false);
    //   ctx.stroke();
    // }

    // convertAngle(angle) {
    //     switch (angle.unit) {
    //         case 'deg':
    //             return angle.value * Math.PI / 180;
    //         case 'rad':
    //             return angle.value;
    //         case 'grad':
    //             return angle.value * Math.PI / 200;
    //         case 'turn':
    //             return angle.value * Math.PI / 0.5;
    //         default:
    //             throw Error(`Unknown angle unit: ${angle.unit}`);
    //     }
    // }

    // convertLength(length) {
    //     switch (length.type) {
    //         case 'px':
    //             return length.value;
    //         default:
    //             throw Error(`Unkown length type: ${length.type}`);
    //     }
    // }
});