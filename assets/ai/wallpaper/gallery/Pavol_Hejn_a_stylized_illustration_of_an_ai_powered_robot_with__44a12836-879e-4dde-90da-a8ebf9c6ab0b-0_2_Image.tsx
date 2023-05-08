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
import metadata from './Pavol_Hejn_a_stylized_illustration_of_an_ai_powered_robot_with__44a12836-879e-4dde-90da-a8ebf9c6ab0b-0_2.json';
import source from './Pavol_Hejn_a_stylized_illustration_of_an_ai_powered_robot_with__44a12836-879e-4dde-90da-a8ebf9c6ab0b-0_2.png';

/**
 * Image of A stylized illustration of an AI-powered robot, with sleek and modern graphics and a minimalist color scheme.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AStylizedIllustrationOfAnAiPoweredRobotWith44a12836879e4dde90daA8ebf9c6ab0b0_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A stylized illustration of an AI-powered robot, with sleek and modern graphics and a minimalist color scheme."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AStylizedIllustrationOfAnAiPoweredRobotWith44a12836879e4dde90daA8ebf9c6ab0b0_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AStylizedIllustrationOfAnAiPoweredRobotWith44a12836879e4dde90daA8ebf9c6ab0b0_2_Image.colorStats = {
    averageColor: Color.fromHex('#1e676e'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#110000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000011')],
    minmaxRed: [Color.fromHex('#772222'), Color.fromHex('#33ffee')],
    minmaxGreen: [Color.fromHex('#77aa44'), Color.fromHex('#ffffff')],
    minmaxBlue: [Color.fromHex('#115588'), Color.fromHex('#ffff88')],
    mostFrequentColor: Color.fromHex('#116666'),
    mostSaturatedColor: Color.fromHex('#004455'),
    mostGroupedColor: Color.fromHex('#115555'),
    bottom: {
        averageColor: Color.fromHex('#1b515f'),
        lightestColor: Color.fromHex('#ddffff'),
        darkestColor: Color.fromHex('#000011'),
        minmaxWhite: [Color.fromHex('#eeffee'), Color.fromHex('#000011')],
        minmaxRed: [Color.fromHex('#994433'), Color.fromHex('#77ffdd')],
        minmaxGreen: [Color.fromHex('#779944'), Color.fromHex('#ddffff')],
        minmaxBlue: [Color.fromHex('#115588'), Color.fromHex('#eeee77')],
        mostFrequentColor: Color.fromHex('#116666'),
        mostSaturatedColor: Color.fromHex('#004455'),
        mostGroupedColor: Color.fromHex('#116666'),
    },
} satisfies IImageColorStats;
