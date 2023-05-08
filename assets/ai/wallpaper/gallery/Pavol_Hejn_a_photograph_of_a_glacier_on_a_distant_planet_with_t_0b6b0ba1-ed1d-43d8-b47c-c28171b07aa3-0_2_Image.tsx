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
import metadata from './Pavol_Hejn_a_photograph_of_a_glacier_on_a_distant_planet_with_t_0b6b0ba1-ed1d-43d8-b47c-c28171b07aa3-0_2.json';
import source from './Pavol_Hejn_a_photograph_of_a_glacier_on_a_distant_planet_with_t_0b6b0ba1-ed1d-43d8-b47c-c28171b07aa3-0_2.png';

/**
 * Image of A photograph of a glacier on a distant planet, with the blue and white colors contrasting against the dark sky.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function APhotographOfAGlacierOnADistantPlanetWithT0b6b0ba1Ed1d43d8B47cC28171b07aa30_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A photograph of a glacier on a distant planet, with the blue and white colors contrasting against the dark sky."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

APhotographOfAGlacierOnADistantPlanetWithT0b6b0ba1Ed1d43d8B47cC28171b07aa30_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APhotographOfAGlacierOnADistantPlanetWithT0b6b0ba1Ed1d43d8B47cC28171b07aa30_2_Image.colorStats = {
    averageColor: Color.fromHex('#27505e'),
    lightestColor: Color.fromHex('#ccdddd'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ccdddd'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#223333'), Color.fromHex('#bbdddd')],
    minmaxGreen: [Color.fromHex('#448888'), Color.fromHex('#000011')],
    minmaxBlue: [Color.fromHex('#006688'), Color.fromHex('#ccdddd')],
    mostFrequentColor: Color.fromHex('#002222'),
    mostSaturatedColor: Color.fromHex('#001122'),
    mostGroupedColor: Color.fromHex('#558899'),
    bottom: {
        averageColor: Color.fromHex('#082835'),
        lightestColor: Color.fromHex('#6699bb'),
        darkestColor: Color.fromHex('#001111'),
        minmaxWhite: [Color.fromHex('#6699bb'), Color.fromHex('#000011')],
        minmaxRed: [Color.fromHex('#223333'), Color.fromHex('#006677')],
        minmaxGreen: [Color.fromHex('#338899'), Color.fromHex('#000011')],
        minmaxBlue: [Color.fromHex('#116688'), Color.fromHex('#001111')],
        mostFrequentColor: Color.fromHex('#002222'),
        mostSaturatedColor: Color.fromHex('#001111'),
        mostGroupedColor: Color.fromHex('#001111'),
    },
} satisfies IImageColorStats;
