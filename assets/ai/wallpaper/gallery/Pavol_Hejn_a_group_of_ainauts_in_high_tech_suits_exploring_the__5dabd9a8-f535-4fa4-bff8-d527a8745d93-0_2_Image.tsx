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
import metadata from './Pavol_Hejn_a_group_of_ainauts_in_high_tech_suits_exploring_the__5dabd9a8-f535-4fa4-bff8-d527a8745d93-0_2.json';
import source from './Pavol_Hejn_a_group_of_ainauts_in_high_tech_suits_exploring_the__5dabd9a8-f535-4fa4-bff8-d527a8745d93-0_2.png';

/**
 * Image of A group of AInauts in high-tech suits exploring the surface of a desert planet, with a massive sandstorm brewing in the distance.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AGroupOfAinautsInHighTechSuitsExploringThe5dabd9a8F5354fa4Bff8D527a8745d930_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A group of AInauts in high-tech suits exploring the surface of a desert planet, with a massive sandstorm brewing in the distance."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AGroupOfAinautsInHighTechSuitsExploringThe5dabd9a8F5354fa4Bff8D527a8745d930_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AGroupOfAinautsInHighTechSuitsExploringThe5dabd9a8F5354fa4Bff8D527a8745d930_2_Image.colorStats = {
    averageColor: Color.fromHex('#ce9257'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#663300'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#332211')],
    minmaxRed: [Color.fromHex('#dd4400'), Color.fromHex('#eeffff')],
    minmaxGreen: [Color.fromHex('#777755'), Color.fromHex('#ffffff')],
    minmaxBlue: [Color.fromHex('#555577'), Color.fromHex('#ffffcc')],
    mostFrequentColor: Color.fromHex('#773322'),
    mostSaturatedColor: Color.fromHex('#cc4400'),
    mostGroupedColor: Color.fromHex('#ffdd99'),
    bottom: {
        averageColor: Color.fromHex('#b76227'),
        lightestColor: Color.fromHex('#eeeeff'),
        darkestColor: Color.fromHex('#772200'),
        minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#552211')],
        minmaxRed: [Color.fromHex('#dd4400'), Color.fromHex('#eeffff')],
        minmaxGreen: [Color.fromHex('#bb9944'), Color.fromHex('#eeeeff')],
        minmaxBlue: [Color.fromHex('#553333'), Color.fromHex('#ffffcc')],
        mostFrequentColor: Color.fromHex('#773322'),
        mostSaturatedColor: Color.fromHex('#aa4400'),
        mostGroupedColor: Color.fromHex('#773311'),
    },
} satisfies IImageColorStats;
