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
import colorStats from './Pavol_Hejn_an_impressionist_style_painting_of_a_futuristic_city_85a1d760-f66a-4382-9228-545a1df4a55b-0_1.colors.json';
import content from './Pavol_Hejn_an_impressionist_style_painting_of_a_futuristic_city_85a1d760-f66a-4382-9228-545a1df4a55b-0_1.content.md';
import metadata from './Pavol_Hejn_an_impressionist_style_painting_of_a_futuristic_city_85a1d760-f66a-4382-9228-545a1df4a55b-0_1.json';

/**
 * Image of An impressionist-style painting of a futuristic cityscape, with blurred lines and bold colors creating a dreamy effect.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AnImpressionistStylePaintingOfAFuturisticCity85a1d760F66a43829228545a1df4a55b0_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An impressionist-style painting of a futuristic cityscape, with blurred lines and bold colors creating a dreamy effect."
            src="https://cdn.midjourney.com/85a1d760-f66a-4382-9228-545a1df4a55b/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AnImpressionistStylePaintingOfAFuturisticCity85a1d760F66a43829228545a1df4a55b0_1_Image.src = new URL(
    'https://cdn.midjourney.com/85a1d760-f66a-4382-9228-545a1df4a55b/0_1.png',
);
AnImpressionistStylePaintingOfAFuturisticCity85a1d760F66a43829228545a1df4a55b0_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnImpressionistStylePaintingOfAFuturisticCity85a1d760F66a43829228545a1df4a55b0_1_Image.colorStats =
    hydrateColorStats(colorStats);
AnImpressionistStylePaintingOfAFuturisticCity85a1d760F66a43829228545a1df4a55b0_1_Image.content = content;
