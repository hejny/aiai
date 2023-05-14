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
import colorStats from './Pavol_Hejn_a_surreal_image_of_a_floating_island_with_a_waterfal_dca7be3d-9085-4f60-a9bd-168d5bcd3cc9-0_1.colors.json';
import content from './Pavol_Hejn_a_surreal_image_of_a_floating_island_with_a_waterfal_dca7be3d-9085-4f60-a9bd-168d5bcd3cc9-0_1.content.md';
import metadata from './Pavol_Hejn_a_surreal_image_of_a_floating_island_with_a_waterfal_dca7be3d-9085-4f60-a9bd-168d5bcd3cc9-0_1.json';

/**
 * Image of A surreal image of a floating island with a waterfall for a travel blog or agency
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function ASurrealImageOfAFloatingIslandWithAWaterfalDca7be3d90854f60A9bd168d5bcd3cc90_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A surreal image of a floating island with a waterfall for a travel blog or agency"
            src="https://cdn.midjourney.com/dca7be3d-9085-4f60-a9bd-168d5bcd3cc9/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
ASurrealImageOfAFloatingIslandWithAWaterfalDca7be3d90854f60A9bd168d5bcd3cc90_1_Image.src = new URL(
    'https://cdn.midjourney.com/dca7be3d-9085-4f60-a9bd-168d5bcd3cc9/0_1.png',
);
ASurrealImageOfAFloatingIslandWithAWaterfalDca7be3d90854f60A9bd168d5bcd3cc90_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ASurrealImageOfAFloatingIslandWithAWaterfalDca7be3d90854f60A9bd168d5bcd3cc90_1_Image.colorStats =
    hydrateColorStats(colorStats);
ASurrealImageOfAFloatingIslandWithAWaterfalDca7be3d90854f60A9bd168d5bcd3cc90_1_Image.content = content;
