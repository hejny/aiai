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
import metadata from './Pavol_Hejn_a_magical_underwater_world_f9cce72b-57fa-40d9-aa54-8a9ef4a94949-0_3.json';
import source from './Pavol_Hejn_a_magical_underwater_world_f9cce72b-57fa-40d9-aa54-8a9ef4a94949-0_3.png';

/**
 * Image of A magical underwater world
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AMagicalUnderwaterWorldF9cce72b57fa40d9Aa548a9ef4a949490_3_Image(props: IWallpaperComponentProps) {
    const { width, quality } = props;

    return (
        <Image
            alt="A magical underwater world"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AMagicalUnderwaterWorldF9cce72b57fa40d9Aa548a9ef4a949490_3_Image.metadata = metadata satisfies IWallpaperMetadata;
AMagicalUnderwaterWorldF9cce72b57fa40d9Aa548a9ef4a949490_3_Image.colorStats = {
    averageColor: Color.fromHex('#746d6b'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#ee1100'), Color.fromHex('#ccffff')],
    minmaxGreen: [Color.fromHex('#669955'), Color.fromHex('#ee1100')],
    minmaxBlue: [Color.fromHex('#552299'), Color.fromHex('#ffffbb')],
    mostFrequentColor: Color.fromHex('#662222'),
    mostSaturatedColor: Color.fromHex('#002244'),
    mostGroupedColor: Color.fromHex('#77cccc'),
    bottom: {
        averageColor: Color.fromHex('#915b4d'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#111100'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000011')],
        minmaxRed: [Color.fromHex('#ee1100'), Color.fromHex('#eeffff')],
        minmaxGreen: [Color.fromHex('#669955'), Color.fromHex('#ee1100')],
        minmaxBlue: [Color.fromHex('#552299'), Color.fromHex('#ffffbb')],
        mostFrequentColor: Color.fromHex('#662222'),
        mostSaturatedColor: Color.fromHex('#001133'),
        mostGroupedColor: Color.fromHex('#224455'),
    },
} satisfies IImageColorStats;
