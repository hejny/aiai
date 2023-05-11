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
import metadata from './Pavol_Hejn_a_colorful_graphic_of_a_row_of_city_buildings_for_an_8f9bc876-e3c7-4382-b753-cfbe7ab7ee10-0_3.json';
import source from './Pavol_Hejn_a_colorful_graphic_of_a_row_of_city_buildings_for_an_8f9bc876-e3c7-4382-b753-cfbe7ab7ee10-0_3.png';

/**
 * Image of A colorful graphic of a row of city buildings for an urban or city living website
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AColorfulGraphicOfARowOfCityBuildingsForAn8f9bc876E3c74382B753Cfbe7ab7ee100_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A colorful graphic of a row of city buildings for an urban or city living website"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AColorfulGraphicOfARowOfCityBuildingsForAn8f9bc876E3c74382B753Cfbe7ab7ee100_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AColorfulGraphicOfARowOfCityBuildingsForAn8f9bc876E3c74382B753Cfbe7ab7ee100_3_Image.colorStats = {
    averageColor: Color.fromHex('#8a9893'),
    lightestColor: Color.fromHex('#ffeeff'),
    darkestColor: Color.fromHex('#001100'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#dd1111'), Color.fromHex('#ccffff')],
    minmaxGreen: [Color.fromHex('#669900'), Color.fromHex('#dd1166')],
    minmaxBlue: [Color.fromHex('#115588'), Color.fromHex('#ffff99')],
    mostFrequentColor: Color.fromHex('#002233'),
    mostSaturatedColor: Color.fromHex('#000011'),
    mostGroupedColor: Color.fromHex('#99cccc'),
    bottom: {
        averageColor: Color.fromHex('#6c605d'),
        lightestColor: Color.fromHex('#ffeeff'),
        darkestColor: Color.fromHex('#001100'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#ee2211'), Color.fromHex('#eeffff')],
        minmaxGreen: [Color.fromHex('#669900'), Color.fromHex('#dd1166')],
        minmaxBlue: [Color.fromHex('#115588'), Color.fromHex('#ffff99')],
        mostFrequentColor: Color.fromHex('#002233'),
        mostSaturatedColor: Color.fromHex('#882200'),
        mostGroupedColor: Color.fromHex('#002233'),
    },
} satisfies IImageColorStats;
