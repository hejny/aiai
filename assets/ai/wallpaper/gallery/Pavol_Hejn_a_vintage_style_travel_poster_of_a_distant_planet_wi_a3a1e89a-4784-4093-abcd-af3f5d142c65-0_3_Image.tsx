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
import metadata from './Pavol_Hejn_a_vintage_style_travel_poster_of_a_distant_planet_wi_a3a1e89a-4784-4093-abcd-af3f5d142c65-0_3.json';
import source from './Pavol_Hejn_a_vintage_style_travel_poster_of_a_distant_planet_wi_a3a1e89a-4784-4093-abcd-af3f5d142c65-0_3.png';

/**
 * Image of A vintage-style travel poster of a distant planet, with bold typography and an artistic rendering of the landscape.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AVintageStyleTravelPosterOfADistantPlanetWiA3a1e89a47844093AbcdAf3f5d142c650_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A vintage-style travel poster of a distant planet, with bold typography and an artistic rendering of the landscape."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AVintageStyleTravelPosterOfADistantPlanetWiA3a1e89a47844093AbcdAf3f5d142c650_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AVintageStyleTravelPosterOfADistantPlanetWiA3a1e89a47844093AbcdAf3f5d142c650_3_Image.colorStats = {
    averageColor: Color.fromHex('#a97168'),
    lightestColor: Color.fromHex('#ffffee'),
    darkestColor: Color.fromHex('#110011'),
    minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#110011')],
    minmaxRed: [Color.fromHex('#cc3333'), Color.fromHex('#ffffee')],
    minmaxGreen: [Color.fromHex('#888866'), Color.fromHex('#ffeeee')],
    minmaxBlue: [Color.fromHex('#222255'), Color.fromHex('#ffffbb')],
    mostFrequentColor: Color.fromHex('#eeeedd'),
    mostSaturatedColor: Color.fromHex('#110011'),
    mostGroupedColor: Color.fromHex('#222244'),
    bottom: {
        averageColor: Color.fromHex('#725663'),
        lightestColor: Color.fromHex('#ffffee'),
        darkestColor: Color.fromHex('#110011'),
        minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#110011')],
        minmaxRed: [Color.fromHex('#cc3333'), Color.fromHex('#ffffee')],
        minmaxGreen: [Color.fromHex('#888866'), Color.fromHex('#ffeeee')],
        minmaxBlue: [Color.fromHex('#222255'), Color.fromHex('#ffffcc')],
        mostFrequentColor: Color.fromHex('#eeeedd'),
        mostSaturatedColor: Color.fromHex('#110011'),
        mostGroupedColor: Color.fromHex('#222244'),
    },
} satisfies IImageColorStats;
