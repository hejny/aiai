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
import metadata from './Pavol_Hejn_a_surreal_image_of_a_person_diving_into_a_pool_of_wa_2bd382ca-5cf3-44b8-b287-930c756a19ae-0_1.json';
import source from './Pavol_Hejn_a_surreal_image_of_a_person_diving_into_a_pool_of_wa_2bd382ca-5cf3-44b8-b287-930c756a19ae-0_1.png';

/**
 * Image of A surreal image of a person diving into a pool of water for a health or fitness blog
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function ASurrealImageOfAPersonDivingIntoAPoolOfWa2bd382ca5cf344b8B287930c756a19ae0_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A surreal image of a person diving into a pool of water for a health or fitness blog"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ASurrealImageOfAPersonDivingIntoAPoolOfWa2bd382ca5cf344b8B287930c756a19ae0_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ASurrealImageOfAPersonDivingIntoAPoolOfWa2bd382ca5cf344b8B287930c756a19ae0_1_Image.colorStats = {
    averageColor: Color.fromHex('#45727c'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000011'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000011')],
    minmaxRed: [Color.fromHex('#554433'), Color.fromHex('#ccffff')],
    minmaxGreen: [Color.fromHex('#44aa88'), Color.fromHex('#ffffff')],
    minmaxBlue: [Color.fromHex('#224477'), Color.fromHex('#ffffdd')],
    mostFrequentColor: Color.fromHex('#224444'),
    mostSaturatedColor: Color.fromHex('#003333'),
    mostGroupedColor: Color.fromHex('#224455'),
    bottom: {
        averageColor: Color.fromHex('#265360'),
        lightestColor: Color.fromHex('#eeeeee'),
        darkestColor: Color.fromHex('#003333'),
        minmaxWhite: [Color.fromHex('#eeeeee'), Color.fromHex('#003333')],
        minmaxRed: [Color.fromHex('#555555'), Color.fromHex('#ddffdd')],
        minmaxGreen: [Color.fromHex('#339988'), Color.fromHex('#eeeeee')],
        minmaxBlue: [Color.fromHex('#224477'), Color.fromHex('#ddffdd')],
        mostFrequentColor: Color.fromHex('#224444'),
        mostSaturatedColor: Color.fromHex('#003333'),
        mostGroupedColor: Color.fromHex('#224455'),
    },
} satisfies IImageColorStats;
