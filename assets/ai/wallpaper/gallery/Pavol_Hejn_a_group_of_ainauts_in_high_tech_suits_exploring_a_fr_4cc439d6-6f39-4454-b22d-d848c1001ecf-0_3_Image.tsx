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
import colorStats from './Pavol_Hejn_a_group_of_ainauts_in_high_tech_suits_exploring_a_fr_4cc439d6-6f39-4454-b22d-d848c1001ecf-0_3.colors.json';
import content from './Pavol_Hejn_a_group_of_ainauts_in_high_tech_suits_exploring_a_fr_4cc439d6-6f39-4454-b22d-d848c1001ecf-0_3.content.md';
import metadata from './Pavol_Hejn_a_group_of_ainauts_in_high_tech_suits_exploring_a_fr_4cc439d6-6f39-4454-b22d-d848c1001ecf-0_3.json';

/**
 * Image of A group of AInauts in high-tech suits exploring a frozen wasteland on a distant planet, with towering ice formations all around them.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AGroupOfAinautsInHighTechSuitsExploringAFr4cc439d66f394454B22dD848c1001ecf0_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A group of AInauts in high-tech suits exploring a frozen wasteland on a distant planet, with towering ice formations all around them."
            src="https://cdn.midjourney.com/4cc439d6-6f39-4454-b22d-d848c1001ecf/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AGroupOfAinautsInHighTechSuitsExploringAFr4cc439d66f394454B22dD848c1001ecf0_3_Image.src = new URL(
    'https://cdn.midjourney.com/4cc439d6-6f39-4454-b22d-d848c1001ecf/0_3.png',
);
AGroupOfAinautsInHighTechSuitsExploringAFr4cc439d66f394454B22dD848c1001ecf0_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AGroupOfAinautsInHighTechSuitsExploringAFr4cc439d66f394454B22dD848c1001ecf0_3_Image.colorStats =
    hydrateColorStats(colorStats);
AGroupOfAinautsInHighTechSuitsExploringAFr4cc439d66f394454B22dD848c1001ecf0_3_Image.content = content;
