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
import metadata from './Pavol_Hejn_a_close_up_of_a_crab_on_the_beach_160c3dc8-8dbb-4cee-9114-3d6c468fe6b6-0_2.json';
import source from './Pavol_Hejn_a_close_up_of_a_crab_on_the_beach_160c3dc8-8dbb-4cee-9114-3d6c468fe6b6-0_2.png';

/**
 * Image of A close-up of a crab on the beach
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ACloseUpOfACrabOnTheBeach160c3dc88dbb4cee91143d6c468fe6b60_2_Image(props: IWallpaperComponentProps) {
    const { width, quality } = props;

    return (
        <Image
            alt="A close-up of a crab on the beach"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ACloseUpOfACrabOnTheBeach160c3dc88dbb4cee91143d6c468fe6b60_2_Image.metadata = metadata satisfies IWallpaperMetadata;
ACloseUpOfACrabOnTheBeach160c3dc88dbb4cee91143d6c468fe6b60_2_Image.colorStats = {
    averageColor: Color.fromHex('#969192'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#cc2211'), Color.fromHex('#ccffff')],
    minmaxGreen: [Color.fromHex('#558877'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#444477'), Color.fromHex('#ffffbb')],
    mostFrequentColor: Color.fromHex('#556666'),
    mostSaturatedColor: Color.fromHex('#110011'),
    mostGroupedColor: Color.fromHex('#eeffff'),
    bottom: {
        averageColor: Color.fromHex('#7f7268'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#bb2200'), Color.fromHex('#eeffff')],
        minmaxGreen: [Color.fromHex('#888855'), Color.fromHex('#ffffff')],
        minmaxBlue: [Color.fromHex('#445577'), Color.fromHex('#ffffbb')],
        mostFrequentColor: Color.fromHex('#556666'),
        mostSaturatedColor: Color.fromHex('#110011'),
        mostGroupedColor: Color.fromHex('#bbbbaa'),
    },
} satisfies IImageColorStats;
