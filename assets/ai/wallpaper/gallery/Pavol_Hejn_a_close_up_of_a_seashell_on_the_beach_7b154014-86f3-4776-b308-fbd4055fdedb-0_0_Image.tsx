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
import metadata from './Pavol_Hejn_a_close_up_of_a_seashell_on_the_beach_7b154014-86f3-4776-b308-fbd4055fdedb-0_0.json';
import source from './Pavol_Hejn_a_close_up_of_a_seashell_on_the_beach_7b154014-86f3-4776-b308-fbd4055fdedb-0_0.png';

/**
 * Image of A close-up of a seashell on the beach
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function ACloseUpOfASeashellOnTheBeach7b15401486f34776B308Fbd4055fdedb0_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A close-up of a seashell on the beach"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ACloseUpOfASeashellOnTheBeach7b15401486f34776B308Fbd4055fdedb0_0_Image.metadata = metadata satisfies IWallpaperMetadata;
ACloseUpOfASeashellOnTheBeach7b15401486f34776B308Fbd4055fdedb0_0_Image.colorStats = {
    averageColor: Color.fromHex('#b69881'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#110000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#110000')],
    minmaxRed: [Color.fromHex('#bb2200'), Color.fromHex('#eeffff')],
    minmaxGreen: [Color.fromHex('#778866'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#334455'), Color.fromHex('#ffffcc')],
    mostFrequentColor: Color.fromHex('#665544'),
    mostSaturatedColor: Color.fromHex('#220011'),
    mostGroupedColor: Color.fromHex('#ffddaa'),
    bottom: {
        averageColor: Color.fromHex('#8a624f'),
        lightestColor: Color.fromHex('#ffffee'),
        darkestColor: Color.fromHex('#110000'),
        minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#110000')],
        minmaxRed: [Color.fromHex('#bb2200'), Color.fromHex('#ffffee')],
        minmaxGreen: [Color.fromHex('#998855'), Color.fromHex('#ffeeee')],
        minmaxBlue: [Color.fromHex('#556677'), Color.fromHex('#ffffcc')],
        mostFrequentColor: Color.fromHex('#665544'),
        mostSaturatedColor: Color.fromHex('#220011'),
        mostGroupedColor: Color.fromHex('#222233'),
    },
} satisfies IImageColorStats;
