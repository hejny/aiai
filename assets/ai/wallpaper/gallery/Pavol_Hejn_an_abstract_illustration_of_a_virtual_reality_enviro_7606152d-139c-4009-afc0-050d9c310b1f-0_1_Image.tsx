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
import metadata from './Pavol_Hejn_an_abstract_illustration_of_a_virtual_reality_enviro_7606152d-139c-4009-afc0-050d9c310b1f-0_1.json';
import source from './Pavol_Hejn_an_abstract_illustration_of_a_virtual_reality_enviro_7606152d-139c-4009-afc0-050d9c310b1f-0_1.png';

/**
 * Image of An abstract illustration of a virtual reality environment, with futuristic graphics and a minimalist color scheme.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AnAbstractIllustrationOfAVirtualRealityEnviro7606152d139c4009Afc0050d9c310b1f0_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An abstract illustration of a virtual reality environment, with futuristic graphics and a minimalist color scheme."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnAbstractIllustrationOfAVirtualRealityEnviro7606152d139c4009Afc0050d9c310b1f0_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractIllustrationOfAVirtualRealityEnviro7606152d139c4009Afc0050d9c310b1f0_1_Image.colorStats = {
    averageColor: Color.fromHex('#1f3b80'),
    lightestColor: Color.fromHex('#eeddff'),
    darkestColor: Color.fromHex('#001133'),
    minmaxWhite: [Color.fromHex('#ddffff'), Color.fromHex('#110033')],
    minmaxRed: [Color.fromHex('#772244'), Color.fromHex('#44ffff')],
    minmaxGreen: [Color.fromHex('#11cccc'), Color.fromHex('#1122cc')],
    minmaxBlue: [Color.fromHex('#1122cc'), Color.fromHex('#ddffee')],
    mostFrequentColor: Color.fromHex('#111133'),
    mostSaturatedColor: Color.fromHex('#001144'),
    mostGroupedColor: Color.fromHex('#111144'),
    bottom: {
        averageColor: Color.fromHex('#133276'),
        lightestColor: Color.fromHex('#bbffff'),
        darkestColor: Color.fromHex('#001133'),
        minmaxWhite: [Color.fromHex('#bbffff'), Color.fromHex('#001133')],
        minmaxRed: [Color.fromHex('#8855aa'), Color.fromHex('#44ffff')],
        minmaxGreen: [Color.fromHex('#22bbcc'), Color.fromHex('#1122cc')],
        minmaxBlue: [Color.fromHex('#1122cc'), Color.fromHex('#bbffff')],
        mostFrequentColor: Color.fromHex('#111133'),
        mostSaturatedColor: Color.fromHex('#001155'),
        mostGroupedColor: Color.fromHex('#111144'),
    },
} satisfies IImageColorStats;
