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
import metadata from './Pavol_Hejn_this_is_a_large_field_in_the_style_of_richly_colored_fd48da16-a3c2-4262-bf66-e0ded7fc9f6b-0_2.json';
import source from './Pavol_Hejn_this_is_a_large_field_in_the_style_of_richly_colored_fd48da16-a3c2-4262-bf66-e0ded7fc9f6b-0_2.png';

/**
 * Image of this is a large field, in the style of richly colored skies, light pink and dark green, 32k uhd, kurzgesagt, františek dvořák, romanticized views, hikecore
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ThisIsALargeFieldInTheStyleOfRichlyColoredFd48da16A3c24262Bf66E0ded7fc9f6b0_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="this is a large field, in the style of richly colored skies, light pink and dark green, 32k uhd, kurzgesagt, františek dvořák, romanticized views, hikecore"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ThisIsALargeFieldInTheStyleOfRichlyColoredFd48da16A3c24262Bf66E0ded7fc9f6b0_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ThisIsALargeFieldInTheStyleOfRichlyColoredFd48da16A3c24262Bf66E0ded7fc9f6b0_2_Image.colorStats = {
    averageColor: Color.fromHex('#685a4c'),
    lightestColor: Color.fromHex('#eeccbb'),
    darkestColor: Color.fromHex('#111100'),
    minmaxWhite: [Color.fromHex('#eeccbb'), Color.fromHex('#110000')],
    minmaxRed: [Color.fromHex('#aa5555'), Color.fromHex('#eeccbb')],
    minmaxGreen: [Color.fromHex('#668866'), Color.fromHex('#330011')],
    minmaxBlue: [Color.fromHex('#335555'), Color.fromHex('#eeccaa')],
    mostFrequentColor: Color.fromHex('#222211'),
    mostSaturatedColor: Color.fromHex('#110011'),
    mostGroupedColor: Color.fromHex('#eeccbb'),
    bottom: {
        averageColor: Color.fromHex('#3a3024'),
        lightestColor: Color.fromHex('#bb8888'),
        darkestColor: Color.fromHex('#111100'),
        minmaxWhite: [Color.fromHex('#bb8888'), Color.fromHex('#111100')],
        minmaxRed: [Color.fromHex('#773333'), Color.fromHex('#889988')],
        minmaxGreen: [Color.fromHex('#667755'), Color.fromHex('#551122')],
        minmaxBlue: [Color.fromHex('#553344'), Color.fromHex('#111100')],
        mostFrequentColor: Color.fromHex('#222211'),
        mostSaturatedColor: Color.fromHex('#111100'),
        mostGroupedColor: Color.fromHex('#222211'),
    },
} satisfies IImageColorStats;
