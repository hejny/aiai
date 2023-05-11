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
import metadata from './Pavol_Hejn_a_poster_style_image_of_a_rocket_taking_off_from_ear_334670bd-c4c5-4513-a278-3e34f6dec00d-0_2.json';
import source from './Pavol_Hejn_a_poster_style_image_of_a_rocket_taking_off_from_ear_334670bd-c4c5-4513-a278-3e34f6dec00d-0_2.png';

/**
 * Image of A poster-style image of a rocket taking off from Earth, with bold typography and a vintage color scheme that adds a touch of nostalgia.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function APosterStyleImageOfARocketTakingOffFromEar334670bdC4c54513A2783e34f6dec00d0_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A poster-style image of a rocket taking off from Earth, with bold typography and a vintage color scheme that adds a touch of nostalgia."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

APosterStyleImageOfARocketTakingOffFromEar334670bdC4c54513A2783e34f6dec00d0_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APosterStyleImageOfARocketTakingOffFromEar334670bdC4c54513A2783e34f6dec00d0_2_Image.colorStats = {
    averageColor: Color.fromHex('#6e6c59'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#ee3311'), Color.fromHex('#ffffff')],
    minmaxGreen: [Color.fromHex('#338866'), Color.fromHex('#ffffff')],
    minmaxBlue: [Color.fromHex('#113355'), Color.fromHex('#ffffaa')],
    mostFrequentColor: Color.fromHex('#eecc99'),
    mostSaturatedColor: Color.fromHex('#441100'),
    mostGroupedColor: Color.fromHex('#446666'),
    bottom: {
        averageColor: Color.fromHex('#857057'),
        lightestColor: Color.fromHex('#eeddbb'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#eeddbb'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#ee3311'), Color.fromHex('#eeeeaa')],
        minmaxGreen: [Color.fromHex('#448866'), Color.fromHex('#ee3311')],
        minmaxBlue: [Color.fromHex('#113355'), Color.fromHex('#ffdd66')],
        mostFrequentColor: Color.fromHex('#eecc99'),
        mostSaturatedColor: Color.fromHex('#441100'),
        mostGroupedColor: Color.fromHex('#eecc88'),
    },
} satisfies IImageColorStats;
