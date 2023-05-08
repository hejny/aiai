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
import metadata from './Pavol_Hejn_an_abstract_representation_of_the_inside_of_a_comput_fd6ceb52-cea8-41fd-a221-fcbde3192db1-0_1.json';
import source from './Pavol_Hejn_an_abstract_representation_of_the_inside_of_a_comput_fd6ceb52-cea8-41fd-a221-fcbde3192db1-0_1.png';

/**
 * Image of An abstract representation of the inside of a computer chip with a metallic color palette
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AnAbstractRepresentationOfTheInsideOfAComputFd6ceb52Cea841fdA221Fcbde3192db10_1_Image(
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

AnAbstractRepresentationOfTheInsideOfAComputFd6ceb52Cea841fdA221Fcbde3192db10_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractRepresentationOfTheInsideOfAComputFd6ceb52Cea841fdA221Fcbde3192db10_1_Image.colorStats = {
    averageColor: Color.fromHex('#383328'),
    lightestColor: Color.fromHex('#eeaaff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffeeee'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#cc6622'), Color.fromHex('#00ccbb')],
    minmaxGreen: [Color.fromHex('#00aa77'), Color.fromHex('#dd77ee')],
    minmaxBlue: [Color.fromHex('#2244bb'), Color.fromHex('#ffbb33')],
    mostFrequentColor: Color.fromHex('#000000'),
    mostSaturatedColor: Color.fromHex('#110000'),
    mostGroupedColor: Color.fromHex('#000000'),
    bottom: {
        averageColor: Color.fromHex('#39312a'),
        lightestColor: Color.fromHex('#ccccff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffeeee'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#994444'), Color.fromHex('#11ccdd')],
        minmaxGreen: [Color.fromHex('#118877'), Color.fromHex('#ffeeee')],
        minmaxBlue: [Color.fromHex('#222299'), Color.fromHex('#ffbb33')],
        mostFrequentColor: Color.fromHex('#000000'),
        mostSaturatedColor: Color.fromHex('#110000'),
        mostGroupedColor: Color.fromHex('#000000'),
    },
} satisfies IImageColorStats;
