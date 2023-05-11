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
import metadata from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_a__d27e0ff0-82d5-4e93-8546-170034318d62-0_2.json';
import source from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_a__d27e0ff0-82d5-4e93-8546-170034318d62-0_2.png';

/**
 * Image of A wallpaper featuring an abstract illustration of a futuristic data center, with sleek and modern graphics and a minimalist color scheme.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingAnAbstractIllustrationOfAD27e0ff082d54e938546170034318d620_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper featuring an abstract illustration of a futuristic data center, with sleek and modern graphics and a minimalist color scheme."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperFeaturingAnAbstractIllustrationOfAD27e0ff082d54e938546170034318d620_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingAnAbstractIllustrationOfAD27e0ff082d54e938546170034318d620_2_Image.colorStats = {
    averageColor: Color.fromHex('#306063'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#aa4422'), Color.fromHex('#77ffee')],
    minmaxGreen: [Color.fromHex('#22bb77'), Color.fromHex('#ffffff')],
    minmaxBlue: [Color.fromHex('#116688'), Color.fromHex('#ffffee')],
    mostFrequentColor: Color.fromHex('#113333'),
    mostSaturatedColor: Color.fromHex('#001111'),
    mostGroupedColor: Color.fromHex('#001111'),
    bottom: {
        averageColor: Color.fromHex('#285b62'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#aa5566'), Color.fromHex('#33eebb')],
        minmaxGreen: [Color.fromHex('#11aa77'), Color.fromHex('#ffffff')],
        minmaxBlue: [Color.fromHex('#116688'), Color.fromHex('#ffffee')],
        mostFrequentColor: Color.fromHex('#113333'),
        mostSaturatedColor: Color.fromHex('#001122'),
        mostGroupedColor: Color.fromHex('#113344'),
    },
} satisfies IImageColorStats;
