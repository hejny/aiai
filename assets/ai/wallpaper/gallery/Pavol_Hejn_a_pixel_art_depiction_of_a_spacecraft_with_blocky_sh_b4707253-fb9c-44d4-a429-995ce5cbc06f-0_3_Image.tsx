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
import metadata from './Pavol_Hejn_a_pixel_art_depiction_of_a_spacecraft_with_blocky_sh_b4707253-fb9c-44d4-a429-995ce5cbc06f-0_3.json';
import source from './Pavol_Hejn_a_pixel_art_depiction_of_a_spacecraft_with_blocky_sh_b4707253-fb9c-44d4-a429-995ce5cbc06f-0_3.png';

/**
 * Image of A pixel art depiction of a spacecraft, with blocky shapes and limited colors creating a nostalgic and playful feel.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function APixelArtDepictionOfASpacecraftWithBlockyShB4707253Fb9c44d4A429995ce5cbc06f0_3_Image(
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

APixelArtDepictionOfASpacecraftWithBlockyShB4707253Fb9c44d4A429995ce5cbc06f0_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APixelArtDepictionOfASpacecraftWithBlockyShB4707253Fb9c44d4A429995ce5cbc06f0_3_Image.colorStats = {
    averageColor: Color.fromHex('#28242e'),
    lightestColor: Color.fromHex('#eeeeee'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#eeffee'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#882211'), Color.fromHex('#eeffee')],
    minmaxGreen: [Color.fromHex('#668866'), Color.fromHex('#eeeeee')],
    minmaxBlue: [Color.fromHex('#224466'), Color.fromHex('#eeffee')],
    mostFrequentColor: Color.fromHex('#111122'),
    mostSaturatedColor: Color.fromHex('#221100'),
    mostGroupedColor: Color.fromHex('#111122'),
    bottom: {
        averageColor: Color.fromHex('#1c1927'),
        lightestColor: Color.fromHex('#bbbb99'),
        darkestColor: Color.fromHex('#110000'),
        minmaxWhite: [Color.fromHex('#bbbb99'), Color.fromHex('#110000')],
        minmaxRed: [Color.fromHex('#aa5533'), Color.fromHex('#559988')],
        minmaxGreen: [Color.fromHex('#559988'), Color.fromHex('#110000')],
        minmaxBlue: [Color.fromHex('#334455'), Color.fromHex('#cc9966')],
        mostFrequentColor: Color.fromHex('#111122'),
        mostSaturatedColor: Color.fromHex('#110000'),
        mostGroupedColor: Color.fromHex('#111122'),
    },
} satisfies IImageColorStats;
