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
import metadata from './Pavol_Hejn_an_abstract_image_of_a_spaceship_approaching_a_wormh_90a075e6-6c1d-4790-8ecc-f710b78fabd3-0_0.json';
import source from './Pavol_Hejn_an_abstract_image_of_a_spaceship_approaching_a_wormh_90a075e6-6c1d-4790-8ecc-f710b78fabd3-0_0.png';

/**
 * Image of An abstract image of a spaceship approaching a wormhole, with bright colors and distorted shapes.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AnAbstractImageOfASpaceshipApproachingAWormh90a075e66c1d47908eccF710b78fabd30_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An abstract image of a spaceship approaching a wormhole, with bright colors and distorted shapes."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnAbstractImageOfASpaceshipApproachingAWormh90a075e66c1d47908eccF710b78fabd30_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractImageOfASpaceshipApproachingAWormh90a075e66c1d47908eccF710b78fabd30_0_Image.colorStats = {
    averageColor: Color.fromHex('#4d4d55'),
    lightestColor: Color.fromHex('#eeffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#cc2233'), Color.fromHex('#33eeee')],
    minmaxGreen: [Color.fromHex('#669955'), Color.fromHex('#bb1133')],
    minmaxBlue: [Color.fromHex('#2233aa'), Color.fromHex('#ffffbb')],
    mostFrequentColor: Color.fromHex('#002255'),
    mostSaturatedColor: Color.fromHex('#002233'),
    mostGroupedColor: Color.fromHex('#001133'),
    bottom: {
        averageColor: Color.fromHex('#3c505e'),
        lightestColor: Color.fromHex('#eeddcc'),
        darkestColor: Color.fromHex('#220000'),
        minmaxWhite: [Color.fromHex('#eeeecc'), Color.fromHex('#000022')],
        minmaxRed: [Color.fromHex('#bb3322'), Color.fromHex('#33cccc')],
        minmaxGreen: [Color.fromHex('#669955'), Color.fromHex('#881133')],
        minmaxBlue: [Color.fromHex('#115599'), Color.fromHex('#ffffbb')],
        mostFrequentColor: Color.fromHex('#002255'),
        mostSaturatedColor: Color.fromHex('#001133'),
        mostGroupedColor: Color.fromHex('#001133'),
    },
} satisfies IImageColorStats;
