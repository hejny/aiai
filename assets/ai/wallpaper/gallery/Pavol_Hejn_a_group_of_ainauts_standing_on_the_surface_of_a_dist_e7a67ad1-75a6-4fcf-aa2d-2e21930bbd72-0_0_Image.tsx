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
import metadata from './Pavol_Hejn_a_group_of_ainauts_standing_on_the_surface_of_a_dist_e7a67ad1-75a6-4fcf-aa2d-2e21930bbd72-0_0.json';
import source from './Pavol_Hejn_a_group_of_ainauts_standing_on_the_surface_of_a_dist_e7a67ad1-75a6-4fcf-aa2d-2e21930bbd72-0_0.png';

/**
 * Image of A group of AInauts standing on the surface of a distant planet, with a massive, alien structure towering above them.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AGroupOfAinautsStandingOnTheSurfaceOfADistE7a67ad175a64fcfAa2d2e21930bbd720_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A group of AInauts standing on the surface of a distant planet, with a massive, alien structure towering above them."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AGroupOfAinautsStandingOnTheSurfaceOfADistE7a67ad175a64fcfAa2d2e21930bbd720_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AGroupOfAinautsStandingOnTheSurfaceOfADistE7a67ad175a64fcfAa2d2e21930bbd720_0_Image.colorStats = {
    averageColor: Color.fromHex('#754d4c'),
    lightestColor: Color.fromHex('#ffffee'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#cc2211'), Color.fromHex('#ffffee')],
    minmaxGreen: [Color.fromHex('#777766'), Color.fromHex('#ee3322')],
    minmaxBlue: [Color.fromHex('#444477'), Color.fromHex('#ffffee')],
    mostFrequentColor: Color.fromHex('#220000'),
    mostSaturatedColor: Color.fromHex('#220011'),
    mostGroupedColor: Color.fromHex('#555577'),
    bottom: {
        averageColor: Color.fromHex('#853f35'),
        lightestColor: Color.fromHex('#ffccaa'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffddaa'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#cc2211'), Color.fromHex('#ffddaa')],
        minmaxGreen: [Color.fromHex('#887766'), Color.fromHex('#ee3322')],
        minmaxBlue: [Color.fromHex('#445577'), Color.fromHex('#ffdd99')],
        mostFrequentColor: Color.fromHex('#220000'),
        mostSaturatedColor: Color.fromHex('#220011'),
        mostGroupedColor: Color.fromHex('#ffcc99'),
    },
} satisfies IImageColorStats;
