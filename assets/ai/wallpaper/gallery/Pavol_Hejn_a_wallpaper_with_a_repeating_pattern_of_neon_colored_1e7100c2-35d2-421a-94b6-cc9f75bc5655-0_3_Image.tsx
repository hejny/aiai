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
import metadata from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_neon_colored_1e7100c2-35d2-421a-94b6-cc9f75bc5655-0_3.json';
import source from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_neon_colored_1e7100c2-35d2-421a-94b6-cc9f75bc5655-0_3.png';

/**
 * Image of A wallpaper with a repeating pattern of neon-colored circuitry, set against a black background.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithARepeatingPatternOfNeonColored1e7100c235d2421a94b6Cc9f75bc56550_3_Image(
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

AWallpaperWithARepeatingPatternOfNeonColored1e7100c235d2421a94b6Cc9f75bc56550_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithARepeatingPatternOfNeonColored1e7100c235d2421a94b6Cc9f75bc56550_3_Image.colorStats = {
    averageColor: Color.fromHex('#2b1a21'),
    lightestColor: Color.fromHex('#ffeeff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#ff2233'), Color.fromHex('#00ffff')],
    minmaxGreen: [Color.fromHex('#22bb33'), Color.fromHex('#dd22ff')],
    minmaxBlue: [Color.fromHex('#4411dd'), Color.fromHex('#ffee22')],
    mostFrequentColor: Color.fromHex('#884455'),
    mostSaturatedColor: Color.fromHex('#000011'),
    mostGroupedColor: Color.fromHex('#000000'),
    bottom: {
        averageColor: Color.fromHex('#2b1e22'),
        lightestColor: Color.fromHex('#ffeeff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#dd2233'), Color.fromHex('#00ffff')],
        minmaxGreen: [Color.fromHex('#22bb33'), Color.fromHex('#aa11ee')],
        minmaxBlue: [Color.fromHex('#3311bb'), Color.fromHex('#ffee33')],
        mostFrequentColor: Color.fromHex('#884455'),
        mostSaturatedColor: Color.fromHex('#000011'),
        mostGroupedColor: Color.fromHex('#000000'),
    },
} satisfies IImageColorStats;
