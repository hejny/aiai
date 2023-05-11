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
import metadata from './Pavol_Hejn_a_photograph_of_an_iceberg_in_the_arctic_with_the_bl_8e369072-5b63-4c33-af2f-1fa085a80415-0_3.json';
import source from './Pavol_Hejn_a_photograph_of_an_iceberg_in_the_arctic_with_the_bl_8e369072-5b63-4c33-af2f-1fa085a80415-0_3.png';

/**
 * Image of A photograph of an iceberg in the Arctic, with the blue and white colors contrasting against a dark sky.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function APhotographOfAnIcebergInTheArcticWithTheBl8e3690725b634c33Af2f1fa085a804150_3_Image(
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

APhotographOfAnIcebergInTheArcticWithTheBl8e3690725b634c33Af2f1fa085a804150_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APhotographOfAnIcebergInTheArcticWithTheBl8e3690725b634c33Af2f1fa085a804150_3_Image.colorStats = {
    averageColor: Color.fromHex('#1b242b'),
    lightestColor: Color.fromHex('#ddeeee'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ddeeee'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#776666'), Color.fromHex('#ddeeee')],
    minmaxGreen: [Color.fromHex('#449999'), Color.fromHex('#ddeeee')],
    minmaxBlue: [Color.fromHex('#114477'), Color.fromHex('#ddeeee')],
    mostFrequentColor: Color.fromHex('#000000'),
    mostSaturatedColor: Color.fromHex('#000011'),
    mostGroupedColor: Color.fromHex('#000000'),
    bottom: {
        averageColor: Color.fromHex('#080b0e'),
        lightestColor: Color.fromHex('#ccddee'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ccddee'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#444444'), Color.fromHex('#ccddee')],
        minmaxGreen: [Color.fromHex('#337777'), Color.fromHex('#000022')],
        minmaxBlue: [Color.fromHex('#113366'), Color.fromHex('#ccdddd')],
        mostFrequentColor: Color.fromHex('#000000'),
        mostSaturatedColor: Color.fromHex('#000011'),
        mostGroupedColor: Color.fromHex('#000000'),
    },
} satisfies IImageColorStats;
