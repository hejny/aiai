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
import metadata from './Pavol_Hejn_an_abstract_illustration_of_a_virtual_reality_enviro_a9950219-70f7-4f2d-a2b8-ff2366c5d796-0_3.json';
import source from './Pavol_Hejn_an_abstract_illustration_of_a_virtual_reality_enviro_a9950219-70f7-4f2d-a2b8-ff2366c5d796-0_3.png';

/**
 * Image of An abstract illustration of a virtual reality environment, with futuristic graphics and a minimalist color scheme.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AnAbstractIllustrationOfAVirtualRealityEnviroA995021970f74f2dA2b8Ff2366c5d7960_3_Image(
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

AnAbstractIllustrationOfAVirtualRealityEnviroA995021970f74f2dA2b8Ff2366c5d7960_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractIllustrationOfAVirtualRealityEnviroA995021970f74f2dA2b8Ff2366c5d7960_3_Image.colorStats = {
    averageColor: Color.fromHex('#8e3544'),
    lightestColor: Color.fromHex('#ccffff'),
    darkestColor: Color.fromHex('#111111'),
    minmaxWhite: [Color.fromHex('#eeeeee'), Color.fromHex('#110022')],
    minmaxRed: [Color.fromHex('#ee2222'), Color.fromHex('#11ddff')],
    minmaxGreen: [Color.fromHex('#119999'), Color.fromHex('#ee2233')],
    minmaxBlue: [Color.fromHex('#113377'), Color.fromHex('#ffeedd')],
    mostFrequentColor: Color.fromHex('#220022'),
    mostSaturatedColor: Color.fromHex('#220022'),
    mostGroupedColor: Color.fromHex('#220022'),
    bottom: {
        averageColor: Color.fromHex('#a13344'),
        lightestColor: Color.fromHex('#ffddee'),
        darkestColor: Color.fromHex('#220011'),
        minmaxWhite: [Color.fromHex('#ffddee'), Color.fromHex('#220011')],
        minmaxRed: [Color.fromHex('#ee2222'), Color.fromHex('#33aacc')],
        minmaxGreen: [Color.fromHex('#006677'), Color.fromHex('#ee2233')],
        minmaxBlue: [Color.fromHex('#113377'), Color.fromHex('#ffdddd')],
        mostFrequentColor: Color.fromHex('#220022'),
        mostSaturatedColor: Color.fromHex('#220022'),
        mostGroupedColor: Color.fromHex('#220022'),
    },
} satisfies IImageColorStats;
