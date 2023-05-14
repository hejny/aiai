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
import colorStats from './Pavol_Hejn_a_wallpaper_featuring_a_colorful_fractal_pattern_wit_47ddf7d7-ccd2-4cb5-95d4-c46ff2b7f218-0_0.colors.json';
import content from './Pavol_Hejn_a_wallpaper_featuring_a_colorful_fractal_pattern_wit_47ddf7d7-ccd2-4cb5-95d4-c46ff2b7f218-0_0.content.md';
import metadata from './Pavol_Hejn_a_wallpaper_featuring_a_colorful_fractal_pattern_wit_47ddf7d7-ccd2-4cb5-95d4-c46ff2b7f218-0_0.json';

/**
 * Image of A wallpaper featuring a colorful fractal pattern, with intricate lines and bold colors.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingAColorfulFractalPatternWit47ddf7d7Ccd24cb595d4C46ff2b7f2180_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper featuring a colorful fractal pattern, with intricate lines and bold colors."
            src="https://cdn.midjourney.com/47ddf7d7-ccd2-4cb5-95d4-c46ff2b7f218/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AWallpaperFeaturingAColorfulFractalPatternWit47ddf7d7Ccd24cb595d4C46ff2b7f2180_0_Image.src = new URL(
    'https://cdn.midjourney.com/47ddf7d7-ccd2-4cb5-95d4-c46ff2b7f218/0_0.png',
);
AWallpaperFeaturingAColorfulFractalPatternWit47ddf7d7Ccd24cb595d4C46ff2b7f2180_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingAColorfulFractalPatternWit47ddf7d7Ccd24cb595d4C46ff2b7f2180_0_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperFeaturingAColorfulFractalPatternWit47ddf7d7Ccd24cb595d4C46ff2b7f2180_0_Image.content = content;
