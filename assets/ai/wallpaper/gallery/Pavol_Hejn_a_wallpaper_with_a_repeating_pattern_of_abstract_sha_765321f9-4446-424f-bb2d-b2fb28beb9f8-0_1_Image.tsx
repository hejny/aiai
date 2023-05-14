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
import colorStats from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_abstract_sha_765321f9-4446-424f-bb2d-b2fb28beb9f8-0_1.colors.json';
import content from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_abstract_sha_765321f9-4446-424f-bb2d-b2fb28beb9f8-0_1.content.md';
import metadata from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_abstract_sha_765321f9-4446-424f-bb2d-b2fb28beb9f8-0_1.json';

/**
 * Image of A wallpaper with a repeating pattern of abstract shapes inspired by computer viruses and malware, set against a black background.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithARepeatingPatternOfAbstractSha765321f94446424fBb2dB2fb28beb9f80_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a repeating pattern of abstract shapes inspired by computer viruses and malware, set against a black background."
            src="https://cdn.midjourney.com/765321f9-4446-424f-bb2d-b2fb28beb9f8/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AWallpaperWithARepeatingPatternOfAbstractSha765321f94446424fBb2dB2fb28beb9f80_1_Image.src = new URL(
    'https://cdn.midjourney.com/765321f9-4446-424f-bb2d-b2fb28beb9f8/0_1.png',
);
AWallpaperWithARepeatingPatternOfAbstractSha765321f94446424fBb2dB2fb28beb9f80_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithARepeatingPatternOfAbstractSha765321f94446424fBb2dB2fb28beb9f80_1_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperWithARepeatingPatternOfAbstractSha765321f94446424fBb2dB2fb28beb9f80_1_Image.content = content;
