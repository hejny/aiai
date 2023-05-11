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
import metadata from './Pavol_Hejn_a_photograph_of_a_desert_landscape_at_sunset_with_wa_a1b93f91-6533-4234-994b-671324fdbd6b-0_1.json';
import source from './Pavol_Hejn_a_photograph_of_a_desert_landscape_at_sunset_with_wa_a1b93f91-6533-4234-994b-671324fdbd6b-0_1.png';

/**
 * Image of A photograph of a desert landscape at sunset, with warm colors and long shadows.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function APhotographOfADesertLandscapeAtSunsetWithWaA1b93f9165334234994b671324fdbd6b0_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A photograph of a desert landscape at sunset, with warm colors and long shadows."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

APhotographOfADesertLandscapeAtSunsetWithWaA1b93f9165334234994b671324fdbd6b0_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APhotographOfADesertLandscapeAtSunsetWithWaA1b93f9165334234994b671324fdbd6b0_1_Image.colorStats = {
    averageColor: Color.fromHex('#845b4b'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#cc4411'), Color.fromHex('#ffffff')],
    minmaxGreen: [Color.fromHex('#778877'), Color.fromHex('#ffffff')],
    minmaxBlue: [Color.fromHex('#444466'), Color.fromHex('#ffffbb')],
    mostFrequentColor: Color.fromHex('#552211'),
    mostSaturatedColor: Color.fromHex('#662200'),
    mostGroupedColor: Color.fromHex('#223344'),
    bottom: {
        averageColor: Color.fromHex('#73351e'),
        lightestColor: Color.fromHex('#ffbb88'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffbb88'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#cc4411'), Color.fromHex('#ffbb88')],
        minmaxGreen: [Color.fromHex('#886633'), Color.fromHex('#550000')],
        minmaxBlue: [Color.fromHex('#332233'), Color.fromHex('#ffaa44')],
        mostFrequentColor: Color.fromHex('#552211'),
        mostSaturatedColor: Color.fromHex('#441100'),
        mostGroupedColor: Color.fromHex('#221111'),
    },
} satisfies IImageColorStats;
