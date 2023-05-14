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
import colorStats from './Pavol_Hejn_a_surrealist_inspired_wallpaper_with_floating_object_2de16b73-6889-4692-aa11-0fce4396fc3a-0_2.colors.json';
import content from './Pavol_Hejn_a_surrealist_inspired_wallpaper_with_floating_object_2de16b73-6889-4692-aa11-0fce4396fc3a-0_2.content.md';
import metadata from './Pavol_Hejn_a_surrealist_inspired_wallpaper_with_floating_object_2de16b73-6889-4692-aa11-0fce4396fc3a-0_2.json';

/**
 * Image of A surrealist-inspired wallpaper with floating objects such as gears, cogs, and computer parts, against a background of muted colors.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ASurrealistInspiredWallpaperWithFloatingObjectde16b7368894692Aa110fce4396fc3a02_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A surrealist-inspired wallpaper with floating objects such as gears, cogs, and computer parts, against a background of muted colors."
            src="https://cdn.midjourney.com/2de16b73-6889-4692-aa11-0fce4396fc3a/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
ASurrealistInspiredWallpaperWithFloatingObjectde16b7368894692Aa110fce4396fc3a02_2_Image.src = new URL(
    'https://cdn.midjourney.com/2de16b73-6889-4692-aa11-0fce4396fc3a/0_2.png',
);
ASurrealistInspiredWallpaperWithFloatingObjectde16b7368894692Aa110fce4396fc3a02_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ASurrealistInspiredWallpaperWithFloatingObjectde16b7368894692Aa110fce4396fc3a02_2_Image.colorStats =
    hydrateColorStats(colorStats);
ASurrealistInspiredWallpaperWithFloatingObjectde16b7368894692Aa110fce4396fc3a02_2_Image.content = content;
