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
import metadata from './Pavol_Hejn_a_close_up_of_a_starfish_in_the_ocean_fc04bdaa-3501-4c7a-b6ec-442da9c1d3b7-0_3.json';
import source from './Pavol_Hejn_a_close_up_of_a_starfish_in_the_ocean_fc04bdaa-3501-4c7a-b6ec-442da9c1d3b7-0_3.png';

/**
 * Image of A close-up of a starfish in the ocean
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function ACloseUpOfAStarfishInTheOceanFc04bdaa35014c7aB6ec442da9c1d3b70_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A close-up of a starfish in the ocean"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ACloseUpOfAStarfishInTheOceanFc04bdaa35014c7aB6ec442da9c1d3b70_3_Image.metadata = metadata satisfies IWallpaperMetadata;
ACloseUpOfAStarfishInTheOceanFc04bdaa35014c7aB6ec442da9c1d3b70_3_Image.colorStats = {
    averageColor: Color.fromHex('#675e59'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#001100'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#bb2200'), Color.fromHex('#eeffff')],
    minmaxGreen: [Color.fromHex('#778866'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#334477'), Color.fromHex('#ffffbb')],
    mostFrequentColor: Color.fromHex('#222233'),
    mostSaturatedColor: Color.fromHex('#001122'),
    mostGroupedColor: Color.fromHex('#111122'),
    bottom: {
        averageColor: Color.fromHex('#332b2b'),
        lightestColor: Color.fromHex('#ddeeff'),
        darkestColor: Color.fromHex('#001100'),
        minmaxWhite: [Color.fromHex('#ffeeee'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#bb2200'), Color.fromHex('#ddeeff')],
        minmaxGreen: [Color.fromHex('#778866'), Color.fromHex('#ffeeee')],
        minmaxBlue: [Color.fromHex('#334477'), Color.fromHex('#ffeeee')],
        mostFrequentColor: Color.fromHex('#222233'),
        mostSaturatedColor: Color.fromHex('#001122'),
        mostGroupedColor: Color.fromHex('#111122'),
    },
} satisfies IImageColorStats;
