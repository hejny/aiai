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
import metadata from './Pavol_Hejn_a_csg_style_rendering_of_a_spaceship_in_orbit_around_64477679-411f-4d0f-abb2-82e948835eb6-0_2.json';
import source from './Pavol_Hejn_a_csg_style_rendering_of_a_spaceship_in_orbit_around_64477679-411f-4d0f-abb2-82e948835eb6-0_2.png';

/**
 * Image of A csg-style rendering of a spaceship in orbit around a planet, with sharp angles and clean lines that highlight its modern and sleek design.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ACsgStyleRenderingOfASpaceshipInOrbitAround64477679411f4d0fAbb282e948835eb60_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A csg-style rendering of a spaceship in orbit around a planet, with sharp angles and clean lines that highlight its modern and sleek design."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ACsgStyleRenderingOfASpaceshipInOrbitAround64477679411f4d0fAbb282e948835eb60_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ACsgStyleRenderingOfASpaceshipInOrbitAround64477679411f4d0fAbb282e948835eb60_2_Image.colorStats = {
    averageColor: Color.fromHex('#2c3340'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#774422'), Color.fromHex('#eeffff')],
    minmaxGreen: [Color.fromHex('#667777'), Color.fromHex('#ffffff')],
    minmaxBlue: [Color.fromHex('#224477'), Color.fromHex('#ffffee')],
    mostFrequentColor: Color.fromHex('#111122'),
    mostSaturatedColor: Color.fromHex('#000011'),
    mostGroupedColor: Color.fromHex('#000011'),
    bottom: {
        averageColor: Color.fromHex('#232c38'),
        lightestColor: Color.fromHex('#eeeeff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#eeffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#774433'), Color.fromHex('#eeffff')],
        minmaxGreen: [Color.fromHex('#778888'), Color.fromHex('#eeeeff')],
        minmaxBlue: [Color.fromHex('#224477'), Color.fromHex('#eeffff')],
        mostFrequentColor: Color.fromHex('#111122'),
        mostSaturatedColor: Color.fromHex('#000011'),
        mostGroupedColor: Color.fromHex('#111122'),
    },
} satisfies IImageColorStats;
