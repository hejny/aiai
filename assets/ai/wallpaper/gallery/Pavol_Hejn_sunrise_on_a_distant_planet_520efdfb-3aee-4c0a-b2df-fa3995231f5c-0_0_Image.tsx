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
import colorStats from './Pavol_Hejn_sunrise_on_a_distant_planet_520efdfb-3aee-4c0a-b2df-fa3995231f5c-0_0.colors.json';
import content from './Pavol_Hejn_sunrise_on_a_distant_planet_520efdfb-3aee-4c0a-b2df-fa3995231f5c-0_0.content.md';
import metadata from './Pavol_Hejn_sunrise_on_a_distant_planet_520efdfb-3aee-4c0a-b2df-fa3995231f5c-0_0.json';

/**
 * Image of Sunrise on a distant planet
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function SunriseOnADistantPlanet520efdfb3aee4c0aB2dfFa3995231f5c0_0_Image(props: IWallpaperComponentProps) {
    const { width, quality } = props;

    return (
        <Image
            alt="Sunrise on a distant planet"
            src="https://cdn.midjourney.com/520efdfb-3aee-4c0a-b2df-fa3995231f5c/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
SunriseOnADistantPlanet520efdfb3aee4c0aB2dfFa3995231f5c0_0_Image.src = new URL(
    'https://cdn.midjourney.com/520efdfb-3aee-4c0a-b2df-fa3995231f5c/0_0.png',
);
SunriseOnADistantPlanet520efdfb3aee4c0aB2dfFa3995231f5c0_0_Image.metadata = metadata satisfies IWallpaperMetadata;
SunriseOnADistantPlanet520efdfb3aee4c0aB2dfFa3995231f5c0_0_Image.colorStats = hydrateColorStats(colorStats);
SunriseOnADistantPlanet520efdfb3aee4c0aB2dfFa3995231f5c0_0_Image.content = content;
