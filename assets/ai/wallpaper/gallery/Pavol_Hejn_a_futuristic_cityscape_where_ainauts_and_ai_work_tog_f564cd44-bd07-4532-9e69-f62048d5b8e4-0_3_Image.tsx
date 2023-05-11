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
import metadata from './Pavol_Hejn_a_futuristic_cityscape_where_ainauts_and_ai_work_tog_f564cd44-bd07-4532-9e69-f62048d5b8e4-0_3.json';
import source from './Pavol_Hejn_a_futuristic_cityscape_where_ainauts_and_ai_work_tog_f564cd44-bd07-4532-9e69-f62048d5b8e4-0_3.png';

/**
 * Image of A futuristic cityscape where AInauts and AI work together to create massive, sustainable structures and infrastructure.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AFuturisticCityscapeWhereAinautsAndAiWorkTogF564cd44Bd0745329e69F62048d5b8e40_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A futuristic cityscape where AInauts and AI work together to create massive, sustainable structures and infrastructure."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AFuturisticCityscapeWhereAinautsAndAiWorkTogF564cd44Bd0745329e69F62048d5b8e40_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AFuturisticCityscapeWhereAinautsAndAiWorkTogF564cd44Bd0745329e69F62048d5b8e40_3_Image.colorStats = {
    averageColor: Color.fromHex('#2e3b41'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#bb3300'), Color.fromHex('#eeffff')],
    minmaxGreen: [Color.fromHex('#889955'), Color.fromHex('#ffffff')],
    minmaxBlue: [Color.fromHex('#224477'), Color.fromHex('#ffffaa')],
    mostFrequentColor: Color.fromHex('#000000'),
    mostSaturatedColor: Color.fromHex('#001111'),
    mostGroupedColor: Color.fromHex('#111111'),
    bottom: {
        averageColor: Color.fromHex('#1b2327'),
        lightestColor: Color.fromHex('#ffeeee'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#bb3300'), Color.fromHex('#eeffee')],
        minmaxGreen: [Color.fromHex('#667755'), Color.fromHex('#ffeeee')],
        minmaxBlue: [Color.fromHex('#224477'), Color.fromHex('#ffffaa')],
        mostFrequentColor: Color.fromHex('#000000'),
        mostSaturatedColor: Color.fromHex('#001111'),
        mostGroupedColor: Color.fromHex('#111111'),
    },
} satisfies IImageColorStats;
