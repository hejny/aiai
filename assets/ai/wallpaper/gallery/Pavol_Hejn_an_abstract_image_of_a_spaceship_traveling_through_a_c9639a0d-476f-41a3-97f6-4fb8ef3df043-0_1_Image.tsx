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
import metadata from './Pavol_Hejn_an_abstract_image_of_a_spaceship_traveling_through_a_c9639a0d-476f-41a3-97f6-4fb8ef3df043-0_1.json';
import source from './Pavol_Hejn_an_abstract_image_of_a_spaceship_traveling_through_a_c9639a0d-476f-41a3-97f6-4fb8ef3df043-0_1.png';

/**
 * Image of An abstract image of a spaceship traveling through a wormhole, with bright colors and surreal patterns.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AnAbstractImageOfASpaceshipTravelingThroughAC9639a0d476f41a397f64fb8ef3df0430_1_Image(
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

AnAbstractImageOfASpaceshipTravelingThroughAC9639a0d476f41a397f64fb8ef3df0430_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractImageOfASpaceshipTravelingThroughAC9639a0d476f41a397f64fb8ef3df0430_1_Image.colorStats = {
    averageColor: Color.fromHex('#875b4f'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#dd2211'), Color.fromHex('#ddffff')],
    minmaxGreen: [Color.fromHex('#449966'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#2244aa'), Color.fromHex('#ffee77')],
    mostFrequentColor: Color.fromHex('#9988aa'),
    mostSaturatedColor: Color.fromHex('#001122'),
    mostGroupedColor: Color.fromHex('#111122'),
    bottom: {
        averageColor: Color.fromHex('#95695c'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#ee3311'), Color.fromHex('#ddffff')],
        minmaxGreen: [Color.fromHex('#66aa77'), Color.fromHex('#ffeeff')],
        minmaxBlue: [Color.fromHex('#223399'), Color.fromHex('#ffcc33')],
        mostFrequentColor: Color.fromHex('#9988aa'),
        mostSaturatedColor: Color.fromHex('#001111'),
        mostGroupedColor: Color.fromHex('#111122'),
    },
} satisfies IImageColorStats;
