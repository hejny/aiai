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
import metadata from './Pavol_Hejn_a_pixel_art_inspired_wallpaper_featuring_a_retro_sty_10e6d742-d354-42a9-8c19-ca72846339e7-0_1.json';
import source from './Pavol_Hejn_a_pixel_art_inspired_wallpaper_featuring_a_retro_sty_10e6d742-d354-42a9-8c19-ca72846339e7-0_1.png';

/**
 * Image of A pixel art-inspired wallpaper featuring a retro-style robot, with a limited color palette and pixelated lines.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function APixelArtInspiredWallpaperFeaturingARetroSty0e6d742D35442a98c19Ca72846339e701_1_Image(
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

APixelArtInspiredWallpaperFeaturingARetroSty0e6d742D35442a98c19Ca72846339e701_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APixelArtInspiredWallpaperFeaturingARetroSty0e6d742D35442a98c19Ca72846339e701_1_Image.colorStats = {
    averageColor: Color.fromHex('#8c5e41'),
    lightestColor: Color.fromHex('#eeeedd'),
    darkestColor: Color.fromHex('#222200'),
    minmaxWhite: [Color.fromHex('#eeeedd'), Color.fromHex('#000022')],
    minmaxRed: [Color.fromHex('#ee2200'), Color.fromHex('#ffffcc')],
    minmaxGreen: [Color.fromHex('#55aa77'), Color.fromHex('#ee2211')],
    minmaxBlue: [Color.fromHex('#224466'), Color.fromHex('#ffffcc')],
    mostFrequentColor: Color.fromHex('#553322'),
    mostSaturatedColor: Color.fromHex('#001133'),
    mostGroupedColor: Color.fromHex('#774433'),
    bottom: {
        averageColor: Color.fromHex('#74533f'),
        lightestColor: Color.fromHex('#eeeedd'),
        darkestColor: Color.fromHex('#221100'),
        minmaxWhite: [Color.fromHex('#eeeedd'), Color.fromHex('#001122')],
        minmaxRed: [Color.fromHex('#dd2211'), Color.fromHex('#ddeedd')],
        minmaxGreen: [Color.fromHex('#55aa77'), Color.fromHex('#dd2211')],
        minmaxBlue: [Color.fromHex('#334466'), Color.fromHex('#ffeeaa')],
        mostFrequentColor: Color.fromHex('#553322'),
        mostSaturatedColor: Color.fromHex('#001133'),
        mostGroupedColor: Color.fromHex('#774433'),
    },
} satisfies IImageColorStats;
