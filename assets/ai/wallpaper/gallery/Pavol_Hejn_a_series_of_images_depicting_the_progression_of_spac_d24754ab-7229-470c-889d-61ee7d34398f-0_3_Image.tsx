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
import metadata from './Pavol_Hejn_a_series_of_images_depicting_the_progression_of_spac_d24754ab-7229-470c-889d-61ee7d34398f-0_3.json';
import source from './Pavol_Hejn_a_series_of_images_depicting_the_progression_of_spac_d24754ab-7229-470c-889d-61ee7d34398f-0_3.png';

/**
 * Image of A series of images depicting the progression of space exploration, from early rockets to modern spacecraft.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function ASeriesOfImagesDepictingTheProgressionOfSpacD24754ab7229470c889d61ee7d34398f0_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A series of images depicting the progression of space exploration, from early rockets to modern spacecraft."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ASeriesOfImagesDepictingTheProgressionOfSpacD24754ab7229470c889d61ee7d34398f0_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ASeriesOfImagesDepictingTheProgressionOfSpacD24754ab7229470c889d61ee7d34398f0_3_Image.colorStats = {
    averageColor: Color.fromHex('#585a51'),
    lightestColor: Color.fromHex('#eeffff'),
    darkestColor: Color.fromHex('#001100'),
    minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#bb4422'), Color.fromHex('#eeffff')],
    minmaxGreen: [Color.fromHex('#668866'), Color.fromHex('#ffeeee')],
    minmaxBlue: [Color.fromHex('#334455'), Color.fromHex('#ffffdd')],
    mostFrequentColor: Color.fromHex('#223333'),
    mostSaturatedColor: Color.fromHex('#111100'),
    mostGroupedColor: Color.fromHex('#333333'),
    bottom: {
        averageColor: Color.fromHex('#54574f'),
        lightestColor: Color.fromHex('#ffffee'),
        darkestColor: Color.fromHex('#111100'),
        minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#111100')],
        minmaxRed: [Color.fromHex('#bb4422'), Color.fromHex('#ffffee')],
        minmaxGreen: [Color.fromHex('#668866'), Color.fromHex('#ffeeee')],
        minmaxBlue: [Color.fromHex('#555566'), Color.fromHex('#ffffdd')],
        mostFrequentColor: Color.fromHex('#223333'),
        mostSaturatedColor: Color.fromHex('#111100'),
        mostGroupedColor: Color.fromHex('#333333'),
    },
} satisfies IImageColorStats;
