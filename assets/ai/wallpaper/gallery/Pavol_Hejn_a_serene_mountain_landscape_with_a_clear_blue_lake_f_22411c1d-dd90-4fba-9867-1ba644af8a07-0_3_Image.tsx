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
import colorStats from './Pavol_Hejn_a_serene_mountain_landscape_with_a_clear_blue_lake_f_22411c1d-dd90-4fba-9867-1ba644af8a07-0_3.colors.json';
import content from './Pavol_Hejn_a_serene_mountain_landscape_with_a_clear_blue_lake_f_22411c1d-dd90-4fba-9867-1ba644af8a07-0_3.content.md';
import metadata from './Pavol_Hejn_a_serene_mountain_landscape_with_a_clear_blue_lake_f_22411c1d-dd90-4fba-9867-1ba644af8a07-0_3.json';

/**
 * Image of A serene mountain landscape with a clear blue lake for a meditation or wellness website
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function ASereneMountainLandscapeWithAClearBlueLakeF22411c1dDd904fba98671ba644af8a070_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A serene mountain landscape with a clear blue lake for a meditation or wellness website"
            src="https://cdn.midjourney.com/22411c1d-dd90-4fba-9867-1ba644af8a07/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
ASereneMountainLandscapeWithAClearBlueLakeF22411c1dDd904fba98671ba644af8a070_3_Image.src = new URL(
    'https://cdn.midjourney.com/22411c1d-dd90-4fba-9867-1ba644af8a07/0_3.png',
);
ASereneMountainLandscapeWithAClearBlueLakeF22411c1dDd904fba98671ba644af8a070_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ASereneMountainLandscapeWithAClearBlueLakeF22411c1dDd904fba98671ba644af8a070_3_Image.colorStats =
    hydrateColorStats(colorStats);
ASereneMountainLandscapeWithAClearBlueLakeF22411c1dDd904fba98671ba644af8a070_3_Image.content = content;
