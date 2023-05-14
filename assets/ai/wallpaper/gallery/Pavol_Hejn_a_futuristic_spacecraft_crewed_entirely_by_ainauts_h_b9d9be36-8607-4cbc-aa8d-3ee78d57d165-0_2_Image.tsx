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
import colorStats from './Pavol_Hejn_a_futuristic_spacecraft_crewed_entirely_by_ainauts_h_b9d9be36-8607-4cbc-aa8d-3ee78d57d165-0_2.colors.json';
import content from './Pavol_Hejn_a_futuristic_spacecraft_crewed_entirely_by_ainauts_h_b9d9be36-8607-4cbc-aa8d-3ee78d57d165-0_2.content.md';
import metadata from './Pavol_Hejn_a_futuristic_spacecraft_crewed_entirely_by_ainauts_h_b9d9be36-8607-4cbc-aa8d-3ee78d57d165-0_2.json';

/**
 * Image of A futuristic spacecraft crewed entirely by AInauts, hurtling through space at incredible speeds.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AFuturisticSpacecraftCrewedEntirelyByAinautsHB9d9be3686074cbcAa8d3ee78d57d1650_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A futuristic spacecraft crewed entirely by AInauts, hurtling through space at incredible speeds."
            src="https://cdn.midjourney.com/b9d9be36-8607-4cbc-aa8d-3ee78d57d165/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AFuturisticSpacecraftCrewedEntirelyByAinautsHB9d9be3686074cbcAa8d3ee78d57d1650_2_Image.src = new URL(
    'https://cdn.midjourney.com/b9d9be36-8607-4cbc-aa8d-3ee78d57d165/0_2.png',
);
AFuturisticSpacecraftCrewedEntirelyByAinautsHB9d9be3686074cbcAa8d3ee78d57d1650_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AFuturisticSpacecraftCrewedEntirelyByAinautsHB9d9be3686074cbcAa8d3ee78d57d1650_2_Image.colorStats =
    hydrateColorStats(colorStats);
AFuturisticSpacecraftCrewedEntirelyByAinautsHB9d9be3686074cbcAa8d3ee78d57d1650_2_Image.content = content;
