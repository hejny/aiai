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
import metadata from './Pavol_Hejn_a_wallpaper_with_a_minimalist_illustration_of_a_robo_0c1b22a2-9ffd-448c-a3a5-21011d16b64a-0_1.json';
import source from './Pavol_Hejn_a_wallpaper_with_a_minimalist_illustration_of_a_robo_0c1b22a2-9ffd-448c-a3a5-21011d16b64a-0_1.png';

/**
 * Image of A wallpaper with a minimalist illustration of a robotic arm, against a background of dark and moody colors.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithAMinimalistIllustrationOfARobo0c1b22a29ffd448cA3a521011d16b64a0_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a minimalist illustration of a robotic arm, against a background of dark and moody colors."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperWithAMinimalistIllustrationOfARobo0c1b22a29ffd448cA3a521011d16b64a0_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithAMinimalistIllustrationOfARobo0c1b22a29ffd448cA3a521011d16b64a0_1_Image.colorStats = {
    averageColor: Color.fromHex('#081b2a'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#884422'), Color.fromHex('#aaffff')],
    minmaxGreen: [Color.fromHex('#77aa77'), Color.fromHex('#ffffff')],
    minmaxBlue: [Color.fromHex('#114488'), Color.fromHex('#ffffbb')],
    mostFrequentColor: Color.fromHex('#001111'),
    mostSaturatedColor: Color.fromHex('#001111'),
    mostGroupedColor: Color.fromHex('#001122'),
    bottom: {
        averageColor: Color.fromHex('#021221'),
        lightestColor: Color.fromHex('#ddeeee'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ddeeee'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#776622'), Color.fromHex('#cceeee')],
        minmaxGreen: [Color.fromHex('#778866'), Color.fromHex('#ddeeee')],
        minmaxBlue: [Color.fromHex('#226699'), Color.fromHex('#eeeeaa')],
        mostFrequentColor: Color.fromHex('#001111'),
        mostSaturatedColor: Color.fromHex('#001111'),
        mostGroupedColor: Color.fromHex('#001122'),
    },
} satisfies IImageColorStats;
