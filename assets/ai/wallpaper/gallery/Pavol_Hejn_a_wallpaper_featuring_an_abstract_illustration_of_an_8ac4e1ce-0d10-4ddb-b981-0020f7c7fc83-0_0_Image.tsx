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
import metadata from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_an_8ac4e1ce-0d10-4ddb-b981-0020f7c7fc83-0_0.json';
import source from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_an_8ac4e1ce-0d10-4ddb-b981-0020f7c7fc83-0_0.png';

/**
 * Image of A wallpaper featuring an abstract illustration of an AI neural network, with intricate lines and a dark and technological color palette.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingAnAbstractIllustrationOfAn8ac4e1ce0d104ddbB9810020f7c7fc830_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper featuring an abstract illustration of an AI neural network, with intricate lines and a dark and technological color palette."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperFeaturingAnAbstractIllustrationOfAn8ac4e1ce0d104ddbB9810020f7c7fc830_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingAnAbstractIllustrationOfAn8ac4e1ce0d104ddbB9810020f7c7fc830_0_Image.colorStats = {
    averageColor: Color.fromHex('#2e2b29'),
    lightestColor: Color.fromHex('#eeffcc'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#eeffcc'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#ee0000'), Color.fromHex('#eeffcc')],
    minmaxGreen: [Color.fromHex('#448866'), Color.fromHex('#ee0000')],
    minmaxBlue: [Color.fromHex('#003377'), Color.fromHex('#ffdd44')],
    mostFrequentColor: Color.fromHex('#001111'),
    mostSaturatedColor: Color.fromHex('#001111'),
    mostGroupedColor: Color.fromHex('#001111'),
    bottom: {
        averageColor: Color.fromHex('#171a1f'),
        lightestColor: Color.fromHex('#ddddcc'),
        darkestColor: Color.fromHex('#001100'),
        minmaxWhite: [Color.fromHex('#ddddcc'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#ee0000'), Color.fromHex('#bbddcc')],
        minmaxGreen: [Color.fromHex('#558866'), Color.fromHex('#ee0000')],
        minmaxBlue: [Color.fromHex('#333366'), Color.fromHex('#ffcc55')],
        mostFrequentColor: Color.fromHex('#001111'),
        mostSaturatedColor: Color.fromHex('#001111'),
        mostGroupedColor: Color.fromHex('#001111'),
    },
} satisfies IImageColorStats;
