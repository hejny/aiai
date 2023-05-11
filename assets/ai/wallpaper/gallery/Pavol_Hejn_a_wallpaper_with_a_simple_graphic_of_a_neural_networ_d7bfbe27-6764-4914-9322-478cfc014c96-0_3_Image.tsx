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
import metadata from './Pavol_Hejn_a_wallpaper_with_a_simple_graphic_of_a_neural_networ_d7bfbe27-6764-4914-9322-478cfc014c96-0_3.json';
import source from './Pavol_Hejn_a_wallpaper_with_a_simple_graphic_of_a_neural_networ_d7bfbe27-6764-4914-9322-478cfc014c96-0_3.png';

/**
 * Image of A wallpaper with a simple graphic of a neural network, against a background of complementary colors.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithASimpleGraphicOfANeuralNetworD7bfbe27676449149322478cfc014c960_3_Image(
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

AWallpaperWithASimpleGraphicOfANeuralNetworD7bfbe27676449149322478cfc014c960_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithASimpleGraphicOfANeuralNetworD7bfbe27676449149322478cfc014c960_3_Image.colorStats = {
    averageColor: Color.fromHex('#2c282b'),
    lightestColor: Color.fromHex('#ffdd88'),
    darkestColor: Color.fromHex('#111100'),
    minmaxWhite: [Color.fromHex('#ffdd88'), Color.fromHex('#110011')],
    minmaxRed: [Color.fromHex('#ff0000'), Color.fromHex('#dddd88')],
    minmaxGreen: [Color.fromHex('#889955'), Color.fromHex('#ff0011')],
    minmaxBlue: [Color.fromHex('#333355'), Color.fromHex('#ffbb00')],
    mostFrequentColor: Color.fromHex('#dd5511'),
    mostSaturatedColor: Color.fromHex('#ee1100'),
    mostGroupedColor: Color.fromHex('#002233'),
    bottom: {
        averageColor: Color.fromHex('#2d292b'),
        lightestColor: Color.fromHex('#ffbb55'),
        darkestColor: Color.fromHex('#221100'),
        minmaxWhite: [Color.fromHex('#ffcc55'), Color.fromHex('#110011')],
        minmaxRed: [Color.fromHex('#ff0000'), Color.fromHex('#eecc55')],
        minmaxGreen: [Color.fromHex('#998844'), Color.fromHex('#ff0000')],
        minmaxBlue: [Color.fromHex('#333355'), Color.fromHex('#ffbb00')],
        mostFrequentColor: Color.fromHex('#dd5511'),
        mostSaturatedColor: Color.fromHex('#550011'),
        mostGroupedColor: Color.fromHex('#002233'),
    },
} satisfies IImageColorStats;
