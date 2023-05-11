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
import metadata from './Pavol_Hejn_an_abstract_watercolor_painting_with_vibrant_colors__10af7cc7-8b64-455f-ab5c-2f8e04e9a6a3-0_0.json';
import source from './Pavol_Hejn_an_abstract_watercolor_painting_with_vibrant_colors__10af7cc7-8b64-455f-ab5c-2f8e04e9a6a3-0_0.png';

/**
 * Image of An abstract watercolor painting with vibrant colors for an art or design blog
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AnAbstractWatercolorPaintingWithVibrantColors10af7cc78b64455fAb5c2f8e04e9a6a30_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An abstract watercolor painting with vibrant colors for an art or design blog"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnAbstractWatercolorPaintingWithVibrantColors10af7cc78b64455fAb5c2f8e04e9a6a30_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractWatercolorPaintingWithVibrantColors10af7cc78b64455fAb5c2f8e04e9a6a30_0_Image.colorStats = {
    averageColor: Color.fromHex('#b8b8a2'),
    lightestColor: Color.fromHex('#eeeeff'),
    darkestColor: Color.fromHex('#775500'),
    minmaxWhite: [Color.fromHex('#eeffff'), Color.fromHex('#aa0011')],
    minmaxRed: [Color.fromHex('#dd1100'), Color.fromHex('#ccffff')],
    minmaxGreen: [Color.fromHex('#66aa33'), Color.fromHex('#dd1111')],
    minmaxBlue: [Color.fromHex('#445599'), Color.fromHex('#ffcc33')],
    mostFrequentColor: Color.fromHex('#bbcccc'),
    mostSaturatedColor: Color.fromHex('#775500'),
    mostGroupedColor: Color.fromHex('#eeccaa'),
    bottom: {
        averageColor: Color.fromHex('#c0c4a5'),
        lightestColor: Color.fromHex('#ddddee'),
        darkestColor: Color.fromHex('#775500'),
        minmaxWhite: [Color.fromHex('#ffeedd'), Color.fromHex('#cc1100')],
        minmaxRed: [Color.fromHex('#dd1100'), Color.fromHex('#bbeeee')],
        minmaxGreen: [Color.fromHex('#55aa77'), Color.fromHex('#dd1111')],
        minmaxBlue: [Color.fromHex('#2277aa'), Color.fromHex('#ffcc33')],
        mostFrequentColor: Color.fromHex('#bbcccc'),
        mostSaturatedColor: Color.fromHex('#775500'),
        mostGroupedColor: Color.fromHex('#eeccaa'),
    },
} satisfies IImageColorStats;
