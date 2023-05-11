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
import metadata from './Pavol_Hejn_an_abstract_image_of_a_galaxy_cluster_with_swirling__07041eaa-852d-4267-aa36-d0d79a85a57f-0_2.json';
import source from './Pavol_Hejn_an_abstract_image_of_a_galaxy_cluster_with_swirling__07041eaa-852d-4267-aa36-d0d79a85a57f-0_2.png';

/**
 * Image of An abstract image of a galaxy cluster, with swirling colors and patterns representing the vastness of space.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AnAbstractImageOfAGalaxyClusterWithSwirling07041eaa852d4267Aa36D0d79a85a57f0_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An abstract image of a galaxy cluster, with swirling colors and patterns representing the vastness of space."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnAbstractImageOfAGalaxyClusterWithSwirling07041eaa852d4267Aa36D0d79a85a57f0_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractImageOfAGalaxyClusterWithSwirling07041eaa852d4267Aa36D0d79a85a57f0_2_Image.colorStats = {
    averageColor: Color.fromHex('#322b2b'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#dd2200'), Color.fromHex('#99ffff')],
    minmaxGreen: [Color.fromHex('#339966'), Color.fromHex('#aa0000')],
    minmaxBlue: [Color.fromHex('#2233aa'), Color.fromHex('#ffff99')],
    mostFrequentColor: Color.fromHex('#000011'),
    mostSaturatedColor: Color.fromHex('#000011'),
    mostGroupedColor: Color.fromHex('#001111'),
    bottom: {
        averageColor: Color.fromHex('#222a32'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#bb2200'), Color.fromHex('#ccffff')],
        minmaxGreen: [Color.fromHex('#339966'), Color.fromHex('#ffeeff')],
        minmaxBlue: [Color.fromHex('#003399'), Color.fromHex('#ffdd55')],
        mostFrequentColor: Color.fromHex('#000011'),
        mostSaturatedColor: Color.fromHex('#000011'),
        mostGroupedColor: Color.fromHex('#111111'),
    },
} satisfies IImageColorStats;
