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
import metadata from './Pavol_Hejn_a_digital_painting_of_a_spaceship_exploring_an_aster_8950dbf7-64f7-49af-a540-b60ce02d8a21-0_3.json';
import source from './Pavol_Hejn_a_digital_painting_of_a_spaceship_exploring_an_aster_8950dbf7-64f7-49af-a540-b60ce02d8a21-0_3.png';

/**
 * Image of A digital painting of a spaceship exploring an asteroid field, with the rocky terrain and dangerous debris creating a sense of adventure and challenge.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function ADigitalPaintingOfASpaceshipExploringAnAster8950dbf764f749afA540B60ce02d8a210_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A digital painting of a spaceship exploring an asteroid field, with the rocky terrain and dangerous debris creating a sense of adventure and challenge."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ADigitalPaintingOfASpaceshipExploringAnAster8950dbf764f749afA540B60ce02d8a210_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ADigitalPaintingOfASpaceshipExploringAnAster8950dbf764f749afA540B60ce02d8a210_3_Image.colorStats = {
    averageColor: Color.fromHex('#292a2f'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#aa2211'), Color.fromHex('#ddffff')],
    minmaxGreen: [Color.fromHex('#aaaa33'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#553388'), Color.fromHex('#ffffbb')],
    mostFrequentColor: Color.fromHex('#000000'),
    mostSaturatedColor: Color.fromHex('#000011'),
    mostGroupedColor: Color.fromHex('#000000'),
    bottom: {
        averageColor: Color.fromHex('#1f1c1f'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#884422'), Color.fromHex('#eeffff')],
        minmaxGreen: [Color.fromHex('#667766'), Color.fromHex('#ffeeff')],
        minmaxBlue: [Color.fromHex('#553388'), Color.fromHex('#ffffbb')],
        mostFrequentColor: Color.fromHex('#000000'),
        mostSaturatedColor: Color.fromHex('#001111'),
        mostGroupedColor: Color.fromHex('#000000'),
    },
} satisfies IImageColorStats;
