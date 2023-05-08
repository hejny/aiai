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
import metadata from './Pavol_Hejn_a_digital_image_of_a_black_hole_with_the_distorted_s_2d21057a-a0a6-4586-b0ac-6431ee6d685b-0_1.json';
import source from './Pavol_Hejn_a_digital_image_of_a_black_hole_with_the_distorted_s_2d21057a-a0a6-4586-b0ac-6431ee6d685b-0_1.png';

/**
 * Image of A digital image of a black hole, with the distorted shapes and bright colors representing the extreme gravity.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function ADigitalImageOfABlackHoleWithTheDistortedS2d21057aA0a64586B0ac6431ee6d685b0_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A digital image of a black hole, with the distorted shapes and bright colors representing the extreme gravity."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ADigitalImageOfABlackHoleWithTheDistortedS2d21057aA0a64586B0ac6431ee6d685b0_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ADigitalImageOfABlackHoleWithTheDistortedS2d21057aA0a64586B0ac6431ee6d685b0_1_Image.colorStats = {
    averageColor: Color.fromHex('#361e19'),
    lightestColor: Color.fromHex('#ddeedd'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ddeedd'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#ee2222'), Color.fromHex('#44ccdd')],
    minmaxGreen: [Color.fromHex('#669955'), Color.fromHex('#bb1188')],
    minmaxBlue: [Color.fromHex('#115588'), Color.fromHex('#ffee55')],
    mostFrequentColor: Color.fromHex('#000000'),
    mostSaturatedColor: Color.fromHex('#110000'),
    mostGroupedColor: Color.fromHex('#000000'),
    bottom: {
        averageColor: Color.fromHex('#381612'),
        lightestColor: Color.fromHex('#aa99bb'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#bb99aa'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#ee2222'), Color.fromHex('#aa99bb')],
        minmaxGreen: [Color.fromHex('#557777'), Color.fromHex('#ee2233')],
        minmaxBlue: [Color.fromHex('#443377'), Color.fromHex('#ffcc33')],
        mostFrequentColor: Color.fromHex('#000000'),
        mostSaturatedColor: Color.fromHex('#000011'),
        mostGroupedColor: Color.fromHex('#000000'),
    },
} satisfies IImageColorStats;
