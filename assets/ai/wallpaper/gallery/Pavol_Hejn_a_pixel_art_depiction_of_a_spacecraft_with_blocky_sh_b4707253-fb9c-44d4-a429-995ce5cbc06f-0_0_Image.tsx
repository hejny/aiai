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
import metadata from './Pavol_Hejn_a_pixel_art_depiction_of_a_spacecraft_with_blocky_sh_b4707253-fb9c-44d4-a429-995ce5cbc06f-0_0.json';
import source from './Pavol_Hejn_a_pixel_art_depiction_of_a_spacecraft_with_blocky_sh_b4707253-fb9c-44d4-a429-995ce5cbc06f-0_0.png';

/**
 * Image of A pixel art depiction of a spacecraft, with blocky shapes and limited colors creating a nostalgic and playful feel.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function APixelArtDepictionOfASpacecraftWithBlockyShB4707253Fb9c44d4A429995ce5cbc06f0_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A pixel art depiction of a spacecraft, with blocky shapes and limited colors creating a nostalgic and playful feel."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

APixelArtDepictionOfASpacecraftWithBlockyShB4707253Fb9c44d4A429995ce5cbc06f0_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APixelArtDepictionOfASpacecraftWithBlockyShB4707253Fb9c44d4A429995ce5cbc06f0_0_Image.colorStats = {
    averageColor: Color.fromHex('#271b28'),
    lightestColor: Color.fromHex('#eeffee'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#eeffee'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#cc3333'), Color.fromHex('#11eeff')],
    minmaxGreen: [Color.fromHex('#66bb33'), Color.fromHex('#ff4488')],
    minmaxBlue: [Color.fromHex('#113399'), Color.fromHex('#eeee11')],
    mostFrequentColor: Color.fromHex('#110011'),
    mostSaturatedColor: Color.fromHex('#110011'),
    mostGroupedColor: Color.fromHex('#110011'),
    bottom: {
        averageColor: Color.fromHex('#1f0e1d'),
        lightestColor: Color.fromHex('#ccccdd'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ccccdd'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#cc3333'), Color.fromHex('#22eebb')],
        minmaxGreen: [Color.fromHex('#66bb33'), Color.fromHex('#bb2266')],
        minmaxBlue: [Color.fromHex('#114499'), Color.fromHex('#ddaa00')],
        mostFrequentColor: Color.fromHex('#110011'),
        mostSaturatedColor: Color.fromHex('#110011'),
        mostGroupedColor: Color.fromHex('#110011'),
    },
} satisfies IImageColorStats;
