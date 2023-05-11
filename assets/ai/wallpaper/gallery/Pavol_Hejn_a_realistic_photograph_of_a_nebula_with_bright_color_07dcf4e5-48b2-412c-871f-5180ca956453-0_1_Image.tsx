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
import metadata from './Pavol_Hejn_a_realistic_photograph_of_a_nebula_with_bright_color_07dcf4e5-48b2-412c-871f-5180ca956453-0_1.json';
import source from './Pavol_Hejn_a_realistic_photograph_of_a_nebula_with_bright_color_07dcf4e5-48b2-412c-871f-5180ca956453-0_1.png';

/**
 * Image of A realistic photograph of a nebula, with bright colors and intricate details that showcase the beauty of the universe.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function ARealisticPhotographOfANebulaWithBrightColor07dcf4e548b2412c871f5180ca9564530_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A realistic photograph of a nebula, with bright colors and intricate details that showcase the beauty of the universe."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ARealisticPhotographOfANebulaWithBrightColor07dcf4e548b2412c871f5180ca9564530_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ARealisticPhotographOfANebulaWithBrightColor07dcf4e548b2412c871f5180ca9564530_1_Image.colorStats = {
    averageColor: Color.fromHex('#4b4758'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#cc2211'), Color.fromHex('#aaffff')],
    minmaxGreen: [Color.fromHex('#449988'), Color.fromHex('#ffddff')],
    minmaxBlue: [Color.fromHex('#224488'), Color.fromHex('#ffee77')],
    mostFrequentColor: Color.fromHex('#111122'),
    mostSaturatedColor: Color.fromHex('#000022'),
    mostGroupedColor: Color.fromHex('#111122'),
    bottom: {
        averageColor: Color.fromHex('#3d2838'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#cc2211'), Color.fromHex('#eeffff')],
        minmaxGreen: [Color.fromHex('#559988'), Color.fromHex('#ffffff')],
        minmaxBlue: [Color.fromHex('#224477'), Color.fromHex('#ffee88')],
        mostFrequentColor: Color.fromHex('#111122'),
        mostSaturatedColor: Color.fromHex('#110011'),
        mostGroupedColor: Color.fromHex('#110022'),
    },
} satisfies IImageColorStats;
