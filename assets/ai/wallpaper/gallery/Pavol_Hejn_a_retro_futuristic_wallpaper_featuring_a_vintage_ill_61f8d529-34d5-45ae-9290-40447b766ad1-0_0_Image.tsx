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
import metadata from './Pavol_Hejn_a_retro_futuristic_wallpaper_featuring_a_vintage_ill_61f8d529-34d5-45ae-9290-40447b766ad1-0_0.json';
import source from './Pavol_Hejn_a_retro_futuristic_wallpaper_featuring_a_vintage_ill_61f8d529-34d5-45ae-9290-40447b766ad1-0_0.png';

/**
 * Image of A retro-futuristic wallpaper featuring a vintage illustration of a robot, set against a neon-colored background.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function ARetroFuturisticWallpaperFeaturingAVintageIll61f8d52934d545ae929040447b766ad10_0_Image(
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

ARetroFuturisticWallpaperFeaturingAVintageIll61f8d52934d545ae929040447b766ad10_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ARetroFuturisticWallpaperFeaturingAVintageIll61f8d52934d545ae929040447b766ad10_0_Image.colorStats = {
    averageColor: Color.fromHex('#223444'),
    lightestColor: Color.fromHex('#eeffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#eeffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#bb3344'), Color.fromHex('#bbffff')],
    minmaxGreen: [Color.fromHex('#55bb66'), Color.fromHex('#ffddee')],
    minmaxBlue: [Color.fromHex('#333366'), Color.fromHex('#ffffbb')],
    mostFrequentColor: Color.fromHex('#001133'),
    mostSaturatedColor: Color.fromHex('#001133'),
    mostGroupedColor: Color.fromHex('#112233'),
    bottom: {
        averageColor: Color.fromHex('#223140'),
        lightestColor: Color.fromHex('#eeffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#eeffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#aa3333'), Color.fromHex('#bbffff')],
        minmaxGreen: [Color.fromHex('#22aa99'), Color.fromHex('#ffddee')],
        minmaxBlue: [Color.fromHex('#333366'), Color.fromHex('#ffffbb')],
        mostFrequentColor: Color.fromHex('#001133'),
        mostSaturatedColor: Color.fromHex('#001133'),
        mostGroupedColor: Color.fromHex('#112233'),
    },
} satisfies IImageColorStats;
