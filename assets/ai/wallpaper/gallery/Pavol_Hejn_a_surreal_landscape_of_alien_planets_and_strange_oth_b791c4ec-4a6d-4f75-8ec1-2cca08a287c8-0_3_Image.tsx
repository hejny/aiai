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
import colorStats from './Pavol_Hejn_a_surreal_landscape_of_alien_planets_and_strange_oth_b791c4ec-4a6d-4f75-8ec1-2cca08a287c8-0_3.colors.json';
import content from './Pavol_Hejn_a_surreal_landscape_of_alien_planets_and_strange_oth_b791c4ec-4a6d-4f75-8ec1-2cca08a287c8-0_3.content.md';
import metadata from './Pavol_Hejn_a_surreal_landscape_of_alien_planets_and_strange_oth_b791c4ec-4a6d-4f75-8ec1-2cca08a287c8-0_3.json';

/**
 * Image of A surreal landscape of alien planets and strange, otherworldly creatures.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function ASurrealLandscapeOfAlienPlanetsAndStrangeOthB791c4ec4a6d4f758ec12cca08a287c80_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A surreal landscape of alien planets and strange, otherworldly creatures."
            src="https://cdn.midjourney.com/b791c4ec-4a6d-4f75-8ec1-2cca08a287c8/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
ASurrealLandscapeOfAlienPlanetsAndStrangeOthB791c4ec4a6d4f758ec12cca08a287c80_3_Image.src = new URL(
    'https://cdn.midjourney.com/b791c4ec-4a6d-4f75-8ec1-2cca08a287c8/0_3.png',
);
ASurrealLandscapeOfAlienPlanetsAndStrangeOthB791c4ec4a6d4f758ec12cca08a287c80_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ASurrealLandscapeOfAlienPlanetsAndStrangeOthB791c4ec4a6d4f758ec12cca08a287c80_3_Image.colorStats =
    hydrateColorStats(colorStats);
ASurrealLandscapeOfAlienPlanetsAndStrangeOthB791c4ec4a6d4f758ec12cca08a287c80_3_Image.content = content;
