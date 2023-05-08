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
import metadata from './Pavol_Hejn_a_team_of_ainauts_and_their_ai_companions_conducting_7b773780-4236-41e8-b737-cda780c9c1a3-0_1.json';
import source from './Pavol_Hejn_a_team_of_ainauts_and_their_ai_companions_conducting_7b773780-4236-41e8-b737-cda780c9c1a3-0_1.png';

/**
 * Image of A team of AInauts and their AI companions conducting experiments on the surface of a massive, gas giant planet.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function ATeamOfAinautsAndTheirAiCompanionsConducting7b773780423641e8B737Cda780c9c1a30_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A team of AInauts and their AI companions conducting experiments on the surface of a massive, gas giant planet."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ATeamOfAinautsAndTheirAiCompanionsConducting7b773780423641e8B737Cda780c9c1a30_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ATeamOfAinautsAndTheirAiCompanionsConducting7b773780423641e8B737Cda780c9c1a30_1_Image.colorStats = {
    averageColor: Color.fromHex('#5f4d43'),
    lightestColor: Color.fromHex('#ffeeee'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#993300'), Color.fromHex('#ffffee')],
    minmaxGreen: [Color.fromHex('#777755'), Color.fromHex('#ffeeee')],
    minmaxBlue: [Color.fromHex('#445566'), Color.fromHex('#ffffcc')],
    mostFrequentColor: Color.fromHex('#221111'),
    mostSaturatedColor: Color.fromHex('#993300'),
    mostGroupedColor: Color.fromHex('#332222'),
    bottom: {
        averageColor: Color.fromHex('#5c3d2c'),
        lightestColor: Color.fromHex('#ffddcc'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffddcc'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#aa4411'), Color.fromHex('#eeddcc')],
        minmaxGreen: [Color.fromHex('#777755'), Color.fromHex('#ffddcc')],
        minmaxBlue: [Color.fromHex('#555566'), Color.fromHex('#ffaa44')],
        mostFrequentColor: Color.fromHex('#221111'),
        mostSaturatedColor: Color.fromHex('#331100'),
        mostGroupedColor: Color.fromHex('#221111'),
    },
} satisfies IImageColorStats;
