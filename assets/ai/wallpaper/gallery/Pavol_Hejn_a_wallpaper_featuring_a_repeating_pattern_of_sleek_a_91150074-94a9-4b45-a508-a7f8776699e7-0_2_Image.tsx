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
import metadata from './Pavol_Hejn_a_wallpaper_featuring_a_repeating_pattern_of_sleek_a_91150074-94a9-4b45-a508-a7f8776699e7-0_2.json';
import source from './Pavol_Hejn_a_wallpaper_featuring_a_repeating_pattern_of_sleek_a_91150074-94a9-4b45-a508-a7f8776699e7-0_2.png';

/**
 * Image of A wallpaper featuring a repeating pattern of sleek and modern digital devices, such as smartphones, tablets, and laptops, set against a gradient background.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingARepeatingPatternOfSleekA9115007494a94b45A508A7f8776699e70_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper featuring a repeating pattern of sleek and modern digital devices, such as smartphones, tablets, and laptops, set against a gradient background."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperFeaturingARepeatingPatternOfSleekA9115007494a94b45A508A7f8776699e70_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingARepeatingPatternOfSleekA9115007494a94b45A508A7f8776699e70_2_Image.colorStats = {
    averageColor: Color.fromHex('#785272'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#ee3344'), Color.fromHex('#ffffff')],
    minmaxGreen: [Color.fromHex('#337788'), Color.fromHex('#ff88dd')],
    minmaxBlue: [Color.fromHex('#552288'), Color.fromHex('#ffffee')],
    mostFrequentColor: Color.fromHex('#222255'),
    mostSaturatedColor: Color.fromHex('#001133'),
    mostGroupedColor: Color.fromHex('#224466'),
    bottom: {
        averageColor: Color.fromHex('#694766'),
        lightestColor: Color.fromHex('#ffeeee'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#ff3344'), Color.fromHex('#ffffee')],
        minmaxGreen: [Color.fromHex('#666677'), Color.fromHex('#ff3344')],
        minmaxBlue: [Color.fromHex('#552288'), Color.fromHex('#ffffee')],
        mostFrequentColor: Color.fromHex('#222255'),
        mostSaturatedColor: Color.fromHex('#000022'),
        mostGroupedColor: Color.fromHex('#224466'),
    },
} satisfies IImageColorStats;
