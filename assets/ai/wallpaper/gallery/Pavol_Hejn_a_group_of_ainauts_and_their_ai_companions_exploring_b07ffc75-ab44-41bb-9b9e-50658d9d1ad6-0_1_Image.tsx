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
import metadata from './Pavol_Hejn_a_group_of_ainauts_and_their_ai_companions_exploring_b07ffc75-ab44-41bb-9b9e-50658d9d1ad6-0_1.json';
import source from './Pavol_Hejn_a_group_of_ainauts_and_their_ai_companions_exploring_b07ffc75-ab44-41bb-9b9e-50658d9d1ad6-0_1.png';

/**
 * Image of A group of AInauts and their AI companions exploring a massive, abandoned spacecraft floating in the depths of space.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AGroupOfAinautsAndTheirAiCompanionsExploringB07ffc75Ab4441bb9b9e50658d9d1ad60_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A group of AInauts and their AI companions exploring a massive, abandoned spacecraft floating in the depths of space."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AGroupOfAinautsAndTheirAiCompanionsExploringB07ffc75Ab4441bb9b9e50658d9d1ad60_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AGroupOfAinautsAndTheirAiCompanionsExploringB07ffc75Ab4441bb9b9e50658d9d1ad60_1_Image.colorStats = {
    averageColor: Color.fromHex('#202529'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#995544'), Color.fromHex('#eeffff')],
    minmaxGreen: [Color.fromHex('#557766'), Color.fromHex('#ffffff')],
    minmaxBlue: [Color.fromHex('#226699'), Color.fromHex('#ffffdd')],
    mostFrequentColor: Color.fromHex('#000000'),
    mostSaturatedColor: Color.fromHex('#000011'),
    mostGroupedColor: Color.fromHex('#111111'),
    bottom: {
        averageColor: Color.fromHex('#1d2023'),
        lightestColor: Color.fromHex('#eeeeff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#774422'), Color.fromHex('#ffffee')],
        minmaxGreen: [Color.fromHex('#557766'), Color.fromHex('#eeeeff')],
        minmaxBlue: [Color.fromHex('#224466'), Color.fromHex('#ffffdd')],
        mostFrequentColor: Color.fromHex('#000000'),
        mostSaturatedColor: Color.fromHex('#110011'),
        mostGroupedColor: Color.fromHex('#111111'),
    },
} satisfies IImageColorStats;
