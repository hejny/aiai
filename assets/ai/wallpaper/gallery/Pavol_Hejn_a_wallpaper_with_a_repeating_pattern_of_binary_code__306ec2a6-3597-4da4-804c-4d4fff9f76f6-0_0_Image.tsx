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
import colorStats from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_binary_code__306ec2a6-3597-4da4-804c-4d4fff9f76f6-0_0.colors.json';
import content from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_binary_code__306ec2a6-3597-4da4-804c-4d4fff9f76f6-0_0.content.md';
import metadata from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_binary_code__306ec2a6-3597-4da4-804c-4d4fff9f76f6-0_0.json';

/**
 * Image of A wallpaper with a repeating pattern of binary code, in a simple font and black and white color scheme.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithARepeatingPatternOfBinaryCode306ec2a635974da4804c4d4fff9f76f60_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a repeating pattern of binary code, in a simple font and black and white color scheme."
            src="https://cdn.midjourney.com/306ec2a6-3597-4da4-804c-4d4fff9f76f6/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AWallpaperWithARepeatingPatternOfBinaryCode306ec2a635974da4804c4d4fff9f76f60_0_Image.src = new URL(
    'https://cdn.midjourney.com/306ec2a6-3597-4da4-804c-4d4fff9f76f6/0_0.png',
);
AWallpaperWithARepeatingPatternOfBinaryCode306ec2a635974da4804c4d4fff9f76f60_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithARepeatingPatternOfBinaryCode306ec2a635974da4804c4d4fff9f76f60_0_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperWithARepeatingPatternOfBinaryCode306ec2a635974da4804c4d4fff9f76f60_0_Image.content = content;
