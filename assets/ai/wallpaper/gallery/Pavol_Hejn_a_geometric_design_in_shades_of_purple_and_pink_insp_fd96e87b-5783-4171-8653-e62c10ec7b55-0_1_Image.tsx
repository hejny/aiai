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
import metadata from './Pavol_Hejn_a_geometric_design_in_shades_of_purple_and_pink_insp_fd96e87b-5783-4171-8653-e62c10ec7b55-0_1.json';
import source from './Pavol_Hejn_a_geometric_design_in_shades_of_purple_and_pink_insp_fd96e87b-5783-4171-8653-e62c10ec7b55-0_1.png';

/**
 * Image of A geometric design in shades of purple and pink, inspired by the shape of a quantum computer
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AGeometricDesignInShadesOfPurpleAndPinkInspFd96e87b578341718653E62c10ec7b550_1_Image(
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

AGeometricDesignInShadesOfPurpleAndPinkInspFd96e87b578341718653E62c10ec7b550_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AGeometricDesignInShadesOfPurpleAndPinkInspFd96e87b578341718653E62c10ec7b550_1_Image.colorStats = {
    averageColor: Color.fromHex('#3e073e'),
    lightestColor: Color.fromHex('#ff88ff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffddff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#dd0055'), Color.fromHex('#ffddff')],
    minmaxGreen: [Color.fromHex('#665577'), Color.fromHex('#ff0099')],
    minmaxBlue: [Color.fromHex('#6611bb'), Color.fromHex('#ffddee')],
    mostFrequentColor: Color.fromHex('#110022'),
    mostSaturatedColor: Color.fromHex('#330044'),
    mostGroupedColor: Color.fromHex('#110022'),
    bottom: {
        averageColor: Color.fromHex('#340537'),
        lightestColor: Color.fromHex('#ff77ff'),
        darkestColor: Color.fromHex('#001100'),
        minmaxWhite: [Color.fromHex('#ffddff'), Color.fromHex('#000011')],
        minmaxRed: [Color.fromHex('#dd0055'), Color.fromHex('#ffddff')],
        minmaxGreen: [Color.fromHex('#775577'), Color.fromHex('#ff0088')],
        minmaxBlue: [Color.fromHex('#552299'), Color.fromHex('#ffddff')],
        mostFrequentColor: Color.fromHex('#110022'),
        mostSaturatedColor: Color.fromHex('#330033'),
        mostGroupedColor: Color.fromHex('#110022'),
    },
} satisfies IImageColorStats;
