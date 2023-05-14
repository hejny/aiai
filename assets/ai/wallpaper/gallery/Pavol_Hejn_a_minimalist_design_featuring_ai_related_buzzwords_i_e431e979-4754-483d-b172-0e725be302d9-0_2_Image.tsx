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
import colorStats from './Pavol_Hejn_a_minimalist_design_featuring_ai_related_buzzwords_i_e431e979-4754-483d-b172-0e725be302d9-0_2.colors.json';
import content from './Pavol_Hejn_a_minimalist_design_featuring_ai_related_buzzwords_i_e431e979-4754-483d-b172-0e725be302d9-0_2.content.md';
import metadata from './Pavol_Hejn_a_minimalist_design_featuring_ai_related_buzzwords_i_e431e979-4754-483d-b172-0e725be302d9-0_2.json';

/**
 * Image of A minimalist design featuring AI-related buzzwords in different fonts and colors
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AMinimalistDesignFeaturingAiRelatedBuzzwordsIE431e9794754483dB1720e725be302d90_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A minimalist design featuring AI-related buzzwords in different fonts and colors"
            src="https://cdn.midjourney.com/e431e979-4754-483d-b172-0e725be302d9/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AMinimalistDesignFeaturingAiRelatedBuzzwordsIE431e9794754483dB1720e725be302d90_2_Image.src = new URL(
    'https://cdn.midjourney.com/e431e979-4754-483d-b172-0e725be302d9/0_2.png',
);
AMinimalistDesignFeaturingAiRelatedBuzzwordsIE431e9794754483dB1720e725be302d90_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AMinimalistDesignFeaturingAiRelatedBuzzwordsIE431e9794754483dB1720e725be302d90_2_Image.colorStats =
    hydrateColorStats(colorStats);
AMinimalistDesignFeaturingAiRelatedBuzzwordsIE431e9794754483dB1720e725be302d90_2_Image.content = content;
