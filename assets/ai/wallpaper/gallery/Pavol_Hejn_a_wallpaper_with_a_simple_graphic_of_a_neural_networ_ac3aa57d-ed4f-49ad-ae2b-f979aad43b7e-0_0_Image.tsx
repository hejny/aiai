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
import metadata from './Pavol_Hejn_a_wallpaper_with_a_simple_graphic_of_a_neural_networ_ac3aa57d-ed4f-49ad-ae2b-f979aad43b7e-0_0.json';
import source from './Pavol_Hejn_a_wallpaper_with_a_simple_graphic_of_a_neural_networ_ac3aa57d-ed4f-49ad-ae2b-f979aad43b7e-0_0.png';

/**
 * Image of A wallpaper with a simple graphic of a neural network, against a background of complementary colors.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithASimpleGraphicOfANeuralNetworAc3aa57dEd4f49adAe2bF979aad43b7e0_0_Image(
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

AWallpaperWithASimpleGraphicOfANeuralNetworAc3aa57dEd4f49adAe2bF979aad43b7e0_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithASimpleGraphicOfANeuralNetworAc3aa57dEd4f49adAe2bF979aad43b7e0_0_Image.colorStats = {
    averageColor: Color.fromHex('#3b504e'),
    lightestColor: Color.fromHex('#77bbdd'),
    darkestColor: Color.fromHex('#001100'),
    minmaxWhite: [Color.fromHex('#cccc99'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#ff0000'), Color.fromHex('#66ffcc')],
    minmaxGreen: [Color.fromHex('#449944'), Color.fromHex('#ff0000')],
    minmaxBlue: [Color.fromHex('#114488'), Color.fromHex('#ffbb22')],
    mostFrequentColor: Color.fromHex('#55aa99'),
    mostSaturatedColor: Color.fromHex('#001122'),
    mostGroupedColor: Color.fromHex('#112222'),
    bottom: {
        averageColor: Color.fromHex('#274e52'),
        lightestColor: Color.fromHex('#77aabb'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ddcc88'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#ee1100'), Color.fromHex('#33bbaa')],
        minmaxGreen: [Color.fromHex('#33aa77'), Color.fromHex('#dd0022')],
        minmaxBlue: [Color.fromHex('#114488'), Color.fromHex('#ffbb33')],
        mostFrequentColor: Color.fromHex('#55aa99'),
        mostSaturatedColor: Color.fromHex('#001122'),
        mostGroupedColor: Color.fromHex('#112222'),
    },
} satisfies IImageColorStats;
