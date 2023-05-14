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
import colorStats from './Pavol_Hejn_a_photograph_of_a_desert_landscape_at_night_with_the_db92ecf6-3fc7-4288-aca3-60da9195d7b0-0_2.colors.json';
import content from './Pavol_Hejn_a_photograph_of_a_desert_landscape_at_night_with_the_db92ecf6-3fc7-4288-aca3-60da9195d7b0-0_2.content.md';
import metadata from './Pavol_Hejn_a_photograph_of_a_desert_landscape_at_night_with_the_db92ecf6-3fc7-4288-aca3-60da9195d7b0-0_2.json';

/**
 * Image of A photograph of a desert landscape at night, with the stars visible in the sky above.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function APhotographOfADesertLandscapeAtNightWithTheDb92ecf63fc74288Aca360da9195d7b00_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A photograph of a desert landscape at night, with the stars visible in the sky above."
            src="https://cdn.midjourney.com/db92ecf6-3fc7-4288-aca3-60da9195d7b0/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
APhotographOfADesertLandscapeAtNightWithTheDb92ecf63fc74288Aca360da9195d7b00_2_Image.src = new URL(
    'https://cdn.midjourney.com/db92ecf6-3fc7-4288-aca3-60da9195d7b0/0_2.png',
);
APhotographOfADesertLandscapeAtNightWithTheDb92ecf63fc74288Aca360da9195d7b00_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APhotographOfADesertLandscapeAtNightWithTheDb92ecf63fc74288Aca360da9195d7b00_2_Image.colorStats =
    hydrateColorStats(colorStats);
APhotographOfADesertLandscapeAtNightWithTheDb92ecf63fc74288Aca360da9195d7b00_2_Image.content = content;
