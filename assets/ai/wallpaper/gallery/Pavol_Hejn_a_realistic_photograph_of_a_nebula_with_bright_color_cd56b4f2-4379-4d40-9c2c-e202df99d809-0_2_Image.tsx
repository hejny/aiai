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
import metadata from './Pavol_Hejn_a_realistic_photograph_of_a_nebula_with_bright_color_cd56b4f2-4379-4d40-9c2c-e202df99d809-0_2.json';
import source from './Pavol_Hejn_a_realistic_photograph_of_a_nebula_with_bright_color_cd56b4f2-4379-4d40-9c2c-e202df99d809-0_2.png';

/**
 * Image of A realistic photograph of a nebula, with bright colors and intricate details that showcase the beauty of the universe.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ARealisticPhotographOfANebulaWithBrightColorCd56b4f243794d409c2cE202df99d8090_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A realistic photograph of a nebula, with bright colors and intricate details that showcase the beauty of the universe."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ARealisticPhotographOfANebulaWithBrightColorCd56b4f243794d409c2cE202df99d8090_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ARealisticPhotographOfANebulaWithBrightColorCd56b4f243794d409c2cE202df99d8090_2_Image.colorStats = {
    averageColor: Color.fromHex('#3a393a'),
    lightestColor: Color.fromHex('#eeeedd'),
    darkestColor: Color.fromHex('#001111'),
    minmaxWhite: [Color.fromHex('#eeeedd'), Color.fromHex('#000011')],
    minmaxRed: [Color.fromHex('#cc5522'), Color.fromHex('#eeeedd')],
    minmaxGreen: [Color.fromHex('#448877'), Color.fromHex('#eeeedd')],
    minmaxBlue: [Color.fromHex('#114466'), Color.fromHex('#ffeebb')],
    mostFrequentColor: Color.fromHex('#111111'),
    mostSaturatedColor: Color.fromHex('#001122'),
    mostGroupedColor: Color.fromHex('#000011'),
    bottom: {
        averageColor: Color.fromHex('#3a2f30'),
        lightestColor: Color.fromHex('#eeeedd'),
        darkestColor: Color.fromHex('#001111'),
        minmaxWhite: [Color.fromHex('#eeeedd'), Color.fromHex('#000011')],
        minmaxRed: [Color.fromHex('#bb4422'), Color.fromHex('#eeeedd')],
        minmaxGreen: [Color.fromHex('#777755'), Color.fromHex('#eeeedd')],
        minmaxBlue: [Color.fromHex('#225566'), Color.fromHex('#eeeebb')],
        mostFrequentColor: Color.fromHex('#111111'),
        mostSaturatedColor: Color.fromHex('#001111'),
        mostGroupedColor: Color.fromHex('#000011'),
    },
} satisfies IImageColorStats;
