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
import metadata from './Pavol_Hejn_an_image_of_a_rocket_taking_off_from_earth_with_a_fi_47eddbfa-ffaf-4ccd-be18-9242b7336618-0_1.json';
import source from './Pavol_Hejn_an_image_of_a_rocket_taking_off_from_earth_with_a_fi_47eddbfa-ffaf-4ccd-be18-9242b7336618-0_1.png';

/**
 * Image of An image of a rocket taking off from Earth, with a fiery trail leading into the clouds.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AnImageOfARocketTakingOffFromEarthWithAFi47eddbfaFfaf4ccdBe189242b73366180_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An image of a rocket taking off from Earth, with a fiery trail leading into the clouds."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnImageOfARocketTakingOffFromEarthWithAFi47eddbfaFfaf4ccdBe189242b73366180_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnImageOfARocketTakingOffFromEarthWithAFi47eddbfaFfaf4ccdBe189242b73366180_1_Image.colorStats = {
    averageColor: Color.fromHex('#9c7362'),
    lightestColor: Color.fromHex('#ffeecc'),
    darkestColor: Color.fromHex('#551100'),
    minmaxWhite: [Color.fromHex('#ffffcc'), Color.fromHex('#551100')],
    minmaxRed: [Color.fromHex('#bb4433'), Color.fromHex('#ffffcc')],
    minmaxGreen: [Color.fromHex('#667766'), Color.fromHex('#ffeecc')],
    minmaxBlue: [Color.fromHex('#334466'), Color.fromHex('#ffffaa')],
    mostFrequentColor: Color.fromHex('#442222'),
    mostSaturatedColor: Color.fromHex('#551100'),
    mostGroupedColor: Color.fromHex('#eeccaa'),
    bottom: {
        averageColor: Color.fromHex('#a9654d'),
        lightestColor: Color.fromHex('#ffddaa'),
        darkestColor: Color.fromHex('#551100'),
        minmaxWhite: [Color.fromHex('#ffddaa'), Color.fromHex('#551100')],
        minmaxRed: [Color.fromHex('#aa3333'), Color.fromHex('#ffee99')],
        minmaxGreen: [Color.fromHex('#888877'), Color.fromHex('#551122')],
        minmaxBlue: [Color.fromHex('#221133'), Color.fromHex('#ffee88')],
        mostFrequentColor: Color.fromHex('#442222'),
        mostSaturatedColor: Color.fromHex('#551100'),
        mostGroupedColor: Color.fromHex('#662222'),
    },
} satisfies IImageColorStats;
