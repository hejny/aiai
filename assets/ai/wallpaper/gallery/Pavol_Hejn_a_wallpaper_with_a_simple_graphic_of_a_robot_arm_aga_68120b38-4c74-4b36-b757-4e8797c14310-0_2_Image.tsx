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
import metadata from './Pavol_Hejn_a_wallpaper_with_a_simple_graphic_of_a_robot_arm_aga_68120b38-4c74-4b36-b757-4e8797c14310-0_2.json';
import source from './Pavol_Hejn_a_wallpaper_with_a_simple_graphic_of_a_robot_arm_aga_68120b38-4c74-4b36-b757-4e8797c14310-0_2.png';

/**
 * Image of A wallpaper with a simple graphic of a robot arm, against a gradient background of two complementary colors.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithASimpleGraphicOfARobotArmAga68120b384c744b36B7574e8797c143100_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a simple graphic of a robot arm, against a gradient background of two complementary colors."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperWithASimpleGraphicOfARobotArmAga68120b384c744b36B7574e8797c143100_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithASimpleGraphicOfARobotArmAga68120b384c744b36B7574e8797c143100_2_Image.colorStats = {
    averageColor: Color.fromHex('#cd5a28'),
    lightestColor: Color.fromHex('#ff7755'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#eebb44'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#ee1122'), Color.fromHex('#002244')],
    minmaxGreen: [Color.fromHex('#cc9933'), Color.fromHex('#ee1133')],
    minmaxBlue: [Color.fromHex('#111144'), Color.fromHex('#ffbb11')],
    mostFrequentColor: Color.fromHex('#001144'),
    mostSaturatedColor: Color.fromHex('#ee8800'),
    mostGroupedColor: Color.fromHex('#ff8822'),
    bottom: {
        averageColor: Color.fromHex('#922e2c'),
        lightestColor: Color.fromHex('#ee6644'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffaa33'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#ee1122'), Color.fromHex('#002244')],
        minmaxGreen: [Color.fromHex('#ffbb11'), Color.fromHex('#ee1133')],
        minmaxBlue: [Color.fromHex('#111144'), Color.fromHex('#ffbb11')],
        mostFrequentColor: Color.fromHex('#001144'),
        mostSaturatedColor: Color.fromHex('#bb0022'),
        mostGroupedColor: Color.fromHex('#ff4422'),
    },
} satisfies IImageColorStats;
