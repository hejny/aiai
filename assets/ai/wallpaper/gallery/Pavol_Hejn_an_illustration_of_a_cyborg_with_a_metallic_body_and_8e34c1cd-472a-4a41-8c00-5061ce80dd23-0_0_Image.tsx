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
import metadata from './Pavol_Hejn_an_illustration_of_a_cyborg_with_a_metallic_body_and_8e34c1cd-472a-4a41-8c00-5061ce80dd23-0_0.json';
import source from './Pavol_Hejn_an_illustration_of_a_cyborg_with_a_metallic_body_and_8e34c1cd-472a-4a41-8c00-5061ce80dd23-0_0.png';

/**
 * Image of An illustration of a cyborg with a metallic body and glowing eyes
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AnIllustrationOfACyborgWithAMetallicBodyAnd8e34c1cd472a4a418c005061ce80dd230_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An illustration of a cyborg with a metallic body and glowing eyes"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnIllustrationOfACyborgWithAMetallicBodyAnd8e34c1cd472a4a418c005061ce80dd230_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnIllustrationOfACyborgWithAMetallicBodyAnd8e34c1cd472a4a418c005061ce80dd230_0_Image.colorStats = {
    averageColor: Color.fromHex('#182125'),
    lightestColor: Color.fromHex('#eeffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#eeffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#aa4411'), Color.fromHex('#22eeff')],
    minmaxGreen: [Color.fromHex('#117766'), Color.fromHex('#eeffff')],
    minmaxBlue: [Color.fromHex('#004499'), Color.fromHex('#ffff99')],
    mostFrequentColor: Color.fromHex('#111111'),
    mostSaturatedColor: Color.fromHex('#000011'),
    mostGroupedColor: Color.fromHex('#000000'),
    bottom: {
        averageColor: Color.fromHex('#212b2d'),
        lightestColor: Color.fromHex('#aaffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffbb'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#994411'), Color.fromHex('#44ffff')],
        minmaxGreen: [Color.fromHex('#117766'), Color.fromHex('#330000')],
        minmaxBlue: [Color.fromHex('#115599'), Color.fromHex('#ffff99')],
        mostFrequentColor: Color.fromHex('#111111'),
        mostSaturatedColor: Color.fromHex('#001122'),
        mostGroupedColor: Color.fromHex('#001111'),
    },
} satisfies IImageColorStats;
