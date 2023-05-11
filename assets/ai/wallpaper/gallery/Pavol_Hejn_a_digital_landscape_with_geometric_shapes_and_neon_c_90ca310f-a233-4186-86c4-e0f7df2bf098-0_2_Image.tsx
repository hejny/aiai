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
import metadata from './Pavol_Hejn_a_digital_landscape_with_geometric_shapes_and_neon_c_90ca310f-a233-4186-86c4-e0f7df2bf098-0_2.json';
import source from './Pavol_Hejn_a_digital_landscape_with_geometric_shapes_and_neon_c_90ca310f-a233-4186-86c4-e0f7df2bf098-0_2.png';

/**
 * Image of A digital landscape with geometric shapes and neon colors
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ADigitalLandscapeWithGeometricShapesAndNeonC90ca310fA233418686c4E0f7df2bf0980_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A digital landscape with geometric shapes and neon colors"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ADigitalLandscapeWithGeometricShapesAndNeonC90ca310fA233418686c4E0f7df2bf0980_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ADigitalLandscapeWithGeometricShapesAndNeonC90ca310fA233418686c4E0f7df2bf0980_2_Image.colorStats = {
    averageColor: Color.fromHex('#47305a'),
    lightestColor: Color.fromHex('#ff55ff'),
    darkestColor: Color.fromHex('#001111'),
    minmaxWhite: [Color.fromHex('#ffbbbb'), Color.fromHex('#000022')],
    minmaxRed: [Color.fromHex('#ee1144'), Color.fromHex('#11ffee')],
    minmaxGreen: [Color.fromHex('#22bb66'), Color.fromHex('#ee33ee')],
    minmaxBlue: [Color.fromHex('#4433cc'), Color.fromHex('#ffee33')],
    mostFrequentColor: Color.fromHex('#000022'),
    mostSaturatedColor: Color.fromHex('#001133'),
    mostGroupedColor: Color.fromHex('#000033'),
    bottom: {
        averageColor: Color.fromHex('#322052'),
        lightestColor: Color.fromHex('#ff55ff'),
        darkestColor: Color.fromHex('#001111'),
        minmaxWhite: [Color.fromHex('#ffbbbb'), Color.fromHex('#000022')],
        minmaxRed: [Color.fromHex('#ee1144'), Color.fromHex('#55ddff')],
        minmaxGreen: [Color.fromHex('#227755'), Color.fromHex('#ee33ee')],
        minmaxBlue: [Color.fromHex('#4433cc'), Color.fromHex('#ffdd55')],
        mostFrequentColor: Color.fromHex('#000022'),
        mostSaturatedColor: Color.fromHex('#006688'),
        mostGroupedColor: Color.fromHex('#000033'),
    },
} satisfies IImageColorStats;
