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
import metadata from './Pavol_Hejn_a_wallpaper_with_a_single_graphic_of_a_futuristic_ci_39a50bb2-bfe7-43cb-a6c9-56666ffc50d3-0_1.json';
import source from './Pavol_Hejn_a_wallpaper_with_a_single_graphic_of_a_futuristic_ci_39a50bb2-bfe7-43cb-a6c9-56666ffc50d3-0_1.png';

/**
 * Image of A wallpaper with a single graphic of a futuristic cityscape, in a solid color such as orange or green.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithASingleGraphicOfAFuturisticCi39a50bb2Bfe743cbA6c956666ffc50d30_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a single graphic of a futuristic cityscape, in a solid color such as orange or green."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperWithASingleGraphicOfAFuturisticCi39a50bb2Bfe743cbA6c956666ffc50d30_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithASingleGraphicOfAFuturisticCi39a50bb2Bfe743cbA6c956666ffc50d30_1_Image.colorStats = {
    averageColor: Color.fromHex('#7d6925'),
    lightestColor: Color.fromHex('#eeddaa'),
    darkestColor: Color.fromHex('#001100'),
    minmaxWhite: [Color.fromHex('#eeddaa'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#bb4411'), Color.fromHex('#ffff99')],
    minmaxGreen: [Color.fromHex('#33aa44'), Color.fromHex('#220000')],
    minmaxBlue: [Color.fromHex('#445555'), Color.fromHex('#ffff99')],
    mostFrequentColor: Color.fromHex('#225533'),
    mostSaturatedColor: Color.fromHex('#002211'),
    mostGroupedColor: Color.fromHex('#dd7722'),
    bottom: {
        averageColor: Color.fromHex('#31431d'),
        lightestColor: Color.fromHex('#eeddaa'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#eeddaa'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#993300'), Color.fromHex('#ffff99')],
        minmaxGreen: [Color.fromHex('#33aa44'), Color.fromHex('#220000')],
        minmaxBlue: [Color.fromHex('#445555'), Color.fromHex('#ffff99')],
        mostFrequentColor: Color.fromHex('#225533'),
        mostSaturatedColor: Color.fromHex('#001100'),
        mostGroupedColor: Color.fromHex('#000000'),
    },
} satisfies IImageColorStats;
