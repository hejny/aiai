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
import metadata from './Pavol_Hejn_a_vibrant_galaxy_with_swirling_colors_and_stars_for__6ccfbcf9-5e1a-43b3-8290-6f0940fef2ad-0_1.json';
import source from './Pavol_Hejn_a_vibrant_galaxy_with_swirling_colors_and_stars_for__6ccfbcf9-5e1a-43b3-8290-6f0940fef2ad-0_1.png';

/**
 * Image of A vibrant galaxy with swirling colors and stars for a science or astronomy blog
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AVibrantGalaxyWithSwirlingColorsAndStarsFor6ccfbcf95e1a43b382906f0940fef2ad0_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A vibrant galaxy with swirling colors and stars for a science or astronomy blog"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AVibrantGalaxyWithSwirlingColorsAndStarsFor6ccfbcf95e1a43b382906f0940fef2ad0_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AVibrantGalaxyWithSwirlingColorsAndStarsFor6ccfbcf95e1a43b382906f0940fef2ad0_1_Image.colorStats = {
    averageColor: Color.fromHex('#614a5c'),
    lightestColor: Color.fromHex('#ffeeff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#bb2211'), Color.fromHex('#ddffff')],
    minmaxGreen: [Color.fromHex('#449977'), Color.fromHex('#ffbbff')],
    minmaxBlue: [Color.fromHex('#114499'), Color.fromHex('#ffffaa')],
    mostFrequentColor: Color.fromHex('#000000'),
    mostSaturatedColor: Color.fromHex('#000011'),
    mostGroupedColor: Color.fromHex('#111122'),
    bottom: {
        averageColor: Color.fromHex('#5c4d68'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#bb3311'), Color.fromHex('#ddffff')],
        minmaxGreen: [Color.fromHex('#66aa88'), Color.fromHex('#ffddff')],
        minmaxBlue: [Color.fromHex('#114499'), Color.fromHex('#ffee77')],
        mostFrequentColor: Color.fromHex('#000000'),
        mostSaturatedColor: Color.fromHex('#220011'),
        mostGroupedColor: Color.fromHex('#111122'),
    },
} satisfies IImageColorStats;
