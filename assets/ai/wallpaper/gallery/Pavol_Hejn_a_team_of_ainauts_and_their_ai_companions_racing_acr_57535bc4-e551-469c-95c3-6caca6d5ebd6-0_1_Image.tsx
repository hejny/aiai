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
import colorStats from './Pavol_Hejn_a_team_of_ainauts_and_their_ai_companions_racing_acr_57535bc4-e551-469c-95c3-6caca6d5ebd6-0_1.colors.json';
import content from './Pavol_Hejn_a_team_of_ainauts_and_their_ai_companions_racing_acr_57535bc4-e551-469c-95c3-6caca6d5ebd6-0_1.content.md';
import metadata from './Pavol_Hejn_a_team_of_ainauts_and_their_ai_companions_racing_acr_57535bc4-e551-469c-95c3-6caca6d5ebd6-0_1.json';

/**
 * Image of A team of AInauts and their AI companions racing across the surface of a desert planet in high-tech buggies.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function ATeamOfAinautsAndTheirAiCompanionsRacingAcr57535bc4E551469c95c36caca6d5ebd60_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A team of AInauts and their AI companions racing across the surface of a desert planet in high-tech buggies."
            src="https://cdn.midjourney.com/57535bc4-e551-469c-95c3-6caca6d5ebd6/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
ATeamOfAinautsAndTheirAiCompanionsRacingAcr57535bc4E551469c95c36caca6d5ebd60_1_Image.src = new URL(
    'https://cdn.midjourney.com/57535bc4-e551-469c-95c3-6caca6d5ebd6/0_1.png',
);
ATeamOfAinautsAndTheirAiCompanionsRacingAcr57535bc4E551469c95c36caca6d5ebd60_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ATeamOfAinautsAndTheirAiCompanionsRacingAcr57535bc4E551469c95c36caca6d5ebd60_1_Image.colorStats =
    hydrateColorStats(colorStats);
ATeamOfAinautsAndTheirAiCompanionsRacingAcr57535bc4E551469c95c36caca6d5ebd60_1_Image.content = content;
