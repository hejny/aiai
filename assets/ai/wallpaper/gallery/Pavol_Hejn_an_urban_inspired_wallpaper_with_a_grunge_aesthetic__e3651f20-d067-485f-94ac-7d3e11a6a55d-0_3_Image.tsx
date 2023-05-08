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
import metadata from './Pavol_Hejn_an_urban_inspired_wallpaper_with_a_grunge_aesthetic__e3651f20-d067-485f-94ac-7d3e11a6a55d-0_3.json';
import source from './Pavol_Hejn_an_urban_inspired_wallpaper_with_a_grunge_aesthetic__e3651f20-d067-485f-94ac-7d3e11a6a55d-0_3.png';

/**
 * Image of An urban-inspired wallpaper with a grunge aesthetic, featuring a neon-lit cityscape with futuristic elements such as holographic billboards.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AnUrbanInspiredWallpaperWithAGrungeAestheticE3651f20D067485f94ac7d3e11a6a55d0_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An urban-inspired wallpaper with a grunge aesthetic, featuring a neon-lit cityscape with futuristic elements such as holographic billboards."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnUrbanInspiredWallpaperWithAGrungeAestheticE3651f20D067485f94ac7d3e11a6a55d0_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnUrbanInspiredWallpaperWithAGrungeAestheticE3651f20D067485f94ac7d3e11a6a55d0_3_Image.colorStats = {
    averageColor: Color.fromHex('#2f2f3c'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#dd5522'), Color.fromHex('#ccffff')],
    minmaxGreen: [Color.fromHex('#998822'), Color.fromHex('#ffffff')],
    minmaxBlue: [Color.fromHex('#445588'), Color.fromHex('#ffffff')],
    mostFrequentColor: Color.fromHex('#000011'),
    mostSaturatedColor: Color.fromHex('#001122'),
    mostGroupedColor: Color.fromHex('#111122'),
    bottom: {
        averageColor: Color.fromHex('#29232d'),
        lightestColor: Color.fromHex('#ffccff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffeeee'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#bb4455'), Color.fromHex('#ffeeee')],
        minmaxGreen: [Color.fromHex('#445533'), Color.fromHex('#ffccff')],
        minmaxBlue: [Color.fromHex('#445588'), Color.fromHex('#ffeedd')],
        mostFrequentColor: Color.fromHex('#000011'),
        mostSaturatedColor: Color.fromHex('#001122'),
        mostGroupedColor: Color.fromHex('#000011'),
    },
} satisfies IImageColorStats;
