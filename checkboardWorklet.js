/**
 * Represents the read-only values of the output bitmap's width and height.
 * @typedef {Object} PaintSize
 * @property {number} width - width
 * @property {number} height - height
 */

/**
 * Represents the read-only values of the output bitmap's width and height.
 * @typedef {Object} PaintRenderingContext2DSettings
 * @property {boolean} alpha - Defines if alpha transparency is allowed. Alpha is set to true by default. If set to false, all colors used on the canvas will be fully opaque.
 */

registerPaint(
    "signspaces-paint",
    class {

        /**
         * Gets the context options for the paint.
         * @static
         * @returns {PaintRenderingContext2DSettings} The context options.
         */
        static get contextOptions() {
            return { alpha: true };
        }

        /**
         * Gets the input properties for the paint.
         * @static
         * @returns {Array.<string>} The input properties.
         * @description
         * Retrieves a list of supported CSS properties and custom properties required for rendering the custom paint.
         * If custom properties are not included in this list, they will not be accessible inside the `paint()` function.
         * 
         * @example
         * // Example 1: Only native CSS properties
         * // Returns: ["color", "font-size", "background-color", "border-width"]
         * 
         * // Example 2: Only custom CSS properties
         * // Returns: ["--custom-background-color", "--custom-text-color", "--custom-border-radius"]
         * 
         * // Example 3: Mix of native and custom CSS properties
         * // Returns: ["color", "--custom-background-color", "font-size", "--custom-text-color", "border-width", "--custom-border-radius"]
         * 
         */
        static get inputProperties() {
            return ["--signspaces-items", "--highlight-color", "--words-color"];
        }

        /**
         * Gets the input arguments for the paint.
         * @static
         * @returns {Array.<string>} The input arguments.
         * @description
         * Retrieves a list of additional arguments or inputs required for rendering the custom paint function. These arguments are not necessarily related to CSS properties and can include dynamic data or configuration options.
         * @example
         * // Example: Additional arguments for rendering a custom pattern
         * // Returns: ["patternType", "patternSize"]
         */
        static get inputArguments() {
            return ["patternType", "patternSize"]; // Not working. In theory we can access to this values as 4th param of pant(_, _, _, args). So, args[0] === patternType, args[1] === patternSize
        }


        /**
         * Paints the sign spaces on the canvas.
         * @param {CanvasRenderingContext2D} ctx - ctx is the 2D drawing context a subset of the HTML Canvas API
         * @param {PaintSize} size - paintSize: width and height
         * @param {StylePropertyMapReadOnly} styleMap - properties: get() method
         * @param {Array} args - Additional arguments passed to the paint function.
         */
        paint(ctx, size, styleMap, args) {
            const highlightColor = styleMap.get("--highlight-color").toString().trim();
            // const signspacesItems = styleMap.get("--signspaces-items");
            const words_color = styleMap.get("--words-color");

            /** @type {[number, number, number, number][] | undefined} */
            let items;
            /** @type {[string, string][] | undefined} */
            let colors_word;
            try {
                // items = JSON.parse(signspacesItems);
            } catch (error) {
            }
            try {
                colors_word = JSON.parse(words_color);
            } catch (error) {
            }

            // if (!items) return;
            if (!highlightColor) return;
            if (!Object.keys(colors_word).length) return
            console.log('colors_word', colors_word);

            Object.entries(colors_word).map(([color, list_of_coordinates_outer]) => {
                for (const list_of_coordinates_inner of list_of_coordinates_outer) {
                    for (const item of list_of_coordinates_inner) {
                        let [item_x, item_y, item_width, item_height] = item;
                        ctx.fillStyle = color;
                        this.roundRect(ctx, item_x, item_y, item_width, item_height, 5);
                    }
                }
            })

            // for (let item of items) {
            //     let [item_x, item_y, item_width, item_height, item_color] = item;
            //     ctx.fillStyle = highlightColor;
            //     this.roundRect(ctx, item_x, item_y, item_width, item_height, 5);
            // }

            // for (let item of items) {
            //     let [item_x, item_y, item_width, item_height, item_color] = item;
            //     ctx.fillStyle = highlightColor;
            //     this.roundRect(ctx, item_x, item_y, item_width, item_height, 5);
            // }
        }

        /**
         * Draws a rounded rectangle on the canvas context.
         * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
         * @param {number} x - The x-coordinate of the rectangle's starting point.
         * @param {number} y - The y-coordinate of the rectangle's starting point.
         * @param {number} width - The width of the rectangle.
         * @param {number} height - The height of the rectangle.
         * @param {number} radius - The corner radius of the rectangle.
         */
        roundRect(ctx, x, y, width, height, radius) {
            if (width < 2 * radius) {
                radius = width / 2;
            }
            if (height < 2 * radius) {
                radius = height / 2;
            }
            ctx.beginPath();
            ctx.moveTo(x + radius, y);
            ctx.arcTo(x + width, y, x + width, y + height, radius);
            ctx.arcTo(x + width, y + height, x, y + height, radius);
            ctx.arcTo(x, y + height, x, y, radius);
            ctx.arcTo(x, y, x + width, y, radius);
            ctx.closePath();
            ctx.fill();
        }
    }
);