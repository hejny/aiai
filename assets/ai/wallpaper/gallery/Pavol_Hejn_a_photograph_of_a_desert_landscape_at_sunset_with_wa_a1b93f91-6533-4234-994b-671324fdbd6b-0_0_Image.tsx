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
import colorStats from './Pavol_Hejn_a_photograph_of_a_desert_landscape_at_sunset_with_wa_a1b93f91-6533-4234-994b-671324fdbd6b-0_0.colors.json';
import content from './Pavol_Hejn_a_photograph_of_a_desert_landscape_at_sunset_with_wa_a1b93f91-6533-4234-994b-671324fdbd6b-0_0.content.md';
import metadata from './Pavol_Hejn_a_photograph_of_a_desert_landscape_at_sunset_with_wa_a1b93f91-6533-4234-994b-671324fdbd6b-0_0.json';

/**
 * Image of A photograph of a desert landscape at sunset, with warm colors and long shadows.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function APhotographOfADesertLandscapeAtSunsetWithWaA1b93f9165334234994b671324fdbd6b0_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A photograph of a desert landscape at sunset, with warm colors and long shadows."
            src="https://cdn.midjourney.com/a1b93f91-6533-4234-994b-671324fdbd6b/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
APhotographOfADesertLandscapeAtSunsetWithWaA1b93f9165334234994b671324fdbd6b0_0_Image.src = new URL(
    'https://cdn.midjourney.com/a1b93f91-6533-4234-994b-671324fdbd6b/0_0.png',
);
APhotographOfADesertLandscapeAtSunsetWithWaA1b93f9165334234994b671324fdbd6b0_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APhotographOfADesertLandscapeAtSunsetWithWaA1b93f9165334234994b671324fdbd6b0_0_Image.colorStats =
    hydrateColorStats(colorStats);
APhotographOfADesertLandscapeAtSunsetWithWaA1b93f9165334234994b671324fdbd6b0_0_Image.content = content;
