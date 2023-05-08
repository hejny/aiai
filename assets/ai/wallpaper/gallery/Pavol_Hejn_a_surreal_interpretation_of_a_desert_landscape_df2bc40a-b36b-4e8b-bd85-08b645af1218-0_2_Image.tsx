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
import metadata from './Pavol_Hejn_a_surreal_interpretation_of_a_desert_landscape_df2bc40a-b36b-4e8b-bd85-08b645af1218-0_2.json';
import source from './Pavol_Hejn_a_surreal_interpretation_of_a_desert_landscape_df2bc40a-b36b-4e8b-bd85-08b645af1218-0_2.png';

/**
 * Image of A surreal interpretation of a desert landscape
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ASurrealInterpretationOfADesertLandscapeDf2bc40aB36b4e8bBd8508b645af12180_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A surreal interpretation of a desert landscape"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ASurrealInterpretationOfADesertLandscapeDf2bc40aB36b4e8bBd8508b645af12180_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ASurrealInterpretationOfADesertLandscapeDf2bc40aB36b4e8bBd8508b645af12180_2_Image.colorStats = {
    averageColor: Color.fromHex('#a2988c'),
    lightestColor: Color.fromHex('#ffffee'),
    darkestColor: Color.fromHex('#442200'),
    minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#111111')],
    minmaxRed: [Color.fromHex('#aa5533'), Color.fromHex('#eeffee')],
    minmaxGreen: [Color.fromHex('#557766'), Color.fromHex('#ffffee')],
    minmaxBlue: [Color.fromHex('#445566'), Color.fromHex('#ffffee')],
    mostFrequentColor: Color.fromHex('#eeccaa'),
    mostSaturatedColor: Color.fromHex('#442200'),
    mostGroupedColor: Color.fromHex('#bbcccc'),
    bottom: {
        averageColor: Color.fromHex('#a1816d'),
        lightestColor: Color.fromHex('#eeddcc'),
        darkestColor: Color.fromHex('#221100'),
        minmaxWhite: [Color.fromHex('#eeddcc'), Color.fromHex('#221100')],
        minmaxRed: [Color.fromHex('#884422'), Color.fromHex('#ddddcc')],
        minmaxGreen: [Color.fromHex('#667766'), Color.fromHex('#ffddbb')],
        minmaxBlue: [Color.fromHex('#445555'), Color.fromHex('#ffddbb')],
        mostFrequentColor: Color.fromHex('#eeccaa'),
        mostSaturatedColor: Color.fromHex('#221100'),
        mostGroupedColor: Color.fromHex('#ccbbaa'),
    },
} satisfies IImageColorStats;
