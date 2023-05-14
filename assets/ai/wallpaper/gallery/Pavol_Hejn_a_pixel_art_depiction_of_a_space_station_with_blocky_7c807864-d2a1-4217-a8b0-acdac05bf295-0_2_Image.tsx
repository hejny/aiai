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
import colorStats from './Pavol_Hejn_a_pixel_art_depiction_of_a_space_station_with_blocky_7c807864-d2a1-4217-a8b0-acdac05bf295-0_2.colors.json';
import content from './Pavol_Hejn_a_pixel_art_depiction_of_a_space_station_with_blocky_7c807864-d2a1-4217-a8b0-acdac05bf295-0_2.content.md';
import metadata from './Pavol_Hejn_a_pixel_art_depiction_of_a_space_station_with_blocky_7c807864-d2a1-4217-a8b0-acdac05bf295-0_2.json';

/**
 * Image of A pixel art depiction of a space station, with blocky shapes and limited colors that create a retro and futuristic feel.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function APixelArtDepictionOfASpaceStationWithBlocky7c807864D2a14217A8b0Acdac05bf2950_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A pixel art depiction of a space station, with blocky shapes and limited colors that create a retro and futuristic feel."
            src="https://cdn.midjourney.com/7c807864-d2a1-4217-a8b0-acdac05bf295/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
APixelArtDepictionOfASpaceStationWithBlocky7c807864D2a14217A8b0Acdac05bf2950_2_Image.src = new URL(
    'https://cdn.midjourney.com/7c807864-d2a1-4217-a8b0-acdac05bf295/0_2.png',
);
APixelArtDepictionOfASpaceStationWithBlocky7c807864D2a14217A8b0Acdac05bf2950_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APixelArtDepictionOfASpaceStationWithBlocky7c807864D2a14217A8b0Acdac05bf2950_2_Image.colorStats =
    hydrateColorStats(colorStats);
APixelArtDepictionOfASpaceStationWithBlocky7c807864D2a14217A8b0Acdac05bf2950_2_Image.content = content;
