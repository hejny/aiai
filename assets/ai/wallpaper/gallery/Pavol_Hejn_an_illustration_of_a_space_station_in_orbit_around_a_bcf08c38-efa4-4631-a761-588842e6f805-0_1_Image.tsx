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
import metadata from './Pavol_Hejn_an_illustration_of_a_space_station_in_orbit_around_a_bcf08c38-efa4-4631-a761-588842e6f805-0_1.json';
import source from './Pavol_Hejn_an_illustration_of_a_space_station_in_orbit_around_a_bcf08c38-efa4-4631-a761-588842e6f805-0_1.png';

/**
 * Image of An illustration of a space station in orbit around a gas giant planet, with rings and storms visible in the background.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AnIllustrationOfASpaceStationInOrbitAroundABcf08c38Efa44631A761588842e6f8050_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An illustration of a space station in orbit around a gas giant planet, with rings and storms visible in the background."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnIllustrationOfASpaceStationInOrbitAroundABcf08c38Efa44631A761588842e6f8050_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnIllustrationOfASpaceStationInOrbitAroundABcf08c38Efa44631A761588842e6f8050_1_Image.colorStats = {
    averageColor: Color.fromHex('#2c3238'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#774422'), Color.fromHex('#eeffff')],
    minmaxGreen: [Color.fromHex('#998844'), Color.fromHex('#ffffff')],
    minmaxBlue: [Color.fromHex('#335577'), Color.fromHex('#ffffee')],
    mostFrequentColor: Color.fromHex('#223344'),
    mostSaturatedColor: Color.fromHex('#001111'),
    mostGroupedColor: Color.fromHex('#111111'),
    bottom: {
        averageColor: Color.fromHex('#18202a'),
        lightestColor: Color.fromHex('#eeeeee'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#eeeeee'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#664433'), Color.fromHex('#cceeee')],
        minmaxGreen: [Color.fromHex('#446666'), Color.fromHex('#eeeeee')],
        minmaxBlue: [Color.fromHex('#335577'), Color.fromHex('#eeeeee')],
        mostFrequentColor: Color.fromHex('#223344'),
        mostSaturatedColor: Color.fromHex('#001111'),
        mostGroupedColor: Color.fromHex('#111111'),
    },
} satisfies IImageColorStats;
