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
import metadata from './Pavol_Hejn_a_wallpaper_with_a_simple_illustration_of_a_virtual__2ba7c406-5a5f-4a5d-ad46-c8945d2c3c98-0_0.json';
import source from './Pavol_Hejn_a_wallpaper_with_a_simple_illustration_of_a_virtual__2ba7c406-5a5f-4a5d-ad46-c8945d2c3c98-0_0.png';

/**
 * Image of A wallpaper with a simple illustration of a virtual reality headset, against a gradient background of two contrasting colors.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithASimpleIllustrationOfAVirtual2ba7c4065a5f4a5dAd46C8945d2c3c980_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a simple illustration of a virtual reality headset, against a gradient background of two contrasting colors."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperWithASimpleIllustrationOfAVirtual2ba7c4065a5f4a5dAd46C8945d2c3c980_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithASimpleIllustrationOfAVirtual2ba7c4065a5f4a5dAd46C8945d2c3c980_0_Image.colorStats = {
    averageColor: Color.fromHex('#560e4b'),
    lightestColor: Color.fromHex('#eeffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#eeffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#dd2222'), Color.fromHex('#eeffff')],
    minmaxGreen: [Color.fromHex('#666666'), Color.fromHex('#ee00cc')],
    minmaxBlue: [Color.fromHex('#8822bb'), Color.fromHex('#eeffff')],
    mostFrequentColor: Color.fromHex('#770066'),
    mostSaturatedColor: Color.fromHex('#001122'),
    mostGroupedColor: Color.fromHex('#002244'),
    bottom: {
        averageColor: Color.fromHex('#32094b'),
        lightestColor: Color.fromHex('#ccddee'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ccddee'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#882233'), Color.fromHex('#aaddee')],
        minmaxGreen: [Color.fromHex('#446688'), Color.fromHex('#aa00cc')],
        minmaxBlue: [Color.fromHex('#770099'), Color.fromHex('#ccddee')],
        mostFrequentColor: Color.fromHex('#770066'),
        mostSaturatedColor: Color.fromHex('#002244'),
        mostGroupedColor: Color.fromHex('#002244'),
    },
} satisfies IImageColorStats;
