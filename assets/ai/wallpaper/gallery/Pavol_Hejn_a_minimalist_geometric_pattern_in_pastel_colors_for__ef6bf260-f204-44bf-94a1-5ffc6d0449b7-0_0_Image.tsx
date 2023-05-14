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
import colorStats from './Pavol_Hejn_a_minimalist_geometric_pattern_in_pastel_colors_for__ef6bf260-f204-44bf-94a1-5ffc6d0449b7-0_0.colors.json';
import content from './Pavol_Hejn_a_minimalist_geometric_pattern_in_pastel_colors_for__ef6bf260-f204-44bf-94a1-5ffc6d0449b7-0_0.content.md';
import metadata from './Pavol_Hejn_a_minimalist_geometric_pattern_in_pastel_colors_for__ef6bf260-f204-44bf-94a1-5ffc6d0449b7-0_0.json';

/**
 * Image of A minimalist geometric pattern in pastel colors for a fashion or beauty website
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AMinimalistGeometricPatternInPastelColorsForEf6bf260F20444bf94a15ffc6d0449b70_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A minimalist geometric pattern in pastel colors for a fashion or beauty website"
            src="https://cdn.midjourney.com/ef6bf260-f204-44bf-94a1-5ffc6d0449b7/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AMinimalistGeometricPatternInPastelColorsForEf6bf260F20444bf94a15ffc6d0449b70_0_Image.src = new URL(
    'https://cdn.midjourney.com/ef6bf260-f204-44bf-94a1-5ffc6d0449b7/0_0.png',
);
AMinimalistGeometricPatternInPastelColorsForEf6bf260F20444bf94a15ffc6d0449b70_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AMinimalistGeometricPatternInPastelColorsForEf6bf260F20444bf94a15ffc6d0449b70_0_Image.colorStats =
    hydrateColorStats(colorStats);
AMinimalistGeometricPatternInPastelColorsForEf6bf260F20444bf94a15ffc6d0449b70_0_Image.content = content;
