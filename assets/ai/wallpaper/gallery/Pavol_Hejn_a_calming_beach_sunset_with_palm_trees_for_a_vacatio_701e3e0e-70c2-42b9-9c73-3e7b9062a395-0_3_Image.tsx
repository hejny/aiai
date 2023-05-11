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
import metadata from './Pavol_Hejn_a_calming_beach_sunset_with_palm_trees_for_a_vacatio_701e3e0e-70c2-42b9-9c73-3e7b9062a395-0_3.json';
import source from './Pavol_Hejn_a_calming_beach_sunset_with_palm_trees_for_a_vacatio_701e3e0e-70c2-42b9-9c73-3e7b9062a395-0_3.png';

/**
 * Image of A calming beach sunset with palm trees for a vacation rental or real estate website
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function ACalmingBeachSunsetWithPalmTreesForAVacatio701e3e0e70c242b99c733e7b9062a3950_3_Image(
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

ACalmingBeachSunsetWithPalmTreesForAVacatio701e3e0e70c242b99c733e7b9062a3950_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ACalmingBeachSunsetWithPalmTreesForAVacatio701e3e0e70c242b99c733e7b9062a3950_3_Image.colorStats = {
    averageColor: Color.fromHex('#834747'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#220000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000022')],
    minmaxRed: [Color.fromHex('#bb2211'), Color.fromHex('#ffffff')],
    minmaxGreen: [Color.fromHex('#336666'), Color.fromHex('#ffffff')],
    minmaxBlue: [Color.fromHex('#444477'), Color.fromHex('#ffff88')],
    mostFrequentColor: Color.fromHex('#002233'),
    mostSaturatedColor: Color.fromHex('#330000'),
    mostGroupedColor: Color.fromHex('#ff7766'),
    bottom: {
        averageColor: Color.fromHex('#5d3f44'),
        lightestColor: Color.fromHex('#ffffee'),
        darkestColor: Color.fromHex('#111111'),
        minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#000022')],
        minmaxRed: [Color.fromHex('#bb3322'), Color.fromHex('#ffffee')],
        minmaxGreen: [Color.fromHex('#336666'), Color.fromHex('#ffffee')],
        minmaxBlue: [Color.fromHex('#333366'), Color.fromHex('#ffffaa')],
        mostFrequentColor: Color.fromHex('#002233'),
        mostSaturatedColor: Color.fromHex('#002233'),
        mostGroupedColor: Color.fromHex('#112233'),
    },
} satisfies IImageColorStats;
