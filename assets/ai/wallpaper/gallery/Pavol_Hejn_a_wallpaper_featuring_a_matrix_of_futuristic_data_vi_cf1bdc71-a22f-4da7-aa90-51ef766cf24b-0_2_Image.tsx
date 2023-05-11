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
import metadata from './Pavol_Hejn_a_wallpaper_featuring_a_matrix_of_futuristic_data_vi_cf1bdc71-a22f-4da7-aa90-51ef766cf24b-0_2.json';
import source from './Pavol_Hejn_a_wallpaper_featuring_a_matrix_of_futuristic_data_vi_cf1bdc71-a22f-4da7-aa90-51ef766cf24b-0_2.png';

/**
 * Image of A wallpaper featuring a matrix of futuristic data visualizations and graphs
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingAMatrixOfFuturisticDataViCf1bdc71A22f4da7Aa9051ef766cf24b0_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper featuring a matrix of futuristic data visualizations and graphs"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperFeaturingAMatrixOfFuturisticDataViCf1bdc71A22f4da7Aa9051ef766cf24b0_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingAMatrixOfFuturisticDataViCf1bdc71A22f4da7Aa9051ef766cf24b0_2_Image.colorStats = {
    averageColor: Color.fromHex('#0e222d'),
    lightestColor: Color.fromHex('#eeffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#eeffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#882233'), Color.fromHex('#66ffff')],
    minmaxGreen: [Color.fromHex('#55aa88'), Color.fromHex('#eeeeff')],
    minmaxBlue: [Color.fromHex('#005599'), Color.fromHex('#eeffff')],
    mostFrequentColor: Color.fromHex('#000000'),
    mostSaturatedColor: Color.fromHex('#000011'),
    mostGroupedColor: Color.fromHex('#000000'),
    bottom: {
        averageColor: Color.fromHex('#0a1923'),
        lightestColor: Color.fromHex('#eeffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#eeffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#883333'), Color.fromHex('#33ddee')],
        minmaxGreen: [Color.fromHex('#119988'), Color.fromHex('#eeeeff')],
        minmaxBlue: [Color.fromHex('#115599'), Color.fromHex('#eeffff')],
        mostFrequentColor: Color.fromHex('#000000'),
        mostSaturatedColor: Color.fromHex('#001111'),
        mostGroupedColor: Color.fromHex('#000000'),
    },
} satisfies IImageColorStats;
