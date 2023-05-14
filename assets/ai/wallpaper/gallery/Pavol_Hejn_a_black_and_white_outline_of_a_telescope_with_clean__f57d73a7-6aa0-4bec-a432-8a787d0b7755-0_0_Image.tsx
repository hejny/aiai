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
import colorStats from './Pavol_Hejn_a_black_and_white_outline_of_a_telescope_with_clean__f57d73a7-6aa0-4bec-a432-8a787d0b7755-0_0.colors.json';
import content from './Pavol_Hejn_a_black_and_white_outline_of_a_telescope_with_clean__f57d73a7-6aa0-4bec-a432-8a787d0b7755-0_0.content.md';
import metadata from './Pavol_Hejn_a_black_and_white_outline_of_a_telescope_with_clean__f57d73a7-6aa0-4bec-a432-8a787d0b7755-0_0.json';

/**
 * Image of A black and white outline of a telescope, with clean lines and simple shapes that highlight the intricate mechanics of the instrument.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function ABlackAndWhiteOutlineOfATelescopeWithCleanF57d73a76aa04becA4328a787d0b77550_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A black and white outline of a telescope, with clean lines and simple shapes that highlight the intricate mechanics of the instrument."
            src="https://cdn.midjourney.com/f57d73a7-6aa0-4bec-a432-8a787d0b7755/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
ABlackAndWhiteOutlineOfATelescopeWithCleanF57d73a76aa04becA4328a787d0b77550_0_Image.src = new URL(
    'https://cdn.midjourney.com/f57d73a7-6aa0-4bec-a432-8a787d0b7755/0_0.png',
);
ABlackAndWhiteOutlineOfATelescopeWithCleanF57d73a76aa04becA4328a787d0b77550_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ABlackAndWhiteOutlineOfATelescopeWithCleanF57d73a76aa04becA4328a787d0b77550_0_Image.colorStats =
    hydrateColorStats(colorStats);
ABlackAndWhiteOutlineOfATelescopeWithCleanF57d73a76aa04becA4328a787d0b77550_0_Image.content = content;
