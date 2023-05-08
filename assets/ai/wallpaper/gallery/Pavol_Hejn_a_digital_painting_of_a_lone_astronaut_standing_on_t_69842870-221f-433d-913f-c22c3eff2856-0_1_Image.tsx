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
import metadata from './Pavol_Hejn_a_digital_painting_of_a_lone_astronaut_standing_on_t_69842870-221f-433d-913f-c22c3eff2856-0_1.json';
import source from './Pavol_Hejn_a_digital_painting_of_a_lone_astronaut_standing_on_t_69842870-221f-433d-913f-c22c3eff2856-0_1.png';

/**
 * Image of A digital painting of a lone astronaut standing on the edge of a crater, gazing out at the endless expanse of space.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function ADigitalPaintingOfALoneAstronautStandingOnT69842870221f433d913fC22c3eff28560_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A digital painting of a lone astronaut standing on the edge of a crater, gazing out at the endless expanse of space."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ADigitalPaintingOfALoneAstronautStandingOnT69842870221f433d913fC22c3eff28560_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ADigitalPaintingOfALoneAstronautStandingOnT69842870221f433d913fC22c3eff28560_1_Image.colorStats = {
    averageColor: Color.fromHex('#595657'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#885544'), Color.fromHex('#ffffff')],
    minmaxGreen: [Color.fromHex('#999977'), Color.fromHex('#ffffff')],
    minmaxBlue: [Color.fromHex('#334455'), Color.fromHex('#ffffdd')],
    mostFrequentColor: Color.fromHex('#222233'),
    mostSaturatedColor: Color.fromHex('#110000'),
    mostGroupedColor: Color.fromHex('#000011'),
    bottom: {
        averageColor: Color.fromHex('#232128'),
        lightestColor: Color.fromHex('#bbbbbb'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#bbbbbb'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#996644'), Color.fromHex('#bbbbbb')],
        minmaxGreen: [Color.fromHex('#777755'), Color.fromHex('#110011')],
        minmaxBlue: [Color.fromHex('#555566'), Color.fromHex('#bbbbbb')],
        mostFrequentColor: Color.fromHex('#222233'),
        mostSaturatedColor: Color.fromHex('#110011'),
        mostGroupedColor: Color.fromHex('#000011'),
    },
} satisfies IImageColorStats;
