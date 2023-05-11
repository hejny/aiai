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
import metadata from './Pavol_Hejn_a_wallpaper_with_a_simple_graphic_of_a_3d_printed_ob_3b1d5e34-b7bf-49fe-bd11-98acfabda8e2-0_1.json';
import source from './Pavol_Hejn_a_wallpaper_with_a_simple_graphic_of_a_3d_printed_ob_3b1d5e34-b7bf-49fe-bd11-98acfabda8e2-0_1.png';

/**
 * Image of A wallpaper with a simple graphic of a 3D-printed object, against a background of geometric shapes in complementary colors.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithASimpleGraphicOfA3dPrintedOb3b1d5e34B7bf49feBd1198acfabda8e20_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a simple graphic of a 3D-printed object, against a background of geometric shapes in complementary colors."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperWithASimpleGraphicOfA3dPrintedOb3b1d5e34B7bf49feBd1198acfabda8e20_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithASimpleGraphicOfA3dPrintedOb3b1d5e34B7bf49feBd1198acfabda8e20_1_Image.colorStats = {
    averageColor: Color.fromHex('#883214'),
    lightestColor: Color.fromHex('#eeeeee'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#eeeeee'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#dd1100'), Color.fromHex('#ddeeee')],
    minmaxGreen: [Color.fromHex('#777733'), Color.fromHex('#dd1111')],
    minmaxBlue: [Color.fromHex('#224466'), Color.fromHex('#ffdd11')],
    mostFrequentColor: Color.fromHex('#ee4433'),
    mostSaturatedColor: Color.fromHex('#991100'),
    mostGroupedColor: Color.fromHex('#881100'),
    bottom: {
        averageColor: Color.fromHex('#9a2f12'),
        lightestColor: Color.fromHex('#ddddee'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ddddee'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#dd1100'), Color.fromHex('#ddddee')],
        minmaxGreen: [Color.fromHex('#998833'), Color.fromHex('#dd1111')],
        minmaxBlue: [Color.fromHex('#222255'), Color.fromHex('#ffbb00')],
        mostFrequentColor: Color.fromHex('#ee4433'),
        mostSaturatedColor: Color.fromHex('#ee7700'),
        mostGroupedColor: Color.fromHex('#ff3322'),
    },
} satisfies IImageColorStats;
