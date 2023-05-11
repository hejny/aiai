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
import metadata from './Pavol_Hejn_an_illustration_of_a_cyborg_with_a_metallic_body_and_0094b8cd-7fd6-4077-bfa1-2f291eb1b1df-0_0.json';
import source from './Pavol_Hejn_an_illustration_of_a_cyborg_with_a_metallic_body_and_0094b8cd-7fd6-4077-bfa1-2f291eb1b1df-0_0.png';

/**
 * Image of An illustration of a cyborg with a metallic body and glowing eyes
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AnIllustrationOfACyborgWithAMetallicBodyAnd094b8cd7fd64077Bfa12f291eb1b1df00_0_Image(
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

AnIllustrationOfACyborgWithAMetallicBodyAnd094b8cd7fd64077Bfa12f291eb1b1df00_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnIllustrationOfACyborgWithAMetallicBodyAnd094b8cd7fd64077Bfa12f291eb1b1df00_0_Image.colorStats = {
    averageColor: Color.fromHex('#19222a'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#aa3311'), Color.fromHex('#77ffff')],
    minmaxGreen: [Color.fromHex('#338888'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#004499'), Color.fromHex('#ffffaa')],
    mostFrequentColor: Color.fromHex('#000000'),
    mostSaturatedColor: Color.fromHex('#000011'),
    mostGroupedColor: Color.fromHex('#111111'),
    bottom: {
        averageColor: Color.fromHex('#20272e'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#aa3311'), Color.fromHex('#88ffff')],
        minmaxGreen: [Color.fromHex('#669988'), Color.fromHex('#ffffff')],
        minmaxBlue: [Color.fromHex('#004499'), Color.fromHex('#ffffcc')],
        mostFrequentColor: Color.fromHex('#000000'),
        mostSaturatedColor: Color.fromHex('#001111'),
        mostGroupedColor: Color.fromHex('#111111'),
    },
} satisfies IImageColorStats;
