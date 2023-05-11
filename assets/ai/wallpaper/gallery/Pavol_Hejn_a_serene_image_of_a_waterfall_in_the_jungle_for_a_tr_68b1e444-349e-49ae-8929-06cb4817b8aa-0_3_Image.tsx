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
import metadata from './Pavol_Hejn_a_serene_image_of_a_waterfall_in_the_jungle_for_a_tr_68b1e444-349e-49ae-8929-06cb4817b8aa-0_3.json';
import source from './Pavol_Hejn_a_serene_image_of_a_waterfall_in_the_jungle_for_a_tr_68b1e444-349e-49ae-8929-06cb4817b8aa-0_3.png';

/**
 * Image of A serene image of a waterfall in the jungle for a travel or adventure website
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function ASereneImageOfAWaterfallInTheJungleForATr68b1e444349e49ae892906cb4817b8aa0_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A serene image of a waterfall in the jungle for a travel or adventure website"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ASereneImageOfAWaterfallInTheJungleForATr68b1e444349e49ae892906cb4817b8aa0_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ASereneImageOfAWaterfallInTheJungleForATr68b1e444349e49ae892906cb4817b8aa0_3_Image.colorStats = {
    averageColor: Color.fromHex('#2f3326'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#885522'), Color.fromHex('#ffffff')],
    minmaxGreen: [Color.fromHex('#559911'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#445566'), Color.fromHex('#ffff99')],
    mostFrequentColor: Color.fromHex('#000000'),
    mostSaturatedColor: Color.fromHex('#001100'),
    mostGroupedColor: Color.fromHex('#000000'),
    bottom: {
        averageColor: Color.fromHex('#27281d'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#885522'), Color.fromHex('#ffffff')],
        minmaxGreen: [Color.fromHex('#558811'), Color.fromHex('#ffffff')],
        minmaxBlue: [Color.fromHex('#555566'), Color.fromHex('#ffffaa')],
        mostFrequentColor: Color.fromHex('#000000'),
        mostSaturatedColor: Color.fromHex('#001100'),
        mostGroupedColor: Color.fromHex('#000000'),
    },
} satisfies IImageColorStats;
