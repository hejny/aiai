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
import metadata from './Pavol_Hejn_a_futuristic_spacecraft_crewed_entirely_by_ainauts_h_b9d9be36-8607-4cbc-aa8d-3ee78d57d165-0_3.json';
import source from './Pavol_Hejn_a_futuristic_spacecraft_crewed_entirely_by_ainauts_h_b9d9be36-8607-4cbc-aa8d-3ee78d57d165-0_3.png';

/**
 * Image of A futuristic spacecraft crewed entirely by AInauts, hurtling through space at incredible speeds.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AFuturisticSpacecraftCrewedEntirelyByAinautsHB9d9be3686074cbcAa8d3ee78d57d1650_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A futuristic spacecraft crewed entirely by AInauts, hurtling through space at incredible speeds."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AFuturisticSpacecraftCrewedEntirelyByAinautsHB9d9be3686074cbcAa8d3ee78d57d1650_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AFuturisticSpacecraftCrewedEntirelyByAinautsHB9d9be3686074cbcAa8d3ee78d57d1650_3_Image.colorStats = {
    averageColor: Color.fromHex('#303232'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#995511'), Color.fromHex('#eeffff')],
    minmaxGreen: [Color.fromHex('#667755'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#224466'), Color.fromHex('#ffffdd')],
    mostFrequentColor: Color.fromHex('#001111'),
    mostSaturatedColor: Color.fromHex('#000011'),
    mostGroupedColor: Color.fromHex('#000000'),
    bottom: {
        averageColor: Color.fromHex('#1b1917'),
        lightestColor: Color.fromHex('#ccaa99'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ccbb99'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#995511'), Color.fromHex('#ccbb99')],
        minmaxGreen: [Color.fromHex('#777755'), Color.fromHex('#220000')],
        minmaxBlue: [Color.fromHex('#555566'), Color.fromHex('#ccbb99')],
        mostFrequentColor: Color.fromHex('#001111'),
        mostSaturatedColor: Color.fromHex('#001111'),
        mostGroupedColor: Color.fromHex('#000000'),
    },
} satisfies IImageColorStats;
