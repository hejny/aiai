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
import metadata from './Pavol_Hejn_a_wallpaper_featuring_a_stylized_illustration_of_a_f_081b7e0f-3c00-428b-8549-8ca19f7e7cdf-0_1.json';
import source from './Pavol_Hejn_a_wallpaper_featuring_a_stylized_illustration_of_a_f_081b7e0f-3c00-428b-8549-8ca19f7e7cdf-0_1.png';

/**
 * Image of A wallpaper featuring a stylized illustration of a futuristic workspace, with a minimalist and modern design.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingAStylizedIllustrationOfAF081b7e0f3c00428b85498ca19f7e7cdf0_1_Image(
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

AWallpaperFeaturingAStylizedIllustrationOfAF081b7e0f3c00428b85498ca19f7e7cdf0_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingAStylizedIllustrationOfAF081b7e0f3c00428b85498ca19f7e7cdf0_1_Image.colorStats = {
    averageColor: Color.fromHex('#28435a'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#444444'), Color.fromHex('#bbffff')],
    minmaxGreen: [Color.fromHex('#449999'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#113377'), Color.fromHex('#ffffdd')],
    mostFrequentColor: Color.fromHex('#001133'),
    mostSaturatedColor: Color.fromHex('#001133'),
    mostGroupedColor: Color.fromHex('#112233'),
    bottom: {
        averageColor: Color.fromHex('#233c53'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#444444'), Color.fromHex('#ccffff')],
        minmaxGreen: [Color.fromHex('#559999'), Color.fromHex('#ffeeff')],
        minmaxBlue: [Color.fromHex('#115588'), Color.fromHex('#ffffee')],
        mostFrequentColor: Color.fromHex('#001133'),
        mostSaturatedColor: Color.fromHex('#001133'),
        mostGroupedColor: Color.fromHex('#112233'),
    },
} satisfies IImageColorStats;
