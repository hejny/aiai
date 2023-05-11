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
import metadata from './Pavol_Hejn_a_close_up_of_a_flower_dd93c306-f3cc-44ae-8532-cc372a26a401-0_0.json';
import source from './Pavol_Hejn_a_close_up_of_a_flower_dd93c306-f3cc-44ae-8532-cc372a26a401-0_0.png';

/**
 * Image of A close-up of a flower
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function ACloseUpOfAFlowerDd93c306F3cc44ae8532Cc372a26a4010_0_Image(props: IWallpaperComponentProps) {
    const { width, quality } = props;

    return (
        <Image
            alt="A close-up of a flower"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ACloseUpOfAFlowerDd93c306F3cc44ae8532Cc372a26a4010_0_Image.metadata = metadata satisfies IWallpaperMetadata;
ACloseUpOfAFlowerDd93c306F3cc44ae8532Cc372a26a4010_0_Image.colorStats = {
    averageColor: Color.fromHex('#98737c'),
    lightestColor: Color.fromHex('#ffeeff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#dd2222'), Color.fromHex('#eeffff')],
    minmaxGreen: [Color.fromHex('#336655'), Color.fromHex('#ffddff')],
    minmaxBlue: [Color.fromHex('#445588'), Color.fromHex('#ffee55')],
    mostFrequentColor: Color.fromHex('#7788aa'),
    mostSaturatedColor: Color.fromHex('#000011'),
    mostGroupedColor: Color.fromHex('#000011'),
    bottom: {
        averageColor: Color.fromHex('#927282'),
        lightestColor: Color.fromHex('#ffeeff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#bb1122'), Color.fromHex('#ffffff')],
        minmaxGreen: [Color.fromHex('#667766'), Color.fromHex('#ffeeff')],
        minmaxBlue: [Color.fromHex('#445588'), Color.fromHex('#ffffee')],
        mostFrequentColor: Color.fromHex('#7788aa'),
        mostSaturatedColor: Color.fromHex('#000011'),
        mostGroupedColor: Color.fromHex('#444455'),
    },
} satisfies IImageColorStats;
