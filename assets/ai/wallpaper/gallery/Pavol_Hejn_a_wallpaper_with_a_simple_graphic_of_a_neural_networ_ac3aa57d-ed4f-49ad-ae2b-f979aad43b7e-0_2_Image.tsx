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
import metadata from './Pavol_Hejn_a_wallpaper_with_a_simple_graphic_of_a_neural_networ_ac3aa57d-ed4f-49ad-ae2b-f979aad43b7e-0_2.json';
import source from './Pavol_Hejn_a_wallpaper_with_a_simple_graphic_of_a_neural_networ_ac3aa57d-ed4f-49ad-ae2b-f979aad43b7e-0_2.png';

/**
 * Image of A wallpaper with a simple graphic of a neural network, against a background of complementary colors.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithASimpleGraphicOfANeuralNetworAc3aa57dEd4f49adAe2bF979aad43b7e0_2_Image(
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

AWallpaperWithASimpleGraphicOfANeuralNetworAc3aa57dEd4f49adAe2bF979aad43b7e0_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithASimpleGraphicOfANeuralNetworAc3aa57dEd4f49adAe2bF979aad43b7e0_2_Image.colorStats = {
    averageColor: Color.fromHex('#2b171e'),
    lightestColor: Color.fromHex('#227799'),
    darkestColor: Color.fromHex('#110000'),
    minmaxWhite: [Color.fromHex('#ccaa55'), Color.fromHex('#000011')],
    minmaxRed: [Color.fromHex('#cc2211'), Color.fromHex('#116699')],
    minmaxGreen: [Color.fromHex('#336655'), Color.fromHex('#ee3333')],
    minmaxBlue: [Color.fromHex('#116699'), Color.fromHex('#ddbb33')],
    mostFrequentColor: Color.fromHex('#113344'),
    mostSaturatedColor: Color.fromHex('#440011'),
    mostGroupedColor: Color.fromHex('#111122'),
    bottom: {
        averageColor: Color.fromHex('#181c28'),
        lightestColor: Color.fromHex('#226699'),
        darkestColor: Color.fromHex('#220000'),
        minmaxWhite: [Color.fromHex('#ddbb33'), Color.fromHex('#000011')],
        minmaxRed: [Color.fromHex('#dd4422'), Color.fromHex('#116699')],
        minmaxGreen: [Color.fromHex('#aa9933'), Color.fromHex('#440011')],
        minmaxBlue: [Color.fromHex('#116699'), Color.fromHex('#ddbb33')],
        mostFrequentColor: Color.fromHex('#113344'),
        mostSaturatedColor: Color.fromHex('#330011'),
        mostGroupedColor: Color.fromHex('#111122'),
    },
} satisfies IImageColorStats;
