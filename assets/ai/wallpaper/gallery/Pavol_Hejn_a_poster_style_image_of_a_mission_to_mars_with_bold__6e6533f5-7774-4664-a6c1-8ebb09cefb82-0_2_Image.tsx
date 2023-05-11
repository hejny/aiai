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
import metadata from './Pavol_Hejn_a_poster_style_image_of_a_mission_to_mars_with_bold__6e6533f5-7774-4664-a6c1-8ebb09cefb82-0_2.json';
import source from './Pavol_Hejn_a_poster_style_image_of_a_mission_to_mars_with_bold__6e6533f5-7774-4664-a6c1-8ebb09cefb82-0_2.png';

/**
 * Image of A poster-style image of a mission to Mars, with bold typography and a futuristic color scheme that represents the ambition of space exploration.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function APosterStyleImageOfAMissionToMarsWithBold6e6533f577744664A6c18ebb09cefb820_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A poster-style image of a mission to Mars, with bold typography and a futuristic color scheme that represents the ambition of space exploration."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

APosterStyleImageOfAMissionToMarsWithBold6e6533f577744664A6c18ebb09cefb820_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APosterStyleImageOfAMissionToMarsWithBold6e6533f577744664A6c18ebb09cefb820_2_Image.colorStats = {
    averageColor: Color.fromHex('#b14f36'),
    lightestColor: Color.fromHex('#ffffee'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#ff1111'), Color.fromHex('#ffffee')],
    minmaxGreen: [Color.fromHex('#888844'), Color.fromHex('#ff1111')],
    minmaxBlue: [Color.fromHex('#112255'), Color.fromHex('#ffffbb')],
    mostFrequentColor: Color.fromHex('#ccbb99'),
    mostSaturatedColor: Color.fromHex('#cc2200'),
    mostGroupedColor: Color.fromHex('#dd3311'),
    bottom: {
        averageColor: Color.fromHex('#8f271c'),
        lightestColor: Color.fromHex('#eeeedd'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#eeeedd'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#ee1100'), Color.fromHex('#ffffcc')],
        minmaxGreen: [Color.fromHex('#887755'), Color.fromHex('#ee1100')],
        minmaxBlue: [Color.fromHex('#221144'), Color.fromHex('#ffffbb')],
        mostFrequentColor: Color.fromHex('#ccbb99'),
        mostSaturatedColor: Color.fromHex('#cc3300'),
        mostGroupedColor: Color.fromHex('#dd3311'),
    },
} satisfies IImageColorStats;
