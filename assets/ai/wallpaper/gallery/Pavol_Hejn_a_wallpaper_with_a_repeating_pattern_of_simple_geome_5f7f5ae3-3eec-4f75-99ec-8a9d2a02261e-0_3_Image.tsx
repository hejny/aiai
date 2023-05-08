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
import metadata from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_simple_geome_5f7f5ae3-3eec-4f75-99ec-8a9d2a02261e-0_3.json';
import source from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_simple_geome_5f7f5ae3-3eec-4f75-99ec-8a9d2a02261e-0_3.png';

/**
 * Image of A wallpaper with a repeating pattern of simple geometric shapes, arranged in a grid-like structure.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithARepeatingPatternOfSimpleGeome5f7f5ae33eec4f7599ec8a9d2a02261e0_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a repeating pattern of simple geometric shapes, arranged in a grid-like structure."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperWithARepeatingPatternOfSimpleGeome5f7f5ae33eec4f7599ec8a9d2a02261e0_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithARepeatingPatternOfSimpleGeome5f7f5ae33eec4f7599ec8a9d2a02261e0_3_Image.colorStats = {
    averageColor: Color.fromHex('#7d745c'),
    lightestColor: Color.fromHex('#ffeeaa'),
    darkestColor: Color.fromHex('#001100'),
    minmaxWhite: [Color.fromHex('#ffeeaa'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#cc6633'), Color.fromHex('#ffeeaa')],
    minmaxGreen: [Color.fromHex('#669977'), Color.fromHex('#000011')],
    minmaxBlue: [Color.fromHex('#334455'), Color.fromHex('#ffeeaa')],
    mostFrequentColor: Color.fromHex('#223333'),
    mostSaturatedColor: Color.fromHex('#001111'),
    mostGroupedColor: Color.fromHex('#222222'),
    bottom: {
        averageColor: Color.fromHex('#7f7960'),
        lightestColor: Color.fromHex('#ffeebb'),
        darkestColor: Color.fromHex('#001111'),
        minmaxWhite: [Color.fromHex('#ffeebb'), Color.fromHex('#001111')],
        minmaxRed: [Color.fromHex('#bb6644'), Color.fromHex('#ffeebb')],
        minmaxGreen: [Color.fromHex('#669977'), Color.fromHex('#ffeebb')],
        minmaxBlue: [Color.fromHex('#444466'), Color.fromHex('#ffeeaa')],
        mostFrequentColor: Color.fromHex('#223333'),
        mostSaturatedColor: Color.fromHex('#001111'),
        mostGroupedColor: Color.fromHex('#88aa88'),
    },
} satisfies IImageColorStats;
