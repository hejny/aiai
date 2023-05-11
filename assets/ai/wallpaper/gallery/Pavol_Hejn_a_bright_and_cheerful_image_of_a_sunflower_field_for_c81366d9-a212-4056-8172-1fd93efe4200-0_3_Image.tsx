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
import metadata from './Pavol_Hejn_a_bright_and_cheerful_image_of_a_sunflower_field_for_c81366d9-a212-4056-8172-1fd93efe4200-0_3.json';
import source from './Pavol_Hejn_a_bright_and_cheerful_image_of_a_sunflower_field_for_c81366d9-a212-4056-8172-1fd93efe4200-0_3.png';

/**
 * Image of A bright and cheerful image of a sunflower field for a gardening or nature website
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function ABrightAndCheerfulImageOfASunflowerFieldForC81366d9A212405681721fd93efe42000_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A bright and cheerful image of a sunflower field for a gardening or nature website"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ABrightAndCheerfulImageOfASunflowerFieldForC81366d9A212405681721fd93efe42000_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ABrightAndCheerfulImageOfASunflowerFieldForC81366d9A212405681721fd93efe42000_3_Image.colorStats = {
    averageColor: Color.fromHex('#7b8764'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#001100'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#bb4400'), Color.fromHex('#eeffff')],
    minmaxGreen: [Color.fromHex('#66aa00'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#004499'), Color.fromHex('#ffee00')],
    mostFrequentColor: Color.fromHex('#112200'),
    mostSaturatedColor: Color.fromHex('#111100'),
    mostGroupedColor: Color.fromHex('#99ccee'),
    bottom: {
        averageColor: Color.fromHex('#6f6c1c'),
        lightestColor: Color.fromHex('#eeeeee'),
        darkestColor: Color.fromHex('#001100'),
        minmaxWhite: [Color.fromHex('#ffffdd'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#994400'), Color.fromHex('#eeffdd')],
        minmaxGreen: [Color.fromHex('#66aa00'), Color.fromHex('#ffeedd')],
        minmaxBlue: [Color.fromHex('#446677'), Color.fromHex('#ffee00')],
        mostFrequentColor: Color.fromHex('#112200'),
        mostSaturatedColor: Color.fromHex('#001100'),
        mostGroupedColor: Color.fromHex('#221100'),
    },
} satisfies IImageColorStats;
