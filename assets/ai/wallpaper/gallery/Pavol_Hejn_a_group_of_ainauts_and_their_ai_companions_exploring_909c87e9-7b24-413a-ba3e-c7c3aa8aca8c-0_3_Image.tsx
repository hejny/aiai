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
import metadata from './Pavol_Hejn_a_group_of_ainauts_and_their_ai_companions_exploring_909c87e9-7b24-413a-ba3e-c7c3aa8aca8c-0_3.json';
import source from './Pavol_Hejn_a_group_of_ainauts_and_their_ai_companions_exploring_909c87e9-7b24-413a-ba3e-c7c3aa8aca8c-0_3.png';

/**
 * Image of A group of AInauts and their AI companions exploring a massive, abandoned research facility in the depths of space.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AGroupOfAinautsAndTheirAiCompanionsExploring909c87e97b24413aBa3eC7c3aa8aca8c0_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A group of AInauts and their AI companions exploring a massive, abandoned research facility in the depths of space."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AGroupOfAinautsAndTheirAiCompanionsExploring909c87e97b24413aBa3eC7c3aa8aca8c0_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AGroupOfAinautsAndTheirAiCompanionsExploring909c87e97b24413aBa3eC7c3aa8aca8c0_3_Image.colorStats = {
    averageColor: Color.fromHex('#2d343d'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#110000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000011')],
    minmaxRed: [Color.fromHex('#884433'), Color.fromHex('#ddffff')],
    minmaxGreen: [Color.fromHex('#447777'), Color.fromHex('#ffffff')],
    minmaxBlue: [Color.fromHex('#003388'), Color.fromHex('#ffffee')],
    mostFrequentColor: Color.fromHex('#000011'),
    mostSaturatedColor: Color.fromHex('#000011'),
    mostGroupedColor: Color.fromHex('#111122'),
    bottom: {
        averageColor: Color.fromHex('#292f38'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#110000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000011')],
        minmaxRed: [Color.fromHex('#774433'), Color.fromHex('#eeffff')],
        minmaxGreen: [Color.fromHex('#558888'), Color.fromHex('#ffffff')],
        minmaxBlue: [Color.fromHex('#334477'), Color.fromHex('#ffffff')],
        mostFrequentColor: Color.fromHex('#000011'),
        mostSaturatedColor: Color.fromHex('#110011'),
        mostGroupedColor: Color.fromHex('#111122'),
    },
} satisfies IImageColorStats;
