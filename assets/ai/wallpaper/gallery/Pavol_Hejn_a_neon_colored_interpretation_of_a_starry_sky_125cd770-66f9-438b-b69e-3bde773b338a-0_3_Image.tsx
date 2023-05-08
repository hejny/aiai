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
import metadata from './Pavol_Hejn_a_neon_colored_interpretation_of_a_starry_sky_125cd770-66f9-438b-b69e-3bde773b338a-0_3.json';
import source from './Pavol_Hejn_a_neon_colored_interpretation_of_a_starry_sky_125cd770-66f9-438b-b69e-3bde773b338a-0_3.png';

/**
 * Image of A neon-colored interpretation of a starry sky
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function ANeonColoredInterpretationOfAStarrySky125cd77066f9438bB69e3bde773b338a0_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A neon-colored interpretation of a starry sky"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ANeonColoredInterpretationOfAStarrySky125cd77066f9438bB69e3bde773b338a0_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ANeonColoredInterpretationOfAStarrySky125cd77066f9438bB69e3bde773b338a0_3_Image.colorStats = {
    averageColor: Color.fromHex('#1e151e'),
    lightestColor: Color.fromHex('#ccdddd'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ccdddd'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#ee3322'), Color.fromHex('#11eeee')],
    minmaxGreen: [Color.fromHex('#44aa77'), Color.fromHex('#cc0077')],
    minmaxBlue: [Color.fromHex('#224499'), Color.fromHex('#ffdd66')],
    mostFrequentColor: Color.fromHex('#000000'),
    mostSaturatedColor: Color.fromHex('#000011'),
    mostGroupedColor: Color.fromHex('#001111'),
    bottom: {
        averageColor: Color.fromHex('#210d17'),
        lightestColor: Color.fromHex('#eeaaaa'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffcc99'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#dd2222'), Color.fromHex('#0088aa')],
        minmaxGreen: [Color.fromHex('#779966'), Color.fromHex('#990033')],
        minmaxBlue: [Color.fromHex('#442288'), Color.fromHex('#eedd55')],
        mostFrequentColor: Color.fromHex('#000000'),
        mostSaturatedColor: Color.fromHex('#110011'),
        mostGroupedColor: Color.fromHex('#000000'),
    },
} satisfies IImageColorStats;
