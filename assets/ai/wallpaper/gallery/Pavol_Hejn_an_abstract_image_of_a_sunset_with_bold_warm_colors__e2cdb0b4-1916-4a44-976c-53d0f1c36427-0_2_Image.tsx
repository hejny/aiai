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
import metadata from './Pavol_Hejn_an_abstract_image_of_a_sunset_with_bold_warm_colors__e2cdb0b4-1916-4a44-976c-53d0f1c36427-0_2.json';
import source from './Pavol_Hejn_an_abstract_image_of_a_sunset_with_bold_warm_colors__e2cdb0b4-1916-4a44-976c-53d0f1c36427-0_2.png';

/**
 * Image of An abstract image of a sunset with bold, warm colors for a photography or travel website
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AnAbstractImageOfASunsetWithBoldWarmColorsE2cdb0b419164a44976c53d0f1c364270_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An abstract image of a sunset with bold, warm colors for a photography or travel website"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnAbstractImageOfASunsetWithBoldWarmColorsE2cdb0b419164a44976c53d0f1c364270_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractImageOfASunsetWithBoldWarmColorsE2cdb0b419164a44976c53d0f1c364270_2_Image.colorStats = {
    averageColor: Color.fromHex('#98613c'),
    lightestColor: Color.fromHex('#ffbb77'),
    darkestColor: Color.fromHex('#441100'),
    minmaxWhite: [Color.fromHex('#ffbb77'), Color.fromHex('#221111')],
    minmaxRed: [Color.fromHex('#dd2222'), Color.fromHex('#005566')],
    minmaxGreen: [Color.fromHex('#338866'), Color.fromHex('#ff3322')],
    minmaxBlue: [Color.fromHex('#114466'), Color.fromHex('#ffcc33')],
    mostFrequentColor: Color.fromHex('#003344'),
    mostSaturatedColor: Color.fromHex('#003344'),
    mostGroupedColor: Color.fromHex('#003344'),
    bottom: {
        averageColor: Color.fromHex('#2b4a48'),
        lightestColor: Color.fromHex('#dd9966'),
        darkestColor: Color.fromHex('#551100'),
        minmaxWhite: [Color.fromHex('#dd9966'), Color.fromHex('#002233')],
        minmaxRed: [Color.fromHex('#cc4411'), Color.fromHex('#005566')],
        minmaxGreen: [Color.fromHex('#338866'), Color.fromHex('#992222')],
        minmaxBlue: [Color.fromHex('#114466'), Color.fromHex('#ff9922')],
        mostFrequentColor: Color.fromHex('#003344'),
        mostSaturatedColor: Color.fromHex('#003344'),
        mostGroupedColor: Color.fromHex('#003344'),
    },
} satisfies IImageColorStats;
