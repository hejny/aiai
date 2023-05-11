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
import metadata from './Pavol_Hejn_a_desert_landscape_with_a_cactus_in_the_foreground_26ff23d7-b92e-4874-8653-6d42fb8e622a-0_3.json';
import source from './Pavol_Hejn_a_desert_landscape_with_a_cactus_in_the_foreground_26ff23d7-b92e-4874-8653-6d42fb8e622a-0_3.png';

/**
 * Image of A desert landscape with a cactus in the foreground
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function ADesertLandscapeWithACactusInTheForeground26ff23d7B92e487486536d42fb8e622a0_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A desert landscape with a cactus in the foreground"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ADesertLandscapeWithACactusInTheForeground26ff23d7B92e487486536d42fb8e622a0_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ADesertLandscapeWithACactusInTheForeground26ff23d7B92e487486536d42fb8e622a0_3_Image.colorStats = {
    averageColor: Color.fromHex('#786657'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#aa2200'), Color.fromHex('#ffffff')],
    minmaxGreen: [Color.fromHex('#998833'), Color.fromHex('#ffffff')],
    minmaxBlue: [Color.fromHex('#335577'), Color.fromHex('#ffffdd')],
    mostFrequentColor: Color.fromHex('#442211'),
    mostSaturatedColor: Color.fromHex('#331100'),
    mostGroupedColor: Color.fromHex('#335566'),
    bottom: {
        averageColor: Color.fromHex('#503324'),
        lightestColor: Color.fromHex('#ffeecc'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffeecc'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#aa2200'), Color.fromHex('#ffeecc')],
        minmaxGreen: [Color.fromHex('#998833'), Color.fromHex('#660000')],
        minmaxBlue: [Color.fromHex('#554455'), Color.fromHex('#ffeeaa')],
        mostFrequentColor: Color.fromHex('#442211'),
        mostSaturatedColor: Color.fromHex('#111100'),
        mostGroupedColor: Color.fromHex('#111111'),
    },
} satisfies IImageColorStats;
