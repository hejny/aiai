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
import metadata from './Pavol_Hejn_a_digital_painting_of_a_lone_astronaut_standing_on_t_69842870-221f-433d-913f-c22c3eff2856-0_2.json';
import source from './Pavol_Hejn_a_digital_painting_of_a_lone_astronaut_standing_on_t_69842870-221f-433d-913f-c22c3eff2856-0_2.png';

/**
 * Image of A digital painting of a lone astronaut standing on the edge of a crater, gazing out at the endless expanse of space.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ADigitalPaintingOfALoneAstronautStandingOnT69842870221f433d913fC22c3eff28560_2_Image(
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

ADigitalPaintingOfALoneAstronautStandingOnT69842870221f433d913fC22c3eff28560_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ADigitalPaintingOfALoneAstronautStandingOnT69842870221f433d913fC22c3eff28560_2_Image.colorStats = {
    averageColor: Color.fromHex('#675d57'),
    lightestColor: Color.fromHex('#dddddd'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffeecc'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#883311'), Color.fromHex('#ffeecc')],
    minmaxGreen: [Color.fromHex('#779988'), Color.fromHex('#ffddcc')],
    minmaxBlue: [Color.fromHex('#445566'), Color.fromHex('#ffeebb')],
    mostFrequentColor: Color.fromHex('#110000'),
    mostSaturatedColor: Color.fromHex('#111100'),
    mostGroupedColor: Color.fromHex('#111111'),
    bottom: {
        averageColor: Color.fromHex('#54423b'),
        lightestColor: Color.fromHex('#bbbbaa'),
        darkestColor: Color.fromHex('#111100'),
        minmaxWhite: [Color.fromHex('#eecc99'), Color.fromHex('#110000')],
        minmaxRed: [Color.fromHex('#aa5533'), Color.fromHex('#eecc99')],
        minmaxGreen: [Color.fromHex('#777766'), Color.fromHex('#110011')],
        minmaxBlue: [Color.fromHex('#555566'), Color.fromHex('#eecc99')],
        mostFrequentColor: Color.fromHex('#110000'),
        mostSaturatedColor: Color.fromHex('#221100'),
        mostGroupedColor: Color.fromHex('#111111'),
    },
} satisfies IImageColorStats;
