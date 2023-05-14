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
import colorStats from './Pavol_Hejn_a_futuristic_cityscape_where_ainauts_use_advanced_ai_2f918843-47cf-41c9-b513-78e3d39ff3a1-0_1.colors.json';
import content from './Pavol_Hejn_a_futuristic_cityscape_where_ainauts_use_advanced_ai_2f918843-47cf-41c9-b513-78e3d39ff3a1-0_1.content.md';
import metadata from './Pavol_Hejn_a_futuristic_cityscape_where_ainauts_use_advanced_ai_2f918843-47cf-41c9-b513-78e3d39ff3a1-0_1.json';

/**
 * Image of A futuristic cityscape where AInauts use advanced AI technology to monitor and maintain the city's infrastructure and systems.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AFuturisticCityscapeWhereAinautsUseAdvancedAi2f91884347cf41c9B51378e3d39ff3a10_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A futuristic cityscape where AInauts use advanced AI technology to monitor and maintain the city's infrastructure and systems."
            src="https://cdn.midjourney.com/2f918843-47cf-41c9-b513-78e3d39ff3a1/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AFuturisticCityscapeWhereAinautsUseAdvancedAi2f91884347cf41c9B51378e3d39ff3a10_1_Image.src = new URL(
    'https://cdn.midjourney.com/2f918843-47cf-41c9-b513-78e3d39ff3a1/0_1.png',
);
AFuturisticCityscapeWhereAinautsUseAdvancedAi2f91884347cf41c9B51378e3d39ff3a10_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AFuturisticCityscapeWhereAinautsUseAdvancedAi2f91884347cf41c9B51378e3d39ff3a10_1_Image.colorStats =
    hydrateColorStats(colorStats);
AFuturisticCityscapeWhereAinautsUseAdvancedAi2f91884347cf41c9B51378e3d39ff3a10_1_Image.content = content;
