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
import metadata from './Pavol_Hejn_a_minimalist_graphic_of_a_leaf_for_an_environmental__fd1282fd-983c-49cd-9ec1-ee7e6d56eeae-0_3.json';
import source from './Pavol_Hejn_a_minimalist_graphic_of_a_leaf_for_an_environmental__fd1282fd-983c-49cd-9ec1-ee7e6d56eeae-0_3.png';

/**
 * Image of A minimalist graphic of a leaf for an environmental or sustainable living website
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AMinimalistGraphicOfALeafForAnEnvironmentalFd1282fd983c49cd9ec1Ee7e6d56eeae0_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A minimalist graphic of a leaf for an environmental or sustainable living website"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AMinimalistGraphicOfALeafForAnEnvironmentalFd1282fd983c49cd9ec1Ee7e6d56eeae0_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AMinimalistGraphicOfALeafForAnEnvironmentalFd1282fd983c49cd9ec1Ee7e6d56eeae0_3_Image.colorStats = {
    averageColor: Color.fromHex('#ba9b29'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#223300'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#222211')],
    minmaxRed: [Color.fromHex('#775511'), Color.fromHex('#eeffff')],
    minmaxGreen: [Color.fromHex('#889955'), Color.fromHex('#ffffff')],
    minmaxBlue: [Color.fromHex('#444444'), Color.fromHex('#ffffbb')],
    mostFrequentColor: Color.fromHex('#bb9922'),
    mostSaturatedColor: Color.fromHex('#443300'),
    mostGroupedColor: Color.fromHex('#bb9922'),
    bottom: {
        averageColor: Color.fromHex('#b99823'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#444400'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#223311')],
        minmaxRed: [Color.fromHex('#886622'), Color.fromHex('#ffffff')],
        minmaxGreen: [Color.fromHex('#777711'), Color.fromHex('#ffffff')],
        minmaxBlue: [Color.fromHex('#444444'), Color.fromHex('#ffffbb')],
        mostFrequentColor: Color.fromHex('#bb9922'),
        mostSaturatedColor: Color.fromHex('#444400'),
        mostGroupedColor: Color.fromHex('#bb9922'),
    },
} satisfies IImageColorStats;
