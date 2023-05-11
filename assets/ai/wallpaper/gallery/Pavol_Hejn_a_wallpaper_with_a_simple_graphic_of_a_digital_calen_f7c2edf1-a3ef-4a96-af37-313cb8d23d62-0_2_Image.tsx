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
import metadata from './Pavol_Hejn_a_wallpaper_with_a_simple_graphic_of_a_digital_calen_f7c2edf1-a3ef-4a96-af37-313cb8d23d62-0_2.json';
import source from './Pavol_Hejn_a_wallpaper_with_a_simple_graphic_of_a_digital_calen_f7c2edf1-a3ef-4a96-af37-313cb8d23d62-0_2.png';

/**
 * Image of A wallpaper with a simple graphic of a digital calendar or to-do list, with space for notes and reminders.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithASimpleGraphicOfADigitalCalenF7c2edf1A3ef4a96Af37313cb8d23d620_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a simple graphic of a digital calendar or to-do list, with space for notes and reminders."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperWithASimpleGraphicOfADigitalCalenF7c2edf1A3ef4a96Af37313cb8d23d620_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithASimpleGraphicOfADigitalCalenF7c2edf1A3ef4a96Af37313cb8d23d620_2_Image.colorStats = {
    averageColor: Color.fromHex('#3f5157'),
    lightestColor: Color.fromHex('#eeffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#884444'), Color.fromHex('#bbffff')],
    minmaxGreen: [Color.fromHex('#55aa88'), Color.fromHex('#eeffff')],
    minmaxBlue: [Color.fromHex('#1166bb'), Color.fromHex('#ffffee')],
    mostFrequentColor: Color.fromHex('#001111'),
    mostSaturatedColor: Color.fromHex('#001111'),
    mostGroupedColor: Color.fromHex('#112233'),
    bottom: {
        averageColor: Color.fromHex('#434649'),
        lightestColor: Color.fromHex('#eeeedd'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#eeeedd'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#885555'), Color.fromHex('#eeeedd')],
        minmaxGreen: [Color.fromHex('#667755'), Color.fromHex('#eeeedd')],
        minmaxBlue: [Color.fromHex('#335577'), Color.fromHex('#eeeecc')],
        mostFrequentColor: Color.fromHex('#001111'),
        mostSaturatedColor: Color.fromHex('#001122'),
        mostGroupedColor: Color.fromHex('#112233'),
    },
} satisfies IImageColorStats;
