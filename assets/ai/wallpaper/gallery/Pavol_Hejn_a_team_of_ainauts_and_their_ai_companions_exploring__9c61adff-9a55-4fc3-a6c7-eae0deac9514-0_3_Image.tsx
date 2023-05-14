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
import colorStats from './Pavol_Hejn_a_team_of_ainauts_and_their_ai_companions_exploring__9c61adff-9a55-4fc3-a6c7-eae0deac9514-0_3.colors.json';
import content from './Pavol_Hejn_a_team_of_ainauts_and_their_ai_companions_exploring__9c61adff-9a55-4fc3-a6c7-eae0deac9514-0_3.content.md';
import metadata from './Pavol_Hejn_a_team_of_ainauts_and_their_ai_companions_exploring__9c61adff-9a55-4fc3-a6c7-eae0deac9514-0_3.json';

/**
 * Image of A team of AInauts and their AI companions exploring a massive, ancient space station orbiting a distant planet.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function ATeamOfAinautsAndTheirAiCompanionsExploring9c61adff9a554fc3A6c7Eae0deac95140_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A team of AInauts and their AI companions exploring a massive, ancient space station orbiting a distant planet."
            src="https://cdn.midjourney.com/9c61adff-9a55-4fc3-a6c7-eae0deac9514/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
ATeamOfAinautsAndTheirAiCompanionsExploring9c61adff9a554fc3A6c7Eae0deac95140_3_Image.src = new URL(
    'https://cdn.midjourney.com/9c61adff-9a55-4fc3-a6c7-eae0deac9514/0_3.png',
);
ATeamOfAinautsAndTheirAiCompanionsExploring9c61adff9a554fc3A6c7Eae0deac95140_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ATeamOfAinautsAndTheirAiCompanionsExploring9c61adff9a554fc3A6c7Eae0deac95140_3_Image.colorStats =
    hydrateColorStats(colorStats);
ATeamOfAinautsAndTheirAiCompanionsExploring9c61adff9a554fc3A6c7Eae0deac95140_3_Image.content = content;
