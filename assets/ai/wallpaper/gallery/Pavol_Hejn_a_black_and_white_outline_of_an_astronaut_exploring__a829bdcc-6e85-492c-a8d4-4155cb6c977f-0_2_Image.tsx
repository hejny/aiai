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
import colorStats from './Pavol_Hejn_a_black_and_white_outline_of_an_astronaut_exploring__a829bdcc-6e85-492c-a8d4-4155cb6c977f-0_2.colors.json';
import content from './Pavol_Hejn_a_black_and_white_outline_of_an_astronaut_exploring__a829bdcc-6e85-492c-a8d4-4155cb6c977f-0_2.content.md';
import metadata from './Pavol_Hejn_a_black_and_white_outline_of_an_astronaut_exploring__a829bdcc-6e85-492c-a8d4-4155cb6c977f-0_2.json';

/**
 * Image of A black and white outline of an astronaut exploring a distant planet, with intricate details and shading.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ABlackAndWhiteOutlineOfAnAstronautExploringA829bdcc6e85492cA8d44155cb6c977f0_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A black and white outline of an astronaut exploring a distant planet, with intricate details and shading."
            src="https://cdn.midjourney.com/a829bdcc-6e85-492c-a8d4-4155cb6c977f/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
ABlackAndWhiteOutlineOfAnAstronautExploringA829bdcc6e85492cA8d44155cb6c977f0_2_Image.src = new URL(
    'https://cdn.midjourney.com/a829bdcc-6e85-492c-a8d4-4155cb6c977f/0_2.png',
);
ABlackAndWhiteOutlineOfAnAstronautExploringA829bdcc6e85492cA8d44155cb6c977f0_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ABlackAndWhiteOutlineOfAnAstronautExploringA829bdcc6e85492cA8d44155cb6c977f0_2_Image.colorStats =
    hydrateColorStats(colorStats);
ABlackAndWhiteOutlineOfAnAstronautExploringA829bdcc6e85492cA8d44155cb6c977f0_2_Image.content = content;
