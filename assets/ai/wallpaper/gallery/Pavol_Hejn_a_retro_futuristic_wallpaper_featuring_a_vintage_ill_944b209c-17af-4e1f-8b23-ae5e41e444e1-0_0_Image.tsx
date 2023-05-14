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
import colorStats from './Pavol_Hejn_a_retro_futuristic_wallpaper_featuring_a_vintage_ill_944b209c-17af-4e1f-8b23-ae5e41e444e1-0_0.colors.json';
import content from './Pavol_Hejn_a_retro_futuristic_wallpaper_featuring_a_vintage_ill_944b209c-17af-4e1f-8b23-ae5e41e444e1-0_0.content.md';
import metadata from './Pavol_Hejn_a_retro_futuristic_wallpaper_featuring_a_vintage_ill_944b209c-17af-4e1f-8b23-ae5e41e444e1-0_0.json';

/**
 * Image of A retro-futuristic wallpaper featuring a vintage illustration of a robot, set against a neon-colored background.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function ARetroFuturisticWallpaperFeaturingAVintageIll944b209c17af4e1f8b23Ae5e41e444e10_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A retro-futuristic wallpaper featuring a vintage illustration of a robot, set against a neon-colored background."
            src="https://cdn.midjourney.com/944b209c-17af-4e1f-8b23-ae5e41e444e1/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
ARetroFuturisticWallpaperFeaturingAVintageIll944b209c17af4e1f8b23Ae5e41e444e10_0_Image.src = new URL(
    'https://cdn.midjourney.com/944b209c-17af-4e1f-8b23-ae5e41e444e1/0_0.png',
);
ARetroFuturisticWallpaperFeaturingAVintageIll944b209c17af4e1f8b23Ae5e41e444e10_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ARetroFuturisticWallpaperFeaturingAVintageIll944b209c17af4e1f8b23Ae5e41e444e10_0_Image.colorStats =
    hydrateColorStats(colorStats);
ARetroFuturisticWallpaperFeaturingAVintageIll944b209c17af4e1f8b23Ae5e41e444e10_0_Image.content = content;
