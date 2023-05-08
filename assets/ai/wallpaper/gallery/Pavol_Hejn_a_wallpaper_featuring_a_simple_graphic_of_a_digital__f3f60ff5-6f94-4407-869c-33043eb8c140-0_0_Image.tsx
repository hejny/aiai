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
import metadata from './Pavol_Hejn_a_wallpaper_featuring_a_simple_graphic_of_a_digital__f3f60ff5-6f94-4407-869c-33043eb8c140-0_0.json';
import source from './Pavol_Hejn_a_wallpaper_featuring_a_simple_graphic_of_a_digital__f3f60ff5-6f94-4407-869c-33043eb8c140-0_0.png';

/**
 * Image of A wallpaper featuring a simple graphic of a digital clock or timer, with space for setting alarms and countdowns, set against a gradient background.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingASimpleGraphicOfADigitalF3f60ff56f944407869c33043eb8c1400_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper featuring a simple graphic of a digital clock or timer, with space for setting alarms and countdowns, set against a gradient background."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperFeaturingASimpleGraphicOfADigitalF3f60ff56f944407869c33043eb8c1400_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingASimpleGraphicOfADigitalF3f60ff56f944407869c33043eb8c1400_0_Image.colorStats = {
    averageColor: Color.fromHex('#72245d'),
    lightestColor: Color.fromHex('#ff44ff'),
    darkestColor: Color.fromHex('#000011'),
    minmaxWhite: [Color.fromHex('#ddaaee'), Color.fromHex('#000011')],
    minmaxRed: [Color.fromHex('#ee3344'), Color.fromHex('#aacccc')],
    minmaxGreen: [Color.fromHex('#448888'), Color.fromHex('#ff33ff')],
    minmaxBlue: [Color.fromHex('#4444dd'), Color.fromHex('#ff6644')],
    mostFrequentColor: Color.fromHex('#771166'),
    mostSaturatedColor: Color.fromHex('#550033'),
    mostGroupedColor: Color.fromHex('#110033'),
    bottom: {
        averageColor: Color.fromHex('#550f3d'),
        lightestColor: Color.fromHex('#cc77cc'),
        darkestColor: Color.fromHex('#000011'),
        minmaxWhite: [Color.fromHex('#cc77cc'), Color.fromHex('#000011')],
        minmaxRed: [Color.fromHex('#cc2244'), Color.fromHex('#000022')],
        minmaxGreen: [Color.fromHex('#444466'), Color.fromHex('#dd2255')],
        minmaxBlue: [Color.fromHex('#334477'), Color.fromHex('#ff6644')],
        mostFrequentColor: Color.fromHex('#771166'),
        mostSaturatedColor: Color.fromHex('#660044'),
        mostGroupedColor: Color.fromHex('#110033'),
    },
} satisfies IImageColorStats;
