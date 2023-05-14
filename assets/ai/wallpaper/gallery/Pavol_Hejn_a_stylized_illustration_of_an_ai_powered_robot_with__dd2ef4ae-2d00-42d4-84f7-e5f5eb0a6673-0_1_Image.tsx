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
import { colorToDataUrl } from '../../../../src/utils/color/utils/colorToDataUrl';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_stylized_illustration_of_an_ai_powered_robot_with__dd2ef4ae-2d00-42d4-84f7-e5f5eb0a6673-0_1.colors.json';
import content from './Pavol_Hejn_a_stylized_illustration_of_an_ai_powered_robot_with__dd2ef4ae-2d00-42d4-84f7-e5f5eb0a6673-0_1.content.md';
import metadata from './Pavol_Hejn_a_stylized_illustration_of_an_ai_powered_robot_with__dd2ef4ae-2d00-42d4-84f7-e5f5eb0a6673-0_1.json';

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
            src="https://cdn.midjourney.com/dd2ef4ae-2d00-42d4-84f7-e5f5eb0a6673/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AStylizedIllustrationOfAnAiPoweredRobotWithDd2ef4ae2d0042d484f7E5f5eb0a66730_1_Image.src = new URL(
    'https://cdn.midjourney.com/dd2ef4ae-2d00-42d4-84f7-e5f5eb0a6673/0_1.png',
);
AStylizedIllustrationOfAnAiPoweredRobotWithDd2ef4ae2d0042d484f7E5f5eb0a66730_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AStylizedIllustrationOfAnAiPoweredRobotWithDd2ef4ae2d0042d484f7E5f5eb0a66730_1_Image.colorStats =
    hydrateColorStats(colorStats);
AStylizedIllustrationOfAnAiPoweredRobotWithDd2ef4ae2d0042d484f7E5f5eb0a66730_1_Image.content = content;
