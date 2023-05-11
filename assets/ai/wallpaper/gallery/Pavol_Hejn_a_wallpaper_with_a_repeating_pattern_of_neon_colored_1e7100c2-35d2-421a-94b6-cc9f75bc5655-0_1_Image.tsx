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
import { IImageColorStats } from '../../../../src/utils/image/utils/IImageColorStats';
import { IWallpaperMetadata, IWallpaperComponentProps } from '../IWallpaperComponent';
import metadata from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_neon_colored_1e7100c2-35d2-421a-94b6-cc9f75bc5655-0_1.json';
import source from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_neon_colored_1e7100c2-35d2-421a-94b6-cc9f75bc5655-0_1.png';

/**
 * Image of A wallpaper with a repeating pattern of neon-colored circuitry, set against a black background.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithARepeatingPatternOfNeonColorede7100c235d2421a94b6Cc9f75bc565501_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a repeating pattern of neon-colored circuitry, set against a black background."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperWithARepeatingPatternOfNeonColorede7100c235d2421a94b6Cc9f75bc565501_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithARepeatingPatternOfNeonColorede7100c235d2421a94b6Cc9f75bc565501_1_Image.colorStats = {
    averageColor: Color.fromHex('#211a1c'),
    lightestColor: Color.fromHex('#ff77ff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#eeffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#ff0011'), Color.fromHex('#00ffff')],
    minmaxGreen: [Color.fromHex('#11cc33'), Color.fromHex('#ee22cc')],
    minmaxBlue: [Color.fromHex('#2211cc'), Color.fromHex('#ffff11')],
    mostFrequentColor: Color.fromHex('#000000'),
    mostSaturatedColor: Color.fromHex('#662200'),
    mostGroupedColor: Color.fromHex('#000000'),
    bottom: {
        averageColor: Color.fromHex('#27181c'),
        lightestColor: Color.fromHex('#ff77ff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#eeffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#ff0011'), Color.fromHex('#00ffff')],
        minmaxGreen: [Color.fromHex('#11cc33'), Color.fromHex('#ee22cc')],
        minmaxBlue: [Color.fromHex('#1133cc'), Color.fromHex('#ffff11')],
        mostFrequentColor: Color.fromHex('#000000'),
        mostSaturatedColor: Color.fromHex('#888800'),
        mostGroupedColor: Color.fromHex('#000000'),
    },
} satisfies IImageColorStats;
