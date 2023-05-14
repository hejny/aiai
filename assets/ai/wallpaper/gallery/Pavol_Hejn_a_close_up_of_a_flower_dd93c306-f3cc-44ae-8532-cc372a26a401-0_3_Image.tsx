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
import colorStats from './Pavol_Hejn_a_close_up_of_a_flower_dd93c306-f3cc-44ae-8532-cc372a26a401-0_3.colors.json';
import content from './Pavol_Hejn_a_close_up_of_a_flower_dd93c306-f3cc-44ae-8532-cc372a26a401-0_3.content.md';
import metadata from './Pavol_Hejn_a_close_up_of_a_flower_dd93c306-f3cc-44ae-8532-cc372a26a401-0_3.json';

/**
 * Image of A close-up of a flower
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function ACloseUpOfAFlowerDd93c306F3cc44ae8532Cc372a26a4010_3_Image(props: IWallpaperComponentProps) {
    const { width, quality } = props;

    return (
        <Image
            alt="A close-up of a flower"
            src="https://cdn.midjourney.com/dd93c306-f3cc-44ae-8532-cc372a26a401/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
ACloseUpOfAFlowerDd93c306F3cc44ae8532Cc372a26a4010_3_Image.src = new URL(
    'https://cdn.midjourney.com/dd93c306-f3cc-44ae-8532-cc372a26a401/0_3.png',
);
ACloseUpOfAFlowerDd93c306F3cc44ae8532Cc372a26a4010_3_Image.metadata = metadata satisfies IWallpaperMetadata;
ACloseUpOfAFlowerDd93c306F3cc44ae8532Cc372a26a4010_3_Image.colorStats = hydrateColorStats(colorStats);
ACloseUpOfAFlowerDd93c306F3cc44ae8532Cc372a26a4010_3_Image.content = content;
