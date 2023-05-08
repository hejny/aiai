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
import metadata from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_abstract_ico_6ecd30dc-f398-4f6d-b263-6cee40761435-0_3.json';
import source from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_abstract_ico_6ecd30dc-f398-4f6d-b263-6cee40761435-0_3.png';

/**
 * Image of A wallpaper with a repeating pattern of abstract icons and symbols commonly used in the tech industry, such as computer chips and power buttons.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithARepeatingPatternOfAbstractIco6ecd30dcF3984f6dB2636cee407614350_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a repeating pattern of abstract icons and symbols commonly used in the tech industry, such as computer chips and power buttons."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperWithARepeatingPatternOfAbstractIco6ecd30dcF3984f6dB2636cee407614350_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithARepeatingPatternOfAbstractIco6ecd30dcF3984f6dB2636cee407614350_3_Image.colorStats = {
    averageColor: Color.fromHex('#204c5d'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#001111'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#001111')],
    minmaxRed: [Color.fromHex('#333344'), Color.fromHex('#ccffff')],
    minmaxGreen: [Color.fromHex('#117777'), Color.fromHex('#ffffff')],
    minmaxBlue: [Color.fromHex('#223366'), Color.fromHex('#ffffff')],
    mostFrequentColor: Color.fromHex('#001122'),
    mostSaturatedColor: Color.fromHex('#001122'),
    mostGroupedColor: Color.fromHex('#115566'),
    bottom: {
        averageColor: Color.fromHex('#1e495a'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#001111'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#001111')],
        minmaxRed: [Color.fromHex('#222233'), Color.fromHex('#ddffff')],
        minmaxGreen: [Color.fromHex('#227777'), Color.fromHex('#ffffff')],
        minmaxBlue: [Color.fromHex('#116688'), Color.fromHex('#ffffff')],
        mostFrequentColor: Color.fromHex('#001122'),
        mostSaturatedColor: Color.fromHex('#002233'),
        mostGroupedColor: Color.fromHex('#002233'),
    },
} satisfies IImageColorStats;
