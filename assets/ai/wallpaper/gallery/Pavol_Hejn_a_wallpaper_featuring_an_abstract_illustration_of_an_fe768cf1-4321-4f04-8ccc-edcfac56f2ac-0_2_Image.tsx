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
import metadata from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_an_fe768cf1-4321-4f04-8ccc-edcfac56f2ac-0_2.json';
import source from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_an_fe768cf1-4321-4f04-8ccc-edcfac56f2ac-0_2.png';

/**
 * Image of A wallpaper featuring an abstract illustration of an AI-powered search engine, with a minimalist and modern design.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingAnAbstractIllustrationOfAnFe768cf143214f048cccEdcfac56f2ac0_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper featuring an abstract illustration of an AI-powered search engine, with a minimalist and modern design."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperFeaturingAnAbstractIllustrationOfAnFe768cf143214f048cccEdcfac56f2ac0_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingAnAbstractIllustrationOfAnFe768cf143214f048cccEdcfac56f2ac0_2_Image.colorStats = {
    averageColor: Color.fromHex('#868ba6'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#001144'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000044')],
    minmaxRed: [Color.fromHex('#ff6688'), Color.fromHex('#bbffff')],
    minmaxGreen: [Color.fromHex('#44aa99'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#3355aa'), Color.fromHex('#ffffff')],
    mostFrequentColor: Color.fromHex('#cc88cc'),
    mostSaturatedColor: Color.fromHex('#001155'),
    mostGroupedColor: Color.fromHex('#334477'),
    bottom: {
        averageColor: Color.fromHex('#646f95'),
        lightestColor: Color.fromHex('#eeeeff'),
        darkestColor: Color.fromHex('#001144'),
        minmaxWhite: [Color.fromHex('#eeeeff'), Color.fromHex('#000044')],
        minmaxRed: [Color.fromHex('#bb6677'), Color.fromHex('#88eedd')],
        minmaxGreen: [Color.fromHex('#55ccaa'), Color.fromHex('#eeeeff')],
        minmaxBlue: [Color.fromHex('#4455aa'), Color.fromHex('#eeeeee')],
        mostFrequentColor: Color.fromHex('#cc88cc'),
        mostSaturatedColor: Color.fromHex('#001144'),
        mostGroupedColor: Color.fromHex('#334477'),
    },
} satisfies IImageColorStats;
