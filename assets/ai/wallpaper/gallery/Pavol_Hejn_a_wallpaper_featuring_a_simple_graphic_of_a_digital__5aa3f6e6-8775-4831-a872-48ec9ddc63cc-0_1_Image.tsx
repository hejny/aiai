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
import metadata from './Pavol_Hejn_a_wallpaper_featuring_a_simple_graphic_of_a_digital__5aa3f6e6-8775-4831-a872-48ec9ddc63cc-0_1.json';
import source from './Pavol_Hejn_a_wallpaper_featuring_a_simple_graphic_of_a_digital__5aa3f6e6-8775-4831-a872-48ec9ddc63cc-0_1.png';

/**
 * Image of A wallpaper featuring a simple graphic of a digital clock or timer, with space for setting alarms and countdowns.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingASimpleGraphicOfADigital5aa3f6e687754831A87248ec9ddc63cc0_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper featuring a simple graphic of a digital clock or timer, with space for setting alarms and countdowns."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperFeaturingASimpleGraphicOfADigital5aa3f6e687754831A87248ec9ddc63cc0_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingASimpleGraphicOfADigital5aa3f6e687754831A87248ec9ddc63cc0_1_Image.colorStats = {
    averageColor: Color.fromHex('#37363b'),
    lightestColor: Color.fromHex('#ffeeee'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffeeee'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#cc3322'), Color.fromHex('#00dddd')],
    minmaxGreen: [Color.fromHex('#55aa77'), Color.fromHex('#ff4488')],
    minmaxBlue: [Color.fromHex('#222266'), Color.fromHex('#ffcc11')],
    mostFrequentColor: Color.fromHex('#001122'),
    mostSaturatedColor: Color.fromHex('#001122'),
    mostGroupedColor: Color.fromHex('#001122'),
    bottom: {
        averageColor: Color.fromHex('#131925'),
        lightestColor: Color.fromHex('#eeeeee'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#eeeeee'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#ee4422'), Color.fromHex('#00dddd')],
        minmaxGreen: [Color.fromHex('#119988'), Color.fromHex('#ff4477')],
        minmaxBlue: [Color.fromHex('#663377'), Color.fromHex('#ffffcc')],
        mostFrequentColor: Color.fromHex('#001122'),
        mostSaturatedColor: Color.fromHex('#110000'),
        mostGroupedColor: Color.fromHex('#001122'),
    },
} satisfies IImageColorStats;
