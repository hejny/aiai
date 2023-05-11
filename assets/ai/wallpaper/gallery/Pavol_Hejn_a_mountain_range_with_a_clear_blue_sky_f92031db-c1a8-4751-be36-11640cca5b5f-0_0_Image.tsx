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
import metadata from './Pavol_Hejn_a_mountain_range_with_a_clear_blue_sky_f92031db-c1a8-4751-be36-11640cca5b5f-0_0.json';
import source from './Pavol_Hejn_a_mountain_range_with_a_clear_blue_sky_f92031db-c1a8-4751-be36-11640cca5b5f-0_0.png';

/**
 * Image of A mountain range with a clear blue sky
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AMountainRangeWithAClearBlueSkyF92031dbC1a84751Be3611640cca5b5f0_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A mountain range with a clear blue sky"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AMountainRangeWithAClearBlueSkyF92031dbC1a84751Be3611640cca5b5f0_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AMountainRangeWithAClearBlueSkyF92031dbC1a84751Be3611640cca5b5f0_0_Image.colorStats = {
    averageColor: Color.fromHex('#5193b3'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#884422'), Color.fromHex('#00aadd')],
    minmaxGreen: [Color.fromHex('#777755'), Color.fromHex('#ffffff')],
    minmaxBlue: [Color.fromHex('#0066aa'), Color.fromHex('#ffffee')],
    mostFrequentColor: Color.fromHex('#886655'),
    mostSaturatedColor: Color.fromHex('#441100'),
    mostGroupedColor: Color.fromHex('#0088cc'),
    bottom: {
        averageColor: Color.fromHex('#6e6f78'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#884422'), Color.fromHex('#ffffff')],
        minmaxGreen: [Color.fromHex('#777755'), Color.fromHex('#ffffff')],
        minmaxBlue: [Color.fromHex('#3366aa'), Color.fromHex('#ffffff')],
        mostFrequentColor: Color.fromHex('#886655'),
        mostSaturatedColor: Color.fromHex('#441100'),
        mostGroupedColor: Color.fromHex('#88bbdd'),
    },
} satisfies IImageColorStats;
