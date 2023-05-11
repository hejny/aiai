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
import metadata from './Pavol_Hejn_a_colorful_graphic_of_a_beach_party_with_palm_trees__398f4315-c9c9-44bf-bd5e-f1411cad4d58-0_3.json';
import source from './Pavol_Hejn_a_colorful_graphic_of_a_beach_party_with_palm_trees__398f4315-c9c9-44bf-bd5e-f1411cad4d58-0_3.png';

/**
 * Image of A colorful graphic of a beach party with palm trees and cocktails for a vacation or travel website
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AColorfulGraphicOfABeachPartyWithPalmTrees98f4315C9c944bfBd5eF1411cad4d5803_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A colorful graphic of a beach party with palm trees and cocktails for a vacation or travel website"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AColorfulGraphicOfABeachPartyWithPalmTrees98f4315C9c944bfBd5eF1411cad4d5803_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AColorfulGraphicOfABeachPartyWithPalmTrees98f4315C9c944bfBd5eF1411cad4d5803_3_Image.colorStats = {
    averageColor: Color.fromHex('#596880'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#112222'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#001133')],
    minmaxRed: [Color.fromHex('#ff1144'), Color.fromHex('#00ddee')],
    minmaxGreen: [Color.fromHex('#77bb55'), Color.fromHex('#ee0066')],
    minmaxBlue: [Color.fromHex('#2244aa'), Color.fromHex('#ffff88')],
    mostFrequentColor: Color.fromHex('#002244'),
    mostSaturatedColor: Color.fromHex('#00bbcc'),
    mostGroupedColor: Color.fromHex('#00bbcc'),
    bottom: {
        averageColor: Color.fromHex('#7c5b6f'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#002233'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#001133')],
        minmaxRed: [Color.fromHex('#ff1144'), Color.fromHex('#00ddee')],
        minmaxGreen: [Color.fromHex('#66cc77'), Color.fromHex('#ee0066')],
        minmaxBlue: [Color.fromHex('#333399'), Color.fromHex('#ffff88')],
        mostFrequentColor: Color.fromHex('#002244'),
        mostSaturatedColor: Color.fromHex('#002255'),
        mostGroupedColor: Color.fromHex('#002244'),
    },
} satisfies IImageColorStats;
