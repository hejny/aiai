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
import metadata from './Pavol_Hejn_an_illustration_of_a_futuristic_astronaut_in_a_sleek_efccf71a-02b5-4d30-896a-7c0462bce256-0_1.json';
import source from './Pavol_Hejn_an_illustration_of_a_futuristic_astronaut_in_a_sleek_efccf71a-02b5-4d30-896a-7c0462bce256-0_1.png';

/**
 * Image of An illustration of a futuristic astronaut in a sleek spacesuit, standing on the surface of a distant planet.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AnIllustrationOfAFuturisticAstronautInASleekEfccf71a02b54d30896a7c0462bce2560_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An illustration of a futuristic astronaut in a sleek spacesuit, standing on the surface of a distant planet."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnIllustrationOfAFuturisticAstronautInASleekEfccf71a02b54d30896a7c0462bce2560_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnIllustrationOfAFuturisticAstronautInASleekEfccf71a02b54d30896a7c0462bce2560_1_Image.colorStats = {
    averageColor: Color.fromHex('#6d7572'),
    lightestColor: Color.fromHex('#ddeeee'),
    darkestColor: Color.fromHex('#222211'),
    minmaxWhite: [Color.fromHex('#ffeedd'), Color.fromHex('#111122')],
    minmaxRed: [Color.fromHex('#bb5533'), Color.fromHex('#ccffee')],
    minmaxGreen: [Color.fromHex('#558877'), Color.fromHex('#ffeedd')],
    minmaxBlue: [Color.fromHex('#336688'), Color.fromHex('#ffeecc')],
    mostFrequentColor: Color.fromHex('#223333'),
    mostSaturatedColor: Color.fromHex('#883311'),
    mostGroupedColor: Color.fromHex('#669999'),
    bottom: {
        averageColor: Color.fromHex('#545453'),
        lightestColor: Color.fromHex('#eedddd'),
        darkestColor: Color.fromHex('#222211'),
        minmaxWhite: [Color.fromHex('#eedddd'), Color.fromHex('#111122')],
        minmaxRed: [Color.fromHex('#994422'), Color.fromHex('#dddddd')],
        minmaxGreen: [Color.fromHex('#669988'), Color.fromHex('#eedddd')],
        minmaxBlue: [Color.fromHex('#336677'), Color.fromHex('#eeddbb')],
        mostFrequentColor: Color.fromHex('#223333'),
        mostSaturatedColor: Color.fromHex('#772211'),
        mostGroupedColor: Color.fromHex('#224455'),
    },
} satisfies IImageColorStats;
