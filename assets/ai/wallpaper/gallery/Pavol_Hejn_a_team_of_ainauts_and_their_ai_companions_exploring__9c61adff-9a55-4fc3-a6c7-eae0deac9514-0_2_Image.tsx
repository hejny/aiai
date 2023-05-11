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
import metadata from './Pavol_Hejn_a_team_of_ainauts_and_their_ai_companions_exploring__9c61adff-9a55-4fc3-a6c7-eae0deac9514-0_2.json';
import source from './Pavol_Hejn_a_team_of_ainauts_and_their_ai_companions_exploring__9c61adff-9a55-4fc3-a6c7-eae0deac9514-0_2.png';

/**
 * Image of A team of AInauts and their AI companions exploring a massive, ancient space station orbiting a distant planet.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ATeamOfAinautsAndTheirAiCompanionsExploring9c61adff9a554fc3A6c7Eae0deac95140_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A team of AInauts and their AI companions exploring a massive, ancient space station orbiting a distant planet."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ATeamOfAinautsAndTheirAiCompanionsExploring9c61adff9a554fc3A6c7Eae0deac95140_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ATeamOfAinautsAndTheirAiCompanionsExploring9c61adff9a554fc3A6c7Eae0deac95140_2_Image.colorStats = {
    averageColor: Color.fromHex('#5e5951'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#dd4411'), Color.fromHex('#ccffff')],
    minmaxGreen: [Color.fromHex('#448877'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#226699'), Color.fromHex('#ffffbb')],
    mostFrequentColor: Color.fromHex('#221111'),
    mostSaturatedColor: Color.fromHex('#110000'),
    mostGroupedColor: Color.fromHex('#335566'),
    bottom: {
        averageColor: Color.fromHex('#484f4f'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#aa4411'), Color.fromHex('#ccffff')],
        minmaxGreen: [Color.fromHex('#448877'), Color.fromHex('#ffeeff')],
        minmaxBlue: [Color.fromHex('#225577'), Color.fromHex('#ffffcc')],
        mostFrequentColor: Color.fromHex('#221111'),
        mostSaturatedColor: Color.fromHex('#110000'),
        mostGroupedColor: Color.fromHex('#335566'),
    },
} satisfies IImageColorStats;
