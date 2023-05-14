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
import colorStats from './Pavol_Hejn_a_surreal_image_of_a_person_standing_on_a_giant_lily_663c6339-2c89-432b-8266-6ba6ac9c53f3-0_2.colors.json';
import content from './Pavol_Hejn_a_surreal_image_of_a_person_standing_on_a_giant_lily_663c6339-2c89-432b-8266-6ba6ac9c53f3-0_2.content.md';
import metadata from './Pavol_Hejn_a_surreal_image_of_a_person_standing_on_a_giant_lily_663c6339-2c89-432b-8266-6ba6ac9c53f3-0_2.json';

/**
 * Image of A surreal image of a person standing on a giant lily pad in a pond for a creativity or imagination website
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ASurrealImageOfAPersonStandingOnAGiantLily663c63392c89432b82666ba6ac9c53f30_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A surreal image of a person standing on a giant lily pad in a pond for a creativity or imagination website"
            src="https://cdn.midjourney.com/663c6339-2c89-432b-8266-6ba6ac9c53f3/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
ASurrealImageOfAPersonStandingOnAGiantLily663c63392c89432b82666ba6ac9c53f30_2_Image.src = new URL(
    'https://cdn.midjourney.com/663c6339-2c89-432b-8266-6ba6ac9c53f3/0_2.png',
);
ASurrealImageOfAPersonStandingOnAGiantLily663c63392c89432b82666ba6ac9c53f30_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ASurrealImageOfAPersonStandingOnAGiantLily663c63392c89432b82666ba6ac9c53f30_2_Image.colorStats =
    hydrateColorStats(colorStats);
ASurrealImageOfAPersonStandingOnAGiantLily663c63392c89432b82666ba6ac9c53f30_2_Image.content = content;
