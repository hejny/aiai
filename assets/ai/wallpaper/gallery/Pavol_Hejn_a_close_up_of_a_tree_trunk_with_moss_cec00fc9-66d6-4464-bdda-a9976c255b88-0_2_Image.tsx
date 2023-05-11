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
import metadata from './Pavol_Hejn_a_close_up_of_a_tree_trunk_with_moss_cec00fc9-66d6-4464-bdda-a9976c255b88-0_2.json';
import source from './Pavol_Hejn_a_close_up_of_a_tree_trunk_with_moss_cec00fc9-66d6-4464-bdda-a9976c255b88-0_2.png';

/**
 * Image of A close-up of a tree trunk with moss
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ACloseUpOfATreeTrunkWithMossCec00fc966d64464BddaA9976c255b880_2_Image(props: IWallpaperComponentProps) {
    const { width, quality } = props;

    return (
        <Image
            alt="A close-up of a tree trunk with moss"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ACloseUpOfATreeTrunkWithMossCec00fc966d64464BddaA9976c255b880_2_Image.metadata = metadata satisfies IWallpaperMetadata;
ACloseUpOfATreeTrunkWithMossCec00fc966d64464BddaA9976c255b880_2_Image.colorStats = {
    averageColor: Color.fromHex('#4f4e2e'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#aa3322'), Color.fromHex('#ffffff')],
    minmaxGreen: [Color.fromHex('#779944'), Color.fromHex('#ffffff')],
    minmaxBlue: [Color.fromHex('#445566'), Color.fromHex('#ffff99')],
    mostFrequentColor: Color.fromHex('#112211'),
    mostSaturatedColor: Color.fromHex('#110011'),
    mostGroupedColor: Color.fromHex('#111111'),
    bottom: {
        averageColor: Color.fromHex('#3d3a20'),
        lightestColor: Color.fromHex('#ffeeee'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffeeee'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#aa3322'), Color.fromHex('#ffffdd')],
        minmaxGreen: [Color.fromHex('#889933'), Color.fromHex('#ffeeee')],
        minmaxBlue: [Color.fromHex('#333344'), Color.fromHex('#ffffbb')],
        mostFrequentColor: Color.fromHex('#112211'),
        mostSaturatedColor: Color.fromHex('#112200'),
        mostGroupedColor: Color.fromHex('#111111'),
    },
} satisfies IImageColorStats;
