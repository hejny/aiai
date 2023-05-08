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
import metadata from './Pavol_Hejn_a_futuristic_cityscape_where_ainauts_use_advanced_ai_63c45b61-07f8-4e54-b761-9ad406d00156-0_3.json';
import source from './Pavol_Hejn_a_futuristic_cityscape_where_ainauts_use_advanced_ai_63c45b61-07f8-4e54-b761-9ad406d00156-0_3.png';

/**
 * Image of A futuristic cityscape where AInauts use advanced AI technology to monitor and maintain the city's infrastructure and systems.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AFuturisticCityscapeWhereAinautsUseAdvancedAi63c45b6107f84e54B7619ad406d001560_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A futuristic cityscape where AInauts use advanced AI technology to monitor and maintain the city's infrastructure and systems."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AFuturisticCityscapeWhereAinautsUseAdvancedAi63c45b6107f84e54B7619ad406d001560_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AFuturisticCityscapeWhereAinautsUseAdvancedAi63c45b6107f84e54B7619ad406d001560_3_Image.colorStats = {
    averageColor: Color.fromHex('#6d6661'),
    lightestColor: Color.fromHex('#eeeeee'),
    darkestColor: Color.fromHex('#330000'),
    minmaxWhite: [Color.fromHex('#eeffee'), Color.fromHex('#000011')],
    minmaxRed: [Color.fromHex('#aa4433'), Color.fromHex('#eeffee')],
    minmaxGreen: [Color.fromHex('#668877'), Color.fromHex('#ffeedd')],
    minmaxBlue: [Color.fromHex('#334466'), Color.fromHex('#ffffdd')],
    mostFrequentColor: Color.fromHex('#000011'),
    mostSaturatedColor: Color.fromHex('#001122'),
    mostGroupedColor: Color.fromHex('#ffeedd'),
    bottom: {
        averageColor: Color.fromHex('#38363b'),
        lightestColor: Color.fromHex('#eeeedd'),
        darkestColor: Color.fromHex('#000011'),
        minmaxWhite: [Color.fromHex('#eeeedd'), Color.fromHex('#000011')],
        minmaxRed: [Color.fromHex('#aa4433'), Color.fromHex('#ddeedd')],
        minmaxGreen: [Color.fromHex('#447777'), Color.fromHex('#ffddcc')],
        minmaxBlue: [Color.fromHex('#113355'), Color.fromHex('#ffeeaa')],
        mostFrequentColor: Color.fromHex('#000011'),
        mostSaturatedColor: Color.fromHex('#001122'),
        mostGroupedColor: Color.fromHex('#111122'),
    },
} satisfies IImageColorStats;
