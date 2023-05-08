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
import metadata from './Pavol_Hejn_a_digital_landscape_with_geometric_shapes_and_neon_c_49190ae3-8e49-4799-a49c-2b29311d1d3d-0_0.json';
import source from './Pavol_Hejn_a_digital_landscape_with_geometric_shapes_and_neon_c_49190ae3-8e49-4799-a49c-2b29311d1d3d-0_0.png';

/**
 * Image of A digital landscape with geometric shapes and neon colors
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function ADigitalLandscapeWithGeometricShapesAndNeonC49190ae38e494799A49c2b29311d1d3d0_0_Image(
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

ADigitalLandscapeWithGeometricShapesAndNeonC49190ae38e494799A49c2b29311d1d3d0_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ADigitalLandscapeWithGeometricShapesAndNeonC49190ae38e494799A49c2b29311d1d3d0_0_Image.colorStats = {
    averageColor: Color.fromHex('#431d41'),
    lightestColor: Color.fromHex('#8811ff'),
    darkestColor: Color.fromHex('#000011'),
    minmaxWhite: [Color.fromHex('#ddffcc'), Color.fromHex('#000011')],
    minmaxRed: [Color.fromHex('#dd2222'), Color.fromHex('#33ccff')],
    minmaxGreen: [Color.fromHex('#339977'), Color.fromHex('#7700ff')],
    minmaxBlue: [Color.fromHex('#7700ff'), Color.fromHex('#ffbb33')],
    mostFrequentColor: Color.fromHex('#000011'),
    mostSaturatedColor: Color.fromHex('#000022'),
    mostGroupedColor: Color.fromHex('#000022'),
    bottom: {
        averageColor: Color.fromHex('#20183b'),
        lightestColor: Color.fromHex('#dd66bb'),
        darkestColor: Color.fromHex('#000011'),
        minmaxWhite: [Color.fromHex('#eeee99'), Color.fromHex('#000011')],
        minmaxRed: [Color.fromHex('#ee3333'), Color.fromHex('#11aacc')],
        minmaxGreen: [Color.fromHex('#33aa88'), Color.fromHex('#ee2277')],
        minmaxBlue: [Color.fromHex('#2244aa'), Color.fromHex('#eeee99')],
        mostFrequentColor: Color.fromHex('#000011'),
        mostSaturatedColor: Color.fromHex('#440044'),
        mostGroupedColor: Color.fromHex('#000022'),
    },
} satisfies IImageColorStats;
