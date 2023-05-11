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
import metadata from './Pavol_Hejn_an_illustration_of_a_robotic_explorer_with_metallic__5c52f972-0825-4c17-8df0-eb2dfb077c29-0_3.json';
import source from './Pavol_Hejn_an_illustration_of_a_robotic_explorer_with_metallic__5c52f972-0825-4c17-8df0-eb2dfb077c29-0_3.png';

/**
 * Image of An illustration of a robotic explorer, with metallic textures and intricate details.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AnIllustrationOfARoboticExplorerWithMetallic5c52f97208254c178df0Eb2dfb077c290_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An illustration of a robotic explorer, with metallic textures and intricate details."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnIllustrationOfARoboticExplorerWithMetallic5c52f97208254c178df0Eb2dfb077c290_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnIllustrationOfARoboticExplorerWithMetallic5c52f97208254c178df0Eb2dfb077c290_3_Image.colorStats = {
    averageColor: Color.fromHex('#958267'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#bb4422'), Color.fromHex('#88eeee')],
    minmaxGreen: [Color.fromHex('#33aa88'), Color.fromHex('#ffffff')],
    minmaxBlue: [Color.fromHex('#224466'), Color.fromHex('#ffffaa')],
    mostFrequentColor: Color.fromHex('#221111'),
    mostSaturatedColor: Color.fromHex('#331100'),
    mostGroupedColor: Color.fromHex('#66aaaa'),
    bottom: {
        averageColor: Color.fromHex('#906b4d'),
        lightestColor: Color.fromHex('#ffffee'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#bb4422'), Color.fromHex('#ffffee')],
        minmaxGreen: [Color.fromHex('#778866'), Color.fromHex('#ffffee')],
        minmaxBlue: [Color.fromHex('#555555'), Color.fromHex('#ffffcc')],
        mostFrequentColor: Color.fromHex('#221111'),
        mostSaturatedColor: Color.fromHex('#332200'),
        mostGroupedColor: Color.fromHex('#ffcc99'),
    },
} satisfies IImageColorStats;
