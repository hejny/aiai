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
import colorStats from './Pavol_Hejn_a_photograph_of_a_desert_landscape_at_night_with_the_93e80a95-d8f5-4556-9324-b10f8d61dee5-0_3.colors.json';
import content from './Pavol_Hejn_a_photograph_of_a_desert_landscape_at_night_with_the_93e80a95-d8f5-4556-9324-b10f8d61dee5-0_3.content.md';
import metadata from './Pavol_Hejn_a_photograph_of_a_desert_landscape_at_night_with_the_93e80a95-d8f5-4556-9324-b10f8d61dee5-0_3.json';

/**
 * Image of A photograph of a desert landscape at night, with the stars visible in the sky above.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function APhotographOfADesertLandscapeAtNightWithThe93e80a95D8f545569324B10f8d61dee50_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A photograph of a desert landscape at night, with the stars visible in the sky above."
            src="https://cdn.midjourney.com/93e80a95-d8f5-4556-9324-b10f8d61dee5/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
APhotographOfADesertLandscapeAtNightWithThe93e80a95D8f545569324B10f8d61dee50_3_Image.src = new URL(
    'https://cdn.midjourney.com/93e80a95-d8f5-4556-9324-b10f8d61dee5/0_3.png',
);
APhotographOfADesertLandscapeAtNightWithThe93e80a95D8f545569324B10f8d61dee50_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APhotographOfADesertLandscapeAtNightWithThe93e80a95D8f545569324B10f8d61dee50_3_Image.colorStats =
    hydrateColorStats(colorStats);
APhotographOfADesertLandscapeAtNightWithThe93e80a95D8f545569324B10f8d61dee50_3_Image.content = content;
