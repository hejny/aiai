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
import metadata from './Pavol_Hejn_an_abstract_image_of_a_deep_space_object_such_as_a_b_62b90615-e745-40d1-afef-62086ed8ea7c-0_1.json';
import source from './Pavol_Hejn_an_abstract_image_of_a_deep_space_object_such_as_a_b_62b90615-e745-40d1-afef-62086ed8ea7c-0_1.png';

/**
 * Image of An abstract image of a deep space object, such as a black hole or pulsar, with swirling colors and patterns.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AnAbstractImageOfADeepSpaceObjectSuchAsAB62b90615E74540d1Afef62086ed8ea7c0_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An abstract image of a deep space object, such as a black hole or pulsar, with swirling colors and patterns."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnAbstractImageOfADeepSpaceObjectSuchAsAB62b90615E74540d1Afef62086ed8ea7c0_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractImageOfADeepSpaceObjectSuchAsAB62b90615E74540d1Afef62086ed8ea7c0_1_Image.colorStats = {
    averageColor: Color.fromHex('#291e1e'),
    lightestColor: Color.fromHex('#88eeff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffeebb'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#dd3311'), Color.fromHex('#22ffff')],
    minmaxGreen: [Color.fromHex('#339999'), Color.fromHex('#bb33dd')],
    minmaxBlue: [Color.fromHex('#7711aa'), Color.fromHex('#ffff55')],
    mostFrequentColor: Color.fromHex('#000000'),
    mostSaturatedColor: Color.fromHex('#000011'),
    mostGroupedColor: Color.fromHex('#000000'),
    bottom: {
        averageColor: Color.fromHex('#2f221e'),
        lightestColor: Color.fromHex('#ee66ee'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#dddddd'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#cc3300'), Color.fromHex('#66eeff')],
        minmaxGreen: [Color.fromHex('#338888'), Color.fromHex('#ee66ee')],
        minmaxBlue: [Color.fromHex('#771199'), Color.fromHex('#ffee44')],
        mostFrequentColor: Color.fromHex('#000000'),
        mostSaturatedColor: Color.fromHex('#000011'),
        mostGroupedColor: Color.fromHex('#000000'),
    },
} satisfies IImageColorStats;
