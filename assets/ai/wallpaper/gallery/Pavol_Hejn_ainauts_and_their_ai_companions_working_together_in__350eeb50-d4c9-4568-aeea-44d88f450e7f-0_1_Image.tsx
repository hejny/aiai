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
import colorStats from './Pavol_Hejn_ainauts_and_their_ai_companions_working_together_in__350eeb50-d4c9-4568-aeea-44d88f450e7f-0_1.colors.json';
import content from './Pavol_Hejn_ainauts_and_their_ai_companions_working_together_in__350eeb50-d4c9-4568-aeea-44d88f450e7f-0_1.content.md';
import metadata from './Pavol_Hejn_ainauts_and_their_ai_companions_working_together_in__350eeb50-d4c9-4568-aeea-44d88f450e7f-0_1.json';

/**
 * Image of AInauts and their AI companions working together in a massive, zero-gravity space station.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AinautsAndTheirAiCompanionsWorkingTogetherIn350eeb50D4c94568Aeea44d88f450e7f0_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="AInauts and their AI companions working together in a massive, zero-gravity space station."
            src="https://cdn.midjourney.com/350eeb50-d4c9-4568-aeea-44d88f450e7f/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AinautsAndTheirAiCompanionsWorkingTogetherIn350eeb50D4c94568Aeea44d88f450e7f0_1_Image.src = new URL(
    'https://cdn.midjourney.com/350eeb50-d4c9-4568-aeea-44d88f450e7f/0_1.png',
);
AinautsAndTheirAiCompanionsWorkingTogetherIn350eeb50D4c94568Aeea44d88f450e7f0_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AinautsAndTheirAiCompanionsWorkingTogetherIn350eeb50D4c94568Aeea44d88f450e7f0_1_Image.colorStats =
    hydrateColorStats(colorStats);
AinautsAndTheirAiCompanionsWorkingTogetherIn350eeb50D4c94568Aeea44d88f450e7f0_1_Image.content = content;
