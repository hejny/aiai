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
import metadata from './Pavol_Hejn_an_abstract_image_of_a_spaceship_approaching_a_wormh_fe4d0d0a-e0fc-4ebc-b8f0-13fbc5ce69b5-0_3.json';
import source from './Pavol_Hejn_an_abstract_image_of_a_spaceship_approaching_a_wormh_fe4d0d0a-e0fc-4ebc-b8f0-13fbc5ce69b5-0_3.png';

/**
 * Image of An abstract image of a spaceship approaching a wormhole, with bright colors and distorted shapes.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AnAbstractImageOfASpaceshipApproachingAWormhFe4d0d0aE0fc4ebcB8f013fbc5ce69b50_3_Image(
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

AnAbstractImageOfASpaceshipApproachingAWormhFe4d0d0aE0fc4ebcB8f013fbc5ce69b50_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractImageOfASpaceshipApproachingAWormhFe4d0d0aE0fc4ebcB8f013fbc5ce69b50_3_Image.colorStats = {
    averageColor: Color.fromHex('#261f24'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#dd1122'), Color.fromHex('#33ddee')],
    minmaxGreen: [Color.fromHex('#119988'), Color.fromHex('#dd1122')],
    minmaxBlue: [Color.fromHex('#1111aa'), Color.fromHex('#ffcc22')],
    mostFrequentColor: Color.fromHex('#552211'),
    mostSaturatedColor: Color.fromHex('#111100'),
    mostGroupedColor: Color.fromHex('#000000'),
    bottom: {
        averageColor: Color.fromHex('#1a171e'),
        lightestColor: Color.fromHex('#ddeeee'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ddeeee'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#dd3322'), Color.fromHex('#ddeeee')],
        minmaxGreen: [Color.fromHex('#446644'), Color.fromHex('#cc3388')],
        minmaxBlue: [Color.fromHex('#0055bb'), Color.fromHex('#ffbb11')],
        mostFrequentColor: Color.fromHex('#552211'),
        mostSaturatedColor: Color.fromHex('#000011'),
        mostGroupedColor: Color.fromHex('#000000'),
    },
} satisfies IImageColorStats;
