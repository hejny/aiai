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
import metadata from './Pavol_Hejn_a_wallpaper_with_a_simple_graphic_of_a_neural_networ_1d385dcc-8ab9-456d-a9a8-d5f4b3e6ac28-0_3.json';
import source from './Pavol_Hejn_a_wallpaper_with_a_simple_graphic_of_a_neural_networ_1d385dcc-8ab9-456d-a9a8-d5f4b3e6ac28-0_3.png';

/**
 * Image of A wallpaper with a simple graphic of a neural network, against a background of complementary colors.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithASimpleGraphicOfANeuralNetwor1d385dcc8ab9456dA9a8D5f4b3e6ac280_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a simple graphic of a neural network, against a background of complementary colors."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperWithASimpleGraphicOfANeuralNetwor1d385dcc8ab9456dA9a8D5f4b3e6ac280_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithASimpleGraphicOfANeuralNetwor1d385dcc8ab9456dA9a8D5f4b3e6ac280_3_Image.colorStats = {
    averageColor: Color.fromHex('#24101c'),
    lightestColor: Color.fromHex('#bb3366'),
    darkestColor: Color.fromHex('#220000'),
    minmaxWhite: [Color.fromHex('#bb6633'), Color.fromHex('#000011')],
    minmaxRed: [Color.fromHex('#ee3311'), Color.fromHex('#116666')],
    minmaxGreen: [Color.fromHex('#116655'), Color.fromHex('#ee3311')],
    minmaxBlue: [Color.fromHex('#442277'), Color.fromHex('#ff5500')],
    mostFrequentColor: Color.fromHex('#220011'),
    mostSaturatedColor: Color.fromHex('#000022'),
    mostGroupedColor: Color.fromHex('#001122'),
    bottom: {
        averageColor: Color.fromHex('#14121f'),
        lightestColor: Color.fromHex('#225566'),
        darkestColor: Color.fromHex('#220000'),
        minmaxWhite: [Color.fromHex('#dd5522'), Color.fromHex('#000011')],
        minmaxRed: [Color.fromHex('#ee3311'), Color.fromHex('#116666')],
        minmaxGreen: [Color.fromHex('#116655'), Color.fromHex('#ee3311')],
        minmaxBlue: [Color.fromHex('#115566'), Color.fromHex('#ee5500')],
        mostFrequentColor: Color.fromHex('#220011'),
        mostSaturatedColor: Color.fromHex('#001122'),
        mostGroupedColor: Color.fromHex('#001122'),
    },
} satisfies IImageColorStats;
