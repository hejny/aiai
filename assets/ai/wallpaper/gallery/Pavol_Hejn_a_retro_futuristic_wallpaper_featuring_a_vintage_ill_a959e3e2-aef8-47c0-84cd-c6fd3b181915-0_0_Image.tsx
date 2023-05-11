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
import metadata from './Pavol_Hejn_a_retro_futuristic_wallpaper_featuring_a_vintage_ill_a959e3e2-aef8-47c0-84cd-c6fd3b181915-0_0.json';
import source from './Pavol_Hejn_a_retro_futuristic_wallpaper_featuring_a_vintage_ill_a959e3e2-aef8-47c0-84cd-c6fd3b181915-0_0.png';

/**
 * Image of A retro-futuristic wallpaper featuring a vintage illustration of a robot, set against a neon-colored background.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function ARetroFuturisticWallpaperFeaturingAVintageIllA959e3e2Aef847c084cdC6fd3b1819150_0_Image(
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

ARetroFuturisticWallpaperFeaturingAVintageIllA959e3e2Aef847c084cdC6fd3b1819150_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ARetroFuturisticWallpaperFeaturingAVintageIllA959e3e2Aef847c084cdC6fd3b1819150_0_Image.colorStats = {
    averageColor: Color.fromHex('#6a2f3d'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#dd3333'), Color.fromHex('#eeffff')],
    minmaxGreen: [Color.fromHex('#99aa55'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#224488'), Color.fromHex('#ffff77')],
    mostFrequentColor: Color.fromHex('#884455'),
    mostSaturatedColor: Color.fromHex('#330033'),
    mostGroupedColor: Color.fromHex('#221122'),
    bottom: {
        averageColor: Color.fromHex('#4f2238'),
        lightestColor: Color.fromHex('#bbddee'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#eeeecc'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#bb3322'), Color.fromHex('#66ccee')],
        minmaxGreen: [Color.fromHex('#669988'), Color.fromHex('#bb2266')],
        minmaxBlue: [Color.fromHex('#224488'), Color.fromHex('#ffee99')],
        mostFrequentColor: Color.fromHex('#884455'),
        mostSaturatedColor: Color.fromHex('#330022'),
        mostGroupedColor: Color.fromHex('#221122'),
    },
} satisfies IImageColorStats;
