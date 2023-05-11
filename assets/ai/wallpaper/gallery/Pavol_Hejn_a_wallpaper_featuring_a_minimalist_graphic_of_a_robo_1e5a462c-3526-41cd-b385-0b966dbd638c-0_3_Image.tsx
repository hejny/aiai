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
import metadata from './Pavol_Hejn_a_wallpaper_featuring_a_minimalist_graphic_of_a_robo_1e5a462c-3526-41cd-b385-0b966dbd638c-0_3.json';
import source from './Pavol_Hejn_a_wallpaper_featuring_a_minimalist_graphic_of_a_robo_1e5a462c-3526-41cd-b385-0b966dbd638c-0_3.png';

/**
 * Image of A wallpaper featuring a minimalist graphic of a robot hand holding a stylus or pen, with a space for taking notes or sketching ideas.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingAMinimalistGraphicOfARobo1e5a462c352641cdB3850b966dbd638c0_3_Image(
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

AWallpaperFeaturingAMinimalistGraphicOfARobo1e5a462c352641cdB3850b966dbd638c0_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingAMinimalistGraphicOfARobo1e5a462c352641cdB3850b966dbd638c0_3_Image.colorStats = {
    averageColor: Color.fromHex('#e3882b'),
    lightestColor: Color.fromHex('#eeeeff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#ee6611'), Color.fromHex('#ffffee')],
    minmaxGreen: [Color.fromHex('#778855'), Color.fromHex('#eeeeff')],
    minmaxBlue: [Color.fromHex('#335577'), Color.fromHex('#ffffcc')],
    mostFrequentColor: Color.fromHex('#dd8833'),
    mostSaturatedColor: Color.fromHex('#331100'),
    mostGroupedColor: Color.fromHex('#ee8822'),
    bottom: {
        averageColor: Color.fromHex('#e68a2c'),
        lightestColor: Color.fromHex('#eeeeff'),
        darkestColor: Color.fromHex('#001100'),
        minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#ee7711'), Color.fromHex('#ffffee')],
        minmaxGreen: [Color.fromHex('#779977'), Color.fromHex('#eeeeff')],
        minmaxBlue: [Color.fromHex('#445577'), Color.fromHex('#ffffee')],
        mostFrequentColor: Color.fromHex('#dd8833'),
        mostSaturatedColor: Color.fromHex('#001122'),
        mostGroupedColor: Color.fromHex('#ee8822'),
    },
} satisfies IImageColorStats;
