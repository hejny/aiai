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
import metadata from './Pavol_Hejn_a_photograph_of_a_meteor_shower_with_bright_streaks__524be76c-e273-4cd5-80e2-20b9e59d174f-0_3.json';
import source from './Pavol_Hejn_a_photograph_of_a_meteor_shower_with_bright_streaks__524be76c-e273-4cd5-80e2-20b9e59d174f-0_3.png';

/**
 * Image of A photograph of a meteor shower, with bright streaks of light crossing the night sky.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function APhotographOfAMeteorShowerWithBrightStreaks524be76cE2734cd580e220b9e59d174f0_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A photograph of a meteor shower, with bright streaks of light crossing the night sky."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

APhotographOfAMeteorShowerWithBrightStreaks524be76cE2734cd580e220b9e59d174f0_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APhotographOfAMeteorShowerWithBrightStreaks524be76cE2734cd580e220b9e59d174f0_3_Image.colorStats = {
    averageColor: Color.fromHex('#2a2428'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#cc5533'), Color.fromHex('#ffffff')],
    minmaxGreen: [Color.fromHex('#888866'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#555588'), Color.fromHex('#ffffbb')],
    mostFrequentColor: Color.fromHex('#000000'),
    mostSaturatedColor: Color.fromHex('#000011'),
    mostGroupedColor: Color.fromHex('#000000'),
    bottom: {
        averageColor: Color.fromHex('#211917'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#bb5533'), Color.fromHex('#ffffff')],
        minmaxGreen: [Color.fromHex('#777755'), Color.fromHex('#ffffff')],
        minmaxBlue: [Color.fromHex('#775566'), Color.fromHex('#ffffbb')],
        mostFrequentColor: Color.fromHex('#000000'),
        mostSaturatedColor: Color.fromHex('#000011'),
        mostGroupedColor: Color.fromHex('#000000'),
    },
} satisfies IImageColorStats;
