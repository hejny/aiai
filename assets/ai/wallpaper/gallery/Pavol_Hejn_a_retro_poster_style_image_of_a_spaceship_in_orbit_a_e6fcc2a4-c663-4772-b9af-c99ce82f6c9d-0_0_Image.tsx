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
import metadata from './Pavol_Hejn_a_retro_poster_style_image_of_a_spaceship_in_orbit_a_e6fcc2a4-c663-4772-b9af-c99ce82f6c9d-0_0.json';
import source from './Pavol_Hejn_a_retro_poster_style_image_of_a_spaceship_in_orbit_a_e6fcc2a4-c663-4772-b9af-c99ce82f6c9d-0_0.png';

/**
 * Image of A retro poster-style image of a spaceship in orbit around Earth, with bold colors and typography.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function ARetroPosterStyleImageOfASpaceshipInOrbitAE6fcc2a4C6634772B9afC99ce82f6c9d0_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A retro poster-style image of a spaceship in orbit around Earth, with bold colors and typography."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ARetroPosterStyleImageOfASpaceshipInOrbitAE6fcc2a4C6634772B9afC99ce82f6c9d0_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ARetroPosterStyleImageOfASpaceshipInOrbitAE6fcc2a4C6634772B9afC99ce82f6c9d0_0_Image.colorStats = {
    averageColor: Color.fromHex('#353f4b'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#aa2233'), Color.fromHex('#eeffff')],
    minmaxGreen: [Color.fromHex('#448866'), Color.fromHex('#ffffff')],
    minmaxBlue: [Color.fromHex('#114499'), Color.fromHex('#ffffbb')],
    mostFrequentColor: Color.fromHex('#224455'),
    mostSaturatedColor: Color.fromHex('#002233'),
    mostGroupedColor: Color.fromHex('#224455'),
    bottom: {
        averageColor: Color.fromHex('#36434d'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#dd5533'), Color.fromHex('#ffffff')],
        minmaxGreen: [Color.fromHex('#448866'), Color.fromHex('#ffffff')],
        minmaxBlue: [Color.fromHex('#224466'), Color.fromHex('#ffffcc')],
        mostFrequentColor: Color.fromHex('#224455'),
        mostSaturatedColor: Color.fromHex('#001133'),
        mostGroupedColor: Color.fromHex('#224455'),
    },
} satisfies IImageColorStats;
