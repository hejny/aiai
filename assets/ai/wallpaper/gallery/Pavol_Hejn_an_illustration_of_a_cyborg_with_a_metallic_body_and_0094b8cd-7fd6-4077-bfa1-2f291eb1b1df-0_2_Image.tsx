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
import colorStats from './Pavol_Hejn_an_illustration_of_a_cyborg_with_a_metallic_body_and_0094b8cd-7fd6-4077-bfa1-2f291eb1b1df-0_2.colors.json';
import content from './Pavol_Hejn_an_illustration_of_a_cyborg_with_a_metallic_body_and_0094b8cd-7fd6-4077-bfa1-2f291eb1b1df-0_2.content.md';
import metadata from './Pavol_Hejn_an_illustration_of_a_cyborg_with_a_metallic_body_and_0094b8cd-7fd6-4077-bfa1-2f291eb1b1df-0_2.json';

/**
 * Image of An illustration of a cyborg with a metallic body and glowing eyes
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AnIllustrationOfACyborgWithAMetallicBodyAnd0094b8cd7fd64077Bfa12f291eb1b1df0_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An illustration of a cyborg with a metallic body and glowing eyes"
            src="https://cdn.midjourney.com/0094b8cd-7fd6-4077-bfa1-2f291eb1b1df/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AnIllustrationOfACyborgWithAMetallicBodyAnd0094b8cd7fd64077Bfa12f291eb1b1df0_2_Image.src = new URL(
    'https://cdn.midjourney.com/0094b8cd-7fd6-4077-bfa1-2f291eb1b1df/0_2.png',
);
AnIllustrationOfACyborgWithAMetallicBodyAnd0094b8cd7fd64077Bfa12f291eb1b1df0_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnIllustrationOfACyborgWithAMetallicBodyAnd0094b8cd7fd64077Bfa12f291eb1b1df0_2_Image.colorStats =
    hydrateColorStats(colorStats);
AnIllustrationOfACyborgWithAMetallicBodyAnd0094b8cd7fd64077Bfa12f291eb1b1df0_2_Image.content = content;
