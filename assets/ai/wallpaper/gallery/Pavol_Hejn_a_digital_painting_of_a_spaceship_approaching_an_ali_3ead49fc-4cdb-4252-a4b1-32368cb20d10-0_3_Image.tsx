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
import metadata from './Pavol_Hejn_a_digital_painting_of_a_spaceship_approaching_an_ali_3ead49fc-4cdb-4252-a4b1-32368cb20d10-0_3.json';
import source from './Pavol_Hejn_a_digital_painting_of_a_spaceship_approaching_an_ali_3ead49fc-4cdb-4252-a4b1-32368cb20d10-0_3.png';

/**
 * Image of A digital painting of a spaceship approaching an alien planet, with unusual flora and fauna visible on the surface.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function ADigitalPaintingOfASpaceshipApproachingAnAliead49fc4cdb4252A4b132368cb20d1003_3_Image(
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

ADigitalPaintingOfASpaceshipApproachingAnAliead49fc4cdb4252A4b132368cb20d1003_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ADigitalPaintingOfASpaceshipApproachingAnAliead49fc4cdb4252A4b132368cb20d1003_3_Image.colorStats = {
    averageColor: Color.fromHex('#354d53'),
    lightestColor: Color.fromHex('#eeaaff'),
    darkestColor: Color.fromHex('#001100'),
    minmaxWhite: [Color.fromHex('#ddffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#bb5500'), Color.fromHex('#aaffff')],
    minmaxGreen: [Color.fromHex('#779944'), Color.fromHex('#ff5599')],
    minmaxBlue: [Color.fromHex('#6644bb'), Color.fromHex('#ffee99')],
    mostFrequentColor: Color.fromHex('#110011'),
    mostSaturatedColor: Color.fromHex('#001122'),
    mostGroupedColor: Color.fromHex('#223344'),
    bottom: {
        averageColor: Color.fromHex('#32352f'),
        lightestColor: Color.fromHex('#ddeeee'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ddeeee'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#995511'), Color.fromHex('#ddeeee')],
        minmaxGreen: [Color.fromHex('#669966'), Color.fromHex('#cc55bb')],
        minmaxBlue: [Color.fromHex('#5544dd'), Color.fromHex('#eeee77')],
        mostFrequentColor: Color.fromHex('#110011'),
        mostSaturatedColor: Color.fromHex('#223300'),
        mostGroupedColor: Color.fromHex('#111111'),
    },
} satisfies IImageColorStats;
