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
import colorStats from './Pavol_Hejn_an_abstract_image_of_overlapping_circles_in_bright_c_ce138bce-1ccf-42e5-b3f2-4e3e62e0fa87-0_2.colors.json';
import content from './Pavol_Hejn_an_abstract_image_of_overlapping_circles_in_bright_c_ce138bce-1ccf-42e5-b3f2-4e3e62e0fa87-0_2.content.md';
import metadata from './Pavol_Hejn_an_abstract_image_of_overlapping_circles_in_bright_c_ce138bce-1ccf-42e5-b3f2-4e3e62e0fa87-0_2.json';

/**
 * Image of An abstract image of overlapping circles in bright colors for a business or marketing website
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AnAbstractImageOfOverlappingCirclesInBrightCCe138bce1ccf42e5B3f24e3e62e0fa870_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An abstract image of overlapping circles in bright colors for a business or marketing website"
            src="https://cdn.midjourney.com/ce138bce-1ccf-42e5-b3f2-4e3e62e0fa87/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AnAbstractImageOfOverlappingCirclesInBrightCCe138bce1ccf42e5B3f24e3e62e0fa870_2_Image.src = new URL(
    'https://cdn.midjourney.com/ce138bce-1ccf-42e5-b3f2-4e3e62e0fa87/0_2.png',
);
AnAbstractImageOfOverlappingCirclesInBrightCCe138bce1ccf42e5B3f24e3e62e0fa870_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractImageOfOverlappingCirclesInBrightCCe138bce1ccf42e5B3f24e3e62e0fa870_2_Image.colorStats =
    hydrateColorStats(colorStats);
AnAbstractImageOfOverlappingCirclesInBrightCCe138bce1ccf42e5B3f24e3e62e0fa870_2_Image.content = content;
