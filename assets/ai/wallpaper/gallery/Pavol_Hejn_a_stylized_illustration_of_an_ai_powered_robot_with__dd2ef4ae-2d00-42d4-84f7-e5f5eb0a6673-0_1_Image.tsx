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
import metadata from './Pavol_Hejn_a_stylized_illustration_of_an_ai_powered_robot_with__dd2ef4ae-2d00-42d4-84f7-e5f5eb0a6673-0_1.json';
import source from './Pavol_Hejn_a_stylized_illustration_of_an_ai_powered_robot_with__dd2ef4ae-2d00-42d4-84f7-e5f5eb0a6673-0_1.png';

/**
 * Image of A stylized illustration of an AI-powered robot, with sleek and modern graphics and a minimalist color scheme.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AStylizedIllustrationOfAnAiPoweredRobotWithDd2ef4ae2d0042d484f7E5f5eb0a66730_1_Image(
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

AStylizedIllustrationOfAnAiPoweredRobotWithDd2ef4ae2d0042d484f7E5f5eb0a66730_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AStylizedIllustrationOfAnAiPoweredRobotWithDd2ef4ae2d0042d484f7E5f5eb0a66730_1_Image.colorStats = {
    averageColor: Color.fromHex('#77a6a7'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#001100'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#dd2200'), Color.fromHex('#ccffff')],
    minmaxGreen: [Color.fromHex('#229988'), Color.fromHex('#cc0011')],
    minmaxBlue: [Color.fromHex('#004488'), Color.fromHex('#ffffcc')],
    mostFrequentColor: Color.fromHex('#88bbbb'),
    mostSaturatedColor: Color.fromHex('#004455'),
    mostGroupedColor: Color.fromHex('#88bbbb'),
    bottom: {
        averageColor: Color.fromHex('#619498'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#dd3344'), Color.fromHex('#ccffff')],
        minmaxGreen: [Color.fromHex('#229988'), Color.fromHex('#990044')],
        minmaxBlue: [Color.fromHex('#116699'), Color.fromHex('#ffffee')],
        mostFrequentColor: Color.fromHex('#88bbbb'),
        mostSaturatedColor: Color.fromHex('#006677'),
        mostGroupedColor: Color.fromHex('#88bbbb'),
    },
} satisfies IImageColorStats;
