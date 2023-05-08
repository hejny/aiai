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
import metadata from './Pavol_Hejn_a_series_of_images_depicting_the_progression_of_spac_d982cb40-dd33-4577-b477-bddee4d1a07d-0_2.json';
import source from './Pavol_Hejn_a_series_of_images_depicting_the_progression_of_spac_d982cb40-dd33-4577-b477-bddee4d1a07d-0_2.png';

/**
 * Image of A series of images depicting the progression of space exploration, from early rockets to modern spacecraft.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ASeriesOfImagesDepictingTheProgressionOfSpacD982cb40Dd334577B477Bddee4d1a07d0_2_Image(
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

ASeriesOfImagesDepictingTheProgressionOfSpacD982cb40Dd334577B477Bddee4d1a07d0_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ASeriesOfImagesDepictingTheProgressionOfSpacD982cb40Dd334577B477Bddee4d1a07d0_2_Image.colorStats = {
    averageColor: Color.fromHex('#222120'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#883311'), Color.fromHex('#ffffff')],
    minmaxGreen: [Color.fromHex('#777755'), Color.fromHex('#ffffff')],
    minmaxBlue: [Color.fromHex('#224488'), Color.fromHex('#ffffee')],
    mostFrequentColor: Color.fromHex('#887766'),
    mostSaturatedColor: Color.fromHex('#110000'),
    mostGroupedColor: Color.fromHex('#000000'),
    bottom: {
        averageColor: Color.fromHex('#2c2a28'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#883322'), Color.fromHex('#ffffff')],
        minmaxGreen: [Color.fromHex('#777755'), Color.fromHex('#ffffff')],
        minmaxBlue: [Color.fromHex('#4477bb'), Color.fromHex('#ffffff')],
        mostFrequentColor: Color.fromHex('#887766'),
        mostSaturatedColor: Color.fromHex('#110000'),
        mostGroupedColor: Color.fromHex('#000000'),
    },
} satisfies IImageColorStats;
