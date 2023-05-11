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
import metadata from './Pavol_Hejn_a_collage_of_vintage_postcards_from_around_the_world_94001e27-687a-41bc-940a-dd6ec3f4dc7c-0_0.json';
import source from './Pavol_Hejn_a_collage_of_vintage_postcards_from_around_the_world_94001e27-687a-41bc-940a-dd6ec3f4dc7c-0_0.png';

/**
 * Image of A collage of vintage postcards from around the world
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function ACollageOfVintagePostcardsFromAroundTheWorld94001e27687a41bc940aDd6ec3f4dc7c0_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A collage of vintage postcards from around the world"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ACollageOfVintagePostcardsFromAroundTheWorld94001e27687a41bc940aDd6ec3f4dc7c0_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ACollageOfVintagePostcardsFromAroundTheWorld94001e27687a41bc940aDd6ec3f4dc7c0_0_Image.colorStats = {
    averageColor: Color.fromHex('#908d69'),
    lightestColor: Color.fromHex('#ffffee'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#dd1100'), Color.fromHex('#eeffee')],
    minmaxGreen: [Color.fromHex('#448855'), Color.fromHex('#dd1111')],
    minmaxBlue: [Color.fromHex('#555566'), Color.fromHex('#ffffbb')],
    mostFrequentColor: Color.fromHex('#ccddbb'),
    mostSaturatedColor: Color.fromHex('#331100'),
    mostGroupedColor: Color.fromHex('#ccddbb'),
    bottom: {
        averageColor: Color.fromHex('#a49167'),
        lightestColor: Color.fromHex('#ffffee'),
        darkestColor: Color.fromHex('#111100'),
        minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#110000')],
        minmaxRed: [Color.fromHex('#dd1100'), Color.fromHex('#eeffee')],
        minmaxGreen: [Color.fromHex('#448855'), Color.fromHex('#dd1111')],
        minmaxBlue: [Color.fromHex('#224444'), Color.fromHex('#ffffbb')],
        mostFrequentColor: Color.fromHex('#ccddbb'),
        mostSaturatedColor: Color.fromHex('#331100'),
        mostGroupedColor: Color.fromHex('#ccddbb'),
    },
} satisfies IImageColorStats;
