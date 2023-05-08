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
import metadata from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_abstract_sha_2d93eee7-f23a-4bb9-bb52-ce0dc8b9b7d1-0_2.json';
import source from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_abstract_sha_2d93eee7-f23a-4bb9-bb52-ce0dc8b9b7d1-0_2.png';

/**
 * Image of A wallpaper with a repeating pattern of abstract shapes inspired by computer viruses and malware, set against a black background.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithARepeatingPatternOfAbstractShad93eee7F23a4bb9Bb52Ce0dc8b9b7d102_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a repeating pattern of abstract shapes inspired by computer viruses and malware, set against a black background."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperWithARepeatingPatternOfAbstractShad93eee7F23a4bb9Bb52Ce0dc8b9b7d102_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithARepeatingPatternOfAbstractShad93eee7F23a4bb9Bb52Ce0dc8b9b7d102_2_Image.colorStats = {
    averageColor: Color.fromHex('#1c1b19'),
    lightestColor: Color.fromHex('#ffeedd'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffeedd'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#cc4400'), Color.fromHex('#eeeedd')],
    minmaxGreen: [Color.fromHex('#338866'), Color.fromHex('#ffeedd')],
    minmaxBlue: [Color.fromHex('#553366'), Color.fromHex('#ffeecc')],
    mostFrequentColor: Color.fromHex('#111111'),
    mostSaturatedColor: Color.fromHex('#001111'),
    mostGroupedColor: Color.fromHex('#111111'),
    bottom: {
        averageColor: Color.fromHex('#1f1d1a'),
        lightestColor: Color.fromHex('#ccccbb'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffddaa'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#cc4422'), Color.fromHex('#ffddaa')],
        minmaxGreen: [Color.fromHex('#338866'), Color.fromHex('#440000')],
        minmaxBlue: [Color.fromHex('#226677'), Color.fromHex('#ffddaa')],
        mostFrequentColor: Color.fromHex('#111111'),
        mostSaturatedColor: Color.fromHex('#000011'),
        mostGroupedColor: Color.fromHex('#111111'),
    },
} satisfies IImageColorStats;
