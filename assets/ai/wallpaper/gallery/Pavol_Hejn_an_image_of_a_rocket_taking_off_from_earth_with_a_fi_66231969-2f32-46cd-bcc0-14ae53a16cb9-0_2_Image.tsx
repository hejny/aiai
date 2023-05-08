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
import metadata from './Pavol_Hejn_an_image_of_a_rocket_taking_off_from_earth_with_a_fi_66231969-2f32-46cd-bcc0-14ae53a16cb9-0_2.json';
import source from './Pavol_Hejn_an_image_of_a_rocket_taking_off_from_earth_with_a_fi_66231969-2f32-46cd-bcc0-14ae53a16cb9-0_2.png';

/**
 * Image of An image of a rocket taking off from Earth, with a fiery trail leading into the clouds.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AnImageOfARocketTakingOffFromEarthWithAFi662319692f3246cdBcc014ae53a16cb90_2_Image(
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

AnImageOfARocketTakingOffFromEarthWithAFi662319692f3246cdBcc014ae53a16cb90_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnImageOfARocketTakingOffFromEarthWithAFi662319692f3246cdBcc014ae53a16cb90_2_Image.colorStats = {
    averageColor: Color.fromHex('#816458'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#bb3300'), Color.fromHex('#ffffff')],
    minmaxGreen: [Color.fromHex('#889977'), Color.fromHex('#ffffff')],
    minmaxBlue: [Color.fromHex('#334466'), Color.fromHex('#ffffcc')],
    mostFrequentColor: Color.fromHex('#663333'),
    mostSaturatedColor: Color.fromHex('#001133'),
    mostGroupedColor: Color.fromHex('#553333'),
    bottom: {
        averageColor: Color.fromHex('#90533b'),
        lightestColor: Color.fromHex('#ffffdd'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffdd'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#dd4411'), Color.fromHex('#ffffdd')],
        minmaxGreen: [Color.fromHex('#778866'), Color.fromHex('#ffeedd')],
        minmaxBlue: [Color.fromHex('#334455'), Color.fromHex('#ffffcc')],
        mostFrequentColor: Color.fromHex('#663333'),
        mostSaturatedColor: Color.fromHex('#001122'),
        mostGroupedColor: Color.fromHex('#111122'),
    },
} satisfies IImageColorStats;
