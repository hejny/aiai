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
import metadata from './Pavol_Hejn_a_wallpaper_featuring_a_colorful_fractal_pattern_wit_47ddf7d7-ccd2-4cb5-95d4-c46ff2b7f218-0_0.json';
import source from './Pavol_Hejn_a_wallpaper_featuring_a_colorful_fractal_pattern_wit_47ddf7d7-ccd2-4cb5-95d4-c46ff2b7f218-0_0.png';

/**
 * Image of A wallpaper featuring a colorful fractal pattern, with intricate lines and bold colors.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingAColorfulFractalPatternWit47ddf7d7Ccd24cb595d4C46ff2b7f2180_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper featuring a colorful fractal pattern, with intricate lines and bold colors."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperFeaturingAColorfulFractalPatternWit47ddf7d7Ccd24cb595d4C46ff2b7f2180_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingAColorfulFractalPatternWit47ddf7d7Ccd24cb595d4C46ff2b7f2180_0_Image.colorStats = {
    averageColor: Color.fromHex('#312021'),
    lightestColor: Color.fromHex('#33eeff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#eeaa55'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#dd1122'), Color.fromHex('#11eeff')],
    minmaxGreen: [Color.fromHex('#228855'), Color.fromHex('#dd1122')],
    minmaxBlue: [Color.fromHex('#113366'), Color.fromHex('#ff8811')],
    mostFrequentColor: Color.fromHex('#111111'),
    mostSaturatedColor: Color.fromHex('#001111'),
    mostGroupedColor: Color.fromHex('#000000'),
    bottom: {
        averageColor: Color.fromHex('#221c20'),
        lightestColor: Color.fromHex('#ee9944'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ee9944'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#ee2233'), Color.fromHex('#118877')],
        minmaxGreen: [Color.fromHex('#117755'), Color.fromHex('#ee2233')],
        minmaxBlue: [Color.fromHex('#115577'), Color.fromHex('#ff8811')],
        mostFrequentColor: Color.fromHex('#111111'),
        mostSaturatedColor: Color.fromHex('#110011'),
        mostGroupedColor: Color.fromHex('#000000'),
    },
} satisfies IImageColorStats;
