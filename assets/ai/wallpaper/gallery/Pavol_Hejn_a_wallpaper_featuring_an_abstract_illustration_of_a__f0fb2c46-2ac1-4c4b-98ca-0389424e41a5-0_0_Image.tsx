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
import metadata from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_a__f0fb2c46-2ac1-4c4b-98ca-0389424e41a5-0_0.json';
import source from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_a__f0fb2c46-2ac1-4c4b-98ca-0389424e41a5-0_0.png';

/**
 * Image of A wallpaper featuring an abstract illustration of a dark and ominous machine, with glowing red lights and mechanical parts.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingAnAbstractIllustrationOfAF0fb2c462ac14c4b98ca0389424e41a50_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper featuring an abstract illustration of a dark and ominous machine, with glowing red lights and mechanical parts."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperFeaturingAnAbstractIllustrationOfAF0fb2c462ac14c4b98ca0389424e41a50_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingAnAbstractIllustrationOfAF0fb2c462ac14c4b98ca0389424e41a50_0_Image.colorStats = {
    averageColor: Color.fromHex('#3e0e11'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#ee0000'), Color.fromHex('#eeffff')],
    minmaxGreen: [Color.fromHex('#557777'), Color.fromHex('#ee0011')],
    minmaxBlue: [Color.fromHex('#335577'), Color.fromHex('#ffff99')],
    mostFrequentColor: Color.fromHex('#222222'),
    mostSaturatedColor: Color.fromHex('#001111'),
    mostGroupedColor: Color.fromHex('#110000'),
    bottom: {
        averageColor: Color.fromHex('#350306'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#ee0000'), Color.fromHex('#eeffff')],
        minmaxGreen: [Color.fromHex('#887766'), Color.fromHex('#ee0011')],
        minmaxBlue: [Color.fromHex('#555577'), Color.fromHex('#ffffdd')],
        mostFrequentColor: Color.fromHex('#222222'),
        mostSaturatedColor: Color.fromHex('#220000'),
        mostGroupedColor: Color.fromHex('#110000'),
    },
} satisfies IImageColorStats;
