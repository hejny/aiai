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
import colorStats from './Pavol_Hejn_a_wallpaper_featuring_a_minimalist_graphic_of_a_robo_1e5a462c-3526-41cd-b385-0b966dbd638c-0_2.colors.json';
import content from './Pavol_Hejn_a_wallpaper_featuring_a_minimalist_graphic_of_a_robo_1e5a462c-3526-41cd-b385-0b966dbd638c-0_2.content.md';
import metadata from './Pavol_Hejn_a_wallpaper_featuring_a_minimalist_graphic_of_a_robo_1e5a462c-3526-41cd-b385-0b966dbd638c-0_2.json';

/**
 * Image of A wallpaper featuring a minimalist graphic of a robot hand holding a stylus or pen, with a space for taking notes or sketching ideas.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingAMinimalistGraphicOfARobo1e5a462c352641cdB3850b966dbd638c0_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper featuring a minimalist graphic of a robot hand holding a stylus or pen, with a space for taking notes or sketching ideas."
            src="https://cdn.midjourney.com/1e5a462c-3526-41cd-b385-0b966dbd638c/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AWallpaperFeaturingAMinimalistGraphicOfARobo1e5a462c352641cdB3850b966dbd638c0_2_Image.src = new URL(
    'https://cdn.midjourney.com/1e5a462c-3526-41cd-b385-0b966dbd638c/0_2.png',
);
AWallpaperFeaturingAMinimalistGraphicOfARobo1e5a462c352641cdB3850b966dbd638c0_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingAMinimalistGraphicOfARobo1e5a462c352641cdB3850b966dbd638c0_2_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperFeaturingAMinimalistGraphicOfARobo1e5a462c352641cdB3850b966dbd638c0_2_Image.content = content;
