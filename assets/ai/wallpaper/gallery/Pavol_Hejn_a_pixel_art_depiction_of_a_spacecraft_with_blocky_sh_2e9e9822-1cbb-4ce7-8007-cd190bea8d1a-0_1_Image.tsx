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
import metadata from './Pavol_Hejn_a_pixel_art_depiction_of_a_spacecraft_with_blocky_sh_2e9e9822-1cbb-4ce7-8007-cd190bea8d1a-0_1.json';
import source from './Pavol_Hejn_a_pixel_art_depiction_of_a_spacecraft_with_blocky_sh_2e9e9822-1cbb-4ce7-8007-cd190bea8d1a-0_1.png';

/**
 * Image of A pixel art depiction of a spacecraft, with blocky shapes and limited colors creating a nostalgic and playful feel.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function APixelArtDepictionOfASpacecraftWithBlockySh2e9e98221cbb4ce78007Cd190bea8d1a0_1_Image(
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

APixelArtDepictionOfASpacecraftWithBlockySh2e9e98221cbb4ce78007Cd190bea8d1a0_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APixelArtDepictionOfASpacecraftWithBlockySh2e9e98221cbb4ce78007Cd190bea8d1a0_1_Image.colorStats = {
    averageColor: Color.fromHex('#433050'),
    lightestColor: Color.fromHex('#ffeeff'),
    darkestColor: Color.fromHex('#110011'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000022')],
    minmaxRed: [Color.fromHex('#ee1122'), Color.fromHex('#44ffff')],
    minmaxGreen: [Color.fromHex('#339955'), Color.fromHex('#ee0033')],
    minmaxBlue: [Color.fromHex('#333399'), Color.fromHex('#ffff33')],
    mostFrequentColor: Color.fromHex('#111144'),
    mostSaturatedColor: Color.fromHex('#004455'),
    mostGroupedColor: Color.fromHex('#221144'),
    bottom: {
        averageColor: Color.fromHex('#302b4b'),
        lightestColor: Color.fromHex('#ffeeff'),
        darkestColor: Color.fromHex('#110011'),
        minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#000022')],
        minmaxRed: [Color.fromHex('#dd1133'), Color.fromHex('#44ffff')],
        minmaxGreen: [Color.fromHex('#559966'), Color.fromHex('#dd1155')],
        minmaxBlue: [Color.fromHex('#552288'), Color.fromHex('#ffff33')],
        mostFrequentColor: Color.fromHex('#111144'),
        mostSaturatedColor: Color.fromHex('#004455'),
        mostGroupedColor: Color.fromHex('#222244'),
    },
} satisfies IImageColorStats;
