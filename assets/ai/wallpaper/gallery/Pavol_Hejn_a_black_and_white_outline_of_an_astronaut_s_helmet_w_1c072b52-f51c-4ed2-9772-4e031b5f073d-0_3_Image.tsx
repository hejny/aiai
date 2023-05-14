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
import colorStats from './Pavol_Hejn_a_black_and_white_outline_of_an_astronaut_s_helmet_w_1c072b52-f51c-4ed2-9772-4e031b5f073d-0_3.colors.json';
import content from './Pavol_Hejn_a_black_and_white_outline_of_an_astronaut_s_helmet_w_1c072b52-f51c-4ed2-9772-4e031b5f073d-0_3.content.md';
import metadata from './Pavol_Hejn_a_black_and_white_outline_of_an_astronaut_s_helmet_w_1c072b52-f51c-4ed2-9772-4e031b5f073d-0_3.json';

/**
 * Image of A black and white outline of an astronaut's helmet, with intricate details that showcase the reflection of the surrounding environment.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function ABlackAndWhiteOutlineOfAnAstronautSHelmetW1c072b52F51c4ed297724e031b5f073d0_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A black and white outline of an astronaut's helmet, with intricate details that showcase the reflection of the surrounding environment."
            src="https://cdn.midjourney.com/1c072b52-f51c-4ed2-9772-4e031b5f073d/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
ABlackAndWhiteOutlineOfAnAstronautSHelmetW1c072b52F51c4ed297724e031b5f073d0_3_Image.src = new URL(
    'https://cdn.midjourney.com/1c072b52-f51c-4ed2-9772-4e031b5f073d/0_3.png',
);
ABlackAndWhiteOutlineOfAnAstronautSHelmetW1c072b52F51c4ed297724e031b5f073d0_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ABlackAndWhiteOutlineOfAnAstronautSHelmetW1c072b52F51c4ed297724e031b5f073d0_3_Image.colorStats =
    hydrateColorStats(colorStats);
ABlackAndWhiteOutlineOfAnAstronautSHelmetW1c072b52F51c4ed297724e031b5f073d0_3_Image.content = content;
