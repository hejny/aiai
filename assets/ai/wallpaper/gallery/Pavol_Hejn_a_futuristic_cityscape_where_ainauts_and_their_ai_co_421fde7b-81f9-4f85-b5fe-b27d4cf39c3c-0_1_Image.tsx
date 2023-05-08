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
import metadata from './Pavol_Hejn_a_futuristic_cityscape_where_ainauts_and_their_ai_co_421fde7b-81f9-4f85-b5fe-b27d4cf39c3c-0_1.json';
import source from './Pavol_Hejn_a_futuristic_cityscape_where_ainauts_and_their_ai_co_421fde7b-81f9-4f85-b5fe-b27d4cf39c3c-0_1.png';

/**
 * Image of A futuristic cityscape where AInauts and their AI counterparts work together to build towering skyscrapers and infrastructure.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AFuturisticCityscapeWhereAinautsAndTheirAiCo421fde7b81f94f85B5feB27d4cf39c3c0_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A futuristic cityscape where AInauts and their AI counterparts work together to build towering skyscrapers and infrastructure."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AFuturisticCityscapeWhereAinautsAndTheirAiCo421fde7b81f94f85B5feB27d4cf39c3c0_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AFuturisticCityscapeWhereAinautsAndTheirAiCo421fde7b81f94f85B5feB27d4cf39c3c0_1_Image.colorStats = {
    averageColor: Color.fromHex('#6d6d68'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#aa5533'), Color.fromHex('#ffffff')],
    minmaxGreen: [Color.fromHex('#778866'), Color.fromHex('#ffffff')],
    minmaxBlue: [Color.fromHex('#445566'), Color.fromHex('#ffffdd')],
    mostFrequentColor: Color.fromHex('#001111'),
    mostSaturatedColor: Color.fromHex('#001111'),
    mostGroupedColor: Color.fromHex('#eeeeee'),
    bottom: {
        averageColor: Color.fromHex('#353530'),
        lightestColor: Color.fromHex('#eeeeee'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#eeeeee'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#772211'), Color.fromHex('#eeeeee')],
        minmaxGreen: [Color.fromHex('#888855'), Color.fromHex('#eeeeee')],
        minmaxBlue: [Color.fromHex('#555566'), Color.fromHex('#ffeecc')],
        mostFrequentColor: Color.fromHex('#001111'),
        mostSaturatedColor: Color.fromHex('#000011'),
        mostGroupedColor: Color.fromHex('#111111'),
    },
} satisfies IImageColorStats;
