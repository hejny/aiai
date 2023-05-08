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
import metadata from './Pavol_Hejn_a_team_of_ainauts_launching_a_rocket_into_space_with_a2a9c459-3f6a-4d2a-9547-1a24a11a0378-0_0.json';
import source from './Pavol_Hejn_a_team_of_ainauts_launching_a_rocket_into_space_with_a2a9c459-3f6a-4d2a-9547-1a24a11a0378-0_0.png';

/**
 * Image of A team of AInauts launching a rocket into space, with the Earth visible in the background.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function ATeamOfAinautsLaunchingARocketIntoSpaceWithA2a9c4593f6a4d2a95471a24a11a03780_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A team of AInauts launching a rocket into space, with the Earth visible in the background."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ATeamOfAinautsLaunchingARocketIntoSpaceWithA2a9c4593f6a4d2a95471a24a11a03780_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ATeamOfAinautsLaunchingARocketIntoSpaceWithA2a9c4593f6a4d2a95471a24a11a03780_0_Image.colorStats = {
    averageColor: Color.fromHex('#8a8785'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#221100'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#330000')],
    minmaxRed: [Color.fromHex('#aa4411'), Color.fromHex('#ffffff')],
    minmaxGreen: [Color.fromHex('#557777'), Color.fromHex('#ffffff')],
    minmaxBlue: [Color.fromHex('#445577'), Color.fromHex('#ffffcc')],
    mostFrequentColor: Color.fromHex('#223344'),
    mostSaturatedColor: Color.fromHex('#330000'),
    mostGroupedColor: Color.fromHex('#334455'),
    bottom: {
        averageColor: Color.fromHex('#958c86'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#221100'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#330000')],
        minmaxRed: [Color.fromHex('#aa5544'), Color.fromHex('#eeffff')],
        minmaxGreen: [Color.fromHex('#446666'), Color.fromHex('#ffffff')],
        minmaxBlue: [Color.fromHex('#334466'), Color.fromHex('#ffffcc')],
        mostFrequentColor: Color.fromHex('#223344'),
        mostSaturatedColor: Color.fromHex('#330000'),
        mostGroupedColor: Color.fromHex('#445566'),
    },
} satisfies IImageColorStats;
