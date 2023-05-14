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
import colorStats from './Pavol_Hejn_a_colorful_graphic_of_a_row_of_city_buildings_for_an_8f9bc876-e3c7-4382-b753-cfbe7ab7ee10-0_2.colors.json';
import content from './Pavol_Hejn_a_colorful_graphic_of_a_row_of_city_buildings_for_an_8f9bc876-e3c7-4382-b753-cfbe7ab7ee10-0_2.content.md';
import metadata from './Pavol_Hejn_a_colorful_graphic_of_a_row_of_city_buildings_for_an_8f9bc876-e3c7-4382-b753-cfbe7ab7ee10-0_2.json';

/**
 * Image of A colorful graphic of a row of city buildings for an urban or city living website
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AColorfulGraphicOfARowOfCityBuildingsForAn8f9bc876E3c74382B753Cfbe7ab7ee100_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A colorful graphic of a row of city buildings for an urban or city living website"
            src="https://cdn.midjourney.com/8f9bc876-e3c7-4382-b753-cfbe7ab7ee10/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AColorfulGraphicOfARowOfCityBuildingsForAn8f9bc876E3c74382B753Cfbe7ab7ee100_2_Image.src = new URL(
    'https://cdn.midjourney.com/8f9bc876-e3c7-4382-b753-cfbe7ab7ee10/0_2.png',
);
AColorfulGraphicOfARowOfCityBuildingsForAn8f9bc876E3c74382B753Cfbe7ab7ee100_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AColorfulGraphicOfARowOfCityBuildingsForAn8f9bc876E3c74382B753Cfbe7ab7ee100_2_Image.colorStats =
    hydrateColorStats(colorStats);
AColorfulGraphicOfARowOfCityBuildingsForAn8f9bc876E3c74382B753Cfbe7ab7ee100_2_Image.content = content;
