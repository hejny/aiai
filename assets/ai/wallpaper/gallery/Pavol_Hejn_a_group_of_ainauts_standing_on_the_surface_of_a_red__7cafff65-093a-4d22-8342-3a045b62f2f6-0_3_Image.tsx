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
import colorStats from './Pavol_Hejn_a_group_of_ainauts_standing_on_the_surface_of_a_red__7cafff65-093a-4d22-8342-3a045b62f2f6-0_3.colors.json';
import content from './Pavol_Hejn_a_group_of_ainauts_standing_on_the_surface_of_a_red__7cafff65-093a-4d22-8342-3a045b62f2f6-0_3.content.md';
import metadata from './Pavol_Hejn_a_group_of_ainauts_standing_on_the_surface_of_a_red__7cafff65-093a-4d22-8342-3a045b62f2f6-0_3.json';

/**
 * Image of A group of AInauts standing on the surface of a red planet, with towering dust storms raging in the distance.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AGroupOfAinautsStandingOnTheSurfaceOfARed7cafff65093a4d2283423a045b62f2f60_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A group of AInauts standing on the surface of a red planet, with towering dust storms raging in the distance."
            src="https://cdn.midjourney.com/7cafff65-093a-4d22-8342-3a045b62f2f6/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AGroupOfAinautsStandingOnTheSurfaceOfARed7cafff65093a4d2283423a045b62f2f60_3_Image.src = new URL(
    'https://cdn.midjourney.com/7cafff65-093a-4d22-8342-3a045b62f2f6/0_3.png',
);
AGroupOfAinautsStandingOnTheSurfaceOfARed7cafff65093a4d2283423a045b62f2f60_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AGroupOfAinautsStandingOnTheSurfaceOfARed7cafff65093a4d2283423a045b62f2f60_3_Image.colorStats =
    hydrateColorStats(colorStats);
AGroupOfAinautsStandingOnTheSurfaceOfARed7cafff65093a4d2283423a045b62f2f60_3_Image.content = content;
