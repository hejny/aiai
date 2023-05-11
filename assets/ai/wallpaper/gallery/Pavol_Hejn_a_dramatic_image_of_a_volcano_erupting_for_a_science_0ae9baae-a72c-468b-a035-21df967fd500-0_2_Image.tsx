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
import metadata from './Pavol_Hejn_a_dramatic_image_of_a_volcano_erupting_for_a_science_0ae9baae-a72c-468b-a035-21df967fd500-0_2.json';
import source from './Pavol_Hejn_a_dramatic_image_of_a_volcano_erupting_for_a_science_0ae9baae-a72c-468b-a035-21df967fd500-0_2.png';

/**
 * Image of A dramatic image of a volcano erupting for a science or geology blog
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ADramaticImageOfAVolcanoEruptingForAScience0ae9baaeA72c468bA03521df967fd5000_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A dramatic image of a volcano erupting for a science or geology blog"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ADramaticImageOfAVolcanoEruptingForAScience0ae9baaeA72c468bA03521df967fd5000_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ADramaticImageOfAVolcanoEruptingForAScience0ae9baaeA72c468bA03521df967fd5000_2_Image.colorStats = {
    averageColor: Color.fromHex('#764032'),
    lightestColor: Color.fromHex('#ffffee'),
    darkestColor: Color.fromHex('#001100'),
    minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#ee3311'), Color.fromHex('#ffffee')],
    minmaxGreen: [Color.fromHex('#887755'), Color.fromHex('#bb1100')],
    minmaxBlue: [Color.fromHex('#554455'), Color.fromHex('#ffffaa')],
    mostFrequentColor: Color.fromHex('#000000'),
    mostSaturatedColor: Color.fromHex('#001111'),
    mostGroupedColor: Color.fromHex('#111111'),
    bottom: {
        averageColor: Color.fromHex('#4a2d25'),
        lightestColor: Color.fromHex('#ffddaa'),
        darkestColor: Color.fromHex('#001100'),
        minmaxWhite: [Color.fromHex('#ffddaa'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#cc2211'), Color.fromHex('#eeddaa')],
        minmaxGreen: [Color.fromHex('#887755'), Color.fromHex('#bb1100')],
        minmaxBlue: [Color.fromHex('#555555'), Color.fromHex('#ffdd99')],
        mostFrequentColor: Color.fromHex('#000000'),
        mostSaturatedColor: Color.fromHex('#001111'),
        mostGroupedColor: Color.fromHex('#111111'),
    },
} satisfies IImageColorStats;
