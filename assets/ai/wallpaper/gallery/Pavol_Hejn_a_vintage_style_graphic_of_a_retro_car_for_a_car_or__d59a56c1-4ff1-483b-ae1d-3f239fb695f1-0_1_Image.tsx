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
import metadata from './Pavol_Hejn_a_vintage_style_graphic_of_a_retro_car_for_a_car_or__d59a56c1-4ff1-483b-ae1d-3f239fb695f1-0_1.json';
import source from './Pavol_Hejn_a_vintage_style_graphic_of_a_retro_car_for_a_car_or__d59a56c1-4ff1-483b-ae1d-3f239fb695f1-0_1.png';

/**
 * Image of A vintage-style graphic of a retro car for a car or travel website
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AVintageStyleGraphicOfARetroCarForACarOrD59a56c14ff1483bAe1d3f239fb695f10_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A vintage-style graphic of a retro car for a car or travel website"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AVintageStyleGraphicOfARetroCarForACarOrD59a56c14ff1483bAe1d3f239fb695f10_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AVintageStyleGraphicOfARetroCarForACarOrD59a56c14ff1483bAe1d3f239fb695f10_1_Image.colorStats = {
    averageColor: Color.fromHex('#d3ab79'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#bb2211'), Color.fromHex('#ddffff')],
    minmaxGreen: [Color.fromHex('#44aa77'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#222255'), Color.fromHex('#ffff99')],
    mostFrequentColor: Color.fromHex('#bb5533'),
    mostSaturatedColor: Color.fromHex('#773300'),
    mostGroupedColor: Color.fromHex('#ffeeaa'),
    bottom: {
        averageColor: Color.fromHex('#b7764e'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#bb2211'), Color.fromHex('#eeffff')],
        minmaxGreen: [Color.fromHex('#448866'), Color.fromHex('#ffeeff')],
        minmaxBlue: [Color.fromHex('#332255'), Color.fromHex('#ffff99')],
        mostFrequentColor: Color.fromHex('#bb5533'),
        mostSaturatedColor: Color.fromHex('#773300'),
        mostGroupedColor: Color.fromHex('#221133'),
    },
} satisfies IImageColorStats;
