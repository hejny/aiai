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
import metadata from './Pavol_Hejn_a_team_of_ainauts_piloting_a_small_spacecraft_throug_9aabd419-f135-40c6-b997-9dc4f58923a9-0_2.json';
import source from './Pavol_Hejn_a_team_of_ainauts_piloting_a_small_spacecraft_throug_9aabd419-f135-40c6-b997-9dc4f58923a9-0_2.png';

/**
 * Image of A team of AInauts piloting a small spacecraft through a dangerous asteroid field, with debris flying all around them.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ATeamOfAinautsPilotingASmallSpacecraftThroug9aabd419F13540c6B9979dc4f58923a90_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A team of AInauts piloting a small spacecraft through a dangerous asteroid field, with debris flying all around them."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ATeamOfAinautsPilotingASmallSpacecraftThroug9aabd419F13540c6B9979dc4f58923a90_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ATeamOfAinautsPilotingASmallSpacecraftThroug9aabd419F13540c6B9979dc4f58923a90_2_Image.colorStats = {
    averageColor: Color.fromHex('#565052'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#cc3311'), Color.fromHex('#ddffff')],
    minmaxGreen: [Color.fromHex('#778866'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#335577'), Color.fromHex('#ffffcc')],
    mostFrequentColor: Color.fromHex('#110011'),
    mostSaturatedColor: Color.fromHex('#331100'),
    mostGroupedColor: Color.fromHex('#112233'),
    bottom: {
        averageColor: Color.fromHex('#474145'),
        lightestColor: Color.fromHex('#eeffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#cc3311'), Color.fromHex('#ddffff')],
        minmaxGreen: [Color.fromHex('#889977'), Color.fromHex('#eeeeff')],
        minmaxBlue: [Color.fromHex('#445577'), Color.fromHex('#ffffdd')],
        mostFrequentColor: Color.fromHex('#110011'),
        mostSaturatedColor: Color.fromHex('#331100'),
        mostGroupedColor: Color.fromHex('#110011'),
    },
} satisfies IImageColorStats;
