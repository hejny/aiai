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
import colorStats from './Pavol_Hejn_a_forest_with_a_misty_background_030fba95-971b-42b8-8a52-a9afcde8dc7c-0_1.colors.json';
import content from './Pavol_Hejn_a_forest_with_a_misty_background_030fba95-971b-42b8-8a52-a9afcde8dc7c-0_1.content.md';
import metadata from './Pavol_Hejn_a_forest_with_a_misty_background_030fba95-971b-42b8-8a52-a9afcde8dc7c-0_1.json';

/**
 * Image of A forest with a misty background
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AForestWithAMistyBackground030fba95971b42b88a52A9afcde8dc7c0_1_Image(props: IWallpaperComponentProps) {
    const { width, quality } = props;

    return (
        <Image
            alt="A forest with a misty background"
            src="https://cdn.midjourney.com/030fba95-971b-42b8-8a52-a9afcde8dc7c/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AForestWithAMistyBackground030fba95971b42b88a52A9afcde8dc7c0_1_Image.src = new URL(
    'https://cdn.midjourney.com/030fba95-971b-42b8-8a52-a9afcde8dc7c/0_1.png',
);
AForestWithAMistyBackground030fba95971b42b88a52A9afcde8dc7c0_1_Image.metadata = metadata satisfies IWallpaperMetadata;
AForestWithAMistyBackground030fba95971b42b88a52A9afcde8dc7c0_1_Image.colorStats = hydrateColorStats(colorStats);
AForestWithAMistyBackground030fba95971b42b88a52A9afcde8dc7c0_1_Image.content = content;
