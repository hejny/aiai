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
import metadata from './Pavol_Hejn_a_photograph_of_a_desert_landscape_at_night_with_the_db92ecf6-3fc7-4288-aca3-60da9195d7b0-0_1.json';
import source from './Pavol_Hejn_a_photograph_of_a_desert_landscape_at_night_with_the_db92ecf6-3fc7-4288-aca3-60da9195d7b0-0_1.png';

/**
 * Image of A photograph of a desert landscape at night, with the stars visible in the sky above.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function APhotographOfADesertLandscapeAtNightWithTheDb92ecf63fc74288Aca360da9195d7b00_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A photograph of a desert landscape at night, with the stars visible in the sky above."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

APhotographOfADesertLandscapeAtNightWithTheDb92ecf63fc74288Aca360da9195d7b00_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APhotographOfADesertLandscapeAtNightWithTheDb92ecf63fc74288Aca360da9195d7b00_1_Image.colorStats = {
    averageColor: Color.fromHex('#34434d'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#aa3311'), Color.fromHex('#99ffff')],
    minmaxGreen: [Color.fromHex('#338888'), Color.fromHex('#ffffff')],
    minmaxBlue: [Color.fromHex('#005599'), Color.fromHex('#ffffff')],
    mostFrequentColor: Color.fromHex('#111122'),
    mostSaturatedColor: Color.fromHex('#000011'),
    mostGroupedColor: Color.fromHex('#001122'),
    bottom: {
        averageColor: Color.fromHex('#543d34'),
        lightestColor: Color.fromHex('#ffddcc'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffeecc'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#bb4400'), Color.fromHex('#ffeecc')],
        minmaxGreen: [Color.fromHex('#667766'), Color.fromHex('#ffddcc')],
        minmaxBlue: [Color.fromHex('#445566'), Color.fromHex('#ffeecc')],
        mostFrequentColor: Color.fromHex('#111122'),
        mostSaturatedColor: Color.fromHex('#110000'),
        mostGroupedColor: Color.fromHex('#111111'),
    },
} satisfies IImageColorStats;
