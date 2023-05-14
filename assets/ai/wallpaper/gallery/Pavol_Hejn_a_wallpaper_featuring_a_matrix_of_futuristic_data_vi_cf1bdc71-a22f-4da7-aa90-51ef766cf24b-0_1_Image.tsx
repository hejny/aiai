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
import { colorToDataUrl } from '../../../../src/utils/color/utils/colorToDataUrl';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_wallpaper_featuring_a_matrix_of_futuristic_data_vi_cf1bdc71-a22f-4da7-aa90-51ef766cf24b-0_1.colors.json';
import content from './Pavol_Hejn_a_wallpaper_featuring_a_matrix_of_futuristic_data_vi_cf1bdc71-a22f-4da7-aa90-51ef766cf24b-0_1.content.md';
import metadata from './Pavol_Hejn_a_wallpaper_featuring_a_matrix_of_futuristic_data_vi_cf1bdc71-a22f-4da7-aa90-51ef766cf24b-0_1.json';

/**
 * Image of A wallpaper featuring a matrix of futuristic data visualizations and graphs
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingAMatrixOfFuturisticDataViCf1bdc71A22f4da7Aa9051ef766cf24b0_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper featuring a matrix of futuristic data visualizations and graphs"
            src="https://cdn.midjourney.com/cf1bdc71-a22f-4da7-aa90-51ef766cf24b/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AWallpaperFeaturingAMatrixOfFuturisticDataViCf1bdc71A22f4da7Aa9051ef766cf24b0_1_Image.src = new URL(
    'https://cdn.midjourney.com/cf1bdc71-a22f-4da7-aa90-51ef766cf24b/0_1.png',
);
AWallpaperFeaturingAMatrixOfFuturisticDataViCf1bdc71A22f4da7Aa9051ef766cf24b0_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingAMatrixOfFuturisticDataViCf1bdc71A22f4da7Aa9051ef766cf24b0_1_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperFeaturingAMatrixOfFuturisticDataViCf1bdc71A22f4da7Aa9051ef766cf24b0_1_Image.content = content;
