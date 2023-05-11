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
import metadata from './Pavol_Hejn_a_retro_poster_style_image_of_a_spaceship_in_orbit_a_ffd0e6d9-3ba7-44bf-8ea6-83545bd6a211-0_3.json';
import source from './Pavol_Hejn_a_retro_poster_style_image_of_a_spaceship_in_orbit_a_ffd0e6d9-3ba7-44bf-8ea6-83545bd6a211-0_3.png';

/**
 * Image of A retro poster-style image of a spaceship in orbit around Earth, with bold colors and typography.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function ARetroPosterStyleImageOfASpaceshipInOrbitAFfd0e6d93ba744bf8ea683545bd6a2110_3_Image(
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

ARetroPosterStyleImageOfASpaceshipInOrbitAFfd0e6d93ba744bf8ea683545bd6a2110_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ARetroPosterStyleImageOfASpaceshipInOrbitAFfd0e6d93ba744bf8ea683545bd6a2110_3_Image.colorStats = {
    averageColor: Color.fromHex('#79745a'),
    lightestColor: Color.fromHex('#ffffee'),
    darkestColor: Color.fromHex('#001100'),
    minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#000011')],
    minmaxRed: [Color.fromHex('#dd1111'), Color.fromHex('#ffffee')],
    minmaxGreen: [Color.fromHex('#55aa77'), Color.fromHex('#dd1111')],
    minmaxBlue: [Color.fromHex('#115577'), Color.fromHex('#ffff99')],
    mostFrequentColor: Color.fromHex('#224455'),
    mostSaturatedColor: Color.fromHex('#bb2200'),
    mostGroupedColor: Color.fromHex('#225555'),
    bottom: {
        averageColor: Color.fromHex('#7d7a5d'),
        lightestColor: Color.fromHex('#dddddd'),
        darkestColor: Color.fromHex('#111100'),
        minmaxWhite: [Color.fromHex('#ffffcc'), Color.fromHex('#001111')],
        minmaxRed: [Color.fromHex('#dd1111'), Color.fromHex('#ffffcc')],
        minmaxGreen: [Color.fromHex('#55aa77'), Color.fromHex('#dd1111')],
        minmaxBlue: [Color.fromHex('#115577'), Color.fromHex('#ffffaa')],
        mostFrequentColor: Color.fromHex('#224455'),
        mostSaturatedColor: Color.fromHex('#002222'),
        mostGroupedColor: Color.fromHex('#225555'),
    },
} satisfies IImageColorStats;
