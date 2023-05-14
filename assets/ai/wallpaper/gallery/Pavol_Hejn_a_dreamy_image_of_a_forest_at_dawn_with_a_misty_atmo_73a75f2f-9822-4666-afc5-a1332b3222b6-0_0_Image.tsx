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
import colorStats from './Pavol_Hejn_a_dreamy_image_of_a_forest_at_dawn_with_a_misty_atmo_73a75f2f-9822-4666-afc5-a1332b3222b6-0_0.colors.json';
import content from './Pavol_Hejn_a_dreamy_image_of_a_forest_at_dawn_with_a_misty_atmo_73a75f2f-9822-4666-afc5-a1332b3222b6-0_0.content.md';
import metadata from './Pavol_Hejn_a_dreamy_image_of_a_forest_at_dawn_with_a_misty_atmo_73a75f2f-9822-4666-afc5-a1332b3222b6-0_0.json';

/**
 * Image of A dreamy image of a forest at dawn with a misty atmosphere for a nature or wildlife blog
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function ADreamyImageOfAForestAtDawnWithAMistyAtmo73a75f2f98224666Afc5A1332b3222b60_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A dreamy image of a forest at dawn with a misty atmosphere for a nature or wildlife blog"
            src="https://cdn.midjourney.com/73a75f2f-9822-4666-afc5-a1332b3222b6/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
ADreamyImageOfAForestAtDawnWithAMistyAtmo73a75f2f98224666Afc5A1332b3222b60_0_Image.src = new URL(
    'https://cdn.midjourney.com/73a75f2f-9822-4666-afc5-a1332b3222b6/0_0.png',
);
ADreamyImageOfAForestAtDawnWithAMistyAtmo73a75f2f98224666Afc5A1332b3222b60_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ADreamyImageOfAForestAtDawnWithAMistyAtmo73a75f2f98224666Afc5A1332b3222b60_0_Image.colorStats =
    hydrateColorStats(colorStats);
ADreamyImageOfAForestAtDawnWithAMistyAtmo73a75f2f98224666Afc5A1332b3222b60_0_Image.content = content;
