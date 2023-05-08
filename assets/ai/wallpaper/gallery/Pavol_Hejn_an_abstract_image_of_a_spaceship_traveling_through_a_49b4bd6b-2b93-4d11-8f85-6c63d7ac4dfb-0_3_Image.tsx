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
import metadata from './Pavol_Hejn_an_abstract_image_of_a_spaceship_traveling_through_a_49b4bd6b-2b93-4d11-8f85-6c63d7ac4dfb-0_3.json';
import source from './Pavol_Hejn_an_abstract_image_of_a_spaceship_traveling_through_a_49b4bd6b-2b93-4d11-8f85-6c63d7ac4dfb-0_3.png';

/**
 * Image of An abstract image of a spaceship traveling through a wormhole, with bright colors and surreal patterns.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AnAbstractImageOfASpaceshipTravelingThroughA49b4bd6b2b934d118f856c63d7ac4dfb0_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An abstract image of a spaceship traveling through a wormhole, with bright colors and surreal patterns."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnAbstractImageOfASpaceshipTravelingThroughA49b4bd6b2b934d118f856c63d7ac4dfb0_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractImageOfASpaceshipTravelingThroughA49b4bd6b2b934d118f856c63d7ac4dfb0_3_Image.colorStats = {
    averageColor: Color.fromHex('#292322'),
    lightestColor: Color.fromHex('#eeffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#eeffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#ee2211'), Color.fromHex('#44dddd')],
    minmaxGreen: [Color.fromHex('#338855'), Color.fromHex('#ee2211')],
    minmaxBlue: [Color.fromHex('#222266'), Color.fromHex('#ffdd44')],
    mostFrequentColor: Color.fromHex('#001122'),
    mostSaturatedColor: Color.fromHex('#001122'),
    mostGroupedColor: Color.fromHex('#000000'),
    bottom: {
        averageColor: Color.fromHex('#222223'),
        lightestColor: Color.fromHex('#ffddee'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#eeeeee'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#bb3311'), Color.fromHex('#55dddd')],
        minmaxGreen: [Color.fromHex('#339966'), Color.fromHex('#ffddee')],
        minmaxBlue: [Color.fromHex('#223366'), Color.fromHex('#ffcc33')],
        mostFrequentColor: Color.fromHex('#001122'),
        mostSaturatedColor: Color.fromHex('#000011'),
        mostGroupedColor: Color.fromHex('#000000'),
    },
} satisfies IImageColorStats;
