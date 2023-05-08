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
import metadata from './Pavol_Hejn_a_pixel_art_depiction_of_a_space_station_with_blocky_7c807864-d2a1-4217-a8b0-acdac05bf295-0_2.json';
import source from './Pavol_Hejn_a_pixel_art_depiction_of_a_space_station_with_blocky_7c807864-d2a1-4217-a8b0-acdac05bf295-0_2.png';

/**
 * Image of A pixel art depiction of a space station, with blocky shapes and limited colors that create a retro and futuristic feel.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function APixelArtDepictionOfASpaceStationWithBlocky7c807864D2a14217A8b0Acdac05bf2950_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A pixel art depiction of a space station, with blocky shapes and limited colors that create a retro and futuristic feel."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

APixelArtDepictionOfASpaceStationWithBlocky7c807864D2a14217A8b0Acdac05bf2950_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APixelArtDepictionOfASpaceStationWithBlocky7c807864D2a14217A8b0Acdac05bf2950_2_Image.colorStats = {
    averageColor: Color.fromHex('#2e3743'),
    lightestColor: Color.fromHex('#bbcccc'),
    darkestColor: Color.fromHex('#001111'),
    minmaxWhite: [Color.fromHex('#ccccbb'), Color.fromHex('#001111')],
    minmaxRed: [Color.fromHex('#bb5533'), Color.fromHex('#bbcccc')],
    minmaxGreen: [Color.fromHex('#779977'), Color.fromHex('#111133')],
    minmaxBlue: [Color.fromHex('#445577'), Color.fromHex('#eebb88')],
    mostFrequentColor: Color.fromHex('#111122'),
    mostSaturatedColor: Color.fromHex('#001122'),
    mostGroupedColor: Color.fromHex('#111122'),
    bottom: {
        averageColor: Color.fromHex('#252d3c'),
        lightestColor: Color.fromHex('#bbbbbb'),
        darkestColor: Color.fromHex('#001122'),
        minmaxWhite: [Color.fromHex('#bbccaa'), Color.fromHex('#001122')],
        minmaxRed: [Color.fromHex('#aa5533'), Color.fromHex('#bbccaa')],
        minmaxGreen: [Color.fromHex('#558877'), Color.fromHex('#ffbb99')],
        minmaxBlue: [Color.fromHex('#445577'), Color.fromHex('#ffbb99')],
        mostFrequentColor: Color.fromHex('#111122'),
        mostSaturatedColor: Color.fromHex('#001122'),
        mostGroupedColor: Color.fromHex('#111122'),
    },
} satisfies IImageColorStats;
