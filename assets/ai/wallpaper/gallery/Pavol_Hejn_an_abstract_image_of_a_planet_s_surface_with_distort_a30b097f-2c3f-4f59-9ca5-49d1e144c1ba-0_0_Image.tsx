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
import metadata from './Pavol_Hejn_an_abstract_image_of_a_planet_s_surface_with_distort_a30b097f-2c3f-4f59-9ca5-49d1e144c1ba-0_0.json';
import source from './Pavol_Hejn_an_abstract_image_of_a_planet_s_surface_with_distort_a30b097f-2c3f-4f59-9ca5-49d1e144c1ba-0_0.png';

/**
 * Image of An abstract image of a planet's surface, with distorted shapes and vivid colors that create a surreal and otherworldly feel.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AnAbstractImageOfAPlanetSSurfaceWithDistortA30b097f2c3f4f599ca549d1e144c1ba0_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An abstract image of a planet's surface, with distorted shapes and vivid colors that create a surreal and otherworldly feel."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnAbstractImageOfAPlanetSSurfaceWithDistortA30b097f2c3f4f599ca549d1e144c1ba0_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractImageOfAPlanetSSurfaceWithDistortA30b097f2c3f4f599ca549d1e144c1ba0_0_Image.colorStats = {
    averageColor: Color.fromHex('#52322c'),
    lightestColor: Color.fromHex('#eeeeee'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#eeeeee'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#cc3322'), Color.fromHex('#22ccdd')],
    minmaxGreen: [Color.fromHex('#448877'), Color.fromHex('#ee4455')],
    minmaxBlue: [Color.fromHex('#335588'), Color.fromHex('#ffcc44')],
    mostFrequentColor: Color.fromHex('#111111'),
    mostSaturatedColor: Color.fromHex('#006677'),
    mostGroupedColor: Color.fromHex('#112222'),
    bottom: {
        averageColor: Color.fromHex('#4e3027'),
        lightestColor: Color.fromHex('#eeeeee'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#eeeeee'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#bb3333'), Color.fromHex('#eeeeee')],
        minmaxGreen: [Color.fromHex('#336655'), Color.fromHex('#eeeeee')],
        minmaxBlue: [Color.fromHex('#224455'), Color.fromHex('#ffdd99')],
        mostFrequentColor: Color.fromHex('#111111'),
        mostSaturatedColor: Color.fromHex('#000011'),
        mostGroupedColor: Color.fromHex('#111111'),
    },
} satisfies IImageColorStats;
