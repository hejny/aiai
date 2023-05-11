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
import metadata from './Pavol_Hejn_a_digital_image_of_a_black_hole_with_the_distorted_s_c6ec64aa-c043-4909-8d9a-bd9b4f7f0e4b-0_0.json';
import source from './Pavol_Hejn_a_digital_image_of_a_black_hole_with_the_distorted_s_c6ec64aa-c043-4909-8d9a-bd9b4f7f0e4b-0_0.png';

/**
 * Image of A digital image of a black hole, with the distorted shapes and bright colors representing the extreme gravity.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function ADigitalImageOfABlackHoleWithTheDistortedSC6ec64aaC04349098d9aBd9b4f7f0e4b0_0_Image(
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

ADigitalImageOfABlackHoleWithTheDistortedSC6ec64aaC04349098d9aBd9b4f7f0e4b0_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ADigitalImageOfABlackHoleWithTheDistortedSC6ec64aaC04349098d9aBd9b4f7f0e4b0_0_Image.colorStats = {
    averageColor: Color.fromHex('#231b24'),
    lightestColor: Color.fromHex('#dd77ff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffeebb'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#dd1133'), Color.fromHex('#44eeee')],
    minmaxGreen: [Color.fromHex('#22bb99'), Color.fromHex('#bb11cc')],
    minmaxBlue: [Color.fromHex('#3333aa'), Color.fromHex('#ffee66')],
    mostFrequentColor: Color.fromHex('#000000'),
    mostSaturatedColor: Color.fromHex('#000011'),
    mostGroupedColor: Color.fromHex('#000000'),
    bottom: {
        averageColor: Color.fromHex('#282130'),
        lightestColor: Color.fromHex('#ee77ee'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffeebb'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#bb2200'), Color.fromHex('#44eeee')],
        minmaxGreen: [Color.fromHex('#889977'), Color.fromHex('#bb11cc')],
        minmaxBlue: [Color.fromHex('#2255bb'), Color.fromHex('#ffee88')],
        mostFrequentColor: Color.fromHex('#000000'),
        mostSaturatedColor: Color.fromHex('#000011'),
        mostGroupedColor: Color.fromHex('#000000'),
    },
} satisfies IImageColorStats;
