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
import metadata from './Pavol_Hejn_a_wallpaper_with_a_simple_illustration_of_an_abstrac_6477e95d-32ff-43e5-bc23-08d7a2e1c45a-0_3.json';
import source from './Pavol_Hejn_a_wallpaper_with_a_simple_illustration_of_an_abstrac_6477e95d-32ff-43e5-bc23-08d7a2e1c45a-0_3.png';

/**
 * Image of A wallpaper with a simple illustration of an abstract network, in a minimal color palette of black and white.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithASimpleIllustrationOfAnAbstrac6477e95d32ff43e5Bc2308d7a2e1c45a0_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a simple illustration of an abstract network, in a minimal color palette of black and white."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperWithASimpleIllustrationOfAnAbstrac6477e95d32ff43e5Bc2308d7a2e1c45a0_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithASimpleIllustrationOfAnAbstrac6477e95d32ff43e5Bc2308d7a2e1c45a0_3_Image.colorStats = {
    averageColor: Color.fromHex('#cccecf'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#554444'), Color.fromHex('#eeffff')],
    minmaxGreen: [Color.fromHex('#667766'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#555566'), Color.fromHex('#ffffee')],
    mostFrequentColor: Color.fromHex('#dddddd'),
    mostSaturatedColor: Color.fromHex('#110000'),
    mostGroupedColor: Color.fromHex('#ffffff'),
    bottom: {
        averageColor: Color.fromHex('#b3b6b8'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#554455'), Color.fromHex('#eeffff')],
        minmaxGreen: [Color.fromHex('#667766'), Color.fromHex('#ffffff')],
        minmaxBlue: [Color.fromHex('#555566'), Color.fromHex('#ffffff')],
        mostFrequentColor: Color.fromHex('#dddddd'),
        mostSaturatedColor: Color.fromHex('#001111'),
        mostGroupedColor: Color.fromHex('#cccccc'),
    },
} satisfies IImageColorStats;
