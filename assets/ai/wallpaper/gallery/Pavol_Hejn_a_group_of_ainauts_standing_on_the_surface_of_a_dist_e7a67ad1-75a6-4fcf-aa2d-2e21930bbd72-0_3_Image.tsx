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
import colorStats from './Pavol_Hejn_a_group_of_ainauts_standing_on_the_surface_of_a_dist_e7a67ad1-75a6-4fcf-aa2d-2e21930bbd72-0_3.colors.json';
import content from './Pavol_Hejn_a_group_of_ainauts_standing_on_the_surface_of_a_dist_e7a67ad1-75a6-4fcf-aa2d-2e21930bbd72-0_3.content.md';
import metadata from './Pavol_Hejn_a_group_of_ainauts_standing_on_the_surface_of_a_dist_e7a67ad1-75a6-4fcf-aa2d-2e21930bbd72-0_3.json';

/**
 * Image of A group of AInauts standing on the surface of a distant planet, with a massive, alien structure towering above them.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AGroupOfAinautsStandingOnTheSurfaceOfADistE7a67ad175a64fcfAa2d2e21930bbd720_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A group of AInauts standing on the surface of a distant planet, with a massive, alien structure towering above them."
            src="https://cdn.midjourney.com/e7a67ad1-75a6-4fcf-aa2d-2e21930bbd72/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AGroupOfAinautsStandingOnTheSurfaceOfADistE7a67ad175a64fcfAa2d2e21930bbd720_3_Image.src = new URL(
    'https://cdn.midjourney.com/e7a67ad1-75a6-4fcf-aa2d-2e21930bbd72/0_3.png',
);
AGroupOfAinautsStandingOnTheSurfaceOfADistE7a67ad175a64fcfAa2d2e21930bbd720_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AGroupOfAinautsStandingOnTheSurfaceOfADistE7a67ad175a64fcfAa2d2e21930bbd720_3_Image.colorStats =
    hydrateColorStats(colorStats);
AGroupOfAinautsStandingOnTheSurfaceOfADistE7a67ad175a64fcfAa2d2e21930bbd720_3_Image.content = content;
