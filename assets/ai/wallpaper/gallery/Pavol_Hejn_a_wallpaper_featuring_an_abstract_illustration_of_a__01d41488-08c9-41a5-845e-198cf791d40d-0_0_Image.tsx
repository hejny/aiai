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
import metadata from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_a__01d41488-08c9-41a5-845e-198cf791d40d-0_0.json';
import source from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_a__01d41488-08c9-41a5-845e-198cf791d40d-0_0.png';

/**
 * Image of A wallpaper featuring an abstract illustration of a dark and futuristic cityscape, with glowing lights and skyscrapers.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingAnAbstractIllustrationOfA1d4148808c941a5845e198cf791d40d00_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper featuring an abstract illustration of a dark and futuristic cityscape, with glowing lights and skyscrapers."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperFeaturingAnAbstractIllustrationOfA1d4148808c941a5845e198cf791d40d00_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingAnAbstractIllustrationOfA1d4148808c941a5845e198cf791d40d00_0_Image.colorStats = {
    averageColor: Color.fromHex('#232c34'),
    lightestColor: Color.fromHex('#ccffff'),
    darkestColor: Color.fromHex('#110000'),
    minmaxWhite: [Color.fromHex('#ccffff'), Color.fromHex('#000011')],
    minmaxRed: [Color.fromHex('#dd4411'), Color.fromHex('#88ffff')],
    minmaxGreen: [Color.fromHex('#118888'), Color.fromHex('#ccffff')],
    minmaxBlue: [Color.fromHex('#115577'), Color.fromHex('#ffbb55')],
    mostFrequentColor: Color.fromHex('#001111'),
    mostSaturatedColor: Color.fromHex('#001111'),
    mostGroupedColor: Color.fromHex('#001122'),
    bottom: {
        averageColor: Color.fromHex('#423130'),
        lightestColor: Color.fromHex('#99ffff'),
        darkestColor: Color.fromHex('#110000'),
        minmaxWhite: [Color.fromHex('#aaffee'), Color.fromHex('#000011')],
        minmaxRed: [Color.fromHex('#bb3311'), Color.fromHex('#99ffff')],
        minmaxGreen: [Color.fromHex('#557766'), Color.fromHex('#330011')],
        minmaxBlue: [Color.fromHex('#115577'), Color.fromHex('#ffcc88')],
        mostFrequentColor: Color.fromHex('#001111'),
        mostSaturatedColor: Color.fromHex('#001122'),
        mostGroupedColor: Color.fromHex('#001122'),
    },
} satisfies IImageColorStats;
