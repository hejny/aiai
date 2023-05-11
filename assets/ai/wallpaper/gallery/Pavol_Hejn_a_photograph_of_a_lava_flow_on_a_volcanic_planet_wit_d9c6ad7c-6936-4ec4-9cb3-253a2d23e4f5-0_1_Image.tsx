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
import metadata from './Pavol_Hejn_a_photograph_of_a_lava_flow_on_a_volcanic_planet_wit_d9c6ad7c-6936-4ec4-9cb3-253a2d23e4f5-0_1.json';
import source from './Pavol_Hejn_a_photograph_of_a_lava_flow_on_a_volcanic_planet_wit_d9c6ad7c-6936-4ec4-9cb3-253a2d23e4f5-0_1.png';

/**
 * Image of A photograph of a lava flow on a volcanic planet, with the red and orange colors evoking a sense of danger and excitement.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function APhotographOfALavaFlowOnAVolcanicPlanetWitD9c6ad7c69364ec49cb3253a2d23e4f50_1_Image(
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

APhotographOfALavaFlowOnAVolcanicPlanetWitD9c6ad7c69364ec49cb3253a2d23e4f50_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APhotographOfALavaFlowOnAVolcanicPlanetWitD9c6ad7c69364ec49cb3253a2d23e4f50_1_Image.colorStats = {
    averageColor: Color.fromHex('#5d1f20'),
    lightestColor: Color.fromHex('#ffdd88'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffdd88'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#ee0000'), Color.fromHex('#ffee77')],
    minmaxGreen: [Color.fromHex('#996622'), Color.fromHex('#ee0011')],
    minmaxBlue: [Color.fromHex('#553355'), Color.fromHex('#ffdd33')],
    mostFrequentColor: Color.fromHex('#000000'),
    mostSaturatedColor: Color.fromHex('#110011'),
    mostGroupedColor: Color.fromHex('#331111'),
    bottom: {
        averageColor: Color.fromHex('#371217'),
        lightestColor: Color.fromHex('#ffcc66'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#eedd66'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#ee0000'), Color.fromHex('#eedd66')],
        minmaxGreen: [Color.fromHex('#cc8800'), Color.fromHex('#ee0011')],
        minmaxBlue: [Color.fromHex('#441144'), Color.fromHex('#ffdd44')],
        mostFrequentColor: Color.fromHex('#000000'),
        mostSaturatedColor: Color.fromHex('#220011'),
        mostGroupedColor: Color.fromHex('#111111'),
    },
} satisfies IImageColorStats;
