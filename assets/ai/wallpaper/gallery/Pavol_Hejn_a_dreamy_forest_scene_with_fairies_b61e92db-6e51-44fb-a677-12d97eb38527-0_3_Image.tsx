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
import metadata from './Pavol_Hejn_a_dreamy_forest_scene_with_fairies_b61e92db-6e51-44fb-a677-12d97eb38527-0_3.json';
import source from './Pavol_Hejn_a_dreamy_forest_scene_with_fairies_b61e92db-6e51-44fb-a677-12d97eb38527-0_3.png';

/**
 * Image of A dreamy forest scene with fairies
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function ADreamyForestSceneWithFairiesB61e92db6e5144fbA67712d97eb385270_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A dreamy forest scene with fairies"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ADreamyForestSceneWithFairiesB61e92db6e5144fbA67712d97eb385270_3_Image.metadata = metadata satisfies IWallpaperMetadata;
ADreamyForestSceneWithFairiesB61e92db6e5144fbA67712d97eb385270_3_Image.colorStats = {
    averageColor: Color.fromHex('#433e31'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#001100'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#bb5500'), Color.fromHex('#eeffff')],
    minmaxGreen: [Color.fromHex('#667744'), Color.fromHex('#ffffff')],
    minmaxBlue: [Color.fromHex('#113388'), Color.fromHex('#ffffbb')],
    mostFrequentColor: Color.fromHex('#222211'),
    mostSaturatedColor: Color.fromHex('#001111'),
    mostGroupedColor: Color.fromHex('#111111'),
    bottom: {
        averageColor: Color.fromHex('#27241a'),
        lightestColor: Color.fromHex('#ffffee'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#884411'), Color.fromHex('#ffffee')],
        minmaxGreen: [Color.fromHex('#888844'), Color.fromHex('#ffffee')],
        minmaxBlue: [Color.fromHex('#445588'), Color.fromHex('#ffffbb')],
        mostFrequentColor: Color.fromHex('#222211'),
        mostSaturatedColor: Color.fromHex('#001111'),
        mostGroupedColor: Color.fromHex('#111111'),
    },
} satisfies IImageColorStats;
