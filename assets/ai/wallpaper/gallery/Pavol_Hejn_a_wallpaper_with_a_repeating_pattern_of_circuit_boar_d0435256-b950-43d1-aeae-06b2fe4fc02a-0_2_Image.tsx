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
import colorStats from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_circuit_boar_d0435256-b950-43d1-aeae-06b2fe4fc02a-0_2.colors.json';
import content from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_circuit_boar_d0435256-b950-43d1-aeae-06b2fe4fc02a-0_2.content.md';
import metadata from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_circuit_boar_d0435256-b950-43d1-aeae-06b2fe4fc02a-0_2.json';

/**
 * Image of A wallpaper with a repeating pattern of circuit board components, in shades of black, grey, and neon green.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithARepeatingPatternOfCircuitBoarD0435256B95043d1Aeae06b2fe4fc02a0_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a repeating pattern of circuit board components, in shades of black, grey, and neon green."
            src="https://cdn.midjourney.com/d0435256-b950-43d1-aeae-06b2fe4fc02a/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AWallpaperWithARepeatingPatternOfCircuitBoarD0435256B95043d1Aeae06b2fe4fc02a0_2_Image.src = new URL(
    'https://cdn.midjourney.com/d0435256-b950-43d1-aeae-06b2fe4fc02a/0_2.png',
);
AWallpaperWithARepeatingPatternOfCircuitBoarD0435256B95043d1Aeae06b2fe4fc02a0_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithARepeatingPatternOfCircuitBoarD0435256B95043d1Aeae06b2fe4fc02a0_2_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperWithARepeatingPatternOfCircuitBoarD0435256B95043d1Aeae06b2fe4fc02a0_2_Image.content = content;
