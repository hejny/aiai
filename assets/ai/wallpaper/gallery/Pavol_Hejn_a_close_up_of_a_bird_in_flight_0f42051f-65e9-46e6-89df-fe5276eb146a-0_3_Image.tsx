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
import metadata from './Pavol_Hejn_a_close_up_of_a_bird_in_flight_0f42051f-65e9-46e6-89df-fe5276eb146a-0_3.json';
import source from './Pavol_Hejn_a_close_up_of_a_bird_in_flight_0f42051f-65e9-46e6-89df-fe5276eb146a-0_3.png';

/**
 * Image of A close-up of a bird in flight
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function ACloseUpOfABirdInFlight0f42051f65e946e689dfFe5276eb146a0_3_Image(props: IWallpaperComponentProps) {
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

ACloseUpOfABirdInFlight0f42051f65e946e689dfFe5276eb146a0_3_Image.metadata = metadata satisfies IWallpaperMetadata;
ACloseUpOfABirdInFlight0f42051f65e946e689dfFe5276eb146a0_3_Image.colorStats = {
    averageColor: Color.fromHex('#584535'),
    lightestColor: Color.fromHex('#eeeedd'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#eeeedd'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#dd2200'), Color.fromHex('#ffffcc')],
    minmaxGreen: [Color.fromHex('#668855'), Color.fromHex('#dd2200')],
    minmaxBlue: [Color.fromHex('#555588'), Color.fromHex('#ffff66')],
    mostFrequentColor: Color.fromHex('#111100'),
    mostSaturatedColor: Color.fromHex('#331100'),
    mostGroupedColor: Color.fromHex('#223344'),
    bottom: {
        averageColor: Color.fromHex('#322b27'),
        lightestColor: Color.fromHex('#8899aa'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffcc77'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#dd2200'), Color.fromHex('#8899aa')],
        minmaxGreen: [Color.fromHex('#777744'), Color.fromHex('#dd2200')],
        minmaxBlue: [Color.fromHex('#335577'), Color.fromHex('#ffcc66')],
        mostFrequentColor: Color.fromHex('#111100'),
        mostSaturatedColor: Color.fromHex('#331100'),
        mostGroupedColor: Color.fromHex('#223344'),
    },
} satisfies IImageColorStats;
