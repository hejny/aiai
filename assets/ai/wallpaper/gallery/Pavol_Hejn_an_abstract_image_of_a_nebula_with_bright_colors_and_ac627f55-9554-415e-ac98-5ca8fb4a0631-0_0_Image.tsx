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
import colorStats from './Pavol_Hejn_an_abstract_image_of_a_nebula_with_bright_colors_and_ac627f55-9554-415e-ac98-5ca8fb4a0631-0_0.colors.json';
import content from './Pavol_Hejn_an_abstract_image_of_a_nebula_with_bright_colors_and_ac627f55-9554-415e-ac98-5ca8fb4a0631-0_0.content.md';
import metadata from './Pavol_Hejn_an_abstract_image_of_a_nebula_with_bright_colors_and_ac627f55-9554-415e-ac98-5ca8fb4a0631-0_0.json';

/**
 * Image of An abstract image of a nebula, with bright colors and intricate patterns representing the birth of stars.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AnAbstractImageOfANebulaWithBrightColorsAndAc627f559554415eAc985ca8fb4a06310_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An abstract image of a nebula, with bright colors and intricate patterns representing the birth of stars."
            src="https://cdn.midjourney.com/ac627f55-9554-415e-ac98-5ca8fb4a0631/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AnAbstractImageOfANebulaWithBrightColorsAndAc627f559554415eAc985ca8fb4a06310_0_Image.src = new URL(
    'https://cdn.midjourney.com/ac627f55-9554-415e-ac98-5ca8fb4a0631/0_0.png',
);
AnAbstractImageOfANebulaWithBrightColorsAndAc627f559554415eAc985ca8fb4a06310_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractImageOfANebulaWithBrightColorsAndAc627f559554415eAc985ca8fb4a06310_0_Image.colorStats =
    hydrateColorStats(colorStats);
AnAbstractImageOfANebulaWithBrightColorsAndAc627f559554415eAc985ca8fb4a06310_0_Image.content = content;
