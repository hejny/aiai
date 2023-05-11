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
import metadata from './Pavol_Hejn_a_close_up_of_a_butterfly_on_a_flower_e9506ccb-c2eb-4337-9e7a-3f4b6bc77b7e-0_2.json';
import source from './Pavol_Hejn_a_close_up_of_a_butterfly_on_a_flower_e9506ccb-c2eb-4337-9e7a-3f4b6bc77b7e-0_2.png';

/**
 * Image of A close-up of a butterfly on a flower
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ACloseUpOfAButterflyOnAFlowerE9506ccbC2eb43379e7a3f4b6bc77b7e0_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A close-up of a butterfly on a flower"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ACloseUpOfAButterflyOnAFlowerE9506ccbC2eb43379e7a3f4b6bc77b7e0_2_Image.metadata = metadata satisfies IWallpaperMetadata;
ACloseUpOfAButterflyOnAFlowerE9506ccbC2eb43379e7a3f4b6bc77b7e0_2_Image.colorStats = {
    averageColor: Color.fromHex('#6a5919'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#cc2200'), Color.fromHex('#eeffff')],
    minmaxGreen: [Color.fromHex('#779911'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#334477'), Color.fromHex('#ffff00')],
    mostFrequentColor: Color.fromHex('#221111'),
    mostSaturatedColor: Color.fromHex('#001111'),
    mostGroupedColor: Color.fromHex('#111100'),
    bottom: {
        averageColor: Color.fromHex('#775b11'),
        lightestColor: Color.fromHex('#ffeeff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#eeffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#cc2200'), Color.fromHex('#eeffff')],
        minmaxGreen: [Color.fromHex('#779911'), Color.fromHex('#ffeeff')],
        minmaxBlue: [Color.fromHex('#445577'), Color.fromHex('#ffff00')],
        mostFrequentColor: Color.fromHex('#221111'),
        mostSaturatedColor: Color.fromHex('#ffbb00'),
        mostGroupedColor: Color.fromHex('#442211'),
    },
} satisfies IImageColorStats;
