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
import metadata from './Pavol_Hejn_a_digital_painting_of_a_distant_planet_with_a_unique_c0d48fb3-16ac-4653-b5c7-7c1fab788362-0_2.json';
import source from './Pavol_Hejn_a_digital_painting_of_a_distant_planet_with_a_unique_c0d48fb3-16ac-4653-b5c7-7c1fab788362-0_2.png';

/**
 * Image of A digital painting of a distant planet, with a unique atmosphere and unusual terrain.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ADigitalPaintingOfADistantPlanetWithAUniqueC0d48fb316ac4653B5c77c1fab7883620_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A digital painting of a distant planet, with a unique atmosphere and unusual terrain."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ADigitalPaintingOfADistantPlanetWithAUniqueC0d48fb316ac4653B5c77c1fab7883620_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ADigitalPaintingOfADistantPlanetWithAUniqueC0d48fb316ac4653B5c77c1fab7883620_2_Image.colorStats = {
    averageColor: Color.fromHex('#533543'),
    lightestColor: Color.fromHex('#ddffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ddffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#aa2211'), Color.fromHex('#aaffff')],
    minmaxGreen: [Color.fromHex('#559988'), Color.fromHex('#770011')],
    minmaxBlue: [Color.fromHex('#555599'), Color.fromHex('#ddffee')],
    mostFrequentColor: Color.fromHex('#000000'),
    mostSaturatedColor: Color.fromHex('#220011'),
    mostGroupedColor: Color.fromHex('#002233'),
    bottom: {
        averageColor: Color.fromHex('#3f1a29'),
        lightestColor: Color.fromHex('#ff99aa'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ff99aa'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#bb3322'), Color.fromHex('#000011')],
        minmaxGreen: [Color.fromHex('#555555'), Color.fromHex('#770011')],
        minmaxBlue: [Color.fromHex('#554477'), Color.fromHex('#ffaa66')],
        mostFrequentColor: Color.fromHex('#000000'),
        mostSaturatedColor: Color.fromHex('#110011'),
        mostGroupedColor: Color.fromHex('#000011'),
    },
} satisfies IImageColorStats;
