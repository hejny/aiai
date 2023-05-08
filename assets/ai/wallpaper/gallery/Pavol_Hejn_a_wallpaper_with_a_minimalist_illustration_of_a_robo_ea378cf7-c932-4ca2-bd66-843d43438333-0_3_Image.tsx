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
import metadata from './Pavol_Hejn_a_wallpaper_with_a_minimalist_illustration_of_a_robo_ea378cf7-c932-4ca2-bd66-843d43438333-0_3.json';
import source from './Pavol_Hejn_a_wallpaper_with_a_minimalist_illustration_of_a_robo_ea378cf7-c932-4ca2-bd66-843d43438333-0_3.png';

/**
 * Image of A wallpaper with a minimalist illustration of a robotic arm, against a background of dark and moody colors.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithAMinimalistIllustrationOfARoboEa378cf7C9324ca2Bd66843d434383330_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a minimalist illustration of a robotic arm, against a background of dark and moody colors."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperWithAMinimalistIllustrationOfARoboEa378cf7C9324ca2Bd66843d434383330_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithAMinimalistIllustrationOfARoboEa378cf7C9324ca2Bd66843d434383330_3_Image.colorStats = {
    averageColor: Color.fromHex('#2a3331'),
    lightestColor: Color.fromHex('#bb9988'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#bb9988'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#bb7755'), Color.fromHex('#002222')],
    minmaxGreen: [Color.fromHex('#446655'), Color.fromHex('#110011')],
    minmaxBlue: [Color.fromHex('#334455'), Color.fromHex('#bb9977')],
    mostFrequentColor: Color.fromHex('#001111'),
    mostSaturatedColor: Color.fromHex('#001111'),
    mostGroupedColor: Color.fromHex('#001111'),
    bottom: {
        averageColor: Color.fromHex('#0f1f20'),
        lightestColor: Color.fromHex('#bb9988'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#bb9988'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#996655'), Color.fromHex('#001122')],
        minmaxGreen: [Color.fromHex('#667766'), Color.fromHex('#000011')],
        minmaxBlue: [Color.fromHex('#223344'), Color.fromHex('#bb8866')],
        mostFrequentColor: Color.fromHex('#001111'),
        mostSaturatedColor: Color.fromHex('#001111'),
        mostGroupedColor: Color.fromHex('#001111'),
    },
} satisfies IImageColorStats;
