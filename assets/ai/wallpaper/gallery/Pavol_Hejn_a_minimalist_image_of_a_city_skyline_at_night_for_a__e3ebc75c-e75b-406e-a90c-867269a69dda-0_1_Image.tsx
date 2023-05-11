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
import metadata from './Pavol_Hejn_a_minimalist_image_of_a_city_skyline_at_night_for_a__e3ebc75c-e75b-406e-a90c-867269a69dda-0_1.json';
import source from './Pavol_Hejn_a_minimalist_image_of_a_city_skyline_at_night_for_a__e3ebc75c-e75b-406e-a90c-867269a69dda-0_1.png';

/**
 * Image of A minimalist image of a city skyline at night for a real estate or architecture website
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AMinimalistImageOfACitySkylineAtNightForAE3ebc75cE75b406eA90c867269a69dda0_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A minimalist image of a city skyline at night for a real estate or architecture website"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AMinimalistImageOfACitySkylineAtNightForAE3ebc75cE75b406eA90c867269a69dda0_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AMinimalistImageOfACitySkylineAtNightForAE3ebc75cE75b406eA90c867269a69dda0_1_Image.colorStats = {
    averageColor: Color.fromHex('#082046'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#774444'), Color.fromHex('#33eeff')],
    minmaxGreen: [Color.fromHex('#448888'), Color.fromHex('#ffffff')],
    minmaxBlue: [Color.fromHex('#0033aa'), Color.fromHex('#ffffdd')],
    mostFrequentColor: Color.fromHex('#000022'),
    mostSaturatedColor: Color.fromHex('#000022'),
    mostGroupedColor: Color.fromHex('#000022'),
    bottom: {
        averageColor: Color.fromHex('#061b43'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#996655'), Color.fromHex('#33eeff')],
        minmaxGreen: [Color.fromHex('#448888'), Color.fromHex('#ffffff')],
        minmaxBlue: [Color.fromHex('#0044aa'), Color.fromHex('#ffffee')],
        mostFrequentColor: Color.fromHex('#000022'),
        mostSaturatedColor: Color.fromHex('#003366'),
        mostGroupedColor: Color.fromHex('#000022'),
    },
} satisfies IImageColorStats;
