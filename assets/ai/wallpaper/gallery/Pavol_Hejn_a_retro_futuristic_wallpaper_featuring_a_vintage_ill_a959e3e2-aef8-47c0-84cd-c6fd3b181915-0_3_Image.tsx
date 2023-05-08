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
import metadata from './Pavol_Hejn_a_retro_futuristic_wallpaper_featuring_a_vintage_ill_a959e3e2-aef8-47c0-84cd-c6fd3b181915-0_3.json';
import source from './Pavol_Hejn_a_retro_futuristic_wallpaper_featuring_a_vintage_ill_a959e3e2-aef8-47c0-84cd-c6fd3b181915-0_3.png';

/**
 * Image of A retro-futuristic wallpaper featuring a vintage illustration of a robot, set against a neon-colored background.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function ARetroFuturisticWallpaperFeaturingAVintageIllA959e3e2Aef847c084cdC6fd3b1819150_3_Image(
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

ARetroFuturisticWallpaperFeaturingAVintageIllA959e3e2Aef847c084cdC6fd3b1819150_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ARetroFuturisticWallpaperFeaturingAVintageIllA959e3e2Aef847c084cdC6fd3b1819150_3_Image.colorStats = {
    averageColor: Color.fromHex('#3b524e'),
    lightestColor: Color.fromHex('#bbeedd'),
    darkestColor: Color.fromHex('#221111'),
    minmaxWhite: [Color.fromHex('#bbffdd'), Color.fromHex('#110022')],
    minmaxRed: [Color.fromHex('#dd3344'), Color.fromHex('#11ccaa')],
    minmaxGreen: [Color.fromHex('#33aa66'), Color.fromHex('#dd3355')],
    minmaxBlue: [Color.fromHex('#113366'), Color.fromHex('#ffbb66')],
    mostFrequentColor: Color.fromHex('#112233'),
    mostSaturatedColor: Color.fromHex('#110022'),
    mostGroupedColor: Color.fromHex('#112233'),
    bottom: {
        averageColor: Color.fromHex('#3b4649'),
        lightestColor: Color.fromHex('#99eecc'),
        darkestColor: Color.fromHex('#331111'),
        minmaxWhite: [Color.fromHex('#99eecc'), Color.fromHex('#220022')],
        minmaxRed: [Color.fromHex('#cc3344'), Color.fromHex('#33ddbb')],
        minmaxGreen: [Color.fromHex('#55aa55'), Color.fromHex('#ee4455')],
        minmaxBlue: [Color.fromHex('#113366'), Color.fromHex('#ffbb66')],
        mostFrequentColor: Color.fromHex('#112233'),
        mostSaturatedColor: Color.fromHex('#002233'),
        mostGroupedColor: Color.fromHex('#112233'),
    },
} satisfies IImageColorStats;
