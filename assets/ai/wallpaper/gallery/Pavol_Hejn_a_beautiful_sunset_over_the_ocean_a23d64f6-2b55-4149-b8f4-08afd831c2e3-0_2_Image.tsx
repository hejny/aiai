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
import metadata from './Pavol_Hejn_a_beautiful_sunset_over_the_ocean_a23d64f6-2b55-4149-b8f4-08afd831c2e3-0_2.json';
import source from './Pavol_Hejn_a_beautiful_sunset_over_the_ocean_a23d64f6-2b55-4149-b8f4-08afd831c2e3-0_2.png';

/**
 * Image of A beautiful sunset over the ocean
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ABeautifulSunsetOverTheOceanA23d64f62b554149B8f408afd831c2e30_2_Image(props: IWallpaperComponentProps) {
    const { width, quality } = props;

    return (
        <Image
            alt="A beautiful sunset over the ocean"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ABeautifulSunsetOverTheOceanA23d64f62b554149B8f408afd831c2e30_2_Image.metadata = metadata satisfies IWallpaperMetadata;
ABeautifulSunsetOverTheOceanA23d64f62b554149B8f408afd831c2e30_2_Image.colorStats = {
    averageColor: Color.fromHex('#673c31'),
    lightestColor: Color.fromHex('#ffffee'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#ee3311'), Color.fromHex('#ffffee')],
    minmaxGreen: [Color.fromHex('#666644'), Color.fromHex('#ee3311')],
    minmaxBlue: [Color.fromHex('#555566'), Color.fromHex('#ffff77')],
    mostFrequentColor: Color.fromHex('#111111'),
    mostSaturatedColor: Color.fromHex('#110011'),
    mostGroupedColor: Color.fromHex('#111111'),
    bottom: {
        averageColor: Color.fromHex('#382726'),
        lightestColor: Color.fromHex('#eeffdd'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#eeffdd'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#cc4411'), Color.fromHex('#eeffdd')],
        minmaxGreen: [Color.fromHex('#666644'), Color.fromHex('#550000')],
        minmaxBlue: [Color.fromHex('#555566'), Color.fromHex('#ffee66')],
        mostFrequentColor: Color.fromHex('#111111'),
        mostSaturatedColor: Color.fromHex('#110011'),
        mostGroupedColor: Color.fromHex('#000011'),
    },
} satisfies IImageColorStats;
