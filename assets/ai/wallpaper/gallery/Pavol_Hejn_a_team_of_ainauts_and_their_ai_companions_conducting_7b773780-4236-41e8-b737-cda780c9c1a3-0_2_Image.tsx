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
import metadata from './Pavol_Hejn_a_team_of_ainauts_and_their_ai_companions_conducting_7b773780-4236-41e8-b737-cda780c9c1a3-0_2.json';
import source from './Pavol_Hejn_a_team_of_ainauts_and_their_ai_companions_conducting_7b773780-4236-41e8-b737-cda780c9c1a3-0_2.png';

/**
 * Image of A team of AInauts and their AI companions conducting experiments on the surface of a massive, gas giant planet.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ATeamOfAinautsAndTheirAiCompanionsConducting7b773780423641e8B737Cda780c9c1a30_2_Image(
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

ATeamOfAinautsAndTheirAiCompanionsConducting7b773780423641e8B737Cda780c9c1a30_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ATeamOfAinautsAndTheirAiCompanionsConducting7b773780423641e8B737Cda780c9c1a30_2_Image.colorStats = {
    averageColor: Color.fromHex('#847066'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#331100'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#111111')],
    minmaxRed: [Color.fromHex('#dd5533'), Color.fromHex('#eeffff')],
    minmaxGreen: [Color.fromHex('#999977'), Color.fromHex('#ffffff')],
    minmaxBlue: [Color.fromHex('#556677'), Color.fromHex('#ffffff')],
    mostFrequentColor: Color.fromHex('#774433'),
    mostSaturatedColor: Color.fromHex('#331100'),
    mostGroupedColor: Color.fromHex('#dddddd'),
    bottom: {
        averageColor: Color.fromHex('#704b3a'),
        lightestColor: Color.fromHex('#eedddd'),
        darkestColor: Color.fromHex('#331100'),
        minmaxWhite: [Color.fromHex('#eeeecc'), Color.fromHex('#111111')],
        minmaxRed: [Color.fromHex('#dd5533'), Color.fromHex('#eeeecc')],
        minmaxGreen: [Color.fromHex('#777766'), Color.fromHex('#ffddcc')],
        minmaxBlue: [Color.fromHex('#556677'), Color.fromHex('#eeeecc')],
        mostFrequentColor: Color.fromHex('#774433'),
        mostSaturatedColor: Color.fromHex('#331100'),
        mostGroupedColor: Color.fromHex('#331111'),
    },
} satisfies IImageColorStats;
