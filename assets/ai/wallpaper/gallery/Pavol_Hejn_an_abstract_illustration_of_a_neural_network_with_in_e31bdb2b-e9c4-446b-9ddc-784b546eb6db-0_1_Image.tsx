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
import { colorToDataUrl } from '../../../../src/utils/color/utils/colorToDataUrl';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_an_abstract_illustration_of_a_neural_network_with_in_e31bdb2b-e9c4-446b-9ddc-784b546eb6db-0_1.colors.json';
import content from './Pavol_Hejn_an_abstract_illustration_of_a_neural_network_with_in_e31bdb2b-e9c4-446b-9ddc-784b546eb6db-0_1.content.md';
import metadata from './Pavol_Hejn_an_abstract_illustration_of_a_neural_network_with_in_e31bdb2b-e9c4-446b-9ddc-784b546eb6db-0_1.json';

/**
 * Image of An abstract illustration of a neural network, with intricate lines and a dark and technological color palette.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AnAbstractIllustrationOfANeuralNetworkWithInE31bdb2bE9c4446b9ddc784b546eb6db0_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An abstract illustration of a neural network, with intricate lines and a dark and technological color palette."
            src="https://cdn.midjourney.com/e31bdb2b-e9c4-446b-9ddc-784b546eb6db/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AnAbstractIllustrationOfANeuralNetworkWithInE31bdb2bE9c4446b9ddc784b546eb6db0_1_Image.src = new URL(
    'https://cdn.midjourney.com/e31bdb2b-e9c4-446b-9ddc-784b546eb6db/0_1.png',
);
AnAbstractIllustrationOfANeuralNetworkWithInE31bdb2bE9c4446b9ddc784b546eb6db0_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractIllustrationOfANeuralNetworkWithInE31bdb2bE9c4446b9ddc784b546eb6db0_1_Image.colorStats =
    hydrateColorStats(colorStats);
AnAbstractIllustrationOfANeuralNetworkWithInE31bdb2bE9c4446b9ddc784b546eb6db0_1_Image.content = content;
