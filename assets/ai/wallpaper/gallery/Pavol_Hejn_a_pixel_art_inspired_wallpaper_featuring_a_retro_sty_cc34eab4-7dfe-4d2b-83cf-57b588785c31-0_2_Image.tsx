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
import metadata from './Pavol_Hejn_a_pixel_art_inspired_wallpaper_featuring_a_retro_sty_cc34eab4-7dfe-4d2b-83cf-57b588785c31-0_2.json';
import source from './Pavol_Hejn_a_pixel_art_inspired_wallpaper_featuring_a_retro_sty_cc34eab4-7dfe-4d2b-83cf-57b588785c31-0_2.png';

/**
 * Image of A pixel art-inspired wallpaper featuring a retro-style robot, with a limited color palette and pixelated lines.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function APixelArtInspiredWallpaperFeaturingARetroStyCc34eab47dfe4d2b83cf57b588785c310_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A pixel art-inspired wallpaper featuring a retro-style robot, with a limited color palette and pixelated lines."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

APixelArtInspiredWallpaperFeaturingARetroStyCc34eab47dfe4d2b83cf57b588785c310_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APixelArtInspiredWallpaperFeaturingARetroStyCc34eab47dfe4d2b83cf57b588785c310_2_Image.colorStats = {
    averageColor: Color.fromHex('#1d1a29'),
    lightestColor: Color.fromHex('#bbdddd'),
    darkestColor: Color.fromHex('#110000'),
    minmaxWhite: [Color.fromHex('#eeeebb'), Color.fromHex('#000011')],
    minmaxRed: [Color.fromHex('#ff3355'), Color.fromHex('#22eedd')],
    minmaxGreen: [Color.fromHex('#559944'), Color.fromHex('#ff3355')],
    minmaxBlue: [Color.fromHex('#3366bb'), Color.fromHex('#ffffaa')],
    mostFrequentColor: Color.fromHex('#000011'),
    mostSaturatedColor: Color.fromHex('#110011'),
    mostGroupedColor: Color.fromHex('#110011'),
    bottom: {
        averageColor: Color.fromHex('#1b0e1f'),
        lightestColor: Color.fromHex('#88cccc'),
        darkestColor: Color.fromHex('#110000'),
        minmaxWhite: [Color.fromHex('#ffeeaa'), Color.fromHex('#000011')],
        minmaxRed: [Color.fromHex('#cc3344'), Color.fromHex('#66eeaa')],
        minmaxGreen: [Color.fromHex('#33aa77'), Color.fromHex('#ff4466')],
        minmaxBlue: [Color.fromHex('#225599'), Color.fromHex('#ffff88')],
        mostFrequentColor: Color.fromHex('#000011'),
        mostSaturatedColor: Color.fromHex('#110011'),
        mostGroupedColor: Color.fromHex('#110011'),
    },
} satisfies IImageColorStats;
