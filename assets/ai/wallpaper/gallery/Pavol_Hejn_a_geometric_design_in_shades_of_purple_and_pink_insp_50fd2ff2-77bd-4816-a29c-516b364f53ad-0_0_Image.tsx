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
import metadata from './Pavol_Hejn_a_geometric_design_in_shades_of_purple_and_pink_insp_50fd2ff2-77bd-4816-a29c-516b364f53ad-0_0.json';
import source from './Pavol_Hejn_a_geometric_design_in_shades_of_purple_and_pink_insp_50fd2ff2-77bd-4816-a29c-516b364f53ad-0_0.png';

/**
 * Image of A geometric design in shades of purple and pink, inspired by the shape of a quantum computer
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AGeometricDesignInShadesOfPurpleAndPinkInsp50fd2ff277bd4816A29c516b364f53ad0_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A geometric design in shades of purple and pink, inspired by the shape of a quantum computer"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AGeometricDesignInShadesOfPurpleAndPinkInsp50fd2ff277bd4816A29c516b364f53ad0_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AGeometricDesignInShadesOfPurpleAndPinkInsp50fd2ff277bd4816A29c516b364f53ad0_0_Image.colorStats = {
    averageColor: Color.fromHex('#3d1d31'),
    lightestColor: Color.fromHex('#ffeeff'),
    darkestColor: Color.fromHex('#110000'),
    minmaxWhite: [Color.fromHex('#ffeeff'), Color.fromHex('#000011')],
    minmaxRed: [Color.fromHex('#993344'), Color.fromHex('#ffeeff')],
    minmaxGreen: [Color.fromHex('#664444'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#773399'), Color.fromHex('#ffeeff')],
    mostFrequentColor: Color.fromHex('#221111'),
    mostSaturatedColor: Color.fromHex('#110011'),
    mostGroupedColor: Color.fromHex('#110011'),
    bottom: {
        averageColor: Color.fromHex('#2b1321'),
        lightestColor: Color.fromHex('#ee99cc'),
        darkestColor: Color.fromHex('#110000'),
        minmaxWhite: [Color.fromHex('#eeaabb'), Color.fromHex('#000011')],
        minmaxRed: [Color.fromHex('#aa3355'), Color.fromHex('#eeaabb')],
        minmaxGreen: [Color.fromHex('#664455'), Color.fromHex('#ee77bb')],
        minmaxBlue: [Color.fromHex('#773399'), Color.fromHex('#ff9999')],
        mostFrequentColor: Color.fromHex('#221111'),
        mostSaturatedColor: Color.fromHex('#000011'),
        mostGroupedColor: Color.fromHex('#111111'),
    },
} satisfies IImageColorStats;
