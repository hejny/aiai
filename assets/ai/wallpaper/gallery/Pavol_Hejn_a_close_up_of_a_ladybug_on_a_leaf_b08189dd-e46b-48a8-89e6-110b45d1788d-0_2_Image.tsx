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
import metadata from './Pavol_Hejn_a_close_up_of_a_ladybug_on_a_leaf_b08189dd-e46b-48a8-89e6-110b45d1788d-0_2.json';
import source from './Pavol_Hejn_a_close_up_of_a_ladybug_on_a_leaf_b08189dd-e46b-48a8-89e6-110b45d1788d-0_2.png';

/**
 * Image of A close-up of a ladybug on a leaf
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ACloseUpOfALadybugOnALeafB08189ddE46b48a889e6110b45d1788d0_2_Image(props: IWallpaperComponentProps) {
    const { width, quality } = props;

    return (
        <Image
            alt="A close-up of a ladybug on a leaf"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ACloseUpOfALadybugOnALeafB08189ddE46b48a889e6110b45d1788d0_2_Image.metadata = metadata satisfies IWallpaperMetadata;
ACloseUpOfALadybugOnALeafB08189ddE46b48a889e6110b45d1788d0_2_Image.colorStats = {
    averageColor: Color.fromHex('#3a451f'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#bb1100'), Color.fromHex('#eeffff')],
    minmaxGreen: [Color.fromHex('#88cc22'), Color.fromHex('#ffddff')],
    minmaxBlue: [Color.fromHex('#444477'), Color.fromHex('#ffffcc')],
    mostFrequentColor: Color.fromHex('#000000'),
    mostSaturatedColor: Color.fromHex('#000011'),
    mostGroupedColor: Color.fromHex('#111111'),
    bottom: {
        averageColor: Color.fromHex('#435621'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#001100'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#774422'), Color.fromHex('#eeffff')],
        minmaxGreen: [Color.fromHex('#77aa00'), Color.fromHex('#ffffff')],
        minmaxBlue: [Color.fromHex('#444477'), Color.fromHex('#ffffff')],
        mostFrequentColor: Color.fromHex('#000000'),
        mostSaturatedColor: Color.fromHex('#112200'),
        mostGroupedColor: Color.fromHex('#000000'),
    },
} satisfies IImageColorStats;
