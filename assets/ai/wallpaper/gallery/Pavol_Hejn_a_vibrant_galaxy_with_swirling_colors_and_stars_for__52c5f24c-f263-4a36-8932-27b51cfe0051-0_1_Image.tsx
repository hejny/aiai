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
import metadata from './Pavol_Hejn_a_vibrant_galaxy_with_swirling_colors_and_stars_for__52c5f24c-f263-4a36-8932-27b51cfe0051-0_1.json';
import source from './Pavol_Hejn_a_vibrant_galaxy_with_swirling_colors_and_stars_for__52c5f24c-f263-4a36-8932-27b51cfe0051-0_1.png';

/**
 * Image of A vibrant galaxy with swirling colors and stars for a science or astronomy blog
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AVibrantGalaxyWithSwirlingColorsAndStarsFor52c5f24cF2634a36893227b51cfe00510_1_Image(
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

AVibrantGalaxyWithSwirlingColorsAndStarsFor52c5f24cF2634a36893227b51cfe00510_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AVibrantGalaxyWithSwirlingColorsAndStarsFor52c5f24cF2634a36893227b51cfe00510_1_Image.colorStats = {
    averageColor: Color.fromHex('#6e555f'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#cc2211'), Color.fromHex('#44eeff')],
    minmaxGreen: [Color.fromHex('#77aa66'), Color.fromHex('#ee3366')],
    minmaxBlue: [Color.fromHex('#114499'), Color.fromHex('#ffff99')],
    mostFrequentColor: Color.fromHex('#222244'),
    mostSaturatedColor: Color.fromHex('#000011'),
    mostGroupedColor: Color.fromHex('#001133'),
    bottom: {
        averageColor: Color.fromHex('#61546e'),
        lightestColor: Color.fromHex('#ffeeff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#aa2211'), Color.fromHex('#44eeff')],
        minmaxGreen: [Color.fromHex('#66aa77'), Color.fromHex('#ffddff')],
        minmaxBlue: [Color.fromHex('#114499'), Color.fromHex('#ffee88')],
        mostFrequentColor: Color.fromHex('#222244'),
        mostSaturatedColor: Color.fromHex('#003355'),
        mostGroupedColor: Color.fromHex('#001133'),
    },
} satisfies IImageColorStats;
