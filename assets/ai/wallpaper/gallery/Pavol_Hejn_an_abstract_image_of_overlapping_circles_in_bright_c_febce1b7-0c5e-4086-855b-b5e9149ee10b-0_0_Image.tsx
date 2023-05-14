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
import colorStats from './Pavol_Hejn_an_abstract_image_of_overlapping_circles_in_bright_c_febce1b7-0c5e-4086-855b-b5e9149ee10b-0_0.colors.json';
import content from './Pavol_Hejn_an_abstract_image_of_overlapping_circles_in_bright_c_febce1b7-0c5e-4086-855b-b5e9149ee10b-0_0.content.md';
import metadata from './Pavol_Hejn_an_abstract_image_of_overlapping_circles_in_bright_c_febce1b7-0c5e-4086-855b-b5e9149ee10b-0_0.json';

/**
 * Image of An abstract image of overlapping circles in bright colors for a business or marketing website
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AnAbstractImageOfOverlappingCirclesInBrightCFebce1b70c5e4086855bB5e9149ee10b0_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An abstract image of overlapping circles in bright colors for a business or marketing website"
            src="https://cdn.midjourney.com/febce1b7-0c5e-4086-855b-b5e9149ee10b/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AnAbstractImageOfOverlappingCirclesInBrightCFebce1b70c5e4086855bB5e9149ee10b0_0_Image.src = new URL(
    'https://cdn.midjourney.com/febce1b7-0c5e-4086-855b-b5e9149ee10b/0_0.png',
);
AnAbstractImageOfOverlappingCirclesInBrightCFebce1b70c5e4086855bB5e9149ee10b0_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractImageOfOverlappingCirclesInBrightCFebce1b70c5e4086855bB5e9149ee10b0_0_Image.colorStats =
    hydrateColorStats(colorStats);
AnAbstractImageOfOverlappingCirclesInBrightCFebce1b70c5e4086855bB5e9149ee10b0_0_Image.content = content;
