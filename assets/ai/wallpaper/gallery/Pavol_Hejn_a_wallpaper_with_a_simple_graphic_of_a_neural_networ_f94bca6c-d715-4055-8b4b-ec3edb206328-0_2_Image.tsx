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
import metadata from './Pavol_Hejn_a_wallpaper_with_a_simple_graphic_of_a_neural_networ_f94bca6c-d715-4055-8b4b-ec3edb206328-0_2.json';
import source from './Pavol_Hejn_a_wallpaper_with_a_simple_graphic_of_a_neural_networ_f94bca6c-d715-4055-8b4b-ec3edb206328-0_2.png';

/**
 * Image of A wallpaper with a simple graphic of a neural network, against a background of complementary colors.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithASimpleGraphicOfANeuralNetworF94bca6cD71540558b4bEc3edb2063280_2_Image(
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

AWallpaperWithASimpleGraphicOfANeuralNetworF94bca6cD71540558b4bEc3edb2063280_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithASimpleGraphicOfANeuralNetworF94bca6cD71540558b4bEc3edb2063280_2_Image.colorStats = {
    averageColor: Color.fromHex('#2d2c2d'),
    lightestColor: Color.fromHex('#117799'),
    darkestColor: Color.fromHex('#001100'),
    minmaxWhite: [Color.fromHex('#bb9955'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#ee1122'), Color.fromHex('#008899')],
    minmaxGreen: [Color.fromHex('#448844'), Color.fromHex('#ee1122')],
    minmaxBlue: [Color.fromHex('#004477'), Color.fromHex('#ff7711')],
    mostFrequentColor: Color.fromHex('#112222'),
    mostSaturatedColor: Color.fromHex('#001111'),
    mostGroupedColor: Color.fromHex('#001122'),
    bottom: {
        averageColor: Color.fromHex('#2a282a'),
        lightestColor: Color.fromHex('#0088aa'),
        darkestColor: Color.fromHex('#111100'),
        minmaxWhite: [Color.fromHex('#99aa55'), Color.fromHex('#000011')],
        minmaxRed: [Color.fromHex('#cc1111'), Color.fromHex('#0088aa')],
        minmaxGreen: [Color.fromHex('#008866'), Color.fromHex('#cc1111')],
        minmaxBlue: [Color.fromHex('#115577'), Color.fromHex('#ff7711')],
        mostFrequentColor: Color.fromHex('#112222'),
        mostSaturatedColor: Color.fromHex('#001122'),
        mostGroupedColor: Color.fromHex('#001122'),
    },
} satisfies IImageColorStats;
