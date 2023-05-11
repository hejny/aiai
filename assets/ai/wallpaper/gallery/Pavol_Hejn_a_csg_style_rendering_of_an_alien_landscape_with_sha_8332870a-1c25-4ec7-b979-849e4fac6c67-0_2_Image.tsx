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
import metadata from './Pavol_Hejn_a_csg_style_rendering_of_an_alien_landscape_with_sha_8332870a-1c25-4ec7-b979-849e4fac6c67-0_2.json';
import source from './Pavol_Hejn_a_csg_style_rendering_of_an_alien_landscape_with_sha_8332870a-1c25-4ec7-b979-849e4fac6c67-0_2.png';

/**
 * Image of A csg-style rendering of an alien landscape, with sharp angles and contrasting colors that create a futuristic and industrial vibe.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ACsgStyleRenderingOfAnAlienLandscapeWithSha8332870a1c254ec7B979849e4fac6c670_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A csg-style rendering of an alien landscape, with sharp angles and contrasting colors that create a futuristic and industrial vibe."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ACsgStyleRenderingOfAnAlienLandscapeWithSha8332870a1c254ec7B979849e4fac6c670_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ACsgStyleRenderingOfAnAlienLandscapeWithSha8332870a1c254ec7B979849e4fac6c670_2_Image.colorStats = {
    averageColor: Color.fromHex('#806f6d'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#bb3311'), Color.fromHex('#ccffff')],
    minmaxGreen: [Color.fromHex('#557766'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#113377'), Color.fromHex('#ffffdd')],
    mostFrequentColor: Color.fromHex('#110011'),
    mostSaturatedColor: Color.fromHex('#110000'),
    mostGroupedColor: Color.fromHex('#dddddd'),
    bottom: {
        averageColor: Color.fromHex('#5e3e3a'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#bb3311'), Color.fromHex('#eeffff')],
        minmaxGreen: [Color.fromHex('#779988'), Color.fromHex('#ffffff')],
        minmaxBlue: [Color.fromHex('#113377'), Color.fromHex('#ffffee')],
        mostFrequentColor: Color.fromHex('#110011'),
        mostSaturatedColor: Color.fromHex('#110000'),
        mostGroupedColor: Color.fromHex('#111111'),
    },
} satisfies IImageColorStats;
