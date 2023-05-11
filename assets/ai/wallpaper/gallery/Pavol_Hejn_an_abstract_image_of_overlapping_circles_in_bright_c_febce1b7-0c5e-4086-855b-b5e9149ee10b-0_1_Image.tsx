/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import Image from 'next/image';
import { Color } from '../../../../src/utils/color/Color';
import { IImageColorStats } from '../../../../src/utils/image/utils/IImageColorStats';
import { IWallpaperMetadata, IWallpaperComponentProps } from '../IWallpaperComponent';
import metadata from './Pavol_Hejn_an_abstract_image_of_overlapping_circles_in_bright_c_febce1b7-0c5e-4086-855b-b5e9149ee10b-0_1.json';
import source from './Pavol_Hejn_an_abstract_image_of_overlapping_circles_in_bright_c_febce1b7-0c5e-4086-855b-b5e9149ee10b-0_1.png';

/**
 * Image of An abstract image of overlapping circles in bright colors for a business or marketing website
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AnAbstractImageOfOverlappingCirclesInBrightCFebce1b70c5e4086855bB5e9149ee10b0_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An abstract image of overlapping circles in bright colors for a business or marketing website"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnAbstractImageOfOverlappingCirclesInBrightCFebce1b70c5e4086855bB5e9149ee10b0_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractImageOfOverlappingCirclesInBrightCFebce1b70c5e4086855bB5e9149ee10b0_1_Image.colorStats = {
    averageColor: Color.fromHex('#ab433e'),
    lightestColor: Color.fromHex('#bbddff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffeedd'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#ff1100'), Color.fromHex('#77ddff')],
    minmaxGreen: [Color.fromHex('#558855'), Color.fromHex('#ff0044')],
    minmaxBlue: [Color.fromHex('#225599'), Color.fromHex('#ffcc33')],
    mostFrequentColor: Color.fromHex('#662244'),
    mostSaturatedColor: Color.fromHex('#440000'),
    mostGroupedColor: Color.fromHex('#551133'),
    bottom: {
        averageColor: Color.fromHex('#a03d35'),
        lightestColor: Color.fromHex('#ff6699'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffcc66'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#ee1111'), Color.fromHex('#117799')],
        minmaxGreen: [Color.fromHex('#558866'), Color.fromHex('#cc0044')],
        minmaxBlue: [Color.fromHex('#115588'), Color.fromHex('#ffcc55')],
        mostFrequentColor: Color.fromHex('#662244'),
        mostSaturatedColor: Color.fromHex('#330022'),
        mostGroupedColor: Color.fromHex('#114466'),
    },
} satisfies IImageColorStats;
