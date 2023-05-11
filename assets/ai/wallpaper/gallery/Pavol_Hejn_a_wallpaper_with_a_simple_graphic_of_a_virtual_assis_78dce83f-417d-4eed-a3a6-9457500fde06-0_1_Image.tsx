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
import metadata from './Pavol_Hejn_a_wallpaper_with_a_simple_graphic_of_a_virtual_assis_78dce83f-417d-4eed-a3a6-9457500fde06-0_1.json';
import source from './Pavol_Hejn_a_wallpaper_with_a_simple_graphic_of_a_virtual_assis_78dce83f-417d-4eed-a3a6-9457500fde06-0_1.png';

/**
 * Image of A wallpaper with a simple graphic of a virtual assistant or chatbot, with space for messages and alerts, set against a gradient background.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithASimpleGraphicOfAVirtualAssis78dce83f417d4eedA3a69457500fde060_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a simple graphic of a virtual assistant or chatbot, with space for messages and alerts, set against a gradient background."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperWithASimpleGraphicOfAVirtualAssis78dce83f417d4eedA3a69457500fde060_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithASimpleGraphicOfAVirtualAssis78dce83f417d4eedA3a69457500fde060_1_Image.colorStats = {
    averageColor: Color.fromHex('#432a73'),
    lightestColor: Color.fromHex('#ffeeff'),
    darkestColor: Color.fromHex('#221122'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#110033')],
    minmaxRed: [Color.fromHex('#cc0033'), Color.fromHex('#22ffff')],
    minmaxGreen: [Color.fromHex('#22bbbb'), Color.fromHex('#ee22ee')],
    minmaxBlue: [Color.fromHex('#5522cc'), Color.fromHex('#ffffff')],
    mostFrequentColor: Color.fromHex('#221144'),
    mostSaturatedColor: Color.fromHex('#660066'),
    mostGroupedColor: Color.fromHex('#331166'),
    bottom: {
        averageColor: Color.fromHex('#3a2a74'),
        lightestColor: Color.fromHex('#ffeeff'),
        darkestColor: Color.fromHex('#330033'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#220044')],
        minmaxRed: [Color.fromHex('#cc2277'), Color.fromHex('#22ffff')],
        minmaxGreen: [Color.fromHex('#44aabb'), Color.fromHex('#ee33dd')],
        minmaxBlue: [Color.fromHex('#5522cc'), Color.fromHex('#ffffff')],
        mostFrequentColor: Color.fromHex('#221144'),
        mostSaturatedColor: Color.fromHex('#660077'),
        mostGroupedColor: Color.fromHex('#221155'),
    },
} satisfies IImageColorStats;
