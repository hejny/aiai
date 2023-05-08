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
import metadata from './Pavol_Hejn_an_illustration_of_a_futuristic_astronaut_in_a_sleek_efccf71a-02b5-4d30-896a-7c0462bce256-0_0.json';
import source from './Pavol_Hejn_an_illustration_of_a_futuristic_astronaut_in_a_sleek_efccf71a-02b5-4d30-896a-7c0462bce256-0_0.png';

/**
 * Image of An illustration of a futuristic astronaut in a sleek spacesuit, standing on the surface of a distant planet.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AnIllustrationOfAFuturisticAstronautInASleekEfccf71a02b54d30896a7c0462bce2560_0_Image(
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

AnIllustrationOfAFuturisticAstronautInASleekEfccf71a02b54d30896a7c0462bce2560_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnIllustrationOfAFuturisticAstronautInASleekEfccf71a02b54d30896a7c0462bce2560_0_Image.colorStats = {
    averageColor: Color.fromHex('#75757e'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000011'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000011')],
    minmaxRed: [Color.fromHex('#773322'), Color.fromHex('#ddffff')],
    minmaxGreen: [Color.fromHex('#557777'), Color.fromHex('#ffffff')],
    minmaxBlue: [Color.fromHex('#334477'), Color.fromHex('#ffffdd')],
    mostFrequentColor: Color.fromHex('#111122'),
    mostSaturatedColor: Color.fromHex('#110011'),
    mostGroupedColor: Color.fromHex('#ffeedd'),
    bottom: {
        averageColor: Color.fromHex('#3a3541'),
        lightestColor: Color.fromHex('#ddeeee'),
        darkestColor: Color.fromHex('#000011'),
        minmaxWhite: [Color.fromHex('#eeeedd'), Color.fromHex('#000011')],
        minmaxRed: [Color.fromHex('#773333'), Color.fromHex('#ddeeee')],
        minmaxGreen: [Color.fromHex('#777766'), Color.fromHex('#ddeeee')],
        minmaxBlue: [Color.fromHex('#335577'), Color.fromHex('#eeeedd')],
        mostFrequentColor: Color.fromHex('#111122'),
        mostSaturatedColor: Color.fromHex('#220011'),
        mostGroupedColor: Color.fromHex('#222233'),
    },
} satisfies IImageColorStats;
