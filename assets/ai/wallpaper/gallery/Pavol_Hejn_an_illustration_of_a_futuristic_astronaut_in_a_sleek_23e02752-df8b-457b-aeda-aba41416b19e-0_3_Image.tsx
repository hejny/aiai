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
import metadata from './Pavol_Hejn_an_illustration_of_a_futuristic_astronaut_in_a_sleek_23e02752-df8b-457b-aeda-aba41416b19e-0_3.json';
import source from './Pavol_Hejn_an_illustration_of_a_futuristic_astronaut_in_a_sleek_23e02752-df8b-457b-aeda-aba41416b19e-0_3.png';

/**
 * Image of An illustration of a futuristic astronaut in a sleek spacesuit, standing on the surface of a distant planet.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AnIllustrationOfAFuturisticAstronautInASleek23e02752Df8b457bAedaAba41416b19e0_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An illustration of a futuristic astronaut in a sleek spacesuit, standing on the surface of a distant planet."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnIllustrationOfAFuturisticAstronautInASleek23e02752Df8b457bAedaAba41416b19e0_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnIllustrationOfAFuturisticAstronautInASleek23e02752Df8b457bAedaAba41416b19e0_3_Image.colorStats = {
    averageColor: Color.fromHex('#926a67'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#dd1100'), Color.fromHex('#ccffff')],
    minmaxGreen: [Color.fromHex('#999944'), Color.fromHex('#dd0022')],
    minmaxBlue: [Color.fromHex('#113388'), Color.fromHex('#ffff99')],
    mostFrequentColor: Color.fromHex('#335577'),
    mostSaturatedColor: Color.fromHex('#001122'),
    mostGroupedColor: Color.fromHex('#333344'),
    bottom: {
        averageColor: Color.fromHex('#958279'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#dd0022'), Color.fromHex('#ccffff')],
        minmaxGreen: [Color.fromHex('#66ccaa'), Color.fromHex('#dd0022')],
        minmaxBlue: [Color.fromHex('#113388'), Color.fromHex('#ffff99')],
        mostFrequentColor: Color.fromHex('#335577'),
        mostSaturatedColor: Color.fromHex('#001122'),
        mostGroupedColor: Color.fromHex('#111122'),
    },
} satisfies IImageColorStats;
