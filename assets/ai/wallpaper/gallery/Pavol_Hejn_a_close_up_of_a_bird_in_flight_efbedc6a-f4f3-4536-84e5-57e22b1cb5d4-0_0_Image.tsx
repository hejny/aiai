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
import metadata from './Pavol_Hejn_a_close_up_of_a_bird_in_flight_efbedc6a-f4f3-4536-84e5-57e22b1cb5d4-0_0.json';
import source from './Pavol_Hejn_a_close_up_of_a_bird_in_flight_efbedc6a-f4f3-4536-84e5-57e22b1cb5d4-0_0.png';

/**
 * Image of A close-up of a bird in flight
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function ACloseUpOfABirdInFlightEfbedc6aF4f3453684e557e22b1cb5d40_0_Image(props: IWallpaperComponentProps) {
    const { width, quality } = props;

    return (
        <Image
            alt="A close-up of a bird in flight"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ACloseUpOfABirdInFlightEfbedc6aF4f3453684e557e22b1cb5d40_0_Image.metadata = metadata satisfies IWallpaperMetadata;
ACloseUpOfABirdInFlightEfbedc6aF4f3453684e557e22b1cb5d40_0_Image.colorStats = {
    averageColor: Color.fromHex('#3a3d45'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#111100'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000011')],
    minmaxRed: [Color.fromHex('#aa4433'), Color.fromHex('#ddffff')],
    minmaxGreen: [Color.fromHex('#998811'), Color.fromHex('#ffffff')],
    minmaxBlue: [Color.fromHex('#335588'), Color.fromHex('#ffffee')],
    mostFrequentColor: Color.fromHex('#111111'),
    mostSaturatedColor: Color.fromHex('#002244'),
    mostGroupedColor: Color.fromHex('#111111'),
    bottom: {
        averageColor: Color.fromHex('#202630'),
        lightestColor: Color.fromHex('#eebbbb'),
        darkestColor: Color.fromHex('#111111'),
        minmaxWhite: [Color.fromHex('#eeccbb'), Color.fromHex('#111111')],
        minmaxRed: [Color.fromHex('#aa4433'), Color.fromHex('#ddccbb')],
        minmaxGreen: [Color.fromHex('#667777'), Color.fromHex('#661122')],
        minmaxBlue: [Color.fromHex('#335588'), Color.fromHex('#eeccbb')],
        mostFrequentColor: Color.fromHex('#111111'),
        mostSaturatedColor: Color.fromHex('#114466'),
        mostGroupedColor: Color.fromHex('#111111'),
    },
} satisfies IImageColorStats;
