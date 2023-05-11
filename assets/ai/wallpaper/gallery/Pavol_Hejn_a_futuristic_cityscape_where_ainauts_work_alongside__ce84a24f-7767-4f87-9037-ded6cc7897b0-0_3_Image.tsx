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
import metadata from './Pavol_Hejn_a_futuristic_cityscape_where_ainauts_work_alongside__ce84a24f-7767-4f87-9037-ded6cc7897b0-0_3.json';
import source from './Pavol_Hejn_a_futuristic_cityscape_where_ainauts_work_alongside__ce84a24f-7767-4f87-9037-ded6cc7897b0-0_3.png';

/**
 * Image of A futuristic cityscape where AInauts work alongside AI to push the boundaries of science and technology.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AFuturisticCityscapeWhereAinautsWorkAlongsideCe84a24f77674f879037Ded6cc7897b00_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A futuristic cityscape where AInauts work alongside AI to push the boundaries of science and technology."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AFuturisticCityscapeWhereAinautsWorkAlongsideCe84a24f77674f879037Ded6cc7897b00_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AFuturisticCityscapeWhereAinautsWorkAlongsideCe84a24f77674f879037Ded6cc7897b00_3_Image.colorStats = {
    averageColor: Color.fromHex('#504141'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#bb2200'), Color.fromHex('#ccffff')],
    minmaxGreen: [Color.fromHex('#bbcc44'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#224488'), Color.fromHex('#ffffbb')],
    mostFrequentColor: Color.fromHex('#000000'),
    mostSaturatedColor: Color.fromHex('#001111'),
    mostGroupedColor: Color.fromHex('#000000'),
    bottom: {
        averageColor: Color.fromHex('#553934'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#dd4411'), Color.fromHex('#ccffff')],
        minmaxGreen: [Color.fromHex('#887711'), Color.fromHex('#ffeeff')],
        minmaxBlue: [Color.fromHex('#224488'), Color.fromHex('#ffffcc')],
        mostFrequentColor: Color.fromHex('#000000'),
        mostSaturatedColor: Color.fromHex('#110011'),
        mostGroupedColor: Color.fromHex('#000000'),
    },
} satisfies IImageColorStats;
