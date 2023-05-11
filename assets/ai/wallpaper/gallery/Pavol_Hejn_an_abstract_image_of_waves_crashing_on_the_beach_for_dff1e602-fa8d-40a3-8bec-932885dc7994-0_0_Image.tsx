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
import metadata from './Pavol_Hejn_an_abstract_image_of_waves_crashing_on_the_beach_for_dff1e602-fa8d-40a3-8bec-932885dc7994-0_0.json';
import source from './Pavol_Hejn_an_abstract_image_of_waves_crashing_on_the_beach_for_dff1e602-fa8d-40a3-8bec-932885dc7994-0_0.png';

/**
 * Image of An abstract image of waves crashing on the beach for a vacation or travel website
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AnAbstractImageOfWavesCrashingOnTheBeachForDff1e602Fa8d40a38bec932885dc79940_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An abstract image of waves crashing on the beach for a vacation or travel website"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnAbstractImageOfWavesCrashingOnTheBeachForDff1e602Fa8d40a38bec932885dc79940_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractImageOfWavesCrashingOnTheBeachForDff1e602Fa8d40a38bec932885dc79940_0_Image.colorStats = {
    averageColor: Color.fromHex('#a5aaa7'),
    lightestColor: Color.fromHex('#ffeeee'),
    darkestColor: Color.fromHex('#112222'),
    minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#002233')],
    minmaxRed: [Color.fromHex('#aa4433'), Color.fromHex('#eeffee')],
    minmaxGreen: [Color.fromHex('#119988'), Color.fromHex('#ffeeee')],
    minmaxBlue: [Color.fromHex('#115588'), Color.fromHex('#ffffdd')],
    mostFrequentColor: Color.fromHex('#779999'),
    mostSaturatedColor: Color.fromHex('#003344'),
    mostGroupedColor: Color.fromHex('#eeeedd'),
    bottom: {
        averageColor: Color.fromHex('#6c757c'),
        lightestColor: Color.fromHex('#ffdddd'),
        darkestColor: Color.fromHex('#112222'),
        minmaxWhite: [Color.fromHex('#ffdddd'), Color.fromHex('#002233')],
        minmaxRed: [Color.fromHex('#aa4433'), Color.fromHex('#ffdddd')],
        minmaxGreen: [Color.fromHex('#558866'), Color.fromHex('#ffdddd')],
        minmaxBlue: [Color.fromHex('#115588'), Color.fromHex('#ffddbb')],
        mostFrequentColor: Color.fromHex('#779999'),
        mostSaturatedColor: Color.fromHex('#003344'),
        mostGroupedColor: Color.fromHex('#115566'),
    },
} satisfies IImageColorStats;
