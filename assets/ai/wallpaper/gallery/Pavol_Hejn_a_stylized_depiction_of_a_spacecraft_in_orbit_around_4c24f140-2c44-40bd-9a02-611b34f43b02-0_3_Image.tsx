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
import metadata from './Pavol_Hejn_a_stylized_depiction_of_a_spacecraft_in_orbit_around_4c24f140-2c44-40bd-9a02-611b34f43b02-0_3.json';
import source from './Pavol_Hejn_a_stylized_depiction_of_a_spacecraft_in_orbit_around_4c24f140-2c44-40bd-9a02-611b34f43b02-0_3.png';

/**
 * Image of A stylized depiction of a spacecraft in orbit around a distant planet or moon, with dramatic lighting and shadows.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AStylizedDepictionOfASpacecraftInOrbitAround4c24f1402c4440bd9a02611b34f43b020_3_Image(
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

AStylizedDepictionOfASpacecraftInOrbitAround4c24f1402c4440bd9a02611b34f43b020_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AStylizedDepictionOfASpacecraftInOrbitAround4c24f1402c4440bd9a02611b34f43b020_3_Image.colorStats = {
    averageColor: Color.fromHex('#191e27'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#884422'), Color.fromHex('#ccffff')],
    minmaxGreen: [Color.fromHex('#557777'), Color.fromHex('#ffffff')],
    minmaxBlue: [Color.fromHex('#225577'), Color.fromHex('#ffffff')],
    mostFrequentColor: Color.fromHex('#000011'),
    mostSaturatedColor: Color.fromHex('#000011'),
    mostGroupedColor: Color.fromHex('#000000'),
    bottom: {
        averageColor: Color.fromHex('#0b0e16'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#773322'), Color.fromHex('#eeffff')],
        minmaxGreen: [Color.fromHex('#668888'), Color.fromHex('#ffffff')],
        minmaxBlue: [Color.fromHex('#225577'), Color.fromHex('#ffffff')],
        mostFrequentColor: Color.fromHex('#000011'),
        mostSaturatedColor: Color.fromHex('#000011'),
        mostGroupedColor: Color.fromHex('#000000'),
    },
} satisfies IImageColorStats;
