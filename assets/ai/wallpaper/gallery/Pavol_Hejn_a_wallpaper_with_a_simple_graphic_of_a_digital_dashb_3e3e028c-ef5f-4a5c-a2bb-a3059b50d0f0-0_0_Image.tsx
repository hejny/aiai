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
import metadata from './Pavol_Hejn_a_wallpaper_with_a_simple_graphic_of_a_digital_dashb_3e3e028c-ef5f-4a5c-a2bb-a3059b50d0f0-0_0.json';
import source from './Pavol_Hejn_a_wallpaper_with_a_simple_graphic_of_a_digital_dashb_3e3e028c-ef5f-4a5c-a2bb-a3059b50d0f0-0_0.png';

/**
 * Image of A wallpaper with a simple graphic of a digital dashboard or control panel, with space for monitoring and managing data.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithASimpleGraphicOfADigitalDashb3e3e028cEf5f4a5cA2bbA3059b50d0f00_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a simple graphic of a digital dashboard or control panel, with space for monitoring and managing data."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperWithASimpleGraphicOfADigitalDashb3e3e028cEf5f4a5cA2bbA3059b50d0f00_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithASimpleGraphicOfADigitalDashb3e3e028cEf5f4a5cA2bbA3059b50d0f00_0_Image.colorStats = {
    averageColor: Color.fromHex('#081014'),
    lightestColor: Color.fromHex('#99eeee'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ccdddd'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#664444'), Color.fromHex('#55ffff')],
    minmaxGreen: [Color.fromHex('#229988'), Color.fromHex('#000022')],
    minmaxBlue: [Color.fromHex('#225588'), Color.fromHex('#ccdddd')],
    mostFrequentColor: Color.fromHex('#000000'),
    mostSaturatedColor: Color.fromHex('#000011'),
    mostGroupedColor: Color.fromHex('#000000'),
    bottom: {
        averageColor: Color.fromHex('#080d11'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#553344'), Color.fromHex('#55ffff')],
        minmaxGreen: [Color.fromHex('#22aa99'), Color.fromHex('#ffffff')],
        minmaxBlue: [Color.fromHex('#226688'), Color.fromHex('#ffffff')],
        mostFrequentColor: Color.fromHex('#000000'),
        mostSaturatedColor: Color.fromHex('#000011'),
        mostGroupedColor: Color.fromHex('#000000'),
    },
} satisfies IImageColorStats;
