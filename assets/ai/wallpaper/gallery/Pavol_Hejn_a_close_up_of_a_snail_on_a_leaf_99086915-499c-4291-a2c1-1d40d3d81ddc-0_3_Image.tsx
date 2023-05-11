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
import metadata from './Pavol_Hejn_a_close_up_of_a_snail_on_a_leaf_99086915-499c-4291-a2c1-1d40d3d81ddc-0_3.json';
import source from './Pavol_Hejn_a_close_up_of_a_snail_on_a_leaf_99086915-499c-4291-a2c1-1d40d3d81ddc-0_3.png';

/**
 * Image of A close-up of a snail on a leaf
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function ACloseUpOfASnailOnALeaf99086915499c4291A2c11d40d3d81ddc0_3_Image(props: IWallpaperComponentProps) {
    const { width, quality } = props;

    return (
        <Image
            alt="A close-up of a snail on a leaf"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ACloseUpOfASnailOnALeaf99086915499c4291A2c11d40d3d81ddc0_3_Image.metadata = metadata satisfies IWallpaperMetadata;
ACloseUpOfASnailOnALeaf99086915499c4291A2c11d40d3d81ddc0_3_Image.colorStats = {
    averageColor: Color.fromHex('#414313'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#002200'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#aa4400'), Color.fromHex('#eeffff')],
    minmaxGreen: [Color.fromHex('#448800'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#555588'), Color.fromHex('#ffffcc')],
    mostFrequentColor: Color.fromHex('#000000'),
    mostSaturatedColor: Color.fromHex('#112200'),
    mostGroupedColor: Color.fromHex('#110000'),
    bottom: {
        averageColor: Color.fromHex('#463009'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#aa4400'), Color.fromHex('#ffffff')],
        minmaxGreen: [Color.fromHex('#779900'), Color.fromHex('#ffffff')],
        minmaxBlue: [Color.fromHex('#555566'), Color.fromHex('#ffffee')],
        mostFrequentColor: Color.fromHex('#000000'),
        mostSaturatedColor: Color.fromHex('#773300'),
        mostGroupedColor: Color.fromHex('#110000'),
    },
} satisfies IImageColorStats;
