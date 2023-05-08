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
import metadata from './Pavol_Hejn_this_is_a_large_field_in_the_style_of_richly_colored_fd48da16-a3c2-4262-bf66-e0ded7fc9f6b-0_0.json';
import source from './Pavol_Hejn_this_is_a_large_field_in_the_style_of_richly_colored_fd48da16-a3c2-4262-bf66-e0ded7fc9f6b-0_0.png';

/**
 * Image of this is a large field, in the style of richly colored skies, light pink and dark green, 32k uhd, kurzgesagt, františek dvořák, romanticized views, hikecore
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function ThisIsALargeFieldInTheStyleOfRichlyColoredFd48da16A3c24262Bf66E0ded7fc9f6b0_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="this is a large field, in the style of richly colored skies, light pink and dark green, 32k uhd, kurzgesagt, františek dvořák, romanticized views, hikecore"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ThisIsALargeFieldInTheStyleOfRichlyColoredFd48da16A3c24262Bf66E0ded7fc9f6b0_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ThisIsALargeFieldInTheStyleOfRichlyColoredFd48da16A3c24262Bf66E0ded7fc9f6b0_0_Image.colorStats = {
    averageColor: Color.fromHex('#445445'),
    lightestColor: Color.fromHex('#aaaa99'),
    darkestColor: Color.fromHex('#001100'),
    minmaxWhite: [Color.fromHex('#aaaa99'), Color.fromHex('#001100')],
    minmaxRed: [Color.fromHex('#884433'), Color.fromHex('#55aa88')],
    minmaxGreen: [Color.fromHex('#55aa88'), Color.fromHex('#331111')],
    minmaxBlue: [Color.fromHex('#116666'), Color.fromHex('#aaaa88')],
    mostFrequentColor: Color.fromHex('#442211'),
    mostSaturatedColor: Color.fromHex('#002211'),
    mostGroupedColor: Color.fromHex('#338877'),
    bottom: {
        averageColor: Color.fromHex('#442c1d'),
        lightestColor: Color.fromHex('#884444'),
        darkestColor: Color.fromHex('#001100'),
        minmaxWhite: [Color.fromHex('#885544'), Color.fromHex('#001100')],
        minmaxRed: [Color.fromHex('#773333'), Color.fromHex('#001100')],
        minmaxGreen: [Color.fromHex('#665544'), Color.fromHex('#331111')],
        minmaxBlue: [Color.fromHex('#444444'), Color.fromHex('#332200')],
        mostFrequentColor: Color.fromHex('#442211'),
        mostSaturatedColor: Color.fromHex('#331100'),
        mostGroupedColor: Color.fromHex('#332211'),
    },
} satisfies IImageColorStats;
