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
import metadata from './Pavol_Hejn_an_urban_inspired_wallpaper_with_a_grunge_aesthetic__b80a1307-cf5f-48c3-b3ac-98e10465c45c-0_3.json';
import source from './Pavol_Hejn_an_urban_inspired_wallpaper_with_a_grunge_aesthetic__b80a1307-cf5f-48c3-b3ac-98e10465c45c-0_3.png';

/**
 * Image of An urban-inspired wallpaper with a grunge aesthetic, featuring a neon-lit cityscape with futuristic elements such as holographic billboards.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AnUrbanInspiredWallpaperWithAGrungeAestheticB80a1307Cf5f48c3B3ac98e10465c45c0_3_Image(
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

AnUrbanInspiredWallpaperWithAGrungeAestheticB80a1307Cf5f48c3B3ac98e10465c45c0_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnUrbanInspiredWallpaperWithAGrungeAestheticB80a1307Cf5f48c3B3ac98e10465c45c0_3_Image.colorStats = {
    averageColor: Color.fromHex('#4a344f'),
    lightestColor: Color.fromHex('#ffaaff'),
    darkestColor: Color.fromHex('#001100'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#ee3333'), Color.fromHex('#44ffff')],
    minmaxGreen: [Color.fromHex('#339966'), Color.fromHex('#ff55ff')],
    minmaxBlue: [Color.fromHex('#2244aa'), Color.fromHex('#ffffcc')],
    mostFrequentColor: Color.fromHex('#000011'),
    mostSaturatedColor: Color.fromHex('#110000'),
    mostGroupedColor: Color.fromHex('#000000'),
    bottom: {
        averageColor: Color.fromHex('#2a1d30'),
        lightestColor: Color.fromHex('#55bbff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ff9999'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#bb2222'), Color.fromHex('#22ccff')],
        minmaxGreen: [Color.fromHex('#337788'), Color.fromHex('#cc22aa')],
        minmaxBlue: [Color.fromHex('#2244aa'), Color.fromHex('#ff8877')],
        mostFrequentColor: Color.fromHex('#000011'),
        mostSaturatedColor: Color.fromHex('#110011'),
        mostGroupedColor: Color.fromHex('#000000'),
    },
} satisfies IImageColorStats;
