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
import metadata from './Pavol_Hejn_a_close_up_of_a_butterfly_on_a_flower_ac5b9b19-4eab-43f0-9115-a682fd2ce160-0_0.json';
import source from './Pavol_Hejn_a_close_up_of_a_butterfly_on_a_flower_ac5b9b19-4eab-43f0-9115-a682fd2ce160-0_0.png';

/**
 * Image of A close-up of a butterfly on a flower
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function ACloseUpOfAButterflyOnAFlowerAc5b9b194eab43f09115A682fd2ce1600_0_Image(
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

ACloseUpOfAButterflyOnAFlowerAc5b9b194eab43f09115A682fd2ce1600_0_Image.metadata = metadata satisfies IWallpaperMetadata;
ACloseUpOfAButterflyOnAFlowerAc5b9b194eab43f09115A682fd2ce1600_0_Image.colorStats = {
    averageColor: Color.fromHex('#644c4d'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#cc1144'), Color.fromHex('#22eeff')],
    minmaxGreen: [Color.fromHex('#118855'), Color.fromHex('#bb0044')],
    minmaxBlue: [Color.fromHex('#0022bb'), Color.fromHex('#ffff77')],
    mostFrequentColor: Color.fromHex('#221100'),
    mostSaturatedColor: Color.fromHex('#441100'),
    mostGroupedColor: Color.fromHex('#110000'),
    bottom: {
        averageColor: Color.fromHex('#6a3b3b'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#cc1144'), Color.fromHex('#11ccff')],
        minmaxGreen: [Color.fromHex('#889977'), Color.fromHex('#bb0044')],
        minmaxBlue: [Color.fromHex('#0033bb'), Color.fromHex('#ffffdd')],
        mostFrequentColor: Color.fromHex('#221100'),
        mostSaturatedColor: Color.fromHex('#110000'),
        mostGroupedColor: Color.fromHex('#110000'),
    },
} satisfies IImageColorStats;
