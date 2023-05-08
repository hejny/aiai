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
import metadata from './Pavol_Hejn_a_digital_landscape_with_geometric_shapes_and_neon_c_e41c5a45-70e4-41aa-be2c-290f518aa5f7-0_1.json';
import source from './Pavol_Hejn_a_digital_landscape_with_geometric_shapes_and_neon_c_e41c5a45-70e4-41aa-be2c-290f518aa5f7-0_1.png';

/**
 * Image of A digital landscape with geometric shapes and neon colors
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function ADigitalLandscapeWithGeometricShapesAndNeonCE41c5a4570e441aaBe2c290f518aa5f70_1_Image(
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

ADigitalLandscapeWithGeometricShapesAndNeonCE41c5a4570e441aaBe2c290f518aa5f70_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ADigitalLandscapeWithGeometricShapesAndNeonCE41c5a4570e441aaBe2c290f518aa5f70_1_Image.colorStats = {
    averageColor: Color.fromHex('#392650'),
    lightestColor: Color.fromHex('#ee77ee'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ccbbdd'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#dd1122'), Color.fromHex('#00ddee')],
    minmaxGreen: [Color.fromHex('#118888'), Color.fromHex('#ff00cc')],
    minmaxBlue: [Color.fromHex('#3300dd'), Color.fromHex('#ffbb88')],
    mostFrequentColor: Color.fromHex('#000011'),
    mostSaturatedColor: Color.fromHex('#000011'),
    mostGroupedColor: Color.fromHex('#110011'),
    bottom: {
        averageColor: Color.fromHex('#260c34'),
        lightestColor: Color.fromHex('#ee00dd'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#cc5599'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#cc0022'), Color.fromHex('#0088aa')],
        minmaxGreen: [Color.fromHex('#119999'), Color.fromHex('#ff00cc')],
        minmaxBlue: [Color.fromHex('#3300dd'), Color.fromHex('#dd2222')],
        mostFrequentColor: Color.fromHex('#000011'),
        mostSaturatedColor: Color.fromHex('#110011'),
        mostGroupedColor: Color.fromHex('#110011'),
    },
} satisfies IImageColorStats;
