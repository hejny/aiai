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
import metadata from './Pavol_Hejn_a_whimsical_tea_party_with_anthropomorphic_animals_83d94335-7745-4612-8800-f9bdd08d72b5-0_3.json';
import source from './Pavol_Hejn_a_whimsical_tea_party_with_anthropomorphic_animals_83d94335-7745-4612-8800-f9bdd08d72b5-0_3.png';

/**
 * Image of A whimsical tea party with anthropomorphic animals
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AWhimsicalTeaPartyWithAnthropomorphicAnimals83d94335774546128800F9bdd08d72b50_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A whimsical tea party with anthropomorphic animals"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWhimsicalTeaPartyWithAnthropomorphicAnimals83d94335774546128800F9bdd08d72b50_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWhimsicalTeaPartyWithAnthropomorphicAnimals83d94335774546128800F9bdd08d72b50_3_Image.colorStats = {
    averageColor: Color.fromHex('#4a3b30'),
    lightestColor: Color.fromHex('#ffeeee'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffeeee'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#cc3333'), Color.fromHex('#eeeeee')],
    minmaxGreen: [Color.fromHex('#669966'), Color.fromHex('#ffeeee')],
    minmaxBlue: [Color.fromHex('#225588'), Color.fromHex('#ffeebb')],
    mostFrequentColor: Color.fromHex('#000000'),
    mostSaturatedColor: Color.fromHex('#001100'),
    mostGroupedColor: Color.fromHex('#111111'),
    bottom: {
        averageColor: Color.fromHex('#56453a'),
        lightestColor: Color.fromHex('#eedddd'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#eedddd'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#cc3333'), Color.fromHex('#66bbee')],
        minmaxGreen: [Color.fromHex('#999944'), Color.fromHex('#770011')],
        minmaxBlue: [Color.fromHex('#336699'), Color.fromHex('#ffddcc')],
        mostFrequentColor: Color.fromHex('#000000'),
        mostSaturatedColor: Color.fromHex('#111100'),
        mostGroupedColor: Color.fromHex('#000000'),
    },
} satisfies IImageColorStats;
