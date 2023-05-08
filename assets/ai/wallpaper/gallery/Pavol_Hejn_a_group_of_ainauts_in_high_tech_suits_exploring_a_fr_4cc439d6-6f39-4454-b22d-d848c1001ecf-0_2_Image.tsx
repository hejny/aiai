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
import metadata from './Pavol_Hejn_a_group_of_ainauts_in_high_tech_suits_exploring_a_fr_4cc439d6-6f39-4454-b22d-d848c1001ecf-0_2.json';
import source from './Pavol_Hejn_a_group_of_ainauts_in_high_tech_suits_exploring_a_fr_4cc439d6-6f39-4454-b22d-d848c1001ecf-0_2.png';

/**
 * Image of A group of AInauts in high-tech suits exploring a frozen wasteland on a distant planet, with towering ice formations all around them.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AGroupOfAinautsInHighTechSuitsExploringAFr4cc439d66f394454B22dD848c1001ecf0_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A group of AInauts in high-tech suits exploring a frozen wasteland on a distant planet, with towering ice formations all around them."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AGroupOfAinautsInHighTechSuitsExploringAFr4cc439d66f394454B22dD848c1001ecf0_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AGroupOfAinautsInHighTechSuitsExploringAFr4cc439d66f394454B22dD848c1001ecf0_2_Image.colorStats = {
    averageColor: Color.fromHex('#58758c'),
    lightestColor: Color.fromHex('#ddeeff'),
    darkestColor: Color.fromHex('#442200'),
    minmaxWhite: [Color.fromHex('#ddeeff'), Color.fromHex('#001122')],
    minmaxRed: [Color.fromHex('#442200'), Color.fromHex('#cceeff')],
    minmaxGreen: [Color.fromHex('#447788'), Color.fromHex('#ddeeff')],
    minmaxBlue: [Color.fromHex('#225577'), Color.fromHex('#ddeeee')],
    mostFrequentColor: Color.fromHex('#224455'),
    mostSaturatedColor: Color.fromHex('#001122'),
    mostGroupedColor: Color.fromHex('#335566'),
    bottom: {
        averageColor: Color.fromHex('#4e6c85'),
        lightestColor: Color.fromHex('#ddeeff'),
        darkestColor: Color.fromHex('#001122'),
        minmaxWhite: [Color.fromHex('#ddeeff'), Color.fromHex('#001122')],
        minmaxRed: [Color.fromHex('#553311'), Color.fromHex('#cceeff')],
        minmaxGreen: [Color.fromHex('#446666'), Color.fromHex('#ddeeff')],
        minmaxBlue: [Color.fromHex('#224477'), Color.fromHex('#ddeeff')],
        mostFrequentColor: Color.fromHex('#224455'),
        mostSaturatedColor: Color.fromHex('#001122'),
        mostGroupedColor: Color.fromHex('#446688'),
    },
} satisfies IImageColorStats;
