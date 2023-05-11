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
import metadata from './Pavol_Hejn_a_team_of_ainauts_working_tirelessly_in_a_massive_ai_b077b00e-0e5a-4f5f-9506-bb54de31a273-0_0.json';
import source from './Pavol_Hejn_a_team_of_ainauts_working_tirelessly_in_a_massive_ai_b077b00e-0e5a-4f5f-9506-bb54de31a273-0_0.png';

/**
 * Image of A team of AInauts working tirelessly in a massive AI factory, creating new and innovative technologies for the future.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function ATeamOfAinautsWorkingTirelesslyInAMassiveAiB077b00e0e5a4f5f9506Bb54de31a2730_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A team of AInauts working tirelessly in a massive AI factory, creating new and innovative technologies for the future."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ATeamOfAinautsWorkingTirelesslyInAMassiveAiB077b00e0e5a4f5f9506Bb54de31a2730_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ATeamOfAinautsWorkingTirelesslyInAMassiveAiB077b00e0e5a4f5f9506Bb54de31a2730_0_Image.colorStats = {
    averageColor: Color.fromHex('#325a74'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#001111'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000011')],
    minmaxRed: [Color.fromHex('#dd4444'), Color.fromHex('#44ffff')],
    minmaxGreen: [Color.fromHex('#11aa99'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#115599'), Color.fromHex('#ffffaa')],
    mostFrequentColor: Color.fromHex('#113344'),
    mostSaturatedColor: Color.fromHex('#001122'),
    mostGroupedColor: Color.fromHex('#001111'),
    bottom: {
        averageColor: Color.fromHex('#204961'),
        lightestColor: Color.fromHex('#eeffff'),
        darkestColor: Color.fromHex('#001111'),
        minmaxWhite: [Color.fromHex('#eeffff'), Color.fromHex('#000011')],
        minmaxRed: [Color.fromHex('#443344'), Color.fromHex('#11ddff')],
        minmaxGreen: [Color.fromHex('#11aa99'), Color.fromHex('#eeeeff')],
        minmaxBlue: [Color.fromHex('#115599'), Color.fromHex('#eeffee')],
        mostFrequentColor: Color.fromHex('#113344'),
        mostSaturatedColor: Color.fromHex('#001122'),
        mostGroupedColor: Color.fromHex('#001111'),
    },
} satisfies IImageColorStats;
