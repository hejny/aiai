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
import metadata from './Pavol_Hejn_a_group_of_ainauts_standing_on_the_surface_of_a_dist_18cbb55a-e7c0-4c6b-a000-6424894ddfd7-0_2.json';
import source from './Pavol_Hejn_a_group_of_ainauts_standing_on_the_surface_of_a_dist_18cbb55a-e7c0-4c6b-a000-6424894ddfd7-0_2.png';

/**
 * Image of A group of AInauts standing on the surface of a distant planet, looking up at a massive, alien structure looming in the distance.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AGroupOfAinautsStandingOnTheSurfaceOfADist18cbb55aE7c04c6bA0006424894ddfd70_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A group of AInauts standing on the surface of a distant planet, looking up at a massive, alien structure looming in the distance."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AGroupOfAinautsStandingOnTheSurfaceOfADist18cbb55aE7c04c6bA0006424894ddfd70_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AGroupOfAinautsStandingOnTheSurfaceOfADist18cbb55aE7c04c6bA0006424894ddfd70_2_Image.colorStats = {
    averageColor: Color.fromHex('#82644f'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#cc3300'), Color.fromHex('#ddffff')],
    minmaxGreen: [Color.fromHex('#668866'), Color.fromHex('#ffffff')],
    minmaxBlue: [Color.fromHex('#4466aa'), Color.fromHex('#ffff99')],
    mostFrequentColor: Color.fromHex('#110011'),
    mostSaturatedColor: Color.fromHex('#110011'),
    mostGroupedColor: Color.fromHex('#222222'),
    bottom: {
        averageColor: Color.fromHex('#6b5548'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#cc3300'), Color.fromHex('#eeffff')],
        minmaxGreen: [Color.fromHex('#668866'), Color.fromHex('#ffffff')],
        minmaxBlue: [Color.fromHex('#4466aa'), Color.fromHex('#ffff99')],
        mostFrequentColor: Color.fromHex('#110011'),
        mostSaturatedColor: Color.fromHex('#110011'),
        mostGroupedColor: Color.fromHex('#111111'),
    },
} satisfies IImageColorStats;
