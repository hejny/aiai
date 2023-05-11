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
import metadata from './Pavol_Hejn_a_group_of_ainauts_conducting_experiments_on_a_dista_558e018d-91d7-479e-9a46-385c298123dd-0_0.json';
import source from './Pavol_Hejn_a_group_of_ainauts_conducting_experiments_on_a_dista_558e018d-91d7-479e-9a46-385c298123dd-0_0.png';

/**
 * Image of A group of AInauts conducting experiments on a distant planet, with a red sun setting behind them.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AGroupOfAinautsConductingExperimentsOnADista558e018d91d7479e9a46385c298123dd0_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A group of AInauts conducting experiments on a distant planet, with a red sun setting behind them."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AGroupOfAinautsConductingExperimentsOnADista558e018d91d7479e9a46385c298123dd0_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AGroupOfAinautsConductingExperimentsOnADista558e018d91d7479e9a46385c298123dd0_0_Image.colorStats = {
    averageColor: Color.fromHex('#69251a'),
    lightestColor: Color.fromHex('#eeeeff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#dd1100'), Color.fromHex('#ffffee')],
    minmaxGreen: [Color.fromHex('#887744'), Color.fromHex('#dd1100')],
    minmaxBlue: [Color.fromHex('#115588'), Color.fromHex('#ffff77')],
    mostFrequentColor: Color.fromHex('#000000'),
    mostSaturatedColor: Color.fromHex('#440011'),
    mostGroupedColor: Color.fromHex('#110000'),
    bottom: {
        averageColor: Color.fromHex('#3d0a0b'),
        lightestColor: Color.fromHex('#ffffdd'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffdd'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#dd1100'), Color.fromHex('#ffffdd')],
        minmaxGreen: [Color.fromHex('#777766'), Color.fromHex('#dd1100')],
        minmaxBlue: [Color.fromHex('#334477'), Color.fromHex('#ffffdd')],
        mostFrequentColor: Color.fromHex('#000000'),
        mostSaturatedColor: Color.fromHex('#770000'),
        mostGroupedColor: Color.fromHex('#110000'),
    },
} satisfies IImageColorStats;
