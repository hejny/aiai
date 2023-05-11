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
import metadata from './Pavol_Hejn_a_colorful_graphic_of_a_bicycle_race_for_a_sports_or_fc35f70e-4928-477f-9bf6-2a6a0ff7cb29-0_1.json';
import source from './Pavol_Hejn_a_colorful_graphic_of_a_bicycle_race_for_a_sports_or_fc35f70e-4928-477f-9bf6-2a6a0ff7cb29-0_1.png';

/**
 * Image of A colorful graphic of a bicycle race for a sports or fitness website
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AColorfulGraphicOfABicycleRaceForASportsOrFc35f70e4928477f9bf62a6a0ff7cb290_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A colorful graphic of a bicycle race for a sports or fitness website"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AColorfulGraphicOfABicycleRaceForASportsOrFc35f70e4928477f9bf62a6a0ff7cb290_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AColorfulGraphicOfABicycleRaceForASportsOrFc35f70e4928477f9bf62a6a0ff7cb290_1_Image.colorStats = {
    averageColor: Color.fromHex('#5c5b59'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#ff0011'), Color.fromHex('#00eeff')],
    minmaxGreen: [Color.fromHex('#229944'), Color.fromHex('#ff0055')],
    minmaxBlue: [Color.fromHex('#222288'), Color.fromHex('#ffdd11')],
    mostFrequentColor: Color.fromHex('#001122'),
    mostSaturatedColor: Color.fromHex('#002244'),
    mostGroupedColor: Color.fromHex('#000011'),
    bottom: {
        averageColor: Color.fromHex('#3e444d'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#ee0022'), Color.fromHex('#00eeee')],
        minmaxGreen: [Color.fromHex('#669955'), Color.fromHex('#ff0044')],
        minmaxBlue: [Color.fromHex('#222288'), Color.fromHex('#ffcc11')],
        mostFrequentColor: Color.fromHex('#001122'),
        mostSaturatedColor: Color.fromHex('#001122'),
        mostGroupedColor: Color.fromHex('#000011'),
    },
} satisfies IImageColorStats;
