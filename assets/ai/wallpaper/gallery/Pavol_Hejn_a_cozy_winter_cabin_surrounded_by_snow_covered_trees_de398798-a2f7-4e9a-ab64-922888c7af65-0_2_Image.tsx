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
import metadata from './Pavol_Hejn_a_cozy_winter_cabin_surrounded_by_snow_covered_trees_de398798-a2f7-4e9a-ab64-922888c7af65-0_2.json';
import source from './Pavol_Hejn_a_cozy_winter_cabin_surrounded_by_snow_covered_trees_de398798-a2f7-4e9a-ab64-922888c7af65-0_2.png';

/**
 * Image of A cozy winter cabin surrounded by snow-covered trees for a home decor or lifestyle blog
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ACozyWinterCabinSurroundedBySnowCoveredTreesDe398798A2f74e9aAb64922888c7af650_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A cozy winter cabin surrounded by snow-covered trees for a home decor or lifestyle blog"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ACozyWinterCabinSurroundedBySnowCoveredTreesDe398798A2f74e9aAb64922888c7af650_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ACozyWinterCabinSurroundedBySnowCoveredTreesDe398798A2f74e9aAb64922888c7af650_2_Image.colorStats = {
    averageColor: Color.fromHex('#8e8e91'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#994433'), Color.fromHex('#ffffff')],
    minmaxGreen: [Color.fromHex('#668877'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#445566'), Color.fromHex('#ffffee')],
    mostFrequentColor: Color.fromHex('#777788'),
    mostSaturatedColor: Color.fromHex('#001111'),
    mostGroupedColor: Color.fromHex('#eeeeee'),
    bottom: {
        averageColor: Color.fromHex('#86898d'),
        lightestColor: Color.fromHex('#eeeeff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#eeeeff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#774433'), Color.fromHex('#eeeeff')],
        minmaxGreen: [Color.fromHex('#667766'), Color.fromHex('#eeeeff')],
        minmaxBlue: [Color.fromHex('#556677'), Color.fromHex('#eeeedd')],
        mostFrequentColor: Color.fromHex('#777788'),
        mostSaturatedColor: Color.fromHex('#001111'),
        mostGroupedColor: Color.fromHex('#dddddd'),
    },
} satisfies IImageColorStats;
