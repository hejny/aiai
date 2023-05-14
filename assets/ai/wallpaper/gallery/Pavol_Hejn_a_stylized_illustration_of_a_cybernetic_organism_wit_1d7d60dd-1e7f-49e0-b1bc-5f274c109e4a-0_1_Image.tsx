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
import colorStats from './Pavol_Hejn_a_stylized_illustration_of_a_cybernetic_organism_wit_1d7d60dd-1e7f-49e0-b1bc-5f274c109e4a-0_1.colors.json';
import content from './Pavol_Hejn_a_stylized_illustration_of_a_cybernetic_organism_wit_1d7d60dd-1e7f-49e0-b1bc-5f274c109e4a-0_1.content.md';
import metadata from './Pavol_Hejn_a_stylized_illustration_of_a_cybernetic_organism_wit_1d7d60dd-1e7f-49e0-b1bc-5f274c109e4a-0_1.json';

/**
 * Image of A stylized illustration of a cybernetic organism, with metallic textures and digital glitch effects.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AStylizedIllustrationOfACyberneticOrganismWitd7d60dd1e7f49e0B1bc5f274c109e4a01_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A stylized illustration of a cybernetic organism, with metallic textures and digital glitch effects."
            src="https://cdn.midjourney.com/1d7d60dd-1e7f-49e0-b1bc-5f274c109e4a/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AStylizedIllustrationOfACyberneticOrganismWitd7d60dd1e7f49e0B1bc5f274c109e4a01_1_Image.src = new URL(
    'https://cdn.midjourney.com/1d7d60dd-1e7f-49e0-b1bc-5f274c109e4a/0_1.png',
);
AStylizedIllustrationOfACyberneticOrganismWitd7d60dd1e7f49e0B1bc5f274c109e4a01_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AStylizedIllustrationOfACyberneticOrganismWitd7d60dd1e7f49e0B1bc5f274c109e4a01_1_Image.colorStats =
    hydrateColorStats(colorStats);
AStylizedIllustrationOfACyberneticOrganismWitd7d60dd1e7f49e0B1bc5f274c109e4a01_1_Image.content = content;
