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
import metadata from './Pavol_Hejn_a_photograph_of_a_lava_flow_on_a_volcanic_planet_wit_501ae47c-e987-4f3d-9f11-199be5534df8-0_3.json';
import source from './Pavol_Hejn_a_photograph_of_a_lava_flow_on_a_volcanic_planet_wit_501ae47c-e987-4f3d-9f11-199be5534df8-0_3.png';

/**
 * Image of A photograph of a lava flow on a volcanic planet, with the red and orange colors evoking a sense of danger and excitement.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function APhotographOfALavaFlowOnAVolcanicPlanetWit501ae47cE9874f3d9f11199be5534df80_3_Image(
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

APhotographOfALavaFlowOnAVolcanicPlanetWit501ae47cE9874f3d9f11199be5534df80_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APhotographOfALavaFlowOnAVolcanicPlanetWit501ae47cE9874f3d9f11199be5534df80_3_Image.colorStats = {
    averageColor: Color.fromHex('#2c1013'),
    lightestColor: Color.fromHex('#dd7755'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffbb11'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#ff0000'), Color.fromHex('#ffdd00')],
    minmaxGreen: [Color.fromHex('#444433'), Color.fromHex('#ff0000')],
    minmaxBlue: [Color.fromHex('#112244'), Color.fromHex('#ffdd00')],
    mostFrequentColor: Color.fromHex('#000000'),
    mostSaturatedColor: Color.fromHex('#110011'),
    mostGroupedColor: Color.fromHex('#221111'),
    bottom: {
        averageColor: Color.fromHex('#230d12'),
        lightestColor: Color.fromHex('#ff7755'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ff7755'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#ff1100'), Color.fromHex('#001122')],
        minmaxGreen: [Color.fromHex('#775544'), Color.fromHex('#ff1100')],
        minmaxBlue: [Color.fromHex('#333344'), Color.fromHex('#ff5500')],
        mostFrequentColor: Color.fromHex('#000000'),
        mostSaturatedColor: Color.fromHex('#000011'),
        mostGroupedColor: Color.fromHex('#111111'),
    },
} satisfies IImageColorStats;
