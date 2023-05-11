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
import metadata from './Pavol_Hejn_a_forest_with_a_misty_background_9cb8a1dc-1530-4778-b3d4-8250235a1ca8-0_1.json';
import source from './Pavol_Hejn_a_forest_with_a_misty_background_9cb8a1dc-1530-4778-b3d4-8250235a1ca8-0_1.png';

/**
 * Image of A forest with a misty background
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AForestWithAMistyBackground9cb8a1dc15304778B3d48250235a1ca80_1_Image(props: IWallpaperComponentProps) {
    const { width, quality } = props;

    return (
        <Image
            alt="A forest with a misty background"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AForestWithAMistyBackground9cb8a1dc15304778B3d48250235a1ca80_1_Image.metadata = metadata satisfies IWallpaperMetadata;
AForestWithAMistyBackground9cb8a1dc15304778B3d48250235a1ca80_1_Image.colorStats = {
    averageColor: Color.fromHex('#525d4b'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#001100'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#774422'), Color.fromHex('#ddffff')],
    minmaxGreen: [Color.fromHex('#44aa00'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#556688'), Color.fromHex('#ffffee')],
    mostFrequentColor: Color.fromHex('#000000'),
    mostSaturatedColor: Color.fromHex('#001111'),
    mostGroupedColor: Color.fromHex('#111111'),
    bottom: {
        averageColor: Color.fromHex('#29321a'),
        lightestColor: Color.fromHex('#eeffcc'),
        darkestColor: Color.fromHex('#001100'),
        minmaxWhite: [Color.fromHex('#eeffcc'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#774422'), Color.fromHex('#ddffcc')],
        minmaxGreen: [Color.fromHex('#44aa00'), Color.fromHex('#220000')],
        minmaxBlue: [Color.fromHex('#557777'), Color.fromHex('#ddff88')],
        mostFrequentColor: Color.fromHex('#000000'),
        mostSaturatedColor: Color.fromHex('#001100'),
        mostGroupedColor: Color.fromHex('#000000'),
    },
} satisfies IImageColorStats;
