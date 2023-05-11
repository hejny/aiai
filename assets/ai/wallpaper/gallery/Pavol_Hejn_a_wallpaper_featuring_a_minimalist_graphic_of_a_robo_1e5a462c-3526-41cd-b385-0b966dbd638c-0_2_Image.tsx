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
import metadata from './Pavol_Hejn_a_wallpaper_featuring_a_minimalist_graphic_of_a_robo_1e5a462c-3526-41cd-b385-0b966dbd638c-0_2.json';
import source from './Pavol_Hejn_a_wallpaper_featuring_a_minimalist_graphic_of_a_robo_1e5a462c-3526-41cd-b385-0b966dbd638c-0_2.png';

/**
 * Image of A wallpaper featuring a minimalist graphic of a robot hand holding a stylus or pen, with a space for taking notes or sketching ideas.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingAMinimalistGraphicOfARobo1e5a462c352641cdB3850b966dbd638c0_2_Image(
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

AWallpaperFeaturingAMinimalistGraphicOfARobo1e5a462c352641cdB3850b966dbd638c0_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingAMinimalistGraphicOfARobo1e5a462c352641cdB3850b966dbd638c0_2_Image.colorStats = {
    averageColor: Color.fromHex('#f8a523'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#bb2211'), Color.fromHex('#eeffff')],
    minmaxGreen: [Color.fromHex('#778866'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#334466'), Color.fromHex('#ffbb11')],
    mostFrequentColor: Color.fromHex('#ffaa33'),
    mostSaturatedColor: Color.fromHex('#663300'),
    mostGroupedColor: Color.fromHex('#ffaa22'),
    bottom: {
        averageColor: Color.fromHex('#faa623'),
        lightestColor: Color.fromHex('#eeeeff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#bb2211'), Color.fromHex('#ffffee')],
        minmaxGreen: [Color.fromHex('#887733'), Color.fromHex('#eeeeff')],
        minmaxBlue: [Color.fromHex('#666688'), Color.fromHex('#ffffcc')],
        mostFrequentColor: Color.fromHex('#ffaa33'),
        mostSaturatedColor: Color.fromHex('#884400'),
        mostGroupedColor: Color.fromHex('#ffaa22'),
    },
} satisfies IImageColorStats;
