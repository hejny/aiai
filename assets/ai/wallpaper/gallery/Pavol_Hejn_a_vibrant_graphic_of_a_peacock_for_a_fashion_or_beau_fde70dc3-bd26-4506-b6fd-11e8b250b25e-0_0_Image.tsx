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
import metadata from './Pavol_Hejn_a_vibrant_graphic_of_a_peacock_for_a_fashion_or_beau_fde70dc3-bd26-4506-b6fd-11e8b250b25e-0_0.json';
import source from './Pavol_Hejn_a_vibrant_graphic_of_a_peacock_for_a_fashion_or_beau_fde70dc3-bd26-4506-b6fd-11e8b250b25e-0_0.png';

/**
 * Image of A vibrant graphic of a peacock for a fashion or beauty blog
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AVibrantGraphicOfAPeacockForAFashionOrBeauFde70dc3Bd264506B6fd11e8b250b25e0_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A vibrant graphic of a peacock for a fashion or beauty blog"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AVibrantGraphicOfAPeacockForAFashionOrBeauFde70dc3Bd264506B6fd11e8b250b25e0_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AVibrantGraphicOfAPeacockForAFashionOrBeauFde70dc3Bd264506B6fd11e8b250b25e0_0_Image.colorStats = {
    averageColor: Color.fromHex('#5d5f50'),
    lightestColor: Color.fromHex('#ffffee'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#cc3333'), Color.fromHex('#00bbee')],
    minmaxGreen: [Color.fromHex('#22cc44'), Color.fromHex('#000088')],
    minmaxBlue: [Color.fromHex('#0033cc'), Color.fromHex('#ffdd11')],
    mostFrequentColor: Color.fromHex('#113344'),
    mostSaturatedColor: Color.fromHex('#994400'),
    mostGroupedColor: Color.fromHex('#000000'),
    bottom: {
        averageColor: Color.fromHex('#394950'),
        lightestColor: Color.fromHex('#ffffee'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#cc3333'), Color.fromHex('#ccffee')],
        minmaxGreen: [Color.fromHex('#44aa44'), Color.fromHex('#000088')],
        minmaxBlue: [Color.fromHex('#0033bb'), Color.fromHex('#ffffcc')],
        mostFrequentColor: Color.fromHex('#113344'),
        mostSaturatedColor: Color.fromHex('#001111'),
        mostGroupedColor: Color.fromHex('#ffeecc'),
    },
} satisfies IImageColorStats;
