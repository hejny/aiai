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
import colorStats from './Pavol_Hejn_a_stylized_illustration_of_a_cybernetic_organism_wit_12decd4f-8a8d-4265-a6b1-9494d1ae4ee1-0_1.colors.json';
import content from './Pavol_Hejn_a_stylized_illustration_of_a_cybernetic_organism_wit_12decd4f-8a8d-4265-a6b1-9494d1ae4ee1-0_1.content.md';
import metadata from './Pavol_Hejn_a_stylized_illustration_of_a_cybernetic_organism_wit_12decd4f-8a8d-4265-a6b1-9494d1ae4ee1-0_1.json';

/**
 * Image of A stylized illustration of a cybernetic organism, with metallic textures and digital glitch effects.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AStylizedIllustrationOfACyberneticOrganismWit2decd4f8a8d4265A6b19494d1ae4ee101_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A stylized illustration of a cybernetic organism, with metallic textures and digital glitch effects."
            src="https://cdn.midjourney.com/12decd4f-8a8d-4265-a6b1-9494d1ae4ee1/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AStylizedIllustrationOfACyberneticOrganismWit2decd4f8a8d4265A6b19494d1ae4ee101_1_Image.src = new URL(
    'https://cdn.midjourney.com/12decd4f-8a8d-4265-a6b1-9494d1ae4ee1/0_1.png',
);
AStylizedIllustrationOfACyberneticOrganismWit2decd4f8a8d4265A6b19494d1ae4ee101_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AStylizedIllustrationOfACyberneticOrganismWit2decd4f8a8d4265A6b19494d1ae4ee101_1_Image.colorStats =
    hydrateColorStats(colorStats);
AStylizedIllustrationOfACyberneticOrganismWit2decd4f8a8d4265A6b19494d1ae4ee101_1_Image.content = content;
