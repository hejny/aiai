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
import metadata from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_a__9bfc2616-881f-4842-875a-81b7cd8f7035-0_0.json';
import source from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_a__9bfc2616-881f-4842-875a-81b7cd8f7035-0_0.png';

/**
 * Image of A wallpaper featuring an abstract illustration of a futuristic cityscape, with glowing lights and a dark and moody color scheme, set against a gradient background.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingAnAbstractIllustrationOfA9bfc2616881f4842875a81b7cd8f70350_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper featuring an abstract illustration of a futuristic cityscape, with glowing lights and a dark and moody color scheme, set against a gradient background."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperFeaturingAnAbstractIllustrationOfA9bfc2616881f4842875a81b7cd8f70350_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingAnAbstractIllustrationOfA9bfc2616881f4842875a81b7cd8f70350_0_Image.colorStats = {
    averageColor: Color.fromHex('#31293a'),
    lightestColor: Color.fromHex('#ddeeee'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ddeeee'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#cc3333'), Color.fromHex('#44ffdd')],
    minmaxGreen: [Color.fromHex('#33cc99'), Color.fromHex('#ff5555')],
    minmaxBlue: [Color.fromHex('#004488'), Color.fromHex('#ffeebb')],
    mostFrequentColor: Color.fromHex('#000011'),
    mostSaturatedColor: Color.fromHex('#000022'),
    mostGroupedColor: Color.fromHex('#001122'),
    bottom: {
        averageColor: Color.fromHex('#1d1e32'),
        lightestColor: Color.fromHex('#ddeeee'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ddeeee'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#bb4455'), Color.fromHex('#44eebb')],
        minmaxGreen: [Color.fromHex('#44eeaa'), Color.fromHex('#dd4477')],
        minmaxBlue: [Color.fromHex('#224477'), Color.fromHex('#eedd77')],
        mostFrequentColor: Color.fromHex('#000011'),
        mostSaturatedColor: Color.fromHex('#001122'),
        mostGroupedColor: Color.fromHex('#001122'),
    },
} satisfies IImageColorStats;
