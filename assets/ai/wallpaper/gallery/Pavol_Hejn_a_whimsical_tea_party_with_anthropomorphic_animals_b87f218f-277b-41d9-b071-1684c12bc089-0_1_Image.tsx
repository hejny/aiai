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
import colorStats from './Pavol_Hejn_a_whimsical_tea_party_with_anthropomorphic_animals_b87f218f-277b-41d9-b071-1684c12bc089-0_1.colors.json';
import content from './Pavol_Hejn_a_whimsical_tea_party_with_anthropomorphic_animals_b87f218f-277b-41d9-b071-1684c12bc089-0_1.content.md';
import metadata from './Pavol_Hejn_a_whimsical_tea_party_with_anthropomorphic_animals_b87f218f-277b-41d9-b071-1684c12bc089-0_1.json';

/**
 * Image of A whimsical tea party with anthropomorphic animals
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AWhimsicalTeaPartyWithAnthropomorphicAnimalsB87f218f277b41d9B0711684c12bc0890_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A whimsical tea party with anthropomorphic animals"
            src="https://cdn.midjourney.com/b87f218f-277b-41d9-b071-1684c12bc089/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AWhimsicalTeaPartyWithAnthropomorphicAnimalsB87f218f277b41d9B0711684c12bc0890_1_Image.src = new URL(
    'https://cdn.midjourney.com/b87f218f-277b-41d9-b071-1684c12bc089/0_1.png',
);
AWhimsicalTeaPartyWithAnthropomorphicAnimalsB87f218f277b41d9B0711684c12bc0890_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWhimsicalTeaPartyWithAnthropomorphicAnimalsB87f218f277b41d9B0711684c12bc0890_1_Image.colorStats =
    hydrateColorStats(colorStats);
AWhimsicalTeaPartyWithAnthropomorphicAnimalsB87f218f277b41d9B0711684c12bc0890_1_Image.content = content;
