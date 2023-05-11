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
import metadata from './Pavol_Hejn_a_close_up_of_a_bird_in_flight_ac95ff9a-9913-4f18-b7aa-32a372a9db72-0_2.json';
import source from './Pavol_Hejn_a_close_up_of_a_bird_in_flight_ac95ff9a-9913-4f18-b7aa-32a372a9db72-0_2.png';

/**
 * Image of A close-up of a bird in flight
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ACloseUpOfABirdInFlightAc95ff9a99134f18B7aa32a372a9db720_2_Image(props: IWallpaperComponentProps) {
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

ACloseUpOfABirdInFlightAc95ff9a99134f18B7aa32a372a9db720_2_Image.metadata = metadata satisfies IWallpaperMetadata;
ACloseUpOfABirdInFlightAc95ff9a99134f18B7aa32a372a9db720_2_Image.colorStats = {
    averageColor: Color.fromHex('#8f7150'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#ff2200'), Color.fromHex('#eeffff')],
    minmaxGreen: [Color.fromHex('#779966'), Color.fromHex('#ff2200')],
    minmaxBlue: [Color.fromHex('#005599'), Color.fromHex('#ffff99')],
    mostFrequentColor: Color.fromHex('#221100'),
    mostSaturatedColor: Color.fromHex('#0066aa'),
    mostGroupedColor: Color.fromHex('#ffaa33'),
    bottom: {
        averageColor: Color.fromHex('#6a5442'),
        lightestColor: Color.fromHex('#eecccc'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffeebb'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#993311'), Color.fromHex('#0077bb')],
        minmaxGreen: [Color.fromHex('#667744'), Color.fromHex('#330000')],
        minmaxBlue: [Color.fromHex('#005599'), Color.fromHex('#ffee99')],
        mostFrequentColor: Color.fromHex('#221100'),
        mostSaturatedColor: Color.fromHex('#0066aa'),
        mostGroupedColor: Color.fromHex('#332211'),
    },
} satisfies IImageColorStats;
