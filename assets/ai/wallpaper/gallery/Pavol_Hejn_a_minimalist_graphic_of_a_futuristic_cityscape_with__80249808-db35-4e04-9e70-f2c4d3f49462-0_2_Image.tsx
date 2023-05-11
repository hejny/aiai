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
import metadata from './Pavol_Hejn_a_minimalist_graphic_of_a_futuristic_cityscape_with__80249808-db35-4e04-9e70-f2c4d3f49462-0_2.json';
import source from './Pavol_Hejn_a_minimalist_graphic_of_a_futuristic_cityscape_with__80249808-db35-4e04-9e70-f2c4d3f49462-0_2.png';

/**
 * Image of A minimalist graphic of a futuristic cityscape, with glowing neon lights and a dark and moody color scheme.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AMinimalistGraphicOfAFuturisticCityscapeWith80249808Db354e049e70F2c4d3f494620_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A minimalist graphic of a futuristic cityscape, with glowing neon lights and a dark and moody color scheme."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AMinimalistGraphicOfAFuturisticCityscapeWith80249808Db354e049e70F2c4d3f494620_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AMinimalistGraphicOfAFuturisticCityscapeWith80249808Db354e049e70F2c4d3f494620_2_Image.colorStats = {
    averageColor: Color.fromHex('#482f40'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#dd1122'), Color.fromHex('#77ffff')],
    minmaxGreen: [Color.fromHex('#229999'), Color.fromHex('#ff33bb')],
    minmaxBlue: [Color.fromHex('#005599'), Color.fromHex('#ffffdd')],
    mostFrequentColor: Color.fromHex('#111122'),
    mostSaturatedColor: Color.fromHex('#110022'),
    mostGroupedColor: Color.fromHex('#111122'),
    bottom: {
        averageColor: Color.fromHex('#582336'),
        lightestColor: Color.fromHex('#dd99ff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#eeffee'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#dd1122'), Color.fromHex('#22bbee')],
        minmaxGreen: [Color.fromHex('#229999'), Color.fromHex('#ff33aa')],
        minmaxBlue: [Color.fromHex('#115588'), Color.fromHex('#eeffdd')],
        mostFrequentColor: Color.fromHex('#111122'),
        mostSaturatedColor: Color.fromHex('#440011'),
        mostGroupedColor: Color.fromHex('#000011'),
    },
} satisfies IImageColorStats;
