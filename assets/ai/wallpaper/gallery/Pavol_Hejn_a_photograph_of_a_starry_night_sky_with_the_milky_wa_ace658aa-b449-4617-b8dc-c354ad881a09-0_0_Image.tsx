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
import metadata from './Pavol_Hejn_a_photograph_of_a_starry_night_sky_with_the_milky_wa_ace658aa-b449-4617-b8dc-c354ad881a09-0_0.json';
import source from './Pavol_Hejn_a_photograph_of_a_starry_night_sky_with_the_milky_wa_ace658aa-b449-4617-b8dc-c354ad881a09-0_0.png';

/**
 * Image of A photograph of a starry night sky, with the Milky Way galaxy visible overhead.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function APhotographOfAStarryNightSkyWithTheMilkyWaAce658aaB4494617B8dcC354ad881a090_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A photograph of a starry night sky, with the Milky Way galaxy visible overhead."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

APhotographOfAStarryNightSkyWithTheMilkyWaAce658aaB4494617B8dcC354ad881a090_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APhotographOfAStarryNightSkyWithTheMilkyWaAce658aaB4494617B8dcC354ad881a090_0_Image.colorStats = {
    averageColor: Color.fromHex('#202326'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#991111'), Color.fromHex('#66ffff')],
    minmaxGreen: [Color.fromHex('#889966'), Color.fromHex('#1111dd')],
    minmaxBlue: [Color.fromHex('#1111dd'), Color.fromHex('#ffffdd')],
    mostFrequentColor: Color.fromHex('#111111'),
    mostSaturatedColor: Color.fromHex('#000011'),
    mostGroupedColor: Color.fromHex('#222222'),
    bottom: {
        averageColor: Color.fromHex('#16100b'),
        lightestColor: Color.fromHex('#eecc88'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#eecc88'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#bb5522'), Color.fromHex('#eecc88')],
        minmaxGreen: [Color.fromHex('#887744'), Color.fromHex('#440000')],
        minmaxBlue: [Color.fromHex('#665555'), Color.fromHex('#ffcc66')],
        mostFrequentColor: Color.fromHex('#111111'),
        mostSaturatedColor: Color.fromHex('#110000'),
        mostGroupedColor: Color.fromHex('#111111'),
    },
} satisfies IImageColorStats;
