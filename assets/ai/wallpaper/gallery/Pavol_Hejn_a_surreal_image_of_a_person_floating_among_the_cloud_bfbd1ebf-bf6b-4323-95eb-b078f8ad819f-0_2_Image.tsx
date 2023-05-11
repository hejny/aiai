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
import metadata from './Pavol_Hejn_a_surreal_image_of_a_person_floating_among_the_cloud_bfbd1ebf-bf6b-4323-95eb-b078f8ad819f-0_2.json';
import source from './Pavol_Hejn_a_surreal_image_of_a_person_floating_among_the_cloud_bfbd1ebf-bf6b-4323-95eb-b078f8ad819f-0_2.png';

/**
 * Image of A surreal image of a person floating among the clouds for a spirituality or personal growth website
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ASurrealImageOfAPersonFloatingAmongTheCloudBfbd1ebfBf6b432395ebB078f8ad819f0_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A surreal image of a person floating among the clouds for a spirituality or personal growth website"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ASurrealImageOfAPersonFloatingAmongTheCloudBfbd1ebfBf6b432395ebB078f8ad819f0_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ASurrealImageOfAPersonFloatingAmongTheCloudBfbd1ebfBf6b432395ebB078f8ad819f0_2_Image.colorStats = {
    averageColor: Color.fromHex('#95a8ab'),
    lightestColor: Color.fromHex('#ffeeee'),
    darkestColor: Color.fromHex('#222222'),
    minmaxWhite: [Color.fromHex('#ffeeee'), Color.fromHex('#222222')],
    minmaxRed: [Color.fromHex('#886666'), Color.fromHex('#ddeeee')],
    minmaxGreen: [Color.fromHex('#558888'), Color.fromHex('#ffeeee')],
    minmaxBlue: [Color.fromHex('#556688'), Color.fromHex('#ffeedd')],
    mostFrequentColor: Color.fromHex('#444455'),
    mostSaturatedColor: Color.fromHex('#558899'),
    mostGroupedColor: Color.fromHex('#668888'),
    bottom: {
        averageColor: Color.fromHex('#6a808a'),
        lightestColor: Color.fromHex('#eedddd'),
        darkestColor: Color.fromHex('#445555'),
        minmaxWhite: [Color.fromHex('#eeeedd'), Color.fromHex('#444455')],
        minmaxRed: [Color.fromHex('#554455'), Color.fromHex('#ddeedd')],
        minmaxGreen: [Color.fromHex('#557777'), Color.fromHex('#eedddd')],
        minmaxBlue: [Color.fromHex('#556688'), Color.fromHex('#eeeedd')],
        mostFrequentColor: Color.fromHex('#444455'),
        mostSaturatedColor: Color.fromHex('#446677'),
        mostGroupedColor: Color.fromHex('#668888'),
    },
} satisfies IImageColorStats;
