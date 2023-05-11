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
import metadata from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_abstract_geo_33e29040-2e35-48ec-b472-397f6d0249fb-0_1.json';
import source from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_abstract_geo_33e29040-2e35-48ec-b472-397f6d0249fb-0_1.png';

/**
 * Image of A wallpaper with a repeating pattern of abstract geometric shapes and patterns, inspired by web design trends and color schemes.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithARepeatingPatternOfAbstractGeo33e290402e3548ecB472397f6d0249fb0_1_Image(
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

AWallpaperWithARepeatingPatternOfAbstractGeo33e290402e3548ecB472397f6d0249fb0_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithARepeatingPatternOfAbstractGeo33e290402e3548ecB472397f6d0249fb0_1_Image.colorStats = {
    averageColor: Color.fromHex('#927d69'),
    lightestColor: Color.fromHex('#ffffee'),
    darkestColor: Color.fromHex('#110000'),
    minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#110000')],
    minmaxRed: [Color.fromHex('#cc2222'), Color.fromHex('#ddffee')],
    minmaxGreen: [Color.fromHex('#559977'), Color.fromHex('#ffeeee')],
    minmaxBlue: [Color.fromHex('#114466'), Color.fromHex('#ffffcc')],
    mostFrequentColor: Color.fromHex('#eebb66'),
    mostSaturatedColor: Color.fromHex('#002233'),
    mostGroupedColor: Color.fromHex('#112233'),
    bottom: {
        averageColor: Color.fromHex('#8d7863'),
        lightestColor: Color.fromHex('#ffffee'),
        darkestColor: Color.fromHex('#111100'),
        minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#001111')],
        minmaxRed: [Color.fromHex('#cc2222'), Color.fromHex('#ddffee')],
        minmaxGreen: [Color.fromHex('#338877'), Color.fromHex('#ffeeee')],
        minmaxBlue: [Color.fromHex('#114466'), Color.fromHex('#ffffcc')],
        mostFrequentColor: Color.fromHex('#eebb66'),
        mostSaturatedColor: Color.fromHex('#002233'),
        mostGroupedColor: Color.fromHex('#112233'),
    },
} satisfies IImageColorStats;
