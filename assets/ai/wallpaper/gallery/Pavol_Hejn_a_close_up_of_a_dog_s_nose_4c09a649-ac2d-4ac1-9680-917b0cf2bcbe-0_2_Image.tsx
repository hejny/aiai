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
import metadata from './Pavol_Hejn_a_close_up_of_a_dog_s_nose_4c09a649-ac2d-4ac1-9680-917b0cf2bcbe-0_2.json';
import source from './Pavol_Hejn_a_close_up_of_a_dog_s_nose_4c09a649-ac2d-4ac1-9680-917b0cf2bcbe-0_2.png';

/**
 * Image of A close-up of a dog’s nose
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ACloseUpOfADogSNose4c09a649Ac2d4ac19680917b0cf2bcbe0_2_Image(props: IWallpaperComponentProps) {
    const { width, quality } = props;

    return (
        <Image
            alt="A close-up of a dog’s nose"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ACloseUpOfADogSNose4c09a649Ac2d4ac19680917b0cf2bcbe0_2_Image.metadata = metadata satisfies IWallpaperMetadata;
ACloseUpOfADogSNose4c09a649Ac2d4ac19680917b0cf2bcbe0_2_Image.colorStats = {
    averageColor: Color.fromHex('#352720'),
    lightestColor: Color.fromHex('#ffeedd'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffeedd'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#994411'), Color.fromHex('#eeeedd')],
    minmaxGreen: [Color.fromHex('#777755'), Color.fromHex('#ffeedd')],
    minmaxBlue: [Color.fromHex('#444466'), Color.fromHex('#ffdd88')],
    mostFrequentColor: Color.fromHex('#000000'),
    mostSaturatedColor: Color.fromHex('#111100'),
    mostGroupedColor: Color.fromHex('#000000'),
    bottom: {
        averageColor: Color.fromHex('#2d231e'),
        lightestColor: Color.fromHex('#dddddd'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#dddddd'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#885533'), Color.fromHex('#dddddd')],
        minmaxGreen: [Color.fromHex('#777755'), Color.fromHex('#220000')],
        minmaxBlue: [Color.fromHex('#555566'), Color.fromHex('#ddddcc')],
        mostFrequentColor: Color.fromHex('#000000'),
        mostSaturatedColor: Color.fromHex('#111100'),
        mostGroupedColor: Color.fromHex('#000000'),
    },
} satisfies IImageColorStats;
