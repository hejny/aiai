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
import metadata from './Pavol_Hejn_an_abstract_image_of_overlapping_circles_in_bright_c_ce138bce-1ccf-42e5-b3f2-4e3e62e0fa87-0_3.json';
import source from './Pavol_Hejn_an_abstract_image_of_overlapping_circles_in_bright_c_ce138bce-1ccf-42e5-b3f2-4e3e62e0fa87-0_3.png';

/**
 * Image of An abstract image of overlapping circles in bright colors for a business or marketing website
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AnAbstractImageOfOverlappingCirclesInBrightCCe138bce1ccf42e5B3f24e3e62e0fa870_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An abstract image of overlapping circles in bright colors for a business or marketing website"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnAbstractImageOfOverlappingCirclesInBrightCCe138bce1ccf42e5B3f24e3e62e0fa870_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractImageOfOverlappingCirclesInBrightCCe138bce1ccf42e5B3f24e3e62e0fa870_3_Image.colorStats = {
    averageColor: Color.fromHex('#9d6d70'),
    lightestColor: Color.fromHex('#ffeeff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#ff2211'), Color.fromHex('#66eeff')],
    minmaxGreen: [Color.fromHex('#338877'), Color.fromHex('#ee1155')],
    minmaxBlue: [Color.fromHex('#113388'), Color.fromHex('#ffffee')],
    mostFrequentColor: Color.fromHex('#dd9966'),
    mostSaturatedColor: Color.fromHex('#001133'),
    mostGroupedColor: Color.fromHex('#225577'),
    bottom: {
        averageColor: Color.fromHex('#905f65'),
        lightestColor: Color.fromHex('#eedddd'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#eedddd'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#ff2211'), Color.fromHex('#aaeeee')],
        minmaxGreen: [Color.fromHex('#338877'), Color.fromHex('#ff2255')],
        minmaxBlue: [Color.fromHex('#113388'), Color.fromHex('#ffddaa')],
        mostFrequentColor: Color.fromHex('#dd9966'),
        mostSaturatedColor: Color.fromHex('#001133'),
        mostGroupedColor: Color.fromHex('#225577'),
    },
} satisfies IImageColorStats;
