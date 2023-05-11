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
import metadata from './Pavol_Hejn_a_close_up_of_a_bird_in_flight_0f42051f-65e9-46e6-89df-fe5276eb146a-0_1.json';
import source from './Pavol_Hejn_a_close_up_of_a_bird_in_flight_0f42051f-65e9-46e6-89df-fe5276eb146a-0_1.png';

/**
 * Image of A close-up of a bird in flight
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function ACloseUpOfABirdInFlight0f42051f65e946e689dfFe5276eb146a0_1_Image(props: IWallpaperComponentProps) {
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

ACloseUpOfABirdInFlight0f42051f65e946e689dfFe5276eb146a0_1_Image.metadata = metadata satisfies IWallpaperMetadata;
ACloseUpOfABirdInFlight0f42051f65e946e689dfFe5276eb146a0_1_Image.colorStats = {
    averageColor: Color.fromHex('#344754'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#110000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000011')],
    minmaxRed: [Color.fromHex('#aa5544'), Color.fromHex('#ddffff')],
    minmaxGreen: [Color.fromHex('#557766'), Color.fromHex('#ffffff')],
    minmaxBlue: [Color.fromHex('#225577'), Color.fromHex('#ffffdd')],
    mostFrequentColor: Color.fromHex('#001122'),
    mostSaturatedColor: Color.fromHex('#002233'),
    mostGroupedColor: Color.fromHex('#112233'),
    bottom: {
        averageColor: Color.fromHex('#1e3343'),
        lightestColor: Color.fromHex('#aaaabb'),
        darkestColor: Color.fromHex('#110000'),
        minmaxWhite: [Color.fromHex('#aabbbb'), Color.fromHex('#000011')],
        minmaxRed: [Color.fromHex('#774433'), Color.fromHex('#aabbbb')],
        minmaxGreen: [Color.fromHex('#778877'), Color.fromHex('#110011')],
        minmaxBlue: [Color.fromHex('#225577'), Color.fromHex('#aabbbb')],
        mostFrequentColor: Color.fromHex('#001122'),
        mostSaturatedColor: Color.fromHex('#002233'),
        mostGroupedColor: Color.fromHex('#001122'),
    },
} satisfies IImageColorStats;
