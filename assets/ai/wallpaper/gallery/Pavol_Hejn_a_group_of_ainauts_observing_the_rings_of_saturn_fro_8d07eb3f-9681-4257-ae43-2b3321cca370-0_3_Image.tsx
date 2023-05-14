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
import colorStats from './Pavol_Hejn_a_group_of_ainauts_observing_the_rings_of_saturn_fro_8d07eb3f-9681-4257-ae43-2b3321cca370-0_3.colors.json';
import content from './Pavol_Hejn_a_group_of_ainauts_observing_the_rings_of_saturn_fro_8d07eb3f-9681-4257-ae43-2b3321cca370-0_3.content.md';
import metadata from './Pavol_Hejn_a_group_of_ainauts_observing_the_rings_of_saturn_fro_8d07eb3f-9681-4257-ae43-2b3321cca370-0_3.json';

/**
 * Image of A group of AInauts observing the rings of Saturn from a high-tech space station, surrounded by stars and galaxies.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AGroupOfAinautsObservingTheRingsOfSaturnFro8d07eb3f96814257Ae432b3321cca3700_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A group of AInauts observing the rings of Saturn from a high-tech space station, surrounded by stars and galaxies."
            src="https://cdn.midjourney.com/8d07eb3f-9681-4257-ae43-2b3321cca370/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AGroupOfAinautsObservingTheRingsOfSaturnFro8d07eb3f96814257Ae432b3321cca3700_3_Image.src = new URL(
    'https://cdn.midjourney.com/8d07eb3f-9681-4257-ae43-2b3321cca370/0_3.png',
);
AGroupOfAinautsObservingTheRingsOfSaturnFro8d07eb3f96814257Ae432b3321cca3700_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AGroupOfAinautsObservingTheRingsOfSaturnFro8d07eb3f96814257Ae432b3321cca3700_3_Image.colorStats =
    hydrateColorStats(colorStats);
AGroupOfAinautsObservingTheRingsOfSaturnFro8d07eb3f96814257Ae432b3321cca3700_3_Image.content = content;
