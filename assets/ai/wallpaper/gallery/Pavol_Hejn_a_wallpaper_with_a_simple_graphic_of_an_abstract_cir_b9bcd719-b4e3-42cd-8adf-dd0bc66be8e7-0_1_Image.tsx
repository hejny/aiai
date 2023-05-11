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
import metadata from './Pavol_Hejn_a_wallpaper_with_a_simple_graphic_of_an_abstract_cir_b9bcd719-b4e3-42cd-8adf-dd0bc66be8e7-0_1.json';
import source from './Pavol_Hejn_a_wallpaper_with_a_simple_graphic_of_an_abstract_cir_b9bcd719-b4e3-42cd-8adf-dd0bc66be8e7-0_1.png';

/**
 * Image of A wallpaper with a simple graphic of an abstract circuit board, in shades of blue and green.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithASimpleGraphicOfAnAbstractCirB9bcd719B4e342cd8adfDd0bc66be8e70_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a simple graphic of an abstract circuit board, in shades of blue and green."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperWithASimpleGraphicOfAnAbstractCirB9bcd719B4e342cd8adfDd0bc66be8e70_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithASimpleGraphicOfAnAbstractCirB9bcd719B4e342cd8adfDd0bc66be8e70_1_Image.colorStats = {
    averageColor: Color.fromHex('#033039'),
    lightestColor: Color.fromHex('#bbeeff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ccddee'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#221122'), Color.fromHex('#00ffff')],
    minmaxGreen: [Color.fromHex('#00bb77'), Color.fromHex('#000011')],
    minmaxBlue: [Color.fromHex('#0066bb'), Color.fromHex('#aaffee')],
    mostFrequentColor: Color.fromHex('#001122'),
    mostSaturatedColor: Color.fromHex('#000011'),
    mostGroupedColor: Color.fromHex('#002222'),
    bottom: {
        averageColor: Color.fromHex('#05343e'),
        lightestColor: Color.fromHex('#bbeeff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ccddee'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#221122'), Color.fromHex('#00ffee')],
        minmaxGreen: [Color.fromHex('#008855'), Color.fromHex('#000011')],
        minmaxBlue: [Color.fromHex('#0066bb'), Color.fromHex('#aaffee')],
        mostFrequentColor: Color.fromHex('#001122'),
        mostSaturatedColor: Color.fromHex('#002233'),
        mostGroupedColor: Color.fromHex('#001122'),
    },
} satisfies IImageColorStats;
