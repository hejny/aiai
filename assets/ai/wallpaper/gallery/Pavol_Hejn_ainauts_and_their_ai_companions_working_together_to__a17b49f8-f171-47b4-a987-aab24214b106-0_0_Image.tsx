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
import metadata from './Pavol_Hejn_ainauts_and_their_ai_companions_working_together_to__a17b49f8-f171-47b4-a987-aab24214b106-0_0.json';
import source from './Pavol_Hejn_ainauts_and_their_ai_companions_working_together_to__a17b49f8-f171-47b4-a987-aab24214b106-0_0.png';

/**
 * Image of AInauts and their AI companions working together to construct a massive, orbiting space elevator.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AinautsAndTheirAiCompanionsWorkingTogetherToA17b49f8F17147b4A987Aab24214b1060_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="AInauts and their AI companions working together to construct a massive, orbiting space elevator."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AinautsAndTheirAiCompanionsWorkingTogetherToA17b49f8F17147b4A987Aab24214b1060_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AinautsAndTheirAiCompanionsWorkingTogetherToA17b49f8F17147b4A987Aab24214b1060_0_Image.colorStats = {
    averageColor: Color.fromHex('#31373f'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#aa7733'), Color.fromHex('#ddffff')],
    minmaxGreen: [Color.fromHex('#777755'), Color.fromHex('#ffffff')],
    minmaxBlue: [Color.fromHex('#336699'), Color.fromHex('#ffffee')],
    mostFrequentColor: Color.fromHex('#112233'),
    mostSaturatedColor: Color.fromHex('#000011'),
    mostGroupedColor: Color.fromHex('#000011'),
    bottom: {
        averageColor: Color.fromHex('#39414b'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#775522'), Color.fromHex('#eeffff')],
        minmaxGreen: [Color.fromHex('#777755'), Color.fromHex('#ffffff')],
        minmaxBlue: [Color.fromHex('#335577'), Color.fromHex('#ffffff')],
        mostFrequentColor: Color.fromHex('#112233'),
        mostSaturatedColor: Color.fromHex('#000011'),
        mostGroupedColor: Color.fromHex('#112233'),
    },
} satisfies IImageColorStats;
