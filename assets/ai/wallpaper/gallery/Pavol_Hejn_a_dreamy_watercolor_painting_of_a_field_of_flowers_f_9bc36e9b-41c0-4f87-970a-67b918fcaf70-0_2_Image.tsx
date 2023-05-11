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
import metadata from './Pavol_Hejn_a_dreamy_watercolor_painting_of_a_field_of_flowers_f_9bc36e9b-41c0-4f87-970a-67b918fcaf70-0_2.json';
import source from './Pavol_Hejn_a_dreamy_watercolor_painting_of_a_field_of_flowers_f_9bc36e9b-41c0-4f87-970a-67b918fcaf70-0_2.png';

/**
 * Image of A dreamy watercolor painting of a field of flowers for a wedding or event planning website
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ADreamyWatercolorPaintingOfAFieldOfFlowersF9bc36e9b41c04f87970a67b918fcaf700_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A dreamy watercolor painting of a field of flowers for a wedding or event planning website"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ADreamyWatercolorPaintingOfAFieldOfFlowersF9bc36e9b41c04f87970a67b918fcaf700_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ADreamyWatercolorPaintingOfAFieldOfFlowersF9bc36e9b41c04f87970a67b918fcaf700_2_Image.colorStats = {
    averageColor: Color.fromHex('#cdc7c1'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#111100'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#111100')],
    minmaxRed: [Color.fromHex('#dd2233'), Color.fromHex('#eeffff')],
    minmaxGreen: [Color.fromHex('#668844'), Color.fromHex('#ffddff')],
    minmaxBlue: [Color.fromHex('#334488'), Color.fromHex('#ffffdd')],
    mostFrequentColor: Color.fromHex('#778899'),
    mostSaturatedColor: Color.fromHex('#111100'),
    mostGroupedColor: Color.fromHex('#ffffff'),
    bottom: {
        averageColor: Color.fromHex('#99947f'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#112211'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#111111')],
        minmaxRed: [Color.fromHex('#dd3344'), Color.fromHex('#ffffff')],
        minmaxGreen: [Color.fromHex('#668844'), Color.fromHex('#ffffff')],
        minmaxBlue: [Color.fromHex('#334488'), Color.fromHex('#ffffdd')],
        mostFrequentColor: Color.fromHex('#778899'),
        mostSaturatedColor: Color.fromHex('#662211'),
        mostGroupedColor: Color.fromHex('#445577'),
    },
} satisfies IImageColorStats;
