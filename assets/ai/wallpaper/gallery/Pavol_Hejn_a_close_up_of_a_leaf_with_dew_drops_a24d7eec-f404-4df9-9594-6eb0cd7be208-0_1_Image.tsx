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
import metadata from './Pavol_Hejn_a_close_up_of_a_leaf_with_dew_drops_a24d7eec-f404-4df9-9594-6eb0cd7be208-0_1.json';
import source from './Pavol_Hejn_a_close_up_of_a_leaf_with_dew_drops_a24d7eec-f404-4df9-9594-6eb0cd7be208-0_1.png';

/**
 * Image of A close-up of a leaf with dew drops
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function ACloseUpOfALeafWithDewDropsA24d7eecF4044df995946eb0cd7be2080_1_Image(props: IWallpaperComponentProps) {
    const { width, quality } = props;

    return (
        <Image
            alt="A close-up of a leaf with dew drops"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ACloseUpOfALeafWithDewDropsA24d7eecF4044df995946eb0cd7be2080_1_Image.metadata = metadata satisfies IWallpaperMetadata;
ACloseUpOfALeafWithDewDropsA24d7eecF4044df995946eb0cd7be2080_1_Image.colorStats = {
    averageColor: Color.fromHex('#24442f'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#002200'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#884422'), Color.fromHex('#ccffff')],
    minmaxGreen: [Color.fromHex('#33aa00'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#115599'), Color.fromHex('#ffffdd')],
    mostFrequentColor: Color.fromHex('#000000'),
    mostSaturatedColor: Color.fromHex('#112200'),
    mostGroupedColor: Color.fromHex('#000000'),
    bottom: {
        averageColor: Color.fromHex('#13271c'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#002200'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#996622'), Color.fromHex('#ccffff')],
        minmaxGreen: [Color.fromHex('#669933'), Color.fromHex('#ffeeff')],
        minmaxBlue: [Color.fromHex('#005588'), Color.fromHex('#ffffee')],
        mostFrequentColor: Color.fromHex('#000000'),
        mostSaturatedColor: Color.fromHex('#006688'),
        mostGroupedColor: Color.fromHex('#000000'),
    },
} satisfies IImageColorStats;
