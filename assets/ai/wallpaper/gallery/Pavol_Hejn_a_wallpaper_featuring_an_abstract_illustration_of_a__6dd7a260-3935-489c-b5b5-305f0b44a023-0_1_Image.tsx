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
import colorStats from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_a__6dd7a260-3935-489c-b5b5-305f0b44a023-0_1.colors.json';
import content from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_a__6dd7a260-3935-489c-b5b5-305f0b44a023-0_1.content.md';
import metadata from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_a__6dd7a260-3935-489c-b5b5-305f0b44a023-0_1.json';

/**
 * Image of A wallpaper featuring an abstract illustration of a dark and futuristic cityscape, with glowing lights and skyscrapers.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingAnAbstractIllustrationOfA6dd7a2603935489cB5b5305f0b44a0230_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper featuring an abstract illustration of a dark and futuristic cityscape, with glowing lights and skyscrapers."
            src="https://cdn.midjourney.com/6dd7a260-3935-489c-b5b5-305f0b44a023/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AWallpaperFeaturingAnAbstractIllustrationOfA6dd7a2603935489cB5b5305f0b44a0230_1_Image.src = new URL(
    'https://cdn.midjourney.com/6dd7a260-3935-489c-b5b5-305f0b44a023/0_1.png',
);
AWallpaperFeaturingAnAbstractIllustrationOfA6dd7a2603935489cB5b5305f0b44a0230_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingAnAbstractIllustrationOfA6dd7a2603935489cB5b5305f0b44a0230_1_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperFeaturingAnAbstractIllustrationOfA6dd7a2603935489cB5b5305f0b44a0230_1_Image.content = content;
