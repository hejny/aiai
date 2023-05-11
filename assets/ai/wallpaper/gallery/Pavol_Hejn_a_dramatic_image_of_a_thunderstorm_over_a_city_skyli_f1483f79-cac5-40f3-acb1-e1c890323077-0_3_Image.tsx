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
import metadata from './Pavol_Hejn_a_dramatic_image_of_a_thunderstorm_over_a_city_skyli_f1483f79-cac5-40f3-acb1-e1c890323077-0_3.json';
import source from './Pavol_Hejn_a_dramatic_image_of_a_thunderstorm_over_a_city_skyli_f1483f79-cac5-40f3-acb1-e1c890323077-0_3.png';

/**
 * Image of A dramatic image of a thunderstorm over a city skyline for a weather or news website.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function ADramaticImageOfAThunderstormOverACitySkyliF1483f79Cac540f3Acb1E1c8903230770_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A dramatic image of a thunderstorm over a city skyline for a weather or news website."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ADramaticImageOfAThunderstormOverACitySkyliF1483f79Cac540f3Acb1E1c8903230770_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ADramaticImageOfAThunderstormOverACitySkyliF1483f79Cac540f3Acb1E1c8903230770_3_Image.colorStats = {
    averageColor: Color.fromHex('#4f3447'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#dd2200'), Color.fromHex('#eeffff')],
    minmaxGreen: [Color.fromHex('#66bb66'), Color.fromHex('#ffddff')],
    minmaxBlue: [Color.fromHex('#554499'), Color.fromHex('#ffee33')],
    mostFrequentColor: Color.fromHex('#000000'),
    mostSaturatedColor: Color.fromHex('#220011'),
    mostGroupedColor: Color.fromHex('#111133'),
    bottom: {
        averageColor: Color.fromHex('#3c2326'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#dd2200'), Color.fromHex('#eeffff')],
        minmaxGreen: [Color.fromHex('#66bb66'), Color.fromHex('#aa0000')],
        minmaxBlue: [Color.fromHex('#445577'), Color.fromHex('#ffee33')],
        mostFrequentColor: Color.fromHex('#000000'),
        mostSaturatedColor: Color.fromHex('#220011'),
        mostGroupedColor: Color.fromHex('#000011'),
    },
} satisfies IImageColorStats;
