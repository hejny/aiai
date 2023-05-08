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
import metadata from './Pavol_Hejn_a_wallpaper_featuring_a_stylized_illustration_of_a_f_3f51309c-b1e0-4c52-9b2b-fb3e2eaf87ce-0_2.json';
import source from './Pavol_Hejn_a_wallpaper_featuring_a_stylized_illustration_of_a_f_3f51309c-b1e0-4c52-9b2b-fb3e2eaf87ce-0_2.png';

/**
 * Image of A wallpaper featuring a stylized illustration of a futuristic workspace, with a minimalist and modern design, set against a gradient background.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingAStylizedIllustrationOfAF3f51309cB1e04c529b2bFb3e2eaf87ce0_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper featuring a stylized illustration of a futuristic workspace, with a minimalist and modern design, set against a gradient background."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperFeaturingAStylizedIllustrationOfAF3f51309cB1e04c529b2bFb3e2eaf87ce0_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingAStylizedIllustrationOfAF3f51309cB1e04c529b2bFb3e2eaf87ce0_2_Image.colorStats = {
    averageColor: Color.fromHex('#b66770'),
    lightestColor: Color.fromHex('#ffaadd'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffeedd'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#cc3344'), Color.fromHex('#ffeedd')],
    minmaxGreen: [Color.fromHex('#778888'), Color.fromHex('#ee44aa')],
    minmaxBlue: [Color.fromHex('#554499'), Color.fromHex('#ffeedd')],
    mostFrequentColor: Color.fromHex('#ff8866'),
    mostSaturatedColor: Color.fromHex('#110022'),
    mostGroupedColor: Color.fromHex('#ff9966'),
    bottom: {
        averageColor: Color.fromHex('#843a55'),
        lightestColor: Color.fromHex('#ffdddd'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffdddd'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#cc3344'), Color.fromHex('#ffdddd')],
        minmaxGreen: [Color.fromHex('#886655'), Color.fromHex('#ff5599')],
        minmaxBlue: [Color.fromHex('#554499'), Color.fromHex('#ffddaa')],
        mostFrequentColor: Color.fromHex('#ff8866'),
        mostSaturatedColor: Color.fromHex('#110022'),
        mostGroupedColor: Color.fromHex('#331133'),
    },
} satisfies IImageColorStats;
