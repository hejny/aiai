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
import metadata from './Pavol_Hejn_a_photograph_of_an_iceberg_in_the_arctic_with_the_bl_42d0d489-e31f-4ab6-84d9-3e50b2689719-0_3.json';
import source from './Pavol_Hejn_a_photograph_of_an_iceberg_in_the_arctic_with_the_bl_42d0d489-e31f-4ab6-84d9-3e50b2689719-0_3.png';

/**
 * Image of A photograph of an iceberg in the Arctic, with the blue and white colors contrasting against a dark sky.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function APhotographOfAnIcebergInTheArcticWithTheBl42d0d489E31f4ab684d93e50b26897190_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A photograph of an iceberg in the Arctic, with the blue and white colors contrasting against a dark sky."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

APhotographOfAnIcebergInTheArcticWithTheBl42d0d489E31f4ab684d93e50b26897190_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APhotographOfAnIcebergInTheArcticWithTheBl42d0d489E31f4ab684d93e50b26897190_3_Image.colorStats = {
    averageColor: Color.fromHex('#3f6385'),
    lightestColor: Color.fromHex('#ccddff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#eedddd'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#444455'), Color.fromHex('#77eeff')],
    minmaxGreen: [Color.fromHex('#118899'), Color.fromHex('#ccccff')],
    minmaxBlue: [Color.fromHex('#115599'), Color.fromHex('#bbffff')],
    mostFrequentColor: Color.fromHex('#111111'),
    mostSaturatedColor: Color.fromHex('#000022'),
    mostGroupedColor: Color.fromHex('#7799bb'),
    bottom: {
        averageColor: Color.fromHex('#1d405c'),
        lightestColor: Color.fromHex('#bbeeff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#bbffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#444455'), Color.fromHex('#bbffff')],
        minmaxGreen: [Color.fromHex('#118899'), Color.fromHex('#110022')],
        minmaxBlue: [Color.fromHex('#115599'), Color.fromHex('#bbffff')],
        mostFrequentColor: Color.fromHex('#111111'),
        mostSaturatedColor: Color.fromHex('#000022'),
        mostGroupedColor: Color.fromHex('#112233'),
    },
} satisfies IImageColorStats;
