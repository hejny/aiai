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
import metadata from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_abstract_geo_4f913986-f1b4-4da4-8506-705bbd724c4d-0_1.json';
import source from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_abstract_geo_4f913986-f1b4-4da4-8506-705bbd724c4d-0_1.png';

/**
 * Image of A wallpaper with a repeating pattern of abstract geometric shapes and patterns, inspired by web design trends and color schemes.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithARepeatingPatternOfAbstractGeo4f913986F1b44da48506705bbd724c4d0_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a repeating pattern of abstract geometric shapes and patterns, inspired by web design trends and color schemes."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperWithARepeatingPatternOfAbstractGeo4f913986F1b44da48506705bbd724c4d0_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithARepeatingPatternOfAbstractGeo4f913986F1b44da48506705bbd724c4d0_1_Image.colorStats = {
    averageColor: Color.fromHex('#aea696'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#222211'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#221111')],
    minmaxRed: [Color.fromHex('#aa5544'), Color.fromHex('#ffffff')],
    minmaxGreen: [Color.fromHex('#558877'), Color.fromHex('#ffffff')],
    minmaxBlue: [Color.fromHex('#335566'), Color.fromHex('#ffffee')],
    mostFrequentColor: Color.fromHex('#666666'),
    mostSaturatedColor: Color.fromHex('#aa6633'),
    mostGroupedColor: Color.fromHex('#445555'),
    bottom: {
        averageColor: Color.fromHex('#a6a094'),
        lightestColor: Color.fromHex('#ffeeee'),
        darkestColor: Color.fromHex('#110000'),
        minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#110000')],
        minmaxRed: [Color.fromHex('#bb6644'), Color.fromHex('#eeffee')],
        minmaxGreen: [Color.fromHex('#669988'), Color.fromHex('#ffeeee')],
        minmaxBlue: [Color.fromHex('#334466'), Color.fromHex('#ffffee')],
        mostFrequentColor: Color.fromHex('#666666'),
        mostSaturatedColor: Color.fromHex('#110000'),
        mostGroupedColor: Color.fromHex('#445555'),
    },
} satisfies IImageColorStats;
