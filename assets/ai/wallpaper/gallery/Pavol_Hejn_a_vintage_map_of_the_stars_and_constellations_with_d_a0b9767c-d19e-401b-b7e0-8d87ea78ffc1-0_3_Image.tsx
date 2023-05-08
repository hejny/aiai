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
import metadata from './Pavol_Hejn_a_vintage_map_of_the_stars_and_constellations_with_d_a0b9767c-d19e-401b-b7e0-8d87ea78ffc1-0_3.json';
import source from './Pavol_Hejn_a_vintage_map_of_the_stars_and_constellations_with_d_a0b9767c-d19e-401b-b7e0-8d87ea78ffc1-0_3.png';

/**
 * Image of A vintage map of the stars and constellations, with detailed illustrations of spacecraft and celestial bodies.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AVintageMapOfTheStarsAndConstellationsWithDA0b9767cD19e401bB7e08d87ea78ffc10_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A vintage map of the stars and constellations, with detailed illustrations of spacecraft and celestial bodies."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AVintageMapOfTheStarsAndConstellationsWithDA0b9767cD19e401bB7e08d87ea78ffc10_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AVintageMapOfTheStarsAndConstellationsWithDA0b9767cD19e401bB7e08d87ea78ffc10_3_Image.colorStats = {
    averageColor: Color.fromHex('#8d7b5e'),
    lightestColor: Color.fromHex('#ffffcc'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffcc'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#990000'), Color.fromHex('#ffffcc')],
    minmaxGreen: [Color.fromHex('#778855'), Color.fromHex('#990000')],
    minmaxBlue: [Color.fromHex('#445555'), Color.fromHex('#ffffcc')],
    mostFrequentColor: Color.fromHex('#444422'),
    mostSaturatedColor: Color.fromHex('#221100'),
    mostGroupedColor: Color.fromHex('#ccbb99'),
    bottom: {
        averageColor: Color.fromHex('#938364'),
        lightestColor: Color.fromHex('#ffeecc'),
        darkestColor: Color.fromHex('#111100'),
        minmaxWhite: [Color.fromHex('#ffeecc'), Color.fromHex('#110000')],
        minmaxRed: [Color.fromHex('#aa3311'), Color.fromHex('#eeeecc')],
        minmaxGreen: [Color.fromHex('#557755'), Color.fromHex('#660000')],
        minmaxBlue: [Color.fromHex('#555555'), Color.fromHex('#ffeebb')],
        mostFrequentColor: Color.fromHex('#444422'),
        mostSaturatedColor: Color.fromHex('#664400'),
        mostGroupedColor: Color.fromHex('#ccbb99'),
    },
} satisfies IImageColorStats;
