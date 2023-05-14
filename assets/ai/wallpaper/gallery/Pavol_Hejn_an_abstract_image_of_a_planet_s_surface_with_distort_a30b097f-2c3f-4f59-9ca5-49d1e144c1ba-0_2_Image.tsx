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
import { colorToDataUrl } from '../../../../src/utils/color/utils/colorToDataUrl';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_an_abstract_image_of_a_planet_s_surface_with_distort_a30b097f-2c3f-4f59-9ca5-49d1e144c1ba-0_2.colors.json';
import content from './Pavol_Hejn_an_abstract_image_of_a_planet_s_surface_with_distort_a30b097f-2c3f-4f59-9ca5-49d1e144c1ba-0_2.content.md';
import metadata from './Pavol_Hejn_an_abstract_image_of_a_planet_s_surface_with_distort_a30b097f-2c3f-4f59-9ca5-49d1e144c1ba-0_2.json';

/**
 * Image of An abstract image of a planet's surface, with distorted shapes and vivid colors that create a surreal and otherworldly feel.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AnAbstractImageOfAPlanetSSurfaceWithDistortA30b097f2c3f4f599ca549d1e144c1ba0_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An abstract image of a planet's surface, with distorted shapes and vivid colors that create a surreal and otherworldly feel."
            src="https://cdn.midjourney.com/a30b097f-2c3f-4f59-9ca5-49d1e144c1ba/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AnAbstractImageOfAPlanetSSurfaceWithDistortA30b097f2c3f4f599ca549d1e144c1ba0_2_Image.src = new URL(
    'https://cdn.midjourney.com/a30b097f-2c3f-4f59-9ca5-49d1e144c1ba/0_2.png',
);
AnAbstractImageOfAPlanetSSurfaceWithDistortA30b097f2c3f4f599ca549d1e144c1ba0_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractImageOfAPlanetSSurfaceWithDistortA30b097f2c3f4f599ca549d1e144c1ba0_2_Image.colorStats =
    hydrateColorStats(colorStats);
AnAbstractImageOfAPlanetSSurfaceWithDistortA30b097f2c3f4f599ca549d1e144c1ba0_2_Image.content = content;
