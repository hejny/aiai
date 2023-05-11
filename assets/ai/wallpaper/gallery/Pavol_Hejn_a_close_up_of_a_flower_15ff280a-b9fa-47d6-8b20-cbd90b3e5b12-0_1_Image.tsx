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
import metadata from './Pavol_Hejn_a_close_up_of_a_flower_15ff280a-b9fa-47d6-8b20-cbd90b3e5b12-0_1.json';
import source from './Pavol_Hejn_a_close_up_of_a_flower_15ff280a-b9fa-47d6-8b20-cbd90b3e5b12-0_1.png';

/**
 * Image of A close-up of a flower
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function ACloseUpOfAFlower5ff280aB9fa47d68b20Cbd90b3e5b1201_1_Image(props: IWallpaperComponentProps) {
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

ACloseUpOfAFlower5ff280aB9fa47d68b20Cbd90b3e5b1201_1_Image.metadata = metadata satisfies IWallpaperMetadata;
ACloseUpOfAFlower5ff280aB9fa47d68b20Cbd90b3e5b1201_1_Image.colorStats = {
    averageColor: Color.fromHex('#763a34'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#dd2222'), Color.fromHex('#ffffff')],
    minmaxGreen: [Color.fromHex('#777744'), Color.fromHex('#ffffff')],
    minmaxBlue: [Color.fromHex('#555588'), Color.fromHex('#ffffee')],
    mostFrequentColor: Color.fromHex('#000000'),
    mostSaturatedColor: Color.fromHex('#220011'),
    mostGroupedColor: Color.fromHex('#000011'),
    bottom: {
        averageColor: Color.fromHex('#401c1f'),
        lightestColor: Color.fromHex('#ffeeee'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffeeee'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#bb3322'), Color.fromHex('#ffeeee')],
        minmaxGreen: [Color.fromHex('#446666'), Color.fromHex('#ffeeee')],
        minmaxBlue: [Color.fromHex('#555588'), Color.fromHex('#ffeecc')],
        mostFrequentColor: Color.fromHex('#000000'),
        mostSaturatedColor: Color.fromHex('#110011'),
        mostGroupedColor: Color.fromHex('#000011'),
    },
} satisfies IImageColorStats;
