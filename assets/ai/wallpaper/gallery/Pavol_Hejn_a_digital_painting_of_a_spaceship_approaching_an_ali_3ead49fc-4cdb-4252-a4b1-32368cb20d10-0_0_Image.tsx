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
import metadata from './Pavol_Hejn_a_digital_painting_of_a_spaceship_approaching_an_ali_3ead49fc-4cdb-4252-a4b1-32368cb20d10-0_0.json';
import source from './Pavol_Hejn_a_digital_painting_of_a_spaceship_approaching_an_ali_3ead49fc-4cdb-4252-a4b1-32368cb20d10-0_0.png';

/**
 * Image of A digital painting of a spaceship approaching an alien planet, with unusual flora and fauna visible on the surface.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function ADigitalPaintingOfASpaceshipApproachingAnAli3ead49fc4cdb4252A4b132368cb20d100_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A digital painting of a spaceship approaching an alien planet, with unusual flora and fauna visible on the surface."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ADigitalPaintingOfASpaceshipApproachingAnAli3ead49fc4cdb4252A4b132368cb20d100_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ADigitalPaintingOfASpaceshipApproachingAnAli3ead49fc4cdb4252A4b132368cb20d100_0_Image.colorStats = {
    averageColor: Color.fromHex('#35453f'),
    lightestColor: Color.fromHex('#ffeeee'),
    darkestColor: Color.fromHex('#001100'),
    minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#bb4411'), Color.fromHex('#77eeee')],
    minmaxGreen: [Color.fromHex('#66aa77'), Color.fromHex('#ffeeee')],
    minmaxBlue: [Color.fromHex('#334477'), Color.fromHex('#ffffee')],
    mostFrequentColor: Color.fromHex('#001111'),
    mostSaturatedColor: Color.fromHex('#000011'),
    mostGroupedColor: Color.fromHex('#114444'),
    bottom: {
        averageColor: Color.fromHex('#3d372c'),
        lightestColor: Color.fromHex('#eeeeee'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#eeeeee'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#bb4411'), Color.fromHex('#eeeeee')],
        minmaxGreen: [Color.fromHex('#337744'), Color.fromHex('#eeeeee')],
        minmaxBlue: [Color.fromHex('#334477'), Color.fromHex('#ffee88')],
        mostFrequentColor: Color.fromHex('#001111'),
        mostSaturatedColor: Color.fromHex('#001111'),
        mostGroupedColor: Color.fromHex('#110011'),
    },
} satisfies IImageColorStats;
