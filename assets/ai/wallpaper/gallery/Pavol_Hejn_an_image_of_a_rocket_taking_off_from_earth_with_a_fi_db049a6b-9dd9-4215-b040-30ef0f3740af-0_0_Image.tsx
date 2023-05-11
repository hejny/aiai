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
import metadata from './Pavol_Hejn_an_image_of_a_rocket_taking_off_from_earth_with_a_fi_db049a6b-9dd9-4215-b040-30ef0f3740af-0_0.json';
import source from './Pavol_Hejn_an_image_of_a_rocket_taking_off_from_earth_with_a_fi_db049a6b-9dd9-4215-b040-30ef0f3740af-0_0.png';

/**
 * Image of An image of a rocket taking off from Earth, with a fiery trail leading into the clouds.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AnImageOfARocketTakingOffFromEarthWithAFiDb049a6b9dd94215B04030ef0f3740af0_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An image of a rocket taking off from Earth, with a fiery trail leading into the clouds."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnImageOfARocketTakingOffFromEarthWithAFiDb049a6b9dd94215B04030ef0f3740af0_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnImageOfARocketTakingOffFromEarthWithAFiDb049a6b9dd94215B04030ef0f3740af0_0_Image.colorStats = {
    averageColor: Color.fromHex('#5c453c'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#bb3300'), Color.fromHex('#eeffff')],
    minmaxGreen: [Color.fromHex('#777755'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#444466'), Color.fromHex('#ffff88')],
    mostFrequentColor: Color.fromHex('#110000'),
    mostSaturatedColor: Color.fromHex('#552200'),
    mostGroupedColor: Color.fromHex('#443333'),
    bottom: {
        averageColor: Color.fromHex('#573428'),
        lightestColor: Color.fromHex('#ffeeee'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#bb3300'), Color.fromHex('#ffffee')],
        minmaxGreen: [Color.fromHex('#777755'), Color.fromHex('#ffeeee')],
        minmaxBlue: [Color.fromHex('#444455'), Color.fromHex('#ffffaa')],
        mostFrequentColor: Color.fromHex('#110000'),
        mostSaturatedColor: Color.fromHex('#552200'),
        mostGroupedColor: Color.fromHex('#333333'),
    },
} satisfies IImageColorStats;
