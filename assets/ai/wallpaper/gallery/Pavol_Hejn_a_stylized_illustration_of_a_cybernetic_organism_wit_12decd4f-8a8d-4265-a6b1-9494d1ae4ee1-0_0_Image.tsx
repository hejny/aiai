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
import metadata from './Pavol_Hejn_a_stylized_illustration_of_a_cybernetic_organism_wit_12decd4f-8a8d-4265-a6b1-9494d1ae4ee1-0_0.json';
import source from './Pavol_Hejn_a_stylized_illustration_of_a_cybernetic_organism_wit_12decd4f-8a8d-4265-a6b1-9494d1ae4ee1-0_0.png';

/**
 * Image of A stylized illustration of a cybernetic organism, with metallic textures and digital glitch effects.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AStylizedIllustrationOfACyberneticOrganismWit12decd4f8a8d4265A6b19494d1ae4ee10_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A stylized illustration of a cybernetic organism, with metallic textures and digital glitch effects."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AStylizedIllustrationOfACyberneticOrganismWit12decd4f8a8d4265A6b19494d1ae4ee10_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AStylizedIllustrationOfACyberneticOrganismWit12decd4f8a8d4265A6b19494d1ae4ee10_0_Image.colorStats = {
    averageColor: Color.fromHex('#4b2f33'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#ee0000'), Color.fromHex('#66ffff')],
    minmaxGreen: [Color.fromHex('#44ccaa'), Color.fromHex('#ee0011')],
    minmaxBlue: [Color.fromHex('#225599'), Color.fromHex('#ffee22')],
    mostFrequentColor: Color.fromHex('#332222'),
    mostSaturatedColor: Color.fromHex('#001122'),
    mostGroupedColor: Color.fromHex('#112233'),
    bottom: {
        averageColor: Color.fromHex('#321a22'),
        lightestColor: Color.fromHex('#ccffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ccffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#ee0000'), Color.fromHex('#ccffff')],
        minmaxGreen: [Color.fromHex('#449999'), Color.fromHex('#ee0011')],
        minmaxBlue: [Color.fromHex('#225599'), Color.fromHex('#ccffff')],
        mostFrequentColor: Color.fromHex('#332222'),
        mostSaturatedColor: Color.fromHex('#000011'),
        mostGroupedColor: Color.fromHex('#111122'),
    },
} satisfies IImageColorStats;
