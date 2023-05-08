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
import metadata from './Pavol_Hejn_a_stylized_depiction_of_a_spacecraft_in_orbit_around_2bf21499-fcb4-456a-a22b-c71137352387-0_0.json';
import source from './Pavol_Hejn_a_stylized_depiction_of_a_spacecraft_in_orbit_around_2bf21499-fcb4-456a-a22b-c71137352387-0_0.png';

/**
 * Image of A stylized depiction of a spacecraft in orbit around a distant planet or moon, with dramatic lighting and shadows.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AStylizedDepictionOfASpacecraftInOrbitAround2bf21499Fcb4456aA22bC711373523870_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A stylized depiction of a spacecraft in orbit around a distant planet or moon, with dramatic lighting and shadows."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AStylizedDepictionOfASpacecraftInOrbitAround2bf21499Fcb4456aA22bC711373523870_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AStylizedDepictionOfASpacecraftInOrbitAround2bf21499Fcb4456aA22bC711373523870_0_Image.colorStats = {
    averageColor: Color.fromHex('#181b24'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#aa5533'), Color.fromHex('#eeffff')],
    minmaxGreen: [Color.fromHex('#667766'), Color.fromHex('#ffffff')],
    minmaxBlue: [Color.fromHex('#224477'), Color.fromHex('#ffffee')],
    mostFrequentColor: Color.fromHex('#000000'),
    mostSaturatedColor: Color.fromHex('#000011'),
    mostGroupedColor: Color.fromHex('#000000'),
    bottom: {
        averageColor: Color.fromHex('#0e0e13'),
        lightestColor: Color.fromHex('#eeeeff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#eeffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#995533'), Color.fromHex('#eeffff')],
        minmaxGreen: [Color.fromHex('#667766'), Color.fromHex('#eeeeff')],
        minmaxBlue: [Color.fromHex('#4466aa'), Color.fromHex('#eeffff')],
        mostFrequentColor: Color.fromHex('#000000'),
        mostSaturatedColor: Color.fromHex('#000011'),
        mostGroupedColor: Color.fromHex('#000000'),
    },
} satisfies IImageColorStats;
