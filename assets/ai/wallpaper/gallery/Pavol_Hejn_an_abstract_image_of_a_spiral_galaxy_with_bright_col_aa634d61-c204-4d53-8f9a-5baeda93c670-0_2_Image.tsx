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
import metadata from './Pavol_Hejn_an_abstract_image_of_a_spiral_galaxy_with_bright_col_aa634d61-c204-4d53-8f9a-5baeda93c670-0_2.json';
import source from './Pavol_Hejn_an_abstract_image_of_a_spiral_galaxy_with_bright_col_aa634d61-c204-4d53-8f9a-5baeda93c670-0_2.png';

/**
 * Image of An abstract image of a spiral galaxy, with bright colors and swirling patterns that evoke a sense of movement and depth.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AnAbstractImageOfASpiralGalaxyWithBrightColAa634d61C2044d538f9a5baeda93c6700_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An abstract image of a spiral galaxy, with bright colors and swirling patterns that evoke a sense of movement and depth."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnAbstractImageOfASpiralGalaxyWithBrightColAa634d61C2044d538f9a5baeda93c6700_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractImageOfASpiralGalaxyWithBrightColAa634d61C2044d538f9a5baeda93c6700_2_Image.colorStats = {
    averageColor: Color.fromHex('#7e5d56'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#ff0000'), Color.fromHex('#11bbff')],
    minmaxGreen: [Color.fromHex('#55aa66'), Color.fromHex('#ff0011')],
    minmaxBlue: [Color.fromHex('#2244bb'), Color.fromHex('#ffee11')],
    mostFrequentColor: Color.fromHex('#333366'),
    mostSaturatedColor: Color.fromHex('#110011'),
    mostGroupedColor: Color.fromHex('#110011'),
    bottom: {
        averageColor: Color.fromHex('#756760'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#ff0000'), Color.fromHex('#11bbff')],
        minmaxGreen: [Color.fromHex('#99cc55'), Color.fromHex('#ff0000')],
        minmaxBlue: [Color.fromHex('#0044aa'), Color.fromHex('#ffff44')],
        mostFrequentColor: Color.fromHex('#333366'),
        mostSaturatedColor: Color.fromHex('#003366'),
        mostGroupedColor: Color.fromHex('#ff8822'),
    },
} satisfies IImageColorStats;
