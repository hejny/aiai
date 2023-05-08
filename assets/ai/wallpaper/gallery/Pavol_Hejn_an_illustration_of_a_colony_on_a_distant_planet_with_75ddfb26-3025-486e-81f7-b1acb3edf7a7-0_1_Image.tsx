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
import metadata from './Pavol_Hejn_an_illustration_of_a_colony_on_a_distant_planet_with_75ddfb26-3025-486e-81f7-b1acb3edf7a7-0_1.json';
import source from './Pavol_Hejn_an_illustration_of_a_colony_on_a_distant_planet_with_75ddfb26-3025-486e-81f7-b1acb3edf7a7-0_1.png';

/**
 * Image of An illustration of a colony on a distant planet, with a mix of futuristic and traditional architecture.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AnIllustrationOfAColonyOnADistantPlanetWith75ddfb263025486e81f7B1acb3edf7a70_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An illustration of a colony on a distant planet, with a mix of futuristic and traditional architecture."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnIllustrationOfAColonyOnADistantPlanetWith75ddfb263025486e81f7B1acb3edf7a70_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnIllustrationOfAColonyOnADistantPlanetWith75ddfb263025486e81f7B1acb3edf7a70_1_Image.colorStats = {
    averageColor: Color.fromHex('#686d62'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#aa4400'), Color.fromHex('#22ccee')],
    minmaxGreen: [Color.fromHex('#889955'), Color.fromHex('#ffffff')],
    minmaxBlue: [Color.fromHex('#337799'), Color.fromHex('#ffee66')],
    mostFrequentColor: Color.fromHex('#000000'),
    mostSaturatedColor: Color.fromHex('#111100'),
    mostGroupedColor: Color.fromHex('#ddddcc'),
    bottom: {
        averageColor: Color.fromHex('#3e3b2e'),
        lightestColor: Color.fromHex('#ccddbb'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ccddbb'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#aa4400'), Color.fromHex('#ccddbb')],
        minmaxGreen: [Color.fromHex('#778844'), Color.fromHex('#110000')],
        minmaxBlue: [Color.fromHex('#333344'), Color.fromHex('#ffee88')],
        mostFrequentColor: Color.fromHex('#000000'),
        mostSaturatedColor: Color.fromHex('#aa4400'),
        mostGroupedColor: Color.fromHex('#000000'),
    },
} satisfies IImageColorStats;
