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
import metadata from './Pavol_Hejn_a_retro_futuristic_wallpaper_featuring_a_vintage_ill_944b209c-17af-4e1f-8b23-ae5e41e444e1-0_1.json';
import source from './Pavol_Hejn_a_retro_futuristic_wallpaper_featuring_a_vintage_ill_944b209c-17af-4e1f-8b23-ae5e41e444e1-0_1.png';

/**
 * Image of A retro-futuristic wallpaper featuring a vintage illustration of a robot, set against a neon-colored background.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function ARetroFuturisticWallpaperFeaturingAVintageIll944b209c17af4e1f8b23Ae5e41e444e10_1_Image(
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

ARetroFuturisticWallpaperFeaturingAVintageIll944b209c17af4e1f8b23Ae5e41e444e10_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ARetroFuturisticWallpaperFeaturingAVintageIll944b209c17af4e1f8b23Ae5e41e444e10_1_Image.colorStats = {
    averageColor: Color.fromHex('#423456'),
    lightestColor: Color.fromHex('#eeeeff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#eeeeff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#ee2244'), Color.fromHex('#ddeeff')],
    minmaxGreen: [Color.fromHex('#33cc66'), Color.fromHex('#ff2255')],
    minmaxBlue: [Color.fromHex('#114477'), Color.fromHex('#ffee66')],
    mostFrequentColor: Color.fromHex('#222266'),
    mostSaturatedColor: Color.fromHex('#004466'),
    mostGroupedColor: Color.fromHex('#221155'),
    bottom: {
        averageColor: Color.fromHex('#283a5d'),
        lightestColor: Color.fromHex('#eeffff'),
        darkestColor: Color.fromHex('#112200'),
        minmaxWhite: [Color.fromHex('#eeffff'), Color.fromHex('#001111')],
        minmaxRed: [Color.fromHex('#dd4411'), Color.fromHex('#eeffff')],
        minmaxGreen: [Color.fromHex('#22cc77'), Color.fromHex('#eeffff')],
        minmaxBlue: [Color.fromHex('#114477'), Color.fromHex('#eeee77')],
        mostFrequentColor: Color.fromHex('#222266'),
        mostSaturatedColor: Color.fromHex('#004466'),
        mostGroupedColor: Color.fromHex('#115577'),
    },
} satisfies IImageColorStats;
