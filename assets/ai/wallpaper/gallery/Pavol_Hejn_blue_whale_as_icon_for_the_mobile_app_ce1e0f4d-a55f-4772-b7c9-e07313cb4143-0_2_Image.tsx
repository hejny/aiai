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
import metadata from './Pavol_Hejn_blue_whale_as_icon_for_the_mobile_app_ce1e0f4d-a55f-4772-b7c9-e07313cb4143-0_2.json';
import source from './Pavol_Hejn_blue_whale_as_icon_for_the_mobile_app_ce1e0f4d-a55f-4772-b7c9-e07313cb4143-0_2.png';

/**
 * Image of Blue whale as icon for the mobile app
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function BlueWhaleAsIconForTheMobileAppCe1e0f4dA55f4772B7c9E07313cb41430_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="Blue whale as icon for the mobile app"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

BlueWhaleAsIconForTheMobileAppCe1e0f4dA55f4772B7c9E07313cb41430_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
BlueWhaleAsIconForTheMobileAppCe1e0f4dA55f4772B7c9E07313cb41430_2_Image.colorStats = {
    averageColor: Color.fromHex('#accfdc'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#001133'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#001133')],
    minmaxRed: [Color.fromHex('#444466'), Color.fromHex('#33ffee')],
    minmaxGreen: [Color.fromHex('#229999'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#224499'), Color.fromHex('#ffffee')],
    mostFrequentColor: Color.fromHex('#ffffff'),
    mostSaturatedColor: Color.fromHex('#002255'),
    mostGroupedColor: Color.fromHex('#ffffff'),
    bottom: {
        averageColor: Color.fromHex('#bac7d8'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#001133'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#001133')],
        minmaxRed: [Color.fromHex('#666688'), Color.fromHex('#eeffff')],
        minmaxGreen: [Color.fromHex('#44aabb'), Color.fromHex('#ffeeff')],
        minmaxBlue: [Color.fromHex('#225599'), Color.fromHex('#ffffee')],
        mostFrequentColor: Color.fromHex('#ffffff'),
        mostSaturatedColor: Color.fromHex('#002255'),
        mostGroupedColor: Color.fromHex('#ffffff'),
    },
} satisfies IImageColorStats;
