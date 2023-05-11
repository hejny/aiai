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
import metadata from './Pavol_Hejn_a_calming_beach_sunset_with_palm_trees_for_a_vacatio_9a3266d2-88cc-457c-b85c-1d0620c791e7-0_0.json';
import source from './Pavol_Hejn_a_calming_beach_sunset_with_palm_trees_for_a_vacatio_9a3266d2-88cc-457c-b85c-1d0620c791e7-0_0.png';

/**
 * Image of A calming beach sunset with palm trees for a vacation rental or real estate website
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function ACalmingBeachSunsetWithPalmTreesForAVacatio9a3266d288cc457cB85c1d0620c791e70_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A calming beach sunset with palm trees for a vacation rental or real estate website"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ACalmingBeachSunsetWithPalmTreesForAVacatio9a3266d288cc457cB85c1d0620c791e70_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ACalmingBeachSunsetWithPalmTreesForAVacatio9a3266d288cc457cB85c1d0620c791e70_0_Image.colorStats = {
    averageColor: Color.fromHex('#874d2f'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#221100'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#220000')],
    minmaxRed: [Color.fromHex('#dd3311'), Color.fromHex('#ffffff')],
    minmaxGreen: [Color.fromHex('#666655'), Color.fromHex('#ffffff')],
    minmaxBlue: [Color.fromHex('#333344'), Color.fromHex('#ffff55')],
    mostFrequentColor: Color.fromHex('#221111'),
    mostSaturatedColor: Color.fromHex('#552200'),
    mostGroupedColor: Color.fromHex('#444444'),
    bottom: {
        averageColor: Color.fromHex('#884429'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#221100'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#220011')],
        minmaxRed: [Color.fromHex('#cc3311'), Color.fromHex('#ffffff')],
        minmaxGreen: [Color.fromHex('#555544'), Color.fromHex('#ffffff')],
        minmaxBlue: [Color.fromHex('#443344'), Color.fromHex('#ffff55')],
        mostFrequentColor: Color.fromHex('#221111'),
        mostSaturatedColor: Color.fromHex('#552200'),
        mostGroupedColor: Color.fromHex('#221122'),
    },
} satisfies IImageColorStats;
