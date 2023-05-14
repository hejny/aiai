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
import colorStats from './Pavol_Hejn_a_group_of_ainauts_in_a_space_station_watching_as_a__34856e47-1065-431e-ab4e-d93d0f1bb975-0_2.colors.json';
import content from './Pavol_Hejn_a_group_of_ainauts_in_a_space_station_watching_as_a__34856e47-1065-431e-ab4e-d93d0f1bb975-0_2.content.md';
import metadata from './Pavol_Hejn_a_group_of_ainauts_in_a_space_station_watching_as_a__34856e47-1065-431e-ab4e-d93d0f1bb975-0_2.json';

/**
 * Image of A group of AInauts in a space station watching as a massive asteroid hurtles towards Earth, with only their AI and technology to save them.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AGroupOfAinautsInASpaceStationWatchingAsA34856e471065431eAb4eD93d0f1bb9750_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A group of AInauts in a space station watching as a massive asteroid hurtles towards Earth, with only their AI and technology to save them."
            src="https://cdn.midjourney.com/34856e47-1065-431e-ab4e-d93d0f1bb975/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AGroupOfAinautsInASpaceStationWatchingAsA34856e471065431eAb4eD93d0f1bb9750_2_Image.src = new URL(
    'https://cdn.midjourney.com/34856e47-1065-431e-ab4e-d93d0f1bb975/0_2.png',
);
AGroupOfAinautsInASpaceStationWatchingAsA34856e471065431eAb4eD93d0f1bb9750_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AGroupOfAinautsInASpaceStationWatchingAsA34856e471065431eAb4eD93d0f1bb9750_2_Image.colorStats =
    hydrateColorStats(colorStats);
AGroupOfAinautsInASpaceStationWatchingAsA34856e471065431eAb4eD93d0f1bb9750_2_Image.content = content;
