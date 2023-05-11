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
import metadata from './Pavol_Hejn_a_digital_painting_of_a_spaceship_approaching_an_ali_3bdbef82-2e14-4555-8cc9-71adbdb25974-0_3.json';
import source from './Pavol_Hejn_a_digital_painting_of_a_spaceship_approaching_an_ali_3bdbef82-2e14-4555-8cc9-71adbdb25974-0_3.png';

/**
 * Image of A digital painting of a spaceship approaching an alien planet, with unusual flora and fauna visible on the surface.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function ADigitalPaintingOfASpaceshipApproachingAnAlibdbef822e1445558cc971adbdb2597403_3_Image(
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

ADigitalPaintingOfASpaceshipApproachingAnAlibdbef822e1445558cc971adbdb2597403_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ADigitalPaintingOfASpaceshipApproachingAnAlibdbef822e1445558cc971adbdb2597403_3_Image.colorStats = {
    averageColor: Color.fromHex('#435d57'),
    lightestColor: Color.fromHex('#ffccff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#884400'), Color.fromHex('#88ffee')],
    minmaxGreen: [Color.fromHex('#33aa77'), Color.fromHex('#ffccff')],
    minmaxBlue: [Color.fromHex('#443388'), Color.fromHex('#ffee66')],
    mostFrequentColor: Color.fromHex('#000000'),
    mostSaturatedColor: Color.fromHex('#001111'),
    mostGroupedColor: Color.fromHex('#88ffdd'),
    bottom: {
        averageColor: Color.fromHex('#404434'),
        lightestColor: Color.fromHex('#ccbbee'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ddccdd'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#884400'), Color.fromHex('#99ffdd')],
        minmaxGreen: [Color.fromHex('#339966'), Color.fromHex('#dd99dd')],
        minmaxBlue: [Color.fromHex('#443388'), Color.fromHex('#ffee66')],
        mostFrequentColor: Color.fromHex('#000000'),
        mostSaturatedColor: Color.fromHex('#001122'),
        mostGroupedColor: Color.fromHex('#001111'),
    },
} satisfies IImageColorStats;
