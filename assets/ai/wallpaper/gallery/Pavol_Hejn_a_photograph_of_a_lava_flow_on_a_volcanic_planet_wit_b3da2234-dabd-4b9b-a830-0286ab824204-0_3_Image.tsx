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
import metadata from './Pavol_Hejn_a_photograph_of_a_lava_flow_on_a_volcanic_planet_wit_b3da2234-dabd-4b9b-a830-0286ab824204-0_3.json';
import source from './Pavol_Hejn_a_photograph_of_a_lava_flow_on_a_volcanic_planet_wit_b3da2234-dabd-4b9b-a830-0286ab824204-0_3.png';

/**
 * Image of A photograph of a lava flow on a volcanic planet, with the red and orange colors evoking a sense of danger and excitement.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function APhotographOfALavaFlowOnAVolcanicPlanetWitB3da2234Dabd4b9bA8300286ab8242040_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A photograph of a lava flow on a volcanic planet, with the red and orange colors evoking a sense of danger and excitement."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

APhotographOfALavaFlowOnAVolcanicPlanetWitB3da2234Dabd4b9bA8300286ab8242040_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APhotographOfALavaFlowOnAVolcanicPlanetWitB3da2234Dabd4b9bA8300286ab8242040_3_Image.colorStats = {
    averageColor: Color.fromHex('#2c1e1f'),
    lightestColor: Color.fromHex('#ffbb88'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffbb88'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#ee1100'), Color.fromHex('#eeee66')],
    minmaxGreen: [Color.fromHex('#667766'), Color.fromHex('#dd0000')],
    minmaxBlue: [Color.fromHex('#444466'), Color.fromHex('#ffdd11')],
    mostFrequentColor: Color.fromHex('#000000'),
    mostSaturatedColor: Color.fromHex('#001111'),
    mostGroupedColor: Color.fromHex('#111111'),
    bottom: {
        averageColor: Color.fromHex('#291615'),
        lightestColor: Color.fromHex('#ffbb88'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffbb88'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#ee1100'), Color.fromHex('#ffdd33')],
        minmaxGreen: [Color.fromHex('#ddbb22'), Color.fromHex('#dd0000')],
        minmaxBlue: [Color.fromHex('#444455'), Color.fromHex('#ffdd11')],
        mostFrequentColor: Color.fromHex('#000000'),
        mostSaturatedColor: Color.fromHex('#110011'),
        mostGroupedColor: Color.fromHex('#111111'),
    },
} satisfies IImageColorStats;
