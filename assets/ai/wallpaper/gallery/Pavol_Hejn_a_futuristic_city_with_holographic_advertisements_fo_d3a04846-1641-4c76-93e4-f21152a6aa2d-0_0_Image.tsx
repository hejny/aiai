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
import metadata from './Pavol_Hejn_a_futuristic_city_with_holographic_advertisements_fo_d3a04846-1641-4c76-93e4-f21152a6aa2d-0_0.json';
import source from './Pavol_Hejn_a_futuristic_city_with_holographic_advertisements_fo_d3a04846-1641-4c76-93e4-f21152a6aa2d-0_0.png';

/**
 * Image of A futuristic city with holographic advertisements for a tech or innovation website
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AFuturisticCityWithHolographicAdvertisementsFoD3a0484616414c7693e4F21152a6aa2d0_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A futuristic city with holographic advertisements for a tech or innovation website"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AFuturisticCityWithHolographicAdvertisementsFoD3a0484616414c7693e4F21152a6aa2d0_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AFuturisticCityWithHolographicAdvertisementsFoD3a0484616414c7693e4F21152a6aa2d0_0_Image.colorStats = {
    averageColor: Color.fromHex('#64486b'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#dd1111'), Color.fromHex('#44ffff')],
    minmaxGreen: [Color.fromHex('#44aa66'), Color.fromHex('#dd11dd')],
    minmaxBlue: [Color.fromHex('#1122dd'), Color.fromHex('#ffee22')],
    mostFrequentColor: Color.fromHex('#883344'),
    mostSaturatedColor: Color.fromHex('#000011'),
    mostGroupedColor: Color.fromHex('#112266'),
    bottom: {
        averageColor: Color.fromHex('#8c5466'),
        lightestColor: Color.fromHex('#ffeeff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#dd1111'), Color.fromHex('#11ddff')],
        minmaxGreen: [Color.fromHex('#44aa66'), Color.fromHex('#ff55dd')],
        minmaxBlue: [Color.fromHex('#0033aa'), Color.fromHex('#ffdd33')],
        mostFrequentColor: Color.fromHex('#883344'),
        mostSaturatedColor: Color.fromHex('#110022'),
        mostGroupedColor: Color.fromHex('#000011'),
    },
} satisfies IImageColorStats;
