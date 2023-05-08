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
import metadata from './Pavol_Hejn_an_abstract_illustration_of_a_virtual_reality_enviro_7606152d-139c-4009-afc0-050d9c310b1f-0_2.json';
import source from './Pavol_Hejn_an_abstract_illustration_of_a_virtual_reality_enviro_7606152d-139c-4009-afc0-050d9c310b1f-0_2.png';

/**
 * Image of An abstract illustration of a virtual reality environment, with futuristic graphics and a minimalist color scheme.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AnAbstractIllustrationOfAVirtualRealityEnviro7606152d139c4009Afc0050d9c310b1f0_2_Image(
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

AnAbstractIllustrationOfAVirtualRealityEnviro7606152d139c4009Afc0050d9c310b1f0_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractIllustrationOfAVirtualRealityEnviro7606152d139c4009Afc0050d9c310b1f0_2_Image.colorStats = {
    averageColor: Color.fromHex('#375e5b'),
    lightestColor: Color.fromHex('#ddffee'),
    darkestColor: Color.fromHex('#112211'),
    minmaxWhite: [Color.fromHex('#ddffee'), Color.fromHex('#111111')],
    minmaxRed: [Color.fromHex('#bb4433'), Color.fromHex('#bbffee')],
    minmaxGreen: [Color.fromHex('#119988'), Color.fromHex('#ffddcc')],
    minmaxBlue: [Color.fromHex('#225588'), Color.fromHex('#ddffdd')],
    mostFrequentColor: Color.fromHex('#112222'),
    mostSaturatedColor: Color.fromHex('#004444'),
    mostGroupedColor: Color.fromHex('#112222'),
    bottom: {
        averageColor: Color.fromHex('#2c3d3c'),
        lightestColor: Color.fromHex('#aaddcc'),
        darkestColor: Color.fromHex('#111111'),
        minmaxWhite: [Color.fromHex('#ddccaa'), Color.fromHex('#111111')],
        minmaxRed: [Color.fromHex('#aa4433'), Color.fromHex('#55ddcc')],
        minmaxGreen: [Color.fromHex('#229988'), Color.fromHex('#551122')],
        minmaxBlue: [Color.fromHex('#224466'), Color.fromHex('#ddccaa')],
        mostFrequentColor: Color.fromHex('#112222'),
        mostSaturatedColor: Color.fromHex('#004455'),
        mostGroupedColor: Color.fromHex('#112222'),
    },
} satisfies IImageColorStats;
