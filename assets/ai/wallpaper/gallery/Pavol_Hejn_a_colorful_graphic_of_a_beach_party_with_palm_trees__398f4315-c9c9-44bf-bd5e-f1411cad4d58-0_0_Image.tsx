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
import metadata from './Pavol_Hejn_a_colorful_graphic_of_a_beach_party_with_palm_trees__398f4315-c9c9-44bf-bd5e-f1411cad4d58-0_0.json';
import source from './Pavol_Hejn_a_colorful_graphic_of_a_beach_party_with_palm_trees__398f4315-c9c9-44bf-bd5e-f1411cad4d58-0_0.png';

/**
 * Image of A colorful graphic of a beach party with palm trees and cocktails for a vacation or travel website
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AColorfulGraphicOfABeachPartyWithPalmTrees398f4315C9c944bfBd5eF1411cad4d580_0_Image(
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

AColorfulGraphicOfABeachPartyWithPalmTrees398f4315C9c944bfBd5eF1411cad4d580_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AColorfulGraphicOfABeachPartyWithPalmTrees398f4315C9c944bfBd5eF1411cad4d580_0_Image.colorStats = {
    averageColor: Color.fromHex('#917366'),
    lightestColor: Color.fromHex('#ffeeff'),
    darkestColor: Color.fromHex('#555511'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#002244')],
    minmaxRed: [Color.fromHex('#ee1133'), Color.fromHex('#00eedd')],
    minmaxGreen: [Color.fromHex('#44bb55'), Color.fromHex('#ff1166')],
    minmaxBlue: [Color.fromHex('#004499'), Color.fromHex('#ffcc11')],
    mostFrequentColor: Color.fromHex('#003366'),
    mostSaturatedColor: Color.fromHex('#004466'),
    mostGroupedColor: Color.fromHex('#004466'),
    bottom: {
        averageColor: Color.fromHex('#646e72'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#ee9900'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#003355')],
        minmaxRed: [Color.fromHex('#ee1133'), Color.fromHex('#22ddee')],
        minmaxGreen: [Color.fromHex('#55bb77'), Color.fromHex('#ff1166')],
        minmaxBlue: [Color.fromHex('#004499'), Color.fromHex('#ffffcc')],
        mostFrequentColor: Color.fromHex('#003366'),
        mostSaturatedColor: Color.fromHex('#004466'),
        mostGroupedColor: Color.fromHex('#004466'),
    },
} satisfies IImageColorStats;
