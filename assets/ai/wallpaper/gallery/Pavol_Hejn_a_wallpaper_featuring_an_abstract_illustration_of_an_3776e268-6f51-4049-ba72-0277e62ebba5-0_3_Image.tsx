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
import metadata from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_an_3776e268-6f51-4049-ba72-0277e62ebba5-0_3.json';
import source from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_an_3776e268-6f51-4049-ba72-0277e62ebba5-0_3.png';

/**
 * Image of A wallpaper featuring an abstract illustration of an AI-powered search engine, with a minimalist and modern design, set against a gradient background.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingAnAbstractIllustrationOfAn776e2686f514049Ba720277e62ebba503_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper featuring an abstract illustration of an AI-powered search engine, with a minimalist and modern design, set against a gradient background."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperFeaturingAnAbstractIllustrationOfAn776e2686f514049Ba720277e62ebba503_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingAnAbstractIllustrationOfAn776e2686f514049Ba720277e62ebba503_3_Image.colorStats = {
    averageColor: Color.fromHex('#9d9081'),
    lightestColor: Color.fromHex('#ffeeff'),
    darkestColor: Color.fromHex('#111111'),
    minmaxWhite: [Color.fromHex('#eeffff'), Color.fromHex('#001122')],
    minmaxRed: [Color.fromHex('#ee3366'), Color.fromHex('#eeffff')],
    minmaxGreen: [Color.fromHex('#33bb44'), Color.fromHex('#ff55aa')],
    minmaxBlue: [Color.fromHex('#332277'), Color.fromHex('#ffffbb')],
    mostFrequentColor: Color.fromHex('#ee8899'),
    mostSaturatedColor: Color.fromHex('#002255'),
    mostGroupedColor: Color.fromHex('#ff7777'),
    bottom: {
        averageColor: Color.fromHex('#5c6d65'),
        lightestColor: Color.fromHex('#eeeeee'),
        darkestColor: Color.fromHex('#332211'),
        minmaxWhite: [Color.fromHex('#ffffdd'), Color.fromHex('#001122')],
        minmaxRed: [Color.fromHex('#bb4422'), Color.fromHex('#ffffdd')],
        minmaxGreen: [Color.fromHex('#44bb44'), Color.fromHex('#ff4477')],
        minmaxBlue: [Color.fromHex('#332277'), Color.fromHex('#ffffbb')],
        mostFrequentColor: Color.fromHex('#ee8899'),
        mostSaturatedColor: Color.fromHex('#002255'),
        mostGroupedColor: Color.fromHex('#002233'),
    },
} satisfies IImageColorStats;
