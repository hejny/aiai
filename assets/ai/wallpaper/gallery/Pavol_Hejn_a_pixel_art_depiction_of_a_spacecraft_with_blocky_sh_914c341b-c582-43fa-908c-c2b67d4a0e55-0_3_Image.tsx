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
import colorStats from './Pavol_Hejn_a_pixel_art_depiction_of_a_spacecraft_with_blocky_sh_914c341b-c582-43fa-908c-c2b67d4a0e55-0_3.colors.json';
import content from './Pavol_Hejn_a_pixel_art_depiction_of_a_spacecraft_with_blocky_sh_914c341b-c582-43fa-908c-c2b67d4a0e55-0_3.content.md';
import metadata from './Pavol_Hejn_a_pixel_art_depiction_of_a_spacecraft_with_blocky_sh_914c341b-c582-43fa-908c-c2b67d4a0e55-0_3.json';

/**
 * Image of A pixel art depiction of a spacecraft, with blocky shapes and limited colors creating a nostalgic and playful feel.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function APixelArtDepictionOfASpacecraftWithBlockySh914c341bC58243fa908cC2b67d4a0e550_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A pixel art depiction of a spacecraft, with blocky shapes and limited colors creating a nostalgic and playful feel."
            src="https://cdn.midjourney.com/914c341b-c582-43fa-908c-c2b67d4a0e55/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
APixelArtDepictionOfASpacecraftWithBlockySh914c341bC58243fa908cC2b67d4a0e550_3_Image.src = new URL(
    'https://cdn.midjourney.com/914c341b-c582-43fa-908c-c2b67d4a0e55/0_3.png',
);
APixelArtDepictionOfASpacecraftWithBlockySh914c341bC58243fa908cC2b67d4a0e550_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APixelArtDepictionOfASpacecraftWithBlockySh914c341bC58243fa908cC2b67d4a0e550_3_Image.colorStats =
    hydrateColorStats(colorStats);
APixelArtDepictionOfASpacecraftWithBlockySh914c341bC58243fa908cC2b67d4a0e550_3_Image.content = content;
