import { Vector } from 'xyzt';
import { COLORSTATS_VERSION } from '../../../../config';
import { IImage } from '../IImage';
import { colorDownscaleImage } from './colorDownscaleImage';
import { computeImageAverageColor } from './computeImageAverageColor';
import { computeImageDarkestColor } from './computeImageDarkestColor';
import { computeImageLightestColor } from './computeImageLightestColor';
import { computeImageMostFrequentColors } from './computeImageMostFrequentColors';
import { computeImageMostGroupedColors } from './computeImageMostGroupedColors';
import { computeImageMostSatulightedColors } from './computeImageMostSatulightedColors';
import { computeImagePalette } from './computeImagePalette';
import { IImageColorStats, IImageColorStatsRegion } from './IImageColorStats';
import { scaleImage } from './scaleImage';

/**
 * Compute the image color statistics
 */
export function computeImageColorStats(image: IImage): IImageColorStats {
    const stats = {
        ...computeWholeImageColorStats(image),
        bottomHalf: computeWholeImageColorStats(
            image.crop(new Vector(0, image.height * (1 / 2)), new Vector(image.width, image.height)),
        ),
        bottomThird: computeWholeImageColorStats(
            image.crop(new Vector(0, image.height * (2 / 3)), new Vector(image.width, image.height)),
        ),
        bottomLine: computeWholeImageColorStats(
            image.crop(new Vector(0, image.height - 1), new Vector(image.width, image.height)),
        ),
    } satisfies Omit<IImageColorStats, 'version' | 'palette'>;

    return { version: COLORSTATS_VERSION, palette: computeImagePalette(stats), ...stats };
}

/**
 * Compute the image color statistics for whole image
 */
function computeWholeImageColorStats(image: IImage): IImageColorStatsRegion {
    image = scaleImage(image, 0.1 /* <-!!!! Find ideal one */);
    image = colorDownscaleImage(image, 16);

    return {
        averageColor: computeImageAverageColor(image),
        lightestColor: computeImageLightestColor(image),
        darkestColor: computeImageDarkestColor(image),
        mostFrequentColors: computeImageMostFrequentColors(image),
        mostSatulightedColors: computeImageMostSatulightedColors(image),
        mostGroupedColors: computeImageMostGroupedColors(image),
    };
}

/**
 * TODO: Maybe pause inside with some util like forImmediate, forAnimationFrame
 */
