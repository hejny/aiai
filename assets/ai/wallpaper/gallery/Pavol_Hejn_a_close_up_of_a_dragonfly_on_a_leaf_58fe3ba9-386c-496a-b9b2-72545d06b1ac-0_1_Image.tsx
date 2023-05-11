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
import metadata from './Pavol_Hejn_a_close_up_of_a_dragonfly_on_a_leaf_58fe3ba9-386c-496a-b9b2-72545d06b1ac-0_1.json';
import source from './Pavol_Hejn_a_close_up_of_a_dragonfly_on_a_leaf_58fe3ba9-386c-496a-b9b2-72545d06b1ac-0_1.png';

/**
 * Image of A close-up of a dragonfly on a leaf
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function ACloseUpOfADragonflyOnALeaf58fe3ba9386c496aB9b272545d06b1ac0_1_Image(props: IWallpaperComponentProps) {
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

ACloseUpOfADragonflyOnALeaf58fe3ba9386c496aB9b272545d06b1ac0_1_Image.metadata = metadata satisfies IWallpaperMetadata;
ACloseUpOfADragonflyOnALeaf58fe3ba9386c496aB9b272545d06b1ac0_1_Image.colorStats = {
    averageColor: Color.fromHex('#2d552d'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#001100'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#ee1100'), Color.fromHex('#00ddee')],
    minmaxGreen: [Color.fromHex('#77bb00'), Color.fromHex('#ee1100')],
    minmaxBlue: [Color.fromHex('#0066bb'), Color.fromHex('#dddd00')],
    mostFrequentColor: Color.fromHex('#223322'),
    mostSaturatedColor: Color.fromHex('#004433'),
    mostGroupedColor: Color.fromHex('#004422'),
    bottom: {
        averageColor: Color.fromHex('#5b7d35'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#002200'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#ee1100'), Color.fromHex('#ccffff')],
        minmaxGreen: [Color.fromHex('#77bb00'), Color.fromHex('#ee1100')],
        minmaxBlue: [Color.fromHex('#116699'), Color.fromHex('#dddd00')],
        mostFrequentColor: Color.fromHex('#223322'),
        mostSaturatedColor: Color.fromHex('#558800'),
        mostGroupedColor: Color.fromHex('#003322'),
    },
} satisfies IImageColorStats;
