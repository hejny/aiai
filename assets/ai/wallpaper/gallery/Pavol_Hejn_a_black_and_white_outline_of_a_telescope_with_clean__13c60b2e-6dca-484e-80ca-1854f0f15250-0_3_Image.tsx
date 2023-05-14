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
import colorStats from './Pavol_Hejn_a_black_and_white_outline_of_a_telescope_with_clean__13c60b2e-6dca-484e-80ca-1854f0f15250-0_3.colors.json';
import content from './Pavol_Hejn_a_black_and_white_outline_of_a_telescope_with_clean__13c60b2e-6dca-484e-80ca-1854f0f15250-0_3.content.md';
import metadata from './Pavol_Hejn_a_black_and_white_outline_of_a_telescope_with_clean__13c60b2e-6dca-484e-80ca-1854f0f15250-0_3.json';

/**
 * Image of A black and white outline of a telescope, with clean lines and simple shapes that highlight the intricate mechanics of the instrument.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function ABlackAndWhiteOutlineOfATelescopeWithClean13c60b2e6dca484e80ca1854f0f152500_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A black and white outline of a telescope, with clean lines and simple shapes that highlight the intricate mechanics of the instrument."
            src="https://cdn.midjourney.com/13c60b2e-6dca-484e-80ca-1854f0f15250/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
ABlackAndWhiteOutlineOfATelescopeWithClean13c60b2e6dca484e80ca1854f0f152500_3_Image.src = new URL(
    'https://cdn.midjourney.com/13c60b2e-6dca-484e-80ca-1854f0f15250/0_3.png',
);
ABlackAndWhiteOutlineOfATelescopeWithClean13c60b2e6dca484e80ca1854f0f152500_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ABlackAndWhiteOutlineOfATelescopeWithClean13c60b2e6dca484e80ca1854f0f152500_3_Image.colorStats =
    hydrateColorStats(colorStats);
ABlackAndWhiteOutlineOfATelescopeWithClean13c60b2e6dca484e80ca1854f0f152500_3_Image.content = content;
