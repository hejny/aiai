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
import metadata from './Pavol_Hejn_a_close_up_of_a_spiderweb_with_dew_drops_33e477af-06e3-44a4-8973-605a78f79f37-0_1.json';
import source from './Pavol_Hejn_a_close_up_of_a_spiderweb_with_dew_drops_33e477af-06e3-44a4-8973-605a78f79f37-0_1.png';

/**
 * Image of A close-up of a spiderweb with dew drops
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function ACloseUpOfASpiderwebWithDewDrops33e477af06e344a48973605a78f79f370_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A close-up of a spiderweb with dew drops"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ACloseUpOfASpiderwebWithDewDrops33e477af06e344a48973605a78f79f370_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ACloseUpOfASpiderwebWithDewDrops33e477af06e344a48973605a78f79f370_1_Image.colorStats = {
    averageColor: Color.fromHex('#6e4822'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#bb3300'), Color.fromHex('#eeffff')],
    minmaxGreen: [Color.fromHex('#778855'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#666677'), Color.fromHex('#ffffaa')],
    mostFrequentColor: Color.fromHex('#111111'),
    mostSaturatedColor: Color.fromHex('#552200'),
    mostGroupedColor: Color.fromHex('#111100'),
    bottom: {
        averageColor: Color.fromHex('#4b3115'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#bb4400'), Color.fromHex('#eeffff')],
        minmaxGreen: [Color.fromHex('#887744'), Color.fromHex('#ffeeff')],
        minmaxBlue: [Color.fromHex('#444444'), Color.fromHex('#ffffcc')],
        mostFrequentColor: Color.fromHex('#111111'),
        mostSaturatedColor: Color.fromHex('#774400'),
        mostGroupedColor: Color.fromHex('#332211'),
    },
} satisfies IImageColorStats;
