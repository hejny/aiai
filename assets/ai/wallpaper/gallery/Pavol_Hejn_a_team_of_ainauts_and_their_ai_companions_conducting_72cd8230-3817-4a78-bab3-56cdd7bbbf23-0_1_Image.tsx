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
import metadata from './Pavol_Hejn_a_team_of_ainauts_and_their_ai_companions_conducting_72cd8230-3817-4a78-bab3-56cdd7bbbf23-0_1.json';
import source from './Pavol_Hejn_a_team_of_ainauts_and_their_ai_companions_conducting_72cd8230-3817-4a78-bab3-56cdd7bbbf23-0_1.png';

/**
 * Image of A team of AInauts and their AI companions conducting experiments on the surface of a massive, gas giant planet.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function ATeamOfAinautsAndTheirAiCompanionsConducting72cd823038174a78Bab356cdd7bbbf230_1_Image(
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

ATeamOfAinautsAndTheirAiCompanionsConducting72cd823038174a78Bab356cdd7bbbf230_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ATeamOfAinautsAndTheirAiCompanionsConducting72cd823038174a78Bab356cdd7bbbf230_1_Image.colorStats = {
    averageColor: Color.fromHex('#8d827b'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#221100'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#001111')],
    minmaxRed: [Color.fromHex('#bb2200'), Color.fromHex('#ccffff')],
    minmaxGreen: [Color.fromHex('#999955'), Color.fromHex('#ffffff')],
    minmaxBlue: [Color.fromHex('#225599'), Color.fromHex('#ffffdd')],
    mostFrequentColor: Color.fromHex('#774422'),
    mostSaturatedColor: Color.fromHex('#883300'),
    mostGroupedColor: Color.fromHex('#446688'),
    bottom: {
        averageColor: Color.fromHex('#9f7b65'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#221100'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#221100')],
        minmaxRed: [Color.fromHex('#bb2200'), Color.fromHex('#eeffff')],
        minmaxGreen: [Color.fromHex('#779988'), Color.fromHex('#ffffff')],
        minmaxBlue: [Color.fromHex('#225588'), Color.fromHex('#ffffdd')],
        mostFrequentColor: Color.fromHex('#774422'),
        mostSaturatedColor: Color.fromHex('#883300'),
        mostGroupedColor: Color.fromHex('#ddddcc'),
    },
} satisfies IImageColorStats;
