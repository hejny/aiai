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
import metadata from './Pavol_Hejn_a_digital_painting_of_a_spaceship_approaching_an_ali_3bdbef82-2e14-4555-8cc9-71adbdb25974-0_2.json';
import source from './Pavol_Hejn_a_digital_painting_of_a_spaceship_approaching_an_ali_3bdbef82-2e14-4555-8cc9-71adbdb25974-0_2.png';

/**
 * Image of A digital painting of a spaceship approaching an alien planet, with unusual flora and fauna visible on the surface.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ADigitalPaintingOfASpaceshipApproachingAnAli3bdbef822e1445558cc971adbdb259740_2_Image(
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

ADigitalPaintingOfASpaceshipApproachingAnAli3bdbef822e1445558cc971adbdb259740_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ADigitalPaintingOfASpaceshipApproachingAnAli3bdbef822e1445558cc971adbdb259740_2_Image.colorStats = {
    averageColor: Color.fromHex('#728177'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#001100'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#992244'), Color.fromHex('#33eeee')],
    minmaxGreen: [Color.fromHex('#559944'), Color.fromHex('#ffaaff')],
    minmaxBlue: [Color.fromHex('#225599'), Color.fromHex('#ffff33')],
    mostFrequentColor: Color.fromHex('#111111'),
    mostSaturatedColor: Color.fromHex('#110000'),
    mostGroupedColor: Color.fromHex('#eeffff'),
    bottom: {
        averageColor: Color.fromHex('#5a483b'),
        lightestColor: Color.fromHex('#eeeeff'),
        darkestColor: Color.fromHex('#001100'),
        minmaxWhite: [Color.fromHex('#eeeeff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#992244'), Color.fromHex('#eeeeff')],
        minmaxGreen: [Color.fromHex('#779944'), Color.fromHex('#ff88dd')],
        minmaxBlue: [Color.fromHex('#443366'), Color.fromHex('#ffee22')],
        mostFrequentColor: Color.fromHex('#111111'),
        mostSaturatedColor: Color.fromHex('#110000'),
        mostGroupedColor: Color.fromHex('#111111'),
    },
} satisfies IImageColorStats;
