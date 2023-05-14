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
import colorStats from './Pavol_Hejn_a_wallpaper_featuring_a_stylized_illustration_of_a_f_3f51309c-b1e0-4c52-9b2b-fb3e2eaf87ce-0_1.colors.json';
import content from './Pavol_Hejn_a_wallpaper_featuring_a_stylized_illustration_of_a_f_3f51309c-b1e0-4c52-9b2b-fb3e2eaf87ce-0_1.content.md';
import metadata from './Pavol_Hejn_a_wallpaper_featuring_a_stylized_illustration_of_a_f_3f51309c-b1e0-4c52-9b2b-fb3e2eaf87ce-0_1.json';

/**
 * Image of A wallpaper featuring a stylized illustration of a futuristic workspace, with a minimalist and modern design, set against a gradient background.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingAStylizedIllustrationOfAF3f51309cB1e04c529b2bFb3e2eaf87ce0_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper featuring a stylized illustration of a futuristic workspace, with a minimalist and modern design, set against a gradient background."
            src="https://cdn.midjourney.com/3f51309c-b1e0-4c52-9b2b-fb3e2eaf87ce/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AWallpaperFeaturingAStylizedIllustrationOfAF3f51309cB1e04c529b2bFb3e2eaf87ce0_1_Image.src = new URL(
    'https://cdn.midjourney.com/3f51309c-b1e0-4c52-9b2b-fb3e2eaf87ce/0_1.png',
);
AWallpaperFeaturingAStylizedIllustrationOfAF3f51309cB1e04c529b2bFb3e2eaf87ce0_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingAStylizedIllustrationOfAF3f51309cB1e04c529b2bFb3e2eaf87ce0_1_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperFeaturingAStylizedIllustrationOfAF3f51309cB1e04c529b2bFb3e2eaf87ce0_1_Image.content = content;
