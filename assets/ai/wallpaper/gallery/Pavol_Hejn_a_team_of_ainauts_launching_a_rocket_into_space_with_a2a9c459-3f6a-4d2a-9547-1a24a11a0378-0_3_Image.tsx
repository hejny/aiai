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
import { colorToDataUrl } from '../../../../src/utils/color/utils/colorToDataUrl';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_team_of_ainauts_launching_a_rocket_into_space_with_a2a9c459-3f6a-4d2a-9547-1a24a11a0378-0_3.colors.json';
import content from './Pavol_Hejn_a_team_of_ainauts_launching_a_rocket_into_space_with_a2a9c459-3f6a-4d2a-9547-1a24a11a0378-0_3.content.md';
import metadata from './Pavol_Hejn_a_team_of_ainauts_launching_a_rocket_into_space_with_a2a9c459-3f6a-4d2a-9547-1a24a11a0378-0_3.json';

/**
 * Image of A team of AInauts launching a rocket into space, with the Earth visible in the background.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function ATeamOfAinautsLaunchingARocketIntoSpaceWithA2a9c4593f6a4d2a95471a24a11a03780_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A team of AInauts launching a rocket into space, with the Earth visible in the background."
            src="https://cdn.midjourney.com/a2a9c459-3f6a-4d2a-9547-1a24a11a0378/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
ATeamOfAinautsLaunchingARocketIntoSpaceWithA2a9c4593f6a4d2a95471a24a11a03780_3_Image.src = new URL(
    'https://cdn.midjourney.com/a2a9c459-3f6a-4d2a-9547-1a24a11a0378/0_3.png',
);
ATeamOfAinautsLaunchingARocketIntoSpaceWithA2a9c4593f6a4d2a95471a24a11a03780_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ATeamOfAinautsLaunchingARocketIntoSpaceWithA2a9c4593f6a4d2a95471a24a11a03780_3_Image.colorStats =
    hydrateColorStats(colorStats);
ATeamOfAinautsLaunchingARocketIntoSpaceWithA2a9c4593f6a4d2a95471a24a11a03780_3_Image.content = content;
