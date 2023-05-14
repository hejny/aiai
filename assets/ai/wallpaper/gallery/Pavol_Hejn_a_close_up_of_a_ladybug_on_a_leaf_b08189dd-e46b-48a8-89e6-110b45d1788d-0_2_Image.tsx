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
import colorStats from './Pavol_Hejn_a_close_up_of_a_ladybug_on_a_leaf_b08189dd-e46b-48a8-89e6-110b45d1788d-0_2.colors.json';
import content from './Pavol_Hejn_a_close_up_of_a_ladybug_on_a_leaf_b08189dd-e46b-48a8-89e6-110b45d1788d-0_2.content.md';
import metadata from './Pavol_Hejn_a_close_up_of_a_ladybug_on_a_leaf_b08189dd-e46b-48a8-89e6-110b45d1788d-0_2.json';

/**
 * Image of A close-up of a ladybug on a leaf
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ACloseUpOfALadybugOnALeafB08189ddE46b48a889e6110b45d1788d0_2_Image(props: IWallpaperComponentProps) {
    const { width, quality } = props;

    return (
        <Image
            alt="A close-up of a ladybug on a leaf"
            src="https://cdn.midjourney.com/b08189dd-e46b-48a8-89e6-110b45d1788d/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
ACloseUpOfALadybugOnALeafB08189ddE46b48a889e6110b45d1788d0_2_Image.src = new URL(
    'https://cdn.midjourney.com/b08189dd-e46b-48a8-89e6-110b45d1788d/0_2.png',
);
ACloseUpOfALadybugOnALeafB08189ddE46b48a889e6110b45d1788d0_2_Image.metadata = metadata satisfies IWallpaperMetadata;
ACloseUpOfALadybugOnALeafB08189ddE46b48a889e6110b45d1788d0_2_Image.colorStats = hydrateColorStats(colorStats);
ACloseUpOfALadybugOnALeafB08189ddE46b48a889e6110b45d1788d0_2_Image.content = content;
