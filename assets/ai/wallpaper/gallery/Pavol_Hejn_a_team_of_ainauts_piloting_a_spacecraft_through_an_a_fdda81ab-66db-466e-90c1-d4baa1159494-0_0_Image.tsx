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
import metadata from './Pavol_Hejn_a_team_of_ainauts_piloting_a_spacecraft_through_an_a_fdda81ab-66db-466e-90c1-d4baa1159494-0_0.json';
import source from './Pavol_Hejn_a_team_of_ainauts_piloting_a_spacecraft_through_an_a_fdda81ab-66db-466e-90c1-d4baa1159494-0_0.png';

/**
 * Image of A team of AInauts piloting a spacecraft through an asteroid field, with explosions and debris flying all around them.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function ATeamOfAinautsPilotingASpacecraftThroughAnAFdda81ab66db466e90c1D4baa11594940_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A team of AInauts piloting a spacecraft through an asteroid field, with explosions and debris flying all around them."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ATeamOfAinautsPilotingASpacecraftThroughAnAFdda81ab66db466e90c1D4baa11594940_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ATeamOfAinautsPilotingASpacecraftThroughAnAFdda81ab66db466e90c1D4baa11594940_0_Image.colorStats = {
    averageColor: Color.fromHex('#393a42'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#001111'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000011')],
    minmaxRed: [Color.fromHex('#994433'), Color.fromHex('#eeffff')],
    minmaxGreen: [Color.fromHex('#558888'), Color.fromHex('#ffffff')],
    minmaxBlue: [Color.fromHex('#445588'), Color.fromHex('#ffffee')],
    mostFrequentColor: Color.fromHex('#000011'),
    mostSaturatedColor: Color.fromHex('#001111'),
    mostGroupedColor: Color.fromHex('#334455'),
    bottom: {
        averageColor: Color.fromHex('#35373f'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#001111'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000011')],
        minmaxRed: [Color.fromHex('#773322'), Color.fromHex('#ffffff')],
        minmaxGreen: [Color.fromHex('#558888'), Color.fromHex('#ffffff')],
        minmaxBlue: [Color.fromHex('#335577'), Color.fromHex('#ffffee')],
        mostFrequentColor: Color.fromHex('#000011'),
        mostSaturatedColor: Color.fromHex('#001111'),
        mostGroupedColor: Color.fromHex('#111111'),
    },
} satisfies IImageColorStats;
