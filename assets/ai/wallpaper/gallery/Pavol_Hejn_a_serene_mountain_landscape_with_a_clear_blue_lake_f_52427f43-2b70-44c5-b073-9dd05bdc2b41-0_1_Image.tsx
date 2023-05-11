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
import metadata from './Pavol_Hejn_a_serene_mountain_landscape_with_a_clear_blue_lake_f_52427f43-2b70-44c5-b073-9dd05bdc2b41-0_1.json';
import source from './Pavol_Hejn_a_serene_mountain_landscape_with_a_clear_blue_lake_f_52427f43-2b70-44c5-b073-9dd05bdc2b41-0_1.png';

/**
 * Image of A serene mountain landscape with a clear blue lake for a meditation or wellness website
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function ASereneMountainLandscapeWithAClearBlueLakeF52427f432b7044c5B0739dd05bdc2b410_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A serene mountain landscape with a clear blue lake for a meditation or wellness website"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ASereneMountainLandscapeWithAClearBlueLakeF52427f432b7044c5B0739dd05bdc2b410_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ASereneMountainLandscapeWithAClearBlueLakeF52427f432b7044c5B0739dd05bdc2b410_1_Image.colorStats = {
    averageColor: Color.fromHex('#6b8b7f'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#001100'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#884411'), Color.fromHex('#22ddbb')],
    minmaxGreen: [Color.fromHex('#44aa55'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#0066aa'), Color.fromHex('#ffee33')],
    mostFrequentColor: Color.fromHex('#221111'),
    mostSaturatedColor: Color.fromHex('#001111'),
    mostGroupedColor: Color.fromHex('#66bbcc'),
    bottom: {
        averageColor: Color.fromHex('#7b8b7c'),
        lightestColor: Color.fromHex('#eeeeff'),
        darkestColor: Color.fromHex('#001100'),
        minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#884411'), Color.fromHex('#ddffff')],
        minmaxGreen: [Color.fromHex('#66aa66'), Color.fromHex('#eeeeff')],
        minmaxBlue: [Color.fromHex('#116688'), Color.fromHex('#ffffee')],
        mostFrequentColor: Color.fromHex('#221111'),
        mostSaturatedColor: Color.fromHex('#001111'),
        mostGroupedColor: Color.fromHex('#001122'),
    },
} satisfies IImageColorStats;
