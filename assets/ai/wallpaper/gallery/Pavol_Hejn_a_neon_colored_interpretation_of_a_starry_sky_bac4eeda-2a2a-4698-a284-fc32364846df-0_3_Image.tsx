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
import metadata from './Pavol_Hejn_a_neon_colored_interpretation_of_a_starry_sky_bac4eeda-2a2a-4698-a284-fc32364846df-0_3.json';
import source from './Pavol_Hejn_a_neon_colored_interpretation_of_a_starry_sky_bac4eeda-2a2a-4698-a284-fc32364846df-0_3.png';

/**
 * Image of A neon-colored interpretation of a starry sky
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function ANeonColoredInterpretationOfAStarrySkyBac4eeda2a2a4698A284Fc32364846df0_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A neon-colored interpretation of a starry sky"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ANeonColoredInterpretationOfAStarrySkyBac4eeda2a2a4698A284Fc32364846df0_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ANeonColoredInterpretationOfAStarrySkyBac4eeda2a2a4698A284Fc32364846df0_3_Image.colorStats = {
    averageColor: Color.fromHex('#3d2031'),
    lightestColor: Color.fromHex('#ffeeff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#dd2222'), Color.fromHex('#66ffff')],
    minmaxGreen: [Color.fromHex('#33aa55'), Color.fromHex('#ee44aa')],
    minmaxBlue: [Color.fromHex('#1144bb'), Color.fromHex('#ffff77')],
    mostFrequentColor: Color.fromHex('#000022'),
    mostSaturatedColor: Color.fromHex('#110011'),
    mostGroupedColor: Color.fromHex('#000011'),
    bottom: {
        averageColor: Color.fromHex('#342125'),
        lightestColor: Color.fromHex('#ddffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#cc2222'), Color.fromHex('#66ffff')],
        minmaxGreen: [Color.fromHex('#33aa55'), Color.fromHex('#ee3333')],
        minmaxBlue: [Color.fromHex('#114499'), Color.fromHex('#ffff77')],
        mostFrequentColor: Color.fromHex('#000022'),
        mostSaturatedColor: Color.fromHex('#000011'),
        mostGroupedColor: Color.fromHex('#000011'),
    },
} satisfies IImageColorStats;
