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
import metadata from './Pavol_Hejn_a_close_up_of_a_flower_0f9ad0a9-9f5e-41c9-8b35-eb47c89eb996-0_2.json';
import source from './Pavol_Hejn_a_close_up_of_a_flower_0f9ad0a9-9f5e-41c9-8b35-eb47c89eb996-0_2.png';

/**
 * Image of A close-up of a flower
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ACloseUpOfAFlower0f9ad0a99f5e41c98b35Eb47c89eb9960_2_Image(props: IWallpaperComponentProps) {
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

ACloseUpOfAFlower0f9ad0a99f5e41c98b35Eb47c89eb9960_2_Image.metadata = metadata satisfies IWallpaperMetadata;
ACloseUpOfAFlower0f9ad0a99f5e41c98b35Eb47c89eb9960_2_Image.colorStats = {
    averageColor: Color.fromHex('#633a4a'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#bb2211'), Color.fromHex('#ddffff')],
    minmaxGreen: [Color.fromHex('#227788'), Color.fromHex('#ffddff')],
    minmaxBlue: [Color.fromHex('#224488'), Color.fromHex('#ffffdd')],
    mostFrequentColor: Color.fromHex('#000011'),
    mostSaturatedColor: Color.fromHex('#003344'),
    mostGroupedColor: Color.fromHex('#001122'),
    bottom: {
        averageColor: Color.fromHex('#4c3144'),
        lightestColor: Color.fromHex('#eeffff'),
        darkestColor: Color.fromHex('#330000'),
        minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#000011')],
        minmaxRed: [Color.fromHex('#cc4433'), Color.fromHex('#ddffff')],
        minmaxGreen: [Color.fromHex('#227788'), Color.fromHex('#eeeeff')],
        minmaxBlue: [Color.fromHex('#224488'), Color.fromHex('#ffffdd')],
        mostFrequentColor: Color.fromHex('#000011'),
        mostSaturatedColor: Color.fromHex('#000011'),
        mostGroupedColor: Color.fromHex('#000011'),
    },
} satisfies IImageColorStats;
