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
import metadata from './Pavol_Hejn_a_close_up_of_a_dragonfly_on_a_leaf_58fe3ba9-386c-496a-b9b2-72545d06b1ac-0_0.json';
import source from './Pavol_Hejn_a_close_up_of_a_dragonfly_on_a_leaf_58fe3ba9-386c-496a-b9b2-72545d06b1ac-0_0.png';

/**
 * Image of A close-up of a dragonfly on a leaf
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function ACloseUpOfADragonflyOnALeaf58fe3ba9386c496aB9b272545d06b1ac0_0_Image(props: IWallpaperComponentProps) {
    const { width, quality } = props;

    return (
        <Image
            alt="A close-up of a dragonfly on a leaf"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ACloseUpOfADragonflyOnALeaf58fe3ba9386c496aB9b272545d06b1ac0_0_Image.metadata = metadata satisfies IWallpaperMetadata;
ACloseUpOfADragonflyOnALeaf58fe3ba9386c496aB9b272545d06b1ac0_0_Image.colorStats = {
    averageColor: Color.fromHex('#223b1f'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#993300'), Color.fromHex('#99ffff')],
    minmaxGreen: [Color.fromHex('#44bb11'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#114499'), Color.fromHex('#ccee11')],
    mostFrequentColor: Color.fromHex('#000000'),
    mostSaturatedColor: Color.fromHex('#001100'),
    mostGroupedColor: Color.fromHex('#001100'),
    bottom: {
        averageColor: Color.fromHex('#1b351f'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#001100'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#996644'), Color.fromHex('#ddffff')],
        minmaxGreen: [Color.fromHex('#66cc00'), Color.fromHex('#ffffff')],
        minmaxBlue: [Color.fromHex('#114499'), Color.fromHex('#eeff77')],
        mostFrequentColor: Color.fromHex('#000000'),
        mostSaturatedColor: Color.fromHex('#001100'),
        mostGroupedColor: Color.fromHex('#001100'),
    },
} satisfies IImageColorStats;
