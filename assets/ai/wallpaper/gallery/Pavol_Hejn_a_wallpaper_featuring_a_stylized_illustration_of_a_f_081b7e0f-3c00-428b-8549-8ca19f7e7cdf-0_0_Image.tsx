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
import metadata from './Pavol_Hejn_a_wallpaper_featuring_a_stylized_illustration_of_a_f_081b7e0f-3c00-428b-8549-8ca19f7e7cdf-0_0.json';
import source from './Pavol_Hejn_a_wallpaper_featuring_a_stylized_illustration_of_a_f_081b7e0f-3c00-428b-8549-8ca19f7e7cdf-0_0.png';

/**
 * Image of A wallpaper featuring a stylized illustration of a futuristic workspace, with a minimalist and modern design.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingAStylizedIllustrationOfAF81b7e0f3c00428b85498ca19f7e7cdf00_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper featuring a stylized illustration of a futuristic workspace, with a minimalist and modern design."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperFeaturingAStylizedIllustrationOfAF81b7e0f3c00428b85498ca19f7e7cdf00_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingAStylizedIllustrationOfAF81b7e0f3c00428b85498ca19f7e7cdf00_0_Image.colorStats = {
    averageColor: Color.fromHex('#484d57'),
    lightestColor: Color.fromHex('#ffeeff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffeeff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#774433'), Color.fromHex('#ffeeff')],
    minmaxGreen: [Color.fromHex('#667777'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#445566'), Color.fromHex('#ffeeee')],
    mostFrequentColor: Color.fromHex('#888899'),
    mostSaturatedColor: Color.fromHex('#001111'),
    mostGroupedColor: Color.fromHex('#112222'),
    bottom: {
        averageColor: Color.fromHex('#40444e'),
        lightestColor: Color.fromHex('#eeeeff'),
        darkestColor: Color.fromHex('#001111'),
        minmaxWhite: [Color.fromHex('#ffeeee'), Color.fromHex('#000011')],
        minmaxRed: [Color.fromHex('#aa6644'), Color.fromHex('#eeeeff')],
        minmaxGreen: [Color.fromHex('#667777'), Color.fromHex('#eeeeff')],
        minmaxBlue: [Color.fromHex('#445566'), Color.fromHex('#ffeeee')],
        mostFrequentColor: Color.fromHex('#888899'),
        mostSaturatedColor: Color.fromHex('#001111'),
        mostGroupedColor: Color.fromHex('#111111'),
    },
} satisfies IImageColorStats;
