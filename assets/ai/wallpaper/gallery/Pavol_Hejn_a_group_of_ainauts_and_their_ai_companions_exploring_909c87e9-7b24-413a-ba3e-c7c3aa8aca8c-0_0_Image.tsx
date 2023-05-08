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
import metadata from './Pavol_Hejn_a_group_of_ainauts_and_their_ai_companions_exploring_909c87e9-7b24-413a-ba3e-c7c3aa8aca8c-0_0.json';
import source from './Pavol_Hejn_a_group_of_ainauts_and_their_ai_companions_exploring_909c87e9-7b24-413a-ba3e-c7c3aa8aca8c-0_0.png';

/**
 * Image of A group of AInauts and their AI companions exploring a massive, abandoned research facility in the depths of space.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AGroupOfAinautsAndTheirAiCompanionsExploring909c87e97b24413aBa3eC7c3aa8aca8c0_0_Image(
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

AGroupOfAinautsAndTheirAiCompanionsExploring909c87e97b24413aBa3eC7c3aa8aca8c0_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AGroupOfAinautsAndTheirAiCompanionsExploring909c87e97b24413aBa3eC7c3aa8aca8c0_0_Image.colorStats = {
    averageColor: Color.fromHex('#2f2f2b'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#bb5544'), Color.fromHex('#ddffff')],
    minmaxGreen: [Color.fromHex('#777755'), Color.fromHex('#ffffff')],
    minmaxBlue: [Color.fromHex('#113355'), Color.fromHex('#ffffbb')],
    mostFrequentColor: Color.fromHex('#000000'),
    mostSaturatedColor: Color.fromHex('#110000'),
    mostGroupedColor: Color.fromHex('#111111'),
    bottom: {
        averageColor: Color.fromHex('#1e2121'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#662200'), Color.fromHex('#ddffff')],
        minmaxGreen: [Color.fromHex('#777755'), Color.fromHex('#ffffff')],
        minmaxBlue: [Color.fromHex('#445566'), Color.fromHex('#ffffee')],
        mostFrequentColor: Color.fromHex('#000000'),
        mostSaturatedColor: Color.fromHex('#111100'),
        mostGroupedColor: Color.fromHex('#000000'),
    },
} satisfies IImageColorStats;
