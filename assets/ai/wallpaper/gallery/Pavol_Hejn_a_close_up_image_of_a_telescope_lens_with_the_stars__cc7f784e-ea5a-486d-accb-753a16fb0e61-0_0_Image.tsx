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
import metadata from './Pavol_Hejn_a_close_up_image_of_a_telescope_lens_with_the_stars__cc7f784e-ea5a-486d-accb-753a16fb0e61-0_0.json';
import source from './Pavol_Hejn_a_close_up_image_of_a_telescope_lens_with_the_stars__cc7f784e-ea5a-486d-accb-753a16fb0e61-0_0.png';

/**
 * Image of A close-up image of a telescope lens, with the stars and planets visible in the reflection.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function ACloseUpImageOfATelescopeLensWithTheStarsCc7f784eEa5a486dAccb753a16fb0e610_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A close-up image of a telescope lens, with the stars and planets visible in the reflection."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ACloseUpImageOfATelescopeLensWithTheStarsCc7f784eEa5a486dAccb753a16fb0e610_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ACloseUpImageOfATelescopeLensWithTheStarsCc7f784eEa5a486dAccb753a16fb0e610_0_Image.colorStats = {
    averageColor: Color.fromHex('#422d1f'),
    lightestColor: Color.fromHex('#ffeeff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#aa3300'), Color.fromHex('#eeffff')],
    minmaxGreen: [Color.fromHex('#888833'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#4455aa'), Color.fromHex('#ffffaa')],
    mostFrequentColor: Color.fromHex('#001111'),
    mostSaturatedColor: Color.fromHex('#332200'),
    mostGroupedColor: Color.fromHex('#111111'),
    bottom: {
        averageColor: Color.fromHex('#382317'),
        lightestColor: Color.fromHex('#eeeedd'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#eeeedd'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#aa4400'), Color.fromHex('#eeeedd')],
        minmaxGreen: [Color.fromHex('#888833'), Color.fromHex('#ffeecc')],
        minmaxBlue: [Color.fromHex('#224477'), Color.fromHex('#ffee77')],
        mostFrequentColor: Color.fromHex('#001111'),
        mostSaturatedColor: Color.fromHex('#884400'),
        mostGroupedColor: Color.fromHex('#111111'),
    },
} satisfies IImageColorStats;
