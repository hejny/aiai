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
import metadata from './Pavol_Hejn_an_impressionist_style_painting_of_a_futuristic_city_85a1d760-f66a-4382-9228-545a1df4a55b-0_3.json';
import source from './Pavol_Hejn_an_impressionist_style_painting_of_a_futuristic_city_85a1d760-f66a-4382-9228-545a1df4a55b-0_3.png';

/**
 * Image of An impressionist-style painting of a futuristic cityscape, with blurred lines and bold colors creating a dreamy effect.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AnImpressionistStylePaintingOfAFuturisticCity85a1d760F66a43829228545a1df4a55b0_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An impressionist-style painting of a futuristic cityscape, with blurred lines and bold colors creating a dreamy effect."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnImpressionistStylePaintingOfAFuturisticCity85a1d760F66a43829228545a1df4a55b0_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnImpressionistStylePaintingOfAFuturisticCity85a1d760F66a43829228545a1df4a55b0_3_Image.colorStats = {
    averageColor: Color.fromHex('#5c4442'),
    lightestColor: Color.fromHex('#eeffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#ee2211'), Color.fromHex('#eeffff')],
    minmaxGreen: [Color.fromHex('#559988'), Color.fromHex('#ee2211')],
    minmaxBlue: [Color.fromHex('#225588'), Color.fromHex('#ffffee')],
    mostFrequentColor: Color.fromHex('#111111'),
    mostSaturatedColor: Color.fromHex('#110011'),
    mostGroupedColor: Color.fromHex('#111122'),
    bottom: {
        averageColor: Color.fromHex('#603f3a'),
        lightestColor: Color.fromHex('#eeddee'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#eeddee'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#dd2222'), Color.fromHex('#88ccdd')],
        minmaxGreen: [Color.fromHex('#338888'), Color.fromHex('#dd2222')],
        minmaxBlue: [Color.fromHex('#114477'), Color.fromHex('#ffcc66')],
        mostFrequentColor: Color.fromHex('#111111'),
        mostSaturatedColor: Color.fromHex('#110011'),
        mostGroupedColor: Color.fromHex('#000011'),
    },
} satisfies IImageColorStats;
