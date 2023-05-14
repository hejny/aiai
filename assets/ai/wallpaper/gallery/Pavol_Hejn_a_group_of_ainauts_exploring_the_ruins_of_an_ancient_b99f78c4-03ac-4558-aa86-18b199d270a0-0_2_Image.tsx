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
import colorStats from './Pavol_Hejn_a_group_of_ainauts_exploring_the_ruins_of_an_ancient_b99f78c4-03ac-4558-aa86-18b199d270a0-0_2.colors.json';
import content from './Pavol_Hejn_a_group_of_ainauts_exploring_the_ruins_of_an_ancient_b99f78c4-03ac-4558-aa86-18b199d270a0-0_2.content.md';
import metadata from './Pavol_Hejn_a_group_of_ainauts_exploring_the_ruins_of_an_ancient_b99f78c4-03ac-4558-aa86-18b199d270a0-0_2.json';

/**
 * Image of A group of AInauts exploring the ruins of an ancient civilization on a distant planet, with towering statues and temples all around them.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AGroupOfAinautsExploringTheRuinsOfAnAncientB99f78c403ac4558Aa8618b199d270a00_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A group of AInauts exploring the ruins of an ancient civilization on a distant planet, with towering statues and temples all around them."
            src="https://cdn.midjourney.com/b99f78c4-03ac-4558-aa86-18b199d270a0/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AGroupOfAinautsExploringTheRuinsOfAnAncientB99f78c403ac4558Aa8618b199d270a00_2_Image.src = new URL(
    'https://cdn.midjourney.com/b99f78c4-03ac-4558-aa86-18b199d270a0/0_2.png',
);
AGroupOfAinautsExploringTheRuinsOfAnAncientB99f78c403ac4558Aa8618b199d270a00_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AGroupOfAinautsExploringTheRuinsOfAnAncientB99f78c403ac4558Aa8618b199d270a00_2_Image.colorStats =
    hydrateColorStats(colorStats);
AGroupOfAinautsExploringTheRuinsOfAnAncientB99f78c403ac4558Aa8618b199d270a00_2_Image.content = content;
