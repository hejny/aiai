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
import metadata from './Pavol_Hejn_an_abstract_wallpaper_inspired_by_the_shapes_and_col_028d25e0-9687-43a2-aeb7-17a3b30b0362-0_2.json';
import source from './Pavol_Hejn_an_abstract_wallpaper_inspired_by_the_shapes_and_col_028d25e0-9687-43a2-aeb7-17a3b30b0362-0_2.png';

/**
 * Image of An abstract wallpaper inspired by the shapes and colors of quantum physics, with bold colors and intricate lines.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AnAbstractWallpaperInspiredByTheShapesAndCol028d25e0968743a2Aeb717a3b30b03620_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An abstract wallpaper inspired by the shapes and colors of quantum physics, with bold colors and intricate lines."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnAbstractWallpaperInspiredByTheShapesAndCol028d25e0968743a2Aeb717a3b30b03620_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractWallpaperInspiredByTheShapesAndCol028d25e0968743a2Aeb717a3b30b03620_2_Image.colorStats = {
    averageColor: Color.fromHex('#443434'),
    lightestColor: Color.fromHex('#eeddbb'),
    darkestColor: Color.fromHex('#220000'),
    minmaxWhite: [Color.fromHex('#eeddbb'), Color.fromHex('#000011')],
    minmaxRed: [Color.fromHex('#cc2233'), Color.fromHex('#77eecc')],
    minmaxGreen: [Color.fromHex('#229977'), Color.fromHex('#dd1166')],
    minmaxBlue: [Color.fromHex('#554477'), Color.fromHex('#ffdd77')],
    mostFrequentColor: Color.fromHex('#221122'),
    mostSaturatedColor: Color.fromHex('#000011'),
    mostGroupedColor: Color.fromHex('#110011'),
    bottom: {
        averageColor: Color.fromHex('#2c2529'),
        lightestColor: Color.fromHex('#eeccbb'),
        darkestColor: Color.fromHex('#111100'),
        minmaxWhite: [Color.fromHex('#eeccbb'), Color.fromHex('#000011')],
        minmaxRed: [Color.fromHex('#cc4422'), Color.fromHex('#eeccbb')],
        minmaxGreen: [Color.fromHex('#449977'), Color.fromHex('#110022')],
        minmaxBlue: [Color.fromHex('#443366'), Color.fromHex('#ffaa44')],
        mostFrequentColor: Color.fromHex('#221122'),
        mostSaturatedColor: Color.fromHex('#441100'),
        mostGroupedColor: Color.fromHex('#111122'),
    },
} satisfies IImageColorStats;
