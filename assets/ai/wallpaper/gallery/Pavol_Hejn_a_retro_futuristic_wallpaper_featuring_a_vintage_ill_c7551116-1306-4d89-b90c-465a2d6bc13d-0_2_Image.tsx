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
import metadata from './Pavol_Hejn_a_retro_futuristic_wallpaper_featuring_a_vintage_ill_c7551116-1306-4d89-b90c-465a2d6bc13d-0_2.json';
import source from './Pavol_Hejn_a_retro_futuristic_wallpaper_featuring_a_vintage_ill_c7551116-1306-4d89-b90c-465a2d6bc13d-0_2.png';

/**
 * Image of A retro-futuristic wallpaper featuring a vintage illustration of a robot, set against a neon-colored background.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ARetroFuturisticWallpaperFeaturingAVintageIllC755111613064d89B90c465a2d6bc13d0_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A retro-futuristic wallpaper featuring a vintage illustration of a robot, set against a neon-colored background."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ARetroFuturisticWallpaperFeaturingAVintageIllC755111613064d89B90c465a2d6bc13d0_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ARetroFuturisticWallpaperFeaturingAVintageIllC755111613064d89B90c465a2d6bc13d0_2_Image.colorStats = {
    averageColor: Color.fromHex('#4b363c'),
    lightestColor: Color.fromHex('#eeffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#eeffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#ff2233'), Color.fromHex('#11eeaa')],
    minmaxGreen: [Color.fromHex('#44cc55'), Color.fromHex('#ff2244')],
    minmaxBlue: [Color.fromHex('#223377'), Color.fromHex('#ffee44')],
    mostFrequentColor: Color.fromHex('#221122'),
    mostSaturatedColor: Color.fromHex('#000022'),
    mostGroupedColor: Color.fromHex('#001122'),
    bottom: {
        averageColor: Color.fromHex('#2c353d'),
        lightestColor: Color.fromHex('#eeffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#eeffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#ff2233'), Color.fromHex('#11eeaa')],
        minmaxGreen: [Color.fromHex('#44cc55'), Color.fromHex('#ff2244')],
        minmaxBlue: [Color.fromHex('#223377'), Color.fromHex('#ffee44')],
        mostFrequentColor: Color.fromHex('#221122'),
        mostSaturatedColor: Color.fromHex('#000022'),
        mostGroupedColor: Color.fromHex('#112233'),
    },
} satisfies IImageColorStats;
