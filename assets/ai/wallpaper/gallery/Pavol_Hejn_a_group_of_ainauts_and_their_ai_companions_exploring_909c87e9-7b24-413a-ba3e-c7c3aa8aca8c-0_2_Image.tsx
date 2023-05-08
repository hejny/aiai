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
import metadata from './Pavol_Hejn_a_group_of_ainauts_and_their_ai_companions_exploring_909c87e9-7b24-413a-ba3e-c7c3aa8aca8c-0_2.json';
import source from './Pavol_Hejn_a_group_of_ainauts_and_their_ai_companions_exploring_909c87e9-7b24-413a-ba3e-c7c3aa8aca8c-0_2.png';

/**
 * Image of A group of AInauts and their AI companions exploring a massive, abandoned research facility in the depths of space.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AGroupOfAinautsAndTheirAiCompanionsExploring909c87e97b24413aBa3eC7c3aa8aca8c0_2_Image(
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

AGroupOfAinautsAndTheirAiCompanionsExploring909c87e97b24413aBa3eC7c3aa8aca8c0_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AGroupOfAinautsAndTheirAiCompanionsExploring909c87e97b24413aBa3eC7c3aa8aca8c0_2_Image.colorStats = {
    averageColor: Color.fromHex('#313f40'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#221100'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000011')],
    minmaxRed: [Color.fromHex('#994422'), Color.fromHex('#bbffff')],
    minmaxGreen: [Color.fromHex('#558833'), Color.fromHex('#ffffff')],
    minmaxBlue: [Color.fromHex('#224466'), Color.fromHex('#ffffcc')],
    mostFrequentColor: Color.fromHex('#222233'),
    mostSaturatedColor: Color.fromHex('#221100'),
    mostGroupedColor: Color.fromHex('#112222'),
    bottom: {
        averageColor: Color.fromHex('#223033'),
        lightestColor: Color.fromHex('#ddffff'),
        darkestColor: Color.fromHex('#001111'),
        minmaxWhite: [Color.fromHex('#eeffee'), Color.fromHex('#000011')],
        minmaxRed: [Color.fromHex('#774422'), Color.fromHex('#ccffff')],
        minmaxGreen: [Color.fromHex('#557744'), Color.fromHex('#ddffff')],
        minmaxBlue: [Color.fromHex('#113355'), Color.fromHex('#eeffee')],
        mostFrequentColor: Color.fromHex('#222233'),
        mostSaturatedColor: Color.fromHex('#001111'),
        mostGroupedColor: Color.fromHex('#111122'),
    },
} satisfies IImageColorStats;
