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
import metadata from './Pavol_Hejn_a_wallpaper_featuring_a_simple_graphic_of_a_robot_ar_41acf944-d6b5-4e38-bf06-c0f2e36711f7-0_0.json';
import source from './Pavol_Hejn_a_wallpaper_featuring_a_simple_graphic_of_a_robot_ar_41acf944-d6b5-4e38-bf06-c0f2e36711f7-0_0.png';

/**
 * Image of A wallpaper featuring a simple graphic of a robot arm holding a smartphone, with a space for placing important notifications or messages.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingASimpleGraphicOfARobotAr41acf944D6b54e38Bf06C0f2e36711f70_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper featuring a simple graphic of a robot arm holding a smartphone, with a space for placing important notifications or messages."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperFeaturingASimpleGraphicOfARobotAr41acf944D6b54e38Bf06C0f2e36711f70_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingASimpleGraphicOfARobotAr41acf944D6b54e38Bf06C0f2e36711f70_0_Image.colorStats = {
    averageColor: Color.fromHex('#e5ac3f'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#cc4400'), Color.fromHex('#eeffff')],
    minmaxGreen: [Color.fromHex('#779955'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#444466'), Color.fromHex('#ffdd11')],
    mostFrequentColor: Color.fromHex('#ffcc55'),
    mostSaturatedColor: Color.fromHex('#cc7700'),
    mostGroupedColor: Color.fromHex('#ffbb44'),
    bottom: {
        averageColor: Color.fromHex('#dca43d'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#cc4400'), Color.fromHex('#eeffff')],
        minmaxGreen: [Color.fromHex('#779955'), Color.fromHex('#ffffff')],
        minmaxBlue: [Color.fromHex('#445566'), Color.fromHex('#ffdd22')],
        mostFrequentColor: Color.fromHex('#ffcc55'),
        mostSaturatedColor: Color.fromHex('#000011'),
        mostGroupedColor: Color.fromHex('#ffbb44'),
    },
} satisfies IImageColorStats;
