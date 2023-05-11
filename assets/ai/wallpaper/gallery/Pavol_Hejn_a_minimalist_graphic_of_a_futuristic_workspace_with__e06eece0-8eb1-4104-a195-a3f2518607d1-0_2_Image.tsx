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
import metadata from './Pavol_Hejn_a_minimalist_graphic_of_a_futuristic_workspace_with__e06eece0-8eb1-4104-a195-a3f2518607d1-0_2.json';
import source from './Pavol_Hejn_a_minimalist_graphic_of_a_futuristic_workspace_with__e06eece0-8eb1-4104-a195-a3f2518607d1-0_2.png';

/**
 * Image of A minimalist graphic of a futuristic workspace, with sleek lines and a modern color scheme.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AMinimalistGraphicOfAFuturisticWorkspaceWithE06eece08eb14104A195A3f2518607d10_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A minimalist graphic of a futuristic workspace, with sleek lines and a modern color scheme."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AMinimalistGraphicOfAFuturisticWorkspaceWithE06eece08eb14104A195A3f2518607d10_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AMinimalistGraphicOfAFuturisticWorkspaceWithE06eece08eb14104A195A3f2518607d10_2_Image.colorStats = {
    averageColor: Color.fromHex('#d2c5c5'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#001122'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#001122')],
    minmaxRed: [Color.fromHex('#dd4422'), Color.fromHex('#eeffff')],
    minmaxGreen: [Color.fromHex('#337766'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#224488'), Color.fromHex('#ffffee')],
    mostFrequentColor: Color.fromHex('#dddddd'),
    mostSaturatedColor: Color.fromHex('#001122'),
    mostGroupedColor: Color.fromHex('#dddddd'),
    bottom: {
        averageColor: Color.fromHex('#c0bfc4'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#112233'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#111133')],
        minmaxRed: [Color.fromHex('#dd6655'), Color.fromHex('#eeffff')],
        minmaxGreen: [Color.fromHex('#337766'), Color.fromHex('#ffeeff')],
        minmaxBlue: [Color.fromHex('#444477'), Color.fromHex('#ffffee')],
        mostFrequentColor: Color.fromHex('#dddddd'),
        mostSaturatedColor: Color.fromHex('#115566'),
        mostGroupedColor: Color.fromHex('#dddddd'),
    },
} satisfies IImageColorStats;
