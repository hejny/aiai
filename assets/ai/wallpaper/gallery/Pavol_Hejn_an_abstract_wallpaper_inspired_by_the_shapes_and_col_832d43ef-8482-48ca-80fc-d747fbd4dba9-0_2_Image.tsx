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
import metadata from './Pavol_Hejn_an_abstract_wallpaper_inspired_by_the_shapes_and_col_832d43ef-8482-48ca-80fc-d747fbd4dba9-0_2.json';
import source from './Pavol_Hejn_an_abstract_wallpaper_inspired_by_the_shapes_and_col_832d43ef-8482-48ca-80fc-d747fbd4dba9-0_2.png';

/**
 * Image of An abstract wallpaper inspired by the shapes and colors of quantum physics, with bold colors and intricate lines.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AnAbstractWallpaperInspiredByTheShapesAndCol832d43ef848248ca80fcD747fbd4dba90_2_Image(
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

AnAbstractWallpaperInspiredByTheShapesAndCol832d43ef848248ca80fcD747fbd4dba90_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractWallpaperInspiredByTheShapesAndCol832d43ef848248ca80fcD747fbd4dba90_2_Image.colorStats = {
    averageColor: Color.fromHex('#454841'),
    lightestColor: Color.fromHex('#cccc99'),
    darkestColor: Color.fromHex('#001100'),
    minmaxWhite: [Color.fromHex('#cccc99'), Color.fromHex('#001100')],
    minmaxRed: [Color.fromHex('#cc3333'), Color.fromHex('#11aaaa')],
    minmaxGreen: [Color.fromHex('#44aa55'), Color.fromHex('#aa1133')],
    minmaxBlue: [Color.fromHex('#115577'), Color.fromHex('#ffbb66')],
    mostFrequentColor: Color.fromHex('#002233'),
    mostSaturatedColor: Color.fromHex('#005566'),
    mostGroupedColor: Color.fromHex('#883344'),
    bottom: {
        averageColor: Color.fromHex('#494d42'),
        lightestColor: Color.fromHex('#ff7777'),
        darkestColor: Color.fromHex('#112200'),
        minmaxWhite: [Color.fromHex('#ddbb77'), Color.fromHex('#110000')],
        minmaxRed: [Color.fromHex('#aa2233'), Color.fromHex('#11aaaa')],
        minmaxGreen: [Color.fromHex('#449955'), Color.fromHex('#dd4455')],
        minmaxBlue: [Color.fromHex('#443366'), Color.fromHex('#eebb55')],
        mostFrequentColor: Color.fromHex('#002233'),
        mostSaturatedColor: Color.fromHex('#002233'),
        mostGroupedColor: Color.fromHex('#ee5544'),
    },
} satisfies IImageColorStats;
