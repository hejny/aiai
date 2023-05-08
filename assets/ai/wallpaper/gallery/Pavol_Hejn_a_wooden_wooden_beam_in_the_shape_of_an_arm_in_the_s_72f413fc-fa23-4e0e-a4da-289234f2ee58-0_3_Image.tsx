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
import metadata from './Pavol_Hejn_a_wooden_wooden_beam_in_the_shape_of_an_arm_in_the_s_72f413fc-fa23-4e0e-a4da-289234f2ee58-0_3.json';
import source from './Pavol_Hejn_a_wooden_wooden_beam_in_the_shape_of_an_arm_in_the_s_72f413fc-fa23-4e0e-a4da-289234f2ee58-0_3.png';

/**
 * Image of a wooden wooden beam in the shape of an arm, in the style of outdoor art, light green and amber, 20th century scandinavian style, contemporary diy, wide angle lens, recycled, stone
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AWoodenWoodenBeamInTheShapeOfAnArmInTheS72f413fcFa234e0eA4da289234f2ee580_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="a wooden wooden beam in the shape of an arm, in the style of outdoor art, light green and amber, 20th century scandinavian style, contemporary diy, wide angle lens, recycled, stone"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWoodenWoodenBeamInTheShapeOfAnArmInTheS72f413fcFa234e0eA4da289234f2ee580_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWoodenWoodenBeamInTheShapeOfAnArmInTheS72f413fcFa234e0eA4da289234f2ee580_3_Image.colorStats = {
    averageColor: Color.fromHex('#8a8475'),
    lightestColor: Color.fromHex('#eeeeff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#eeeeff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#bb5511'), Color.fromHex('#ddeeff')],
    minmaxGreen: [Color.fromHex('#778844'), Color.fromHex('#eeeeff')],
    minmaxBlue: [Color.fromHex('#445566'), Color.fromHex('#ffeecc')],
    mostFrequentColor: Color.fromHex('#665555'),
    mostSaturatedColor: Color.fromHex('#000011'),
    mostGroupedColor: Color.fromHex('#bbccdd'),
    bottom: {
        averageColor: Color.fromHex('#827262'),
        lightestColor: Color.fromHex('#ddcccc'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ddddcc'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#bb5500'), Color.fromHex('#ddddcc')],
        minmaxGreen: [Color.fromHex('#778866'), Color.fromHex('#000011')],
        minmaxBlue: [Color.fromHex('#555566'), Color.fromHex('#ee8800')],
        mostFrequentColor: Color.fromHex('#665555'),
        mostSaturatedColor: Color.fromHex('#000011'),
        mostGroupedColor: Color.fromHex('#888888'),
    },
} satisfies IImageColorStats;
