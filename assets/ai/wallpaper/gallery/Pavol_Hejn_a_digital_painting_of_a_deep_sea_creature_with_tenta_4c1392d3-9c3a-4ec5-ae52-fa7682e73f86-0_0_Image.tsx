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
import metadata from './Pavol_Hejn_a_digital_painting_of_a_deep_sea_creature_with_tenta_4c1392d3-9c3a-4ec5-ae52-fa7682e73f86-0_0.json';
import source from './Pavol_Hejn_a_digital_painting_of_a_deep_sea_creature_with_tenta_4c1392d3-9c3a-4ec5-ae52-fa7682e73f86-0_0.png';

/**
 * Image of A digital painting of a deep sea creature, with tentacles and bioluminescent patterns evoking a sense of mystery and exploration.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function ADigitalPaintingOfADeepSeaCreatureWithTenta4c1392d39c3a4ec5Ae52Fa7682e73f860_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A digital painting of a deep sea creature, with tentacles and bioluminescent patterns evoking a sense of mystery and exploration."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ADigitalPaintingOfADeepSeaCreatureWithTenta4c1392d39c3a4ec5Ae52Fa7682e73f860_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ADigitalPaintingOfADeepSeaCreatureWithTenta4c1392d39c3a4ec5Ae52Fa7682e73f860_0_Image.colorStats = {
    averageColor: Color.fromHex('#10161f'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#bb2244'), Color.fromHex('#66ffee')],
    minmaxGreen: [Color.fromHex('#22aa77'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#2244bb'), Color.fromHex('#ffffaa')],
    mostFrequentColor: Color.fromHex('#000000'),
    mostSaturatedColor: Color.fromHex('#000011'),
    mostGroupedColor: Color.fromHex('#000000'),
    bottom: {
        averageColor: Color.fromHex('#090d16'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#bb2244'), Color.fromHex('#eeffff')],
        minmaxGreen: [Color.fromHex('#339988'), Color.fromHex('#ffffff')],
        minmaxBlue: [Color.fromHex('#2244bb'), Color.fromHex('#ffffff')],
        mostFrequentColor: Color.fromHex('#000000'),
        mostSaturatedColor: Color.fromHex('#000011'),
        mostGroupedColor: Color.fromHex('#000000'),
    },
} satisfies IImageColorStats;
