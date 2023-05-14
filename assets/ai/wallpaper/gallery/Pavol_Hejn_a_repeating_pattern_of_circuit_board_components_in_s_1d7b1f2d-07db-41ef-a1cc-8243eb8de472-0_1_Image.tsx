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
import colorStats from './Pavol_Hejn_a_repeating_pattern_of_circuit_board_components_in_s_1d7b1f2d-07db-41ef-a1cc-8243eb8de472-0_1.colors.json';
import content from './Pavol_Hejn_a_repeating_pattern_of_circuit_board_components_in_s_1d7b1f2d-07db-41ef-a1cc-8243eb8de472-0_1.content.md';
import metadata from './Pavol_Hejn_a_repeating_pattern_of_circuit_board_components_in_s_1d7b1f2d-07db-41ef-a1cc-8243eb8de472-0_1.json';

/**
 * Image of A repeating pattern of circuit board components, in shades of black, grey, and neon green.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function ARepeatingPatternOfCircuitBoardComponentsInSd7b1f2d07db41efA1cc8243eb8de47201_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A repeating pattern of circuit board components, in shades of black, grey, and neon green."
            src="https://cdn.midjourney.com/1d7b1f2d-07db-41ef-a1cc-8243eb8de472/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
ARepeatingPatternOfCircuitBoardComponentsInSd7b1f2d07db41efA1cc8243eb8de47201_1_Image.src = new URL(
    'https://cdn.midjourney.com/1d7b1f2d-07db-41ef-a1cc-8243eb8de472/0_1.png',
);
ARepeatingPatternOfCircuitBoardComponentsInSd7b1f2d07db41efA1cc8243eb8de47201_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ARepeatingPatternOfCircuitBoardComponentsInSd7b1f2d07db41efA1cc8243eb8de47201_1_Image.colorStats =
    hydrateColorStats(colorStats);
ARepeatingPatternOfCircuitBoardComponentsInSd7b1f2d07db41efA1cc8243eb8de47201_1_Image.content = content;
