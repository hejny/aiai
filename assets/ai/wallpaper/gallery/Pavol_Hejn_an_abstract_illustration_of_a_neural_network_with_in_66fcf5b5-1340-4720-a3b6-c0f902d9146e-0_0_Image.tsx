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
import metadata from './Pavol_Hejn_an_abstract_illustration_of_a_neural_network_with_in_66fcf5b5-1340-4720-a3b6-c0f902d9146e-0_0.json';
import source from './Pavol_Hejn_an_abstract_illustration_of_a_neural_network_with_in_66fcf5b5-1340-4720-a3b6-c0f902d9146e-0_0.png';

/**
 * Image of An abstract illustration of a neural network, with intricate lines and a dark and technological color palette.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AnAbstractIllustrationOfANeuralNetworkWithIn66fcf5b513404720A3b6C0f902d9146e0_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An abstract illustration of a neural network, with intricate lines and a dark and technological color palette."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnAbstractIllustrationOfANeuralNetworkWithIn66fcf5b513404720A3b6C0f902d9146e0_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractIllustrationOfANeuralNetworkWithIn66fcf5b513404720A3b6C0f902d9146e0_0_Image.colorStats = {
    averageColor: Color.fromHex('#242627'),
    lightestColor: Color.fromHex('#eedddd'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#eedddd'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#aa5544'), Color.fromHex('#dddddd')],
    minmaxGreen: [Color.fromHex('#558877'), Color.fromHex('#eedddd')],
    minmaxBlue: [Color.fromHex('#335566'), Color.fromHex('#eeddbb')],
    mostFrequentColor: Color.fromHex('#332211'),
    mostSaturatedColor: Color.fromHex('#001111'),
    mostGroupedColor: Color.fromHex('#111111'),
    bottom: {
        averageColor: Color.fromHex('#1e1f21'),
        lightestColor: Color.fromHex('#aabbbb'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#bbbbaa'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#884433'), Color.fromHex('#aabbbb')],
        minmaxGreen: [Color.fromHex('#669988'), Color.fromHex('#110011')],
        minmaxBlue: [Color.fromHex('#445566'), Color.fromHex('#bbbbaa')],
        mostFrequentColor: Color.fromHex('#332211'),
        mostSaturatedColor: Color.fromHex('#000011'),
        mostGroupedColor: Color.fromHex('#111111'),
    },
} satisfies IImageColorStats;
