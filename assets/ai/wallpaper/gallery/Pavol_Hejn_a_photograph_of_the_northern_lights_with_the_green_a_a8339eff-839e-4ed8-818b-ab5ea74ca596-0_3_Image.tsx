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
import metadata from './Pavol_Hejn_a_photograph_of_the_northern_lights_with_the_green_a_a8339eff-839e-4ed8-818b-ab5ea74ca596-0_3.json';
import source from './Pavol_Hejn_a_photograph_of_the_northern_lights_with_the_green_a_a8339eff-839e-4ed8-818b-ab5ea74ca596-0_3.png';

/**
 * Image of A photograph of the Northern Lights, with the green and purple hues swirling in the night sky.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function APhotographOfTheNorthernLightsWithTheGreenAA8339eff839e4ed8818bAb5ea74ca5960_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A photograph of the Northern Lights, with the green and purple hues swirling in the night sky."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

APhotographOfTheNorthernLightsWithTheGreenAA8339eff839e4ed8818bAb5ea74ca5960_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APhotographOfTheNorthernLightsWithTheGreenAA8339eff839e4ed8818bAb5ea74ca5960_3_Image.colorStats = {
    averageColor: Color.fromHex('#232d33'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#885544'), Color.fromHex('#bbffff')],
    minmaxGreen: [Color.fromHex('#66aa66'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#225588'), Color.fromHex('#ffffff')],
    mostFrequentColor: Color.fromHex('#000000'),
    mostSaturatedColor: Color.fromHex('#000011'),
    mostGroupedColor: Color.fromHex('#001111'),
    bottom: {
        averageColor: Color.fromHex('#22212a'),
        lightestColor: Color.fromHex('#ffeeff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffeeff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#885544'), Color.fromHex('#ddeeff')],
        minmaxGreen: [Color.fromHex('#777755'), Color.fromHex('#ffeeff')],
        minmaxBlue: [Color.fromHex('#554477'), Color.fromHex('#ffeeff')],
        mostFrequentColor: Color.fromHex('#000000'),
        mostSaturatedColor: Color.fromHex('#001111'),
        mostGroupedColor: Color.fromHex('#000000'),
    },
} satisfies IImageColorStats;
