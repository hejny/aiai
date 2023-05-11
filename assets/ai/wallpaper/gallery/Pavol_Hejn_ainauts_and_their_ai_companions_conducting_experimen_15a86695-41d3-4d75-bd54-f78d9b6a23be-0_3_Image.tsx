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
import metadata from './Pavol_Hejn_ainauts_and_their_ai_companions_conducting_experimen_15a86695-41d3-4d75-bd54-f78d9b6a23be-0_3.json';
import source from './Pavol_Hejn_ainauts_and_their_ai_companions_conducting_experimen_15a86695-41d3-4d75-bd54-f78d9b6a23be-0_3.png';

/**
 * Image of AInauts and their AI companions conducting experiments in a zero-gravity laboratory, with colorful chemicals and particles floating all around them.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AinautsAndTheirAiCompanionsConductingExperimen15a8669541d34d75Bd54F78d9b6a23be0_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="AInauts and their AI companions conducting experiments in a zero-gravity laboratory, with colorful chemicals and particles floating all around them."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AinautsAndTheirAiCompanionsConductingExperimen15a8669541d34d75Bd54F78d9b6a23be0_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AinautsAndTheirAiCompanionsConductingExperimen15a8669541d34d75Bd54F78d9b6a23be0_3_Image.colorStats = {
    averageColor: Color.fromHex('#38363e'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#dd3311'), Color.fromHex('#99ffff')],
    minmaxGreen: [Color.fromHex('#33bb55'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#0044aa'), Color.fromHex('#ffff77')],
    mostFrequentColor: Color.fromHex('#000000'),
    mostSaturatedColor: Color.fromHex('#000011'),
    mostGroupedColor: Color.fromHex('#000011'),
    bottom: {
        averageColor: Color.fromHex('#36292f'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#dd3311'), Color.fromHex('#ddffff')],
        minmaxGreen: [Color.fromHex('#779922'), Color.fromHex('#ffeeff')],
        minmaxBlue: [Color.fromHex('#225588'), Color.fromHex('#ffff88')],
        mostFrequentColor: Color.fromHex('#000000'),
        mostSaturatedColor: Color.fromHex('#000011'),
        mostGroupedColor: Color.fromHex('#000011'),
    },
} satisfies IImageColorStats;
