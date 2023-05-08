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
import metadata from './Pavol_Hejn_a_minimalist_graphic_of_a_futuristic_workspace_with__e06eece0-8eb1-4104-a195-a3f2518607d1-0_3.json';
import source from './Pavol_Hejn_a_minimalist_graphic_of_a_futuristic_workspace_with__e06eece0-8eb1-4104-a195-a3f2518607d1-0_3.png';

/**
 * Image of A minimalist graphic of a futuristic workspace, with sleek lines and a modern color scheme.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AMinimalistGraphicOfAFuturisticWorkspaceWithE06eece08eb14104A195A3f2518607d10_3_Image(
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

AMinimalistGraphicOfAFuturisticWorkspaceWithE06eece08eb14104A195A3f2518607d10_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AMinimalistGraphicOfAFuturisticWorkspaceWithE06eece08eb14104A195A3f2518607d10_3_Image.colorStats = {
    averageColor: Color.fromHex('#7b85aa'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000011'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000011')],
    minmaxRed: [Color.fromHex('#774477'), Color.fromHex('#ddffff')],
    minmaxGreen: [Color.fromHex('#227788'), Color.fromHex('#ffbbff')],
    minmaxBlue: [Color.fromHex('#334499'), Color.fromHex('#ffffff')],
    mostFrequentColor: Color.fromHex('#7788bb'),
    mostSaturatedColor: Color.fromHex('#007799'),
    mostGroupedColor: Color.fromHex('#223355'),
    bottom: {
        averageColor: Color.fromHex('#586891'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#112244'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#112244')],
        minmaxRed: [Color.fromHex('#774477'), Color.fromHex('#eeffff')],
        minmaxGreen: [Color.fromHex('#447788'), Color.fromHex('#ffffff')],
        minmaxBlue: [Color.fromHex('#334499'), Color.fromHex('#ffffff')],
        mostFrequentColor: Color.fromHex('#7788bb'),
        mostSaturatedColor: Color.fromHex('#112255'),
        mostGroupedColor: Color.fromHex('#334477'),
    },
} satisfies IImageColorStats;
