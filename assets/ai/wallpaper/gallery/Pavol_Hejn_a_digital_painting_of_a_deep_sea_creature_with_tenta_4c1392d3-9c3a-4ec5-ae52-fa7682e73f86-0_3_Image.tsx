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
import metadata from './Pavol_Hejn_a_digital_painting_of_a_deep_sea_creature_with_tenta_4c1392d3-9c3a-4ec5-ae52-fa7682e73f86-0_3.json';
import source from './Pavol_Hejn_a_digital_painting_of_a_deep_sea_creature_with_tenta_4c1392d3-9c3a-4ec5-ae52-fa7682e73f86-0_3.png';

/**
 * Image of A digital painting of a deep sea creature, with tentacles and bioluminescent patterns evoking a sense of mystery and exploration.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function ADigitalPaintingOfADeepSeaCreatureWithTenta4c1392d39c3a4ec5Ae52Fa7682e73f860_3_Image(
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

ADigitalPaintingOfADeepSeaCreatureWithTenta4c1392d39c3a4ec5Ae52Fa7682e73f860_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ADigitalPaintingOfADeepSeaCreatureWithTenta4c1392d39c3a4ec5Ae52Fa7682e73f860_3_Image.colorStats = {
    averageColor: Color.fromHex('#18272d'),
    lightestColor: Color.fromHex('#eeeeee'),
    darkestColor: Color.fromHex('#111100'),
    minmaxWhite: [Color.fromHex('#eeeeee'), Color.fromHex('#000011')],
    minmaxRed: [Color.fromHex('#993322'), Color.fromHex('#66eeee')],
    minmaxGreen: [Color.fromHex('#779944'), Color.fromHex('#ffeedd')],
    minmaxBlue: [Color.fromHex('#225577'), Color.fromHex('#ffcc33')],
    mostFrequentColor: Color.fromHex('#221111'),
    mostSaturatedColor: Color.fromHex('#001111'),
    mostGroupedColor: Color.fromHex('#112222'),
    bottom: {
        averageColor: Color.fromHex('#14161c'),
        lightestColor: Color.fromHex('#889999'),
        darkestColor: Color.fromHex('#110000'),
        minmaxWhite: [Color.fromHex('#889999'), Color.fromHex('#000011')],
        minmaxRed: [Color.fromHex('#994422'), Color.fromHex('#889999')],
        minmaxGreen: [Color.fromHex('#557755'), Color.fromHex('#110011')],
        minmaxBlue: [Color.fromHex('#555588'), Color.fromHex('#bb7733')],
        mostFrequentColor: Color.fromHex('#221111'),
        mostSaturatedColor: Color.fromHex('#001122'),
        mostGroupedColor: Color.fromHex('#111111'),
    },
} satisfies IImageColorStats;
