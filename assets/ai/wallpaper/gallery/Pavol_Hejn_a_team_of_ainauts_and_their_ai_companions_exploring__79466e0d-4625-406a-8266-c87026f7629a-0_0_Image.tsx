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
import metadata from './Pavol_Hejn_a_team_of_ainauts_and_their_ai_companions_exploring__79466e0d-4625-406a-8266-c87026f7629a-0_0.json';
import source from './Pavol_Hejn_a_team_of_ainauts_and_their_ai_companions_exploring__79466e0d-4625-406a-8266-c87026f7629a-0_0.png';

/**
 * Image of A team of AInauts and their AI companions exploring a massive, abandoned alien spacecraft floating in the depths of space.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function ATeamOfAinautsAndTheirAiCompanionsExploring79466e0d4625406a8266C87026f7629a0_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A team of AInauts and their AI companions exploring a massive, abandoned alien spacecraft floating in the depths of space."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ATeamOfAinautsAndTheirAiCompanionsExploring79466e0d4625406a8266C87026f7629a0_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ATeamOfAinautsAndTheirAiCompanionsExploring79466e0d4625406a8266C87026f7629a0_0_Image.colorStats = {
    averageColor: Color.fromHex('#275b62'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#002200'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#cc3344'), Color.fromHex('#77ffff')],
    minmaxGreen: [Color.fromHex('#33aa33'), Color.fromHex('#ffddff')],
    minmaxBlue: [Color.fromHex('#006699'), Color.fromHex('#ffffee')],
    mostFrequentColor: Color.fromHex('#001111'),
    mostSaturatedColor: Color.fromHex('#002233'),
    mostGroupedColor: Color.fromHex('#113333'),
    bottom: {
        averageColor: Color.fromHex('#19484f'),
        lightestColor: Color.fromHex('#ffddff'),
        darkestColor: Color.fromHex('#002200'),
        minmaxWhite: [Color.fromHex('#ffeeff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#992200'), Color.fromHex('#77ffff')],
        minmaxGreen: [Color.fromHex('#33aa33'), Color.fromHex('#ffddff')],
        minmaxBlue: [Color.fromHex('#006699'), Color.fromHex('#bbff66')],
        mostFrequentColor: Color.fromHex('#001111'),
        mostSaturatedColor: Color.fromHex('#001122'),
        mostGroupedColor: Color.fromHex('#001111'),
    },
} satisfies IImageColorStats;
