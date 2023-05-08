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
import metadata from './Pavol_Hejn_a_wallpaper_with_a_single_line_drawing_of_a_drone_ag_95660e98-b69e-4c6b-816b-e38b37c78808-0_1.json';
import source from './Pavol_Hejn_a_wallpaper_with_a_single_line_drawing_of_a_drone_ag_95660e98-b69e-4c6b-816b-e38b37c78808-0_1.png';

/**
 * Image of A wallpaper with a single line drawing of a drone, against a background of geometric shapes in complementary colors.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithASingleLineDrawingOfADroneAg95660e98B69e4c6b816bE38b37c788080_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a single line drawing of a drone, against a background of geometric shapes in complementary colors."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperWithASingleLineDrawingOfADroneAg95660e98B69e4c6b816bE38b37c788080_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithASingleLineDrawingOfADroneAg95660e98B69e4c6b816bE38b37c788080_1_Image.colorStats = {
    averageColor: Color.fromHex('#414540'),
    lightestColor: Color.fromHex('#99aaaa'),
    darkestColor: Color.fromHex('#552200'),
    minmaxWhite: [Color.fromHex('#ffaa77'), Color.fromHex('#111122')],
    minmaxRed: [Color.fromHex('#dd4411'), Color.fromHex('#005555')],
    minmaxGreen: [Color.fromHex('#667755'), Color.fromHex('#dd4422')],
    minmaxBlue: [Color.fromHex('#115577'), Color.fromHex('#ff8822')],
    mostFrequentColor: Color.fromHex('#113344'),
    mostSaturatedColor: Color.fromHex('#003344'),
    mostGroupedColor: Color.fromHex('#223344'),
    bottom: {
        averageColor: Color.fromHex('#313f41'),
        lightestColor: Color.fromHex('#888899'),
        darkestColor: Color.fromHex('#111111'),
        minmaxWhite: [Color.fromHex('#dd9966'), Color.fromHex('#111111')],
        minmaxRed: [Color.fromHex('#bb3311'), Color.fromHex('#004455')],
        minmaxGreen: [Color.fromHex('#557766'), Color.fromHex('#ee5511')],
        minmaxBlue: [Color.fromHex('#114466'), Color.fromHex('#ff7733')],
        mostFrequentColor: Color.fromHex('#113344'),
        mostSaturatedColor: Color.fromHex('#004455'),
        mostGroupedColor: Color.fromHex('#223344'),
    },
} satisfies IImageColorStats;
