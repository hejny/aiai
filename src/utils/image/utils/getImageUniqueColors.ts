import { Color, string_color } from '../../color/Color';
import { WithTake } from '../../take/interfaces/ITakeChain';
import { Image } from '../Image';

/**
 * @@@
 */

export function getImageUniqueColors(image: Image): Set<WithTake<Color>> {
    const colors = new Set<string_color>();

    for (let x = 0; x < image.width; x++) {
        for (let y = 0; y < image.height; y++) {
            colors.add(image.getPixel({ x, y }).toHex());
        }
    }

    return new Set(Array.from(colors).map((color) => Color.fromHex(color)));
}
