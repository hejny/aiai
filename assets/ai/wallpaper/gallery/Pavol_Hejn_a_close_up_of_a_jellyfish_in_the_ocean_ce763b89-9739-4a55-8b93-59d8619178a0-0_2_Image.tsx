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
import metadata from './Pavol_Hejn_a_close_up_of_a_jellyfish_in_the_ocean_ce763b89-9739-4a55-8b93-59d8619178a0-0_2.json';
import source from './Pavol_Hejn_a_close_up_of_a_jellyfish_in_the_ocean_ce763b89-9739-4a55-8b93-59d8619178a0-0_2.png';

/**
 * Image of A close-up of a jellyfish in the ocean
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ACloseUpOfAJellyfishInTheOceanCe763b8997394a558b9359d8619178a00_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A close-up of a jellyfish in the ocean"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ACloseUpOfAJellyfishInTheOceanCe763b8997394a558b9359d8619178a00_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ACloseUpOfAJellyfishInTheOceanCe763b8997394a558b9359d8619178a00_2_Image.colorStats = {
    averageColor: Color.fromHex('#293e6a'),
    lightestColor: Color.fromHex('#ffddff'),
    darkestColor: Color.fromHex('#001111'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000011')],
    minmaxRed: [Color.fromHex('#bb2211'), Color.fromHex('#11bbee')],
    minmaxGreen: [Color.fromHex('#447766'), Color.fromHex('#ffbbff')],
    minmaxBlue: [Color.fromHex('#0033bb'), Color.fromHex('#ffcc22')],
    mostFrequentColor: Color.fromHex('#001122'),
    mostSaturatedColor: Color.fromHex('#003366'),
    mostGroupedColor: Color.fromHex('#001144'),
    bottom: {
        averageColor: Color.fromHex('#1b264d'),
        lightestColor: Color.fromHex('#ffeeff'),
        darkestColor: Color.fromHex('#001111'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000011')],
        minmaxRed: [Color.fromHex('#aa3333'), Color.fromHex('#ccffff')],
        minmaxGreen: [Color.fromHex('#669999'), Color.fromHex('#ffccff')],
        minmaxBlue: [Color.fromHex('#0033bb'), Color.fromHex('#ffffff')],
        mostFrequentColor: Color.fromHex('#001122'),
        mostSaturatedColor: Color.fromHex('#001122'),
        mostGroupedColor: Color.fromHex('#001144'),
    },
} satisfies IImageColorStats;
