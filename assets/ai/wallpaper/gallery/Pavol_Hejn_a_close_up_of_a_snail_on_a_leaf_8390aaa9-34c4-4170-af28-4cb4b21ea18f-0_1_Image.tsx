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
import colorStats from './Pavol_Hejn_a_close_up_of_a_snail_on_a_leaf_8390aaa9-34c4-4170-af28-4cb4b21ea18f-0_1.colors.json';
import content from './Pavol_Hejn_a_close_up_of_a_snail_on_a_leaf_8390aaa9-34c4-4170-af28-4cb4b21ea18f-0_1.content.md';
import metadata from './Pavol_Hejn_a_close_up_of_a_snail_on_a_leaf_8390aaa9-34c4-4170-af28-4cb4b21ea18f-0_1.json';

/**
 * Image of A close-up of a snail on a leaf
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function ACloseUpOfASnailOnALeaf8390aaa934c44170Af284cb4b21ea18f0_1_Image(props: IWallpaperComponentProps) {
    const { width, quality } = props;

    return (
        <Image
            alt="A close-up of a snail on a leaf"
            src="https://cdn.midjourney.com/8390aaa9-34c4-4170-af28-4cb4b21ea18f/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
ACloseUpOfASnailOnALeaf8390aaa934c44170Af284cb4b21ea18f0_1_Image.src = new URL(
    'https://cdn.midjourney.com/8390aaa9-34c4-4170-af28-4cb4b21ea18f/0_1.png',
);
ACloseUpOfASnailOnALeaf8390aaa934c44170Af284cb4b21ea18f0_1_Image.metadata = metadata satisfies IWallpaperMetadata;
ACloseUpOfASnailOnALeaf8390aaa934c44170Af284cb4b21ea18f0_1_Image.colorStats = hydrateColorStats(colorStats);
ACloseUpOfASnailOnALeaf8390aaa934c44170Af284cb4b21ea18f0_1_Image.content = content;
