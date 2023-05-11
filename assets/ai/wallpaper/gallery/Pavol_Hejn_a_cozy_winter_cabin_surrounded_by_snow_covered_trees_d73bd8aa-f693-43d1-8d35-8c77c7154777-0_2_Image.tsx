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
import metadata from './Pavol_Hejn_a_cozy_winter_cabin_surrounded_by_snow_covered_trees_d73bd8aa-f693-43d1-8d35-8c77c7154777-0_2.json';
import source from './Pavol_Hejn_a_cozy_winter_cabin_surrounded_by_snow_covered_trees_d73bd8aa-f693-43d1-8d35-8c77c7154777-0_2.png';

/**
 * Image of A cozy winter cabin surrounded by snow-covered trees for a home decor or lifestyle blog
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ACozyWinterCabinSurroundedBySnowCoveredTreesD73bd8aaF69343d18d358c77c71547770_2_Image(
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

ACozyWinterCabinSurroundedBySnowCoveredTreesD73bd8aaF69343d18d358c77c71547770_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ACozyWinterCabinSurroundedBySnowCoveredTreesD73bd8aaF69343d18d358c77c71547770_2_Image.colorStats = {
    averageColor: Color.fromHex('#bab9bb'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#884433'), Color.fromHex('#eeffff')],
    minmaxGreen: [Color.fromHex('#777755'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#445566'), Color.fromHex('#ffffee')],
    mostFrequentColor: Color.fromHex('#cccccc'),
    mostSaturatedColor: Color.fromHex('#110000'),
    mostGroupedColor: Color.fromHex('#ccccdd'),
    bottom: {
        averageColor: Color.fromHex('#adaeb1'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#111111'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#111111')],
        minmaxRed: [Color.fromHex('#884444'), Color.fromHex('#eeffff')],
        minmaxGreen: [Color.fromHex('#777755'), Color.fromHex('#ffeeff')],
        minmaxBlue: [Color.fromHex('#445566'), Color.fromHex('#ffffee')],
        mostFrequentColor: Color.fromHex('#cccccc'),
        mostSaturatedColor: Color.fromHex('#552211'),
        mostGroupedColor: Color.fromHex('#ccccdd'),
    },
} satisfies IImageColorStats;
