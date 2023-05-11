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
import metadata from './Pavol_Hejn_a_vintage_map_of_the_stars_and_constellations_with_d_a7667753-c5ec-48e9-8c77-323fbd41c7e6-0_0.json';
import source from './Pavol_Hejn_a_vintage_map_of_the_stars_and_constellations_with_d_a7667753-c5ec-48e9-8c77-323fbd41c7e6-0_0.png';

/**
 * Image of A vintage map of the stars and constellations, with detailed illustrations of spacecraft and celestial bodies.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AVintageMapOfTheStarsAndConstellationsWithDA7667753C5ec48e98c77323fbd41c7e60_0_Image(
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

AVintageMapOfTheStarsAndConstellationsWithDA7667753C5ec48e98c77323fbd41c7e60_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AVintageMapOfTheStarsAndConstellationsWithDA7667753C5ec48e98c77323fbd41c7e60_0_Image.colorStats = {
    averageColor: Color.fromHex('#baa673'),
    lightestColor: Color.fromHex('#ffffee'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#bb2200'), Color.fromHex('#ffffee')],
    minmaxGreen: [Color.fromHex('#778844'), Color.fromHex('#ffffee')],
    minmaxBlue: [Color.fromHex('#444455'), Color.fromHex('#ffff99')],
    mostFrequentColor: Color.fromHex('#ccaa88'),
    mostSaturatedColor: Color.fromHex('#221100'),
    mostGroupedColor: Color.fromHex('#ddcc88'),
    bottom: {
        averageColor: Color.fromHex('#ae9b6b'),
        lightestColor: Color.fromHex('#ffeecc'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffcc'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#cc3311'), Color.fromHex('#ffffcc')],
        minmaxGreen: [Color.fromHex('#778844'), Color.fromHex('#660011')],
        minmaxBlue: [Color.fromHex('#444455'), Color.fromHex('#ffffbb')],
        mostFrequentColor: Color.fromHex('#ccaa88'),
        mostSaturatedColor: Color.fromHex('#111100'),
        mostGroupedColor: Color.fromHex('#ddcc88'),
    },
} satisfies IImageColorStats;
