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
import metadata from './Pavol_Hejn_a_surreal_image_of_a_person_floating_in_space_for_a__42ae2795-b3eb-4159-a78a-34512c19c0dc-0_0.json';
import source from './Pavol_Hejn_a_surreal_image_of_a_person_floating_in_space_for_a__42ae2795-b3eb-4159-a78a-34512c19c0dc-0_0.png';

/**
 * Image of A surreal image of a person floating in space for a spirituality or personal growth website
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function ASurrealImageOfAPersonFloatingInSpaceForA42ae2795B3eb4159A78a34512c19c0dc0_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A surreal image of a person floating in space for a spirituality or personal growth website"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ASurrealImageOfAPersonFloatingInSpaceForA42ae2795B3eb4159A78a34512c19c0dc0_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ASurrealImageOfAPersonFloatingInSpaceForA42ae2795B3eb4159A78a34512c19c0dc0_0_Image.colorStats = {
    averageColor: Color.fromHex('#49879d'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#113344'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#003355')],
    minmaxRed: [Color.fromHex('#666677'), Color.fromHex('#aaffff')],
    minmaxGreen: [Color.fromHex('#558877'), Color.fromHex('#ffffff')],
    minmaxBlue: [Color.fromHex('#115588'), Color.fromHex('#ffffee')],
    mostFrequentColor: Color.fromHex('#337788'),
    mostSaturatedColor: Color.fromHex('#004466'),
    mostGroupedColor: Color.fromHex('#114466'),
    bottom: {
        averageColor: Color.fromHex('#327992'),
        lightestColor: Color.fromHex('#ddeeff'),
        darkestColor: Color.fromHex('#113344'),
        minmaxWhite: [Color.fromHex('#ddffff'), Color.fromHex('#003355')],
        minmaxRed: [Color.fromHex('#446666'), Color.fromHex('#bbffff')],
        minmaxGreen: [Color.fromHex('#558877'), Color.fromHex('#ddeeff')],
        minmaxBlue: [Color.fromHex('#115588'), Color.fromHex('#ddffee')],
        mostFrequentColor: Color.fromHex('#337788'),
        mostSaturatedColor: Color.fromHex('#003355'),
        mostGroupedColor: Color.fromHex('#114466'),
    },
} satisfies IImageColorStats;
