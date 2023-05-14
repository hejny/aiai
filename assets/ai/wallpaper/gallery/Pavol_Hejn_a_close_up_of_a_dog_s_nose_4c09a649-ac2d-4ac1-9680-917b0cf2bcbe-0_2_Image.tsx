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
import colorStats from './Pavol_Hejn_a_close_up_of_a_dog_s_nose_4c09a649-ac2d-4ac1-9680-917b0cf2bcbe-0_2.colors.json';
import content from './Pavol_Hejn_a_close_up_of_a_dog_s_nose_4c09a649-ac2d-4ac1-9680-917b0cf2bcbe-0_2.content.md';
import metadata from './Pavol_Hejn_a_close_up_of_a_dog_s_nose_4c09a649-ac2d-4ac1-9680-917b0cf2bcbe-0_2.json';

/**
 * Image of A close-up of a dog’s nose
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ACloseUpOfADogSNose4c09a649Ac2d4ac19680917b0cf2bcbe0_2_Image(props: IWallpaperComponentProps) {
    const { width, quality } = props;

    return (
        <Image
            alt="A close-up of a dog’s nose"
            src="https://cdn.midjourney.com/4c09a649-ac2d-4ac1-9680-917b0cf2bcbe/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
ACloseUpOfADogSNose4c09a649Ac2d4ac19680917b0cf2bcbe0_2_Image.src = new URL(
    'https://cdn.midjourney.com/4c09a649-ac2d-4ac1-9680-917b0cf2bcbe/0_2.png',
);
ACloseUpOfADogSNose4c09a649Ac2d4ac19680917b0cf2bcbe0_2_Image.metadata = metadata satisfies IWallpaperMetadata;
ACloseUpOfADogSNose4c09a649Ac2d4ac19680917b0cf2bcbe0_2_Image.colorStats = hydrateColorStats(colorStats);
ACloseUpOfADogSNose4c09a649Ac2d4ac19680917b0cf2bcbe0_2_Image.content = content;
