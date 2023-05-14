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
import colorStats from './Pavol_Hejn_a_wallpaper_with_a_simple_graphic_of_a_cyborg_s_face_5709f541-7759-4663-9206-e8f11ffb514d-0_1.colors.json';
import content from './Pavol_Hejn_a_wallpaper_with_a_simple_graphic_of_a_cyborg_s_face_5709f541-7759-4663-9206-e8f11ffb514d-0_1.content.md';
import metadata from './Pavol_Hejn_a_wallpaper_with_a_simple_graphic_of_a_cyborg_s_face_5709f541-7759-4663-9206-e8f11ffb514d-0_1.json';

/**
 * Image of A wallpaper with a simple graphic of a cyborg's face, against a background of digital noise and static.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithASimpleGraphicOfACyborgSFace5709f541775946639206E8f11ffb514d0_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a simple graphic of a cyborg's face, against a background of digital noise and static."
            src="https://cdn.midjourney.com/5709f541-7759-4663-9206-e8f11ffb514d/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AWallpaperWithASimpleGraphicOfACyborgSFace5709f541775946639206E8f11ffb514d0_1_Image.src = new URL(
    'https://cdn.midjourney.com/5709f541-7759-4663-9206-e8f11ffb514d/0_1.png',
);
AWallpaperWithASimpleGraphicOfACyborgSFace5709f541775946639206E8f11ffb514d0_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithASimpleGraphicOfACyborgSFace5709f541775946639206E8f11ffb514d0_1_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperWithASimpleGraphicOfACyborgSFace5709f541775946639206E8f11ffb514d0_1_Image.content = content;
