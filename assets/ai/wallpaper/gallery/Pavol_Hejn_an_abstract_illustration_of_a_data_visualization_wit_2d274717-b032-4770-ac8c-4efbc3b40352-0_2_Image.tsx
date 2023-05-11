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
import metadata from './Pavol_Hejn_an_abstract_illustration_of_a_data_visualization_wit_2d274717-b032-4770-ac8c-4efbc3b40352-0_2.json';
import source from './Pavol_Hejn_an_abstract_illustration_of_a_data_visualization_wit_2d274717-b032-4770-ac8c-4efbc3b40352-0_2.png';

/**
 * Image of An abstract illustration of a data visualization, with sleek and modern graphics and a minimalist color scheme.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AnAbstractIllustrationOfADataVisualizationWitd274717B0324770Ac8c4efbc3b4035202_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An abstract illustration of a data visualization, with sleek and modern graphics and a minimalist color scheme."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnAbstractIllustrationOfADataVisualizationWitd274717B0324770Ac8c4efbc3b4035202_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractIllustrationOfADataVisualizationWitd274717B0324770Ac8c4efbc3b4035202_2_Image.colorStats = {
    averageColor: Color.fromHex('#d8cebe'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#001111'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000022')],
    minmaxRed: [Color.fromHex('#dd1111'), Color.fromHex('#eeffff')],
    minmaxGreen: [Color.fromHex('#778866'), Color.fromHex('#dd1111')],
    minmaxBlue: [Color.fromHex('#333366'), Color.fromHex('#ffffdd')],
    mostFrequentColor: Color.fromHex('#ffeedd'),
    mostSaturatedColor: Color.fromHex('#660033'),
    mostGroupedColor: Color.fromHex('#eeeedd'),
    bottom: {
        averageColor: Color.fromHex('#e3d6c3'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#001111'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000022')],
        minmaxRed: [Color.fromHex('#dd1111'), Color.fromHex('#eeffff')],
        minmaxGreen: [Color.fromHex('#778866'), Color.fromHex('#dd1111')],
        minmaxBlue: [Color.fromHex('#223355'), Color.fromHex('#ffffdd')],
        mostFrequentColor: Color.fromHex('#ffeedd'),
        mostSaturatedColor: Color.fromHex('#990011'),
        mostGroupedColor: Color.fromHex('#eeeedd'),
    },
} satisfies IImageColorStats;
