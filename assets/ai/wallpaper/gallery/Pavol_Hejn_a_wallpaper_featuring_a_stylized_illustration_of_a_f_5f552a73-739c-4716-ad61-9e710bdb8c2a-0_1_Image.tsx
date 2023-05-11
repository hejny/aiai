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
import metadata from './Pavol_Hejn_a_wallpaper_featuring_a_stylized_illustration_of_a_f_5f552a73-739c-4716-ad61-9e710bdb8c2a-0_1.json';
import source from './Pavol_Hejn_a_wallpaper_featuring_a_stylized_illustration_of_a_f_5f552a73-739c-4716-ad61-9e710bdb8c2a-0_1.png';

/**
 * Image of A wallpaper featuring a stylized illustration of a futuristic workspace, with a minimalist and modern design, set against a gradient background.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingAStylizedIllustrationOfAF5f552a73739c4716Ad619e710bdb8c2a0_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper featuring a stylized illustration of a futuristic workspace, with a minimalist and modern design, set against a gradient background."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperFeaturingAStylizedIllustrationOfAF5f552a73739c4716Ad619e710bdb8c2a0_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingAStylizedIllustrationOfAF5f552a73739c4716Ad619e710bdb8c2a0_1_Image.colorStats = {
    averageColor: Color.fromHex('#9a8486'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#220000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#220000')],
    minmaxRed: [Color.fromHex('#dd1122'), Color.fromHex('#eeffff')],
    minmaxGreen: [Color.fromHex('#448888'), Color.fromHex('#dd1122')],
    minmaxBlue: [Color.fromHex('#224477'), Color.fromHex('#ffffbb')],
    mostFrequentColor: Color.fromHex('#cc9988'),
    mostSaturatedColor: Color.fromHex('#330011'),
    mostGroupedColor: Color.fromHex('#556677'),
    bottom: {
        averageColor: Color.fromHex('#b07875'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#111111'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#110011')],
        minmaxRed: [Color.fromHex('#ee2222'), Color.fromHex('#ffffff')],
        minmaxGreen: [Color.fromHex('#557777'), Color.fromHex('#ee2233')],
        minmaxBlue: [Color.fromHex('#224477'), Color.fromHex('#ffffbb')],
        mostFrequentColor: Color.fromHex('#cc9988'),
        mostSaturatedColor: Color.fromHex('#330011'),
        mostGroupedColor: Color.fromHex('#eeaa99'),
    },
} satisfies IImageColorStats;
