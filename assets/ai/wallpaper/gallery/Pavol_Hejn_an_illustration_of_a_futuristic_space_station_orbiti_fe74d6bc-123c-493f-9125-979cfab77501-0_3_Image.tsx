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
import colorStats from './Pavol_Hejn_an_illustration_of_a_futuristic_space_station_orbiti_fe74d6bc-123c-493f-9125-979cfab77501-0_3.colors.json';
import content from './Pavol_Hejn_an_illustration_of_a_futuristic_space_station_orbiti_fe74d6bc-123c-493f-9125-979cfab77501-0_3.content.md';
import metadata from './Pavol_Hejn_an_illustration_of_a_futuristic_space_station_orbiti_fe74d6bc-123c-493f-9125-979cfab77501-0_3.json';

/**
 * Image of An illustration of a futuristic space station orbiting a distant planet, with sleek lines and metallic accents.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AnIllustrationOfAFuturisticSpaceStationOrbitiFe74d6bc123c493f9125979cfab775010_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An illustration of a futuristic space station orbiting a distant planet, with sleek lines and metallic accents."
            src="https://cdn.midjourney.com/fe74d6bc-123c-493f-9125-979cfab77501/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AnIllustrationOfAFuturisticSpaceStationOrbitiFe74d6bc123c493f9125979cfab775010_3_Image.src = new URL(
    'https://cdn.midjourney.com/fe74d6bc-123c-493f-9125-979cfab77501/0_3.png',
);
AnIllustrationOfAFuturisticSpaceStationOrbitiFe74d6bc123c493f9125979cfab775010_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnIllustrationOfAFuturisticSpaceStationOrbitiFe74d6bc123c493f9125979cfab775010_3_Image.colorStats =
    hydrateColorStats(colorStats);
AnIllustrationOfAFuturisticSpaceStationOrbitiFe74d6bc123c493f9125979cfab775010_3_Image.content = content;
