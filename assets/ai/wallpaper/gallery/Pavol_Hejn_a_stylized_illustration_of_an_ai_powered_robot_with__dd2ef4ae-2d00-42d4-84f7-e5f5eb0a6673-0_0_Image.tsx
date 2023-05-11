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
import metadata from './Pavol_Hejn_a_stylized_illustration_of_an_ai_powered_robot_with__dd2ef4ae-2d00-42d4-84f7-e5f5eb0a6673-0_0.json';
import source from './Pavol_Hejn_a_stylized_illustration_of_an_ai_powered_robot_with__dd2ef4ae-2d00-42d4-84f7-e5f5eb0a6673-0_0.png';

/**
 * Image of A stylized illustration of an AI-powered robot, with sleek and modern graphics and a minimalist color scheme.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AStylizedIllustrationOfAnAiPoweredRobotWithDd2ef4ae2d0042d484f7E5f5eb0a66730_0_Image(
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

AStylizedIllustrationOfAnAiPoweredRobotWithDd2ef4ae2d0042d484f7E5f5eb0a66730_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AStylizedIllustrationOfAnAiPoweredRobotWithDd2ef4ae2d0042d484f7E5f5eb0a66730_0_Image.colorStats = {
    averageColor: Color.fromHex('#b44733'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#dd3322'), Color.fromHex('#eeffff')],
    minmaxGreen: [Color.fromHex('#448866'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#333355'), Color.fromHex('#ffffcc')],
    mostFrequentColor: Color.fromHex('#dd6633'),
    mostSaturatedColor: Color.fromHex('#441100'),
    mostGroupedColor: Color.fromHex('#ee5533'),
    bottom: {
        averageColor: Color.fromHex('#9b4032'),
        lightestColor: Color.fromHex('#ffeeee'),
        darkestColor: Color.fromHex('#221100'),
        minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#220000')],
        minmaxRed: [Color.fromHex('#cc3311'), Color.fromHex('#ffffee')],
        minmaxGreen: [Color.fromHex('#558866'), Color.fromHex('#ffeeee')],
        minmaxBlue: [Color.fromHex('#445566'), Color.fromHex('#ffffee')],
        mostFrequentColor: Color.fromHex('#dd6633'),
        mostSaturatedColor: Color.fromHex('#330011'),
        mostGroupedColor: Color.fromHex('#ee5533'),
    },
} satisfies IImageColorStats;
