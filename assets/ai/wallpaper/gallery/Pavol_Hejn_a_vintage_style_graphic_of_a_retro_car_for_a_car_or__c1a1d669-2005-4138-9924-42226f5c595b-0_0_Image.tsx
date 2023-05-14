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
import colorStats from './Pavol_Hejn_a_vintage_style_graphic_of_a_retro_car_for_a_car_or__c1a1d669-2005-4138-9924-42226f5c595b-0_0.colors.json';
import content from './Pavol_Hejn_a_vintage_style_graphic_of_a_retro_car_for_a_car_or__c1a1d669-2005-4138-9924-42226f5c595b-0_0.content.md';
import metadata from './Pavol_Hejn_a_vintage_style_graphic_of_a_retro_car_for_a_car_or__c1a1d669-2005-4138-9924-42226f5c595b-0_0.json';

/**
 * Image of A vintage-style graphic of a retro car for a car or travel website
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AVintageStyleGraphicOfARetroCarForACarOrC1a1d66920054138992442226f5c595b0_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A vintage-style graphic of a retro car for a car or travel website"
            src="https://cdn.midjourney.com/c1a1d669-2005-4138-9924-42226f5c595b/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AVintageStyleGraphicOfARetroCarForACarOrC1a1d66920054138992442226f5c595b0_0_Image.src = new URL(
    'https://cdn.midjourney.com/c1a1d669-2005-4138-9924-42226f5c595b/0_0.png',
);
AVintageStyleGraphicOfARetroCarForACarOrC1a1d66920054138992442226f5c595b0_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AVintageStyleGraphicOfARetroCarForACarOrC1a1d66920054138992442226f5c595b0_0_Image.colorStats =
    hydrateColorStats(colorStats);
AVintageStyleGraphicOfARetroCarForACarOrC1a1d66920054138992442226f5c595b0_0_Image.content = content;
