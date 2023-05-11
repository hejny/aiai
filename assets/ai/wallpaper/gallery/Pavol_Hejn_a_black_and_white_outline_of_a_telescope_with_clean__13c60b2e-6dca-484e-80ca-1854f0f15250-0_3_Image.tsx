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
import metadata from './Pavol_Hejn_a_black_and_white_outline_of_a_telescope_with_clean__13c60b2e-6dca-484e-80ca-1854f0f15250-0_3.json';
import source from './Pavol_Hejn_a_black_and_white_outline_of_a_telescope_with_clean__13c60b2e-6dca-484e-80ca-1854f0f15250-0_3.png';

/**
 * Image of A black and white outline of a telescope, with clean lines and simple shapes that highlight the intricate mechanics of the instrument.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function ABlackAndWhiteOutlineOfATelescopeWithClean13c60b2e6dca484e80ca1854f0f152500_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A black and white outline of a telescope, with clean lines and simple shapes that highlight the intricate mechanics of the instrument."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ABlackAndWhiteOutlineOfATelescopeWithClean13c60b2e6dca484e80ca1854f0f152500_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ABlackAndWhiteOutlineOfATelescopeWithClean13c60b2e6dca484e80ca1854f0f152500_3_Image.colorStats = {
    averageColor: Color.fromHex('#dbdbdb'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#554444'), Color.fromHex('#eeffff')],
    minmaxGreen: [Color.fromHex('#667766'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#555566'), Color.fromHex('#ffffee')],
    mostFrequentColor: Color.fromHex('#ffffff'),
    mostSaturatedColor: Color.fromHex('#111100'),
    mostGroupedColor: Color.fromHex('#ffffff'),
    bottom: {
        averageColor: Color.fromHex('#d8d8d8'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#554444'), Color.fromHex('#eeffff')],
        minmaxGreen: [Color.fromHex('#667766'), Color.fromHex('#ffeeff')],
        minmaxBlue: [Color.fromHex('#555566'), Color.fromHex('#ffffee')],
        mostFrequentColor: Color.fromHex('#ffffff'),
        mostSaturatedColor: Color.fromHex('#110000'),
        mostGroupedColor: Color.fromHex('#ffffff'),
    },
} satisfies IImageColorStats;
