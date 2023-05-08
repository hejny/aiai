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
import metadata from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_a__a31cea03-0c58-431e-ab57-d4a3eaa6922c-0_3.json';
import source from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_a__a31cea03-0c58-431e-ab57-d4a3eaa6922c-0_3.png';

/**
 * Image of A wallpaper featuring an abstract illustration of a futuristic data visualization, with sleek and modern graphics and a minimalist color scheme.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingAnAbstractIllustrationOfAA31cea030c58431eAb57D4a3eaa6922c0_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper featuring an abstract illustration of a futuristic data visualization, with sleek and modern graphics and a minimalist color scheme."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperFeaturingAnAbstractIllustrationOfAA31cea030c58431eAb57D4a3eaa6922c0_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingAnAbstractIllustrationOfAA31cea030c58431eAb57D4a3eaa6922c0_3_Image.colorStats = {
    averageColor: Color.fromHex('#0e1a25'),
    lightestColor: Color.fromHex('#33eeff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ccaaaa'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#dd3333'), Color.fromHex('#00ffff')],
    minmaxGreen: [Color.fromHex('#11eeaa'), Color.fromHex('#dd3333')],
    minmaxBlue: [Color.fromHex('#006688'), Color.fromHex('#ff7766')],
    mostFrequentColor: Color.fromHex('#112233'),
    mostSaturatedColor: Color.fromHex('#000011'),
    mostGroupedColor: Color.fromHex('#001111'),
    bottom: {
        averageColor: Color.fromHex('#0c1520'),
        lightestColor: Color.fromHex('#22ddee'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#bb99aa'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#bb3344'), Color.fromHex('#11dddd')],
        minmaxGreen: [Color.fromHex('#11bbaa'), Color.fromHex('#550011')],
        minmaxBlue: [Color.fromHex('#005577'), Color.fromHex('#ee6655')],
        mostFrequentColor: Color.fromHex('#112233'),
        mostSaturatedColor: Color.fromHex('#000011'),
        mostGroupedColor: Color.fromHex('#000011'),
    },
} satisfies IImageColorStats;
