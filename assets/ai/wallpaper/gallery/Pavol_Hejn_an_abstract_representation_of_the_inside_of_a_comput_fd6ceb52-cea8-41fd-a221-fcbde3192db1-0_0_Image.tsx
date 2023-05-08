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
import metadata from './Pavol_Hejn_an_abstract_representation_of_the_inside_of_a_comput_fd6ceb52-cea8-41fd-a221-fcbde3192db1-0_0.json';
import source from './Pavol_Hejn_an_abstract_representation_of_the_inside_of_a_comput_fd6ceb52-cea8-41fd-a221-fcbde3192db1-0_0.png';

/**
 * Image of An abstract representation of the inside of a computer chip with a metallic color palette
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AnAbstractRepresentationOfTheInsideOfAComputFd6ceb52Cea841fdA221Fcbde3192db10_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An abstract representation of the inside of a computer chip with a metallic color palette"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnAbstractRepresentationOfTheInsideOfAComputFd6ceb52Cea841fdA221Fcbde3192db10_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractRepresentationOfTheInsideOfAComputFd6ceb52Cea841fdA221Fcbde3192db10_0_Image.colorStats = {
    averageColor: Color.fromHex('#413d2c'),
    lightestColor: Color.fromHex('#ddeeee'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ddeeee'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#bb5522'), Color.fromHex('#55eeee')],
    minmaxGreen: [Color.fromHex('#77bb55'), Color.fromHex('#ddeeee')],
    minmaxBlue: [Color.fromHex('#115566'), Color.fromHex('#ffee99')],
    mostFrequentColor: Color.fromHex('#000000'),
    mostSaturatedColor: Color.fromHex('#003322'),
    mostGroupedColor: Color.fromHex('#000000'),
    bottom: {
        averageColor: Color.fromHex('#2f271b'),
        lightestColor: Color.fromHex('#ddeeee'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ddeeee'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#994400'), Color.fromHex('#33ddcc')],
        minmaxGreen: [Color.fromHex('#66bb55'), Color.fromHex('#ddeeee')],
        minmaxBlue: [Color.fromHex('#116666'), Color.fromHex('#ffbb77')],
        mostFrequentColor: Color.fromHex('#000000'),
        mostSaturatedColor: Color.fromHex('#001111'),
        mostGroupedColor: Color.fromHex('#000000'),
    },
} satisfies IImageColorStats;
