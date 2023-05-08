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
import metadata from './Pavol_Hejn_a_wallpaper_featuring_a_minimalist_graphic_of_a_robo_5475a669-79a5-4525-8911-c53341143af4-0_3.json';
import source from './Pavol_Hejn_a_wallpaper_featuring_a_minimalist_graphic_of_a_robo_5475a669-79a5-4525-8911-c53341143af4-0_3.png';

/**
 * Image of A wallpaper featuring a minimalist graphic of a robot hand holding a stylus or pen, with a space for taking notes or sketching ideas.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingAMinimalistGraphicOfARobo5475a66979a545258911C53341143af40_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper featuring a minimalist graphic of a robot hand holding a stylus or pen, with a space for taking notes or sketching ideas."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperFeaturingAMinimalistGraphicOfARobo5475a66979a545258911C53341143af40_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingAMinimalistGraphicOfARobo5475a66979a545258911C53341143af40_3_Image.colorStats = {
    averageColor: Color.fromHex('#e9cfb0'),
    lightestColor: Color.fromHex('#ffffee'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#aa6633'), Color.fromHex('#ffffee')],
    minmaxGreen: [Color.fromHex('#77aa88'), Color.fromHex('#ffeeee')],
    minmaxBlue: [Color.fromHex('#224455'), Color.fromHex('#ffffdd')],
    mostFrequentColor: Color.fromHex('#eeeecc'),
    mostSaturatedColor: Color.fromHex('#001111'),
    mostGroupedColor: Color.fromHex('#ffeedd'),
    bottom: {
        averageColor: Color.fromHex('#e8c6a2'),
        lightestColor: Color.fromHex('#ffeedd'),
        darkestColor: Color.fromHex('#001100'),
        minmaxWhite: [Color.fromHex('#eeffdd'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#aa6644'), Color.fromHex('#eeffdd')],
        minmaxGreen: [Color.fromHex('#669988'), Color.fromHex('#ffeedd')],
        minmaxBlue: [Color.fromHex('#556677'), Color.fromHex('#eeffdd')],
        mostFrequentColor: Color.fromHex('#eeeecc'),
        mostSaturatedColor: Color.fromHex('#001111'),
        mostGroupedColor: Color.fromHex('#eeeecc'),
    },
} satisfies IImageColorStats;
