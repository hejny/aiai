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
import colorStats from './Pavol_Hejn_a_whimsical_scene_of_a_hot_air_balloon_flying_over_a_125d9bc2-3cc7-4abb-8bb1-6e30d498208d-0_2.colors.json';
import content from './Pavol_Hejn_a_whimsical_scene_of_a_hot_air_balloon_flying_over_a_125d9bc2-3cc7-4abb-8bb1-6e30d498208d-0_2.content.md';
import metadata from './Pavol_Hejn_a_whimsical_scene_of_a_hot_air_balloon_flying_over_a_125d9bc2-3cc7-4abb-8bb1-6e30d498208d-0_2.json';

/**
 * Image of A whimsical scene of a hot air balloon flying over a city for a lifestyle or adventure website
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AWhimsicalSceneOfAHotAirBalloonFlyingOverA125d9bc23cc74abb8bb16e30d498208d0_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A whimsical scene of a hot air balloon flying over a city for a lifestyle or adventure website"
            src="https://cdn.midjourney.com/125d9bc2-3cc7-4abb-8bb1-6e30d498208d/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AWhimsicalSceneOfAHotAirBalloonFlyingOverA125d9bc23cc74abb8bb16e30d498208d0_2_Image.src = new URL(
    'https://cdn.midjourney.com/125d9bc2-3cc7-4abb-8bb1-6e30d498208d/0_2.png',
);
AWhimsicalSceneOfAHotAirBalloonFlyingOverA125d9bc23cc74abb8bb16e30d498208d0_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWhimsicalSceneOfAHotAirBalloonFlyingOverA125d9bc23cc74abb8bb16e30d498208d0_2_Image.colorStats =
    hydrateColorStats(colorStats);
AWhimsicalSceneOfAHotAirBalloonFlyingOverA125d9bc23cc74abb8bb16e30d498208d0_2_Image.content = content;
