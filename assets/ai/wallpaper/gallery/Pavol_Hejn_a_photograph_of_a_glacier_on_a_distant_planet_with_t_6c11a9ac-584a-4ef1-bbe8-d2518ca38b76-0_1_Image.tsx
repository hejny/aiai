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
import colorStats from './Pavol_Hejn_a_photograph_of_a_glacier_on_a_distant_planet_with_t_6c11a9ac-584a-4ef1-bbe8-d2518ca38b76-0_1.colors.json';
import content from './Pavol_Hejn_a_photograph_of_a_glacier_on_a_distant_planet_with_t_6c11a9ac-584a-4ef1-bbe8-d2518ca38b76-0_1.content.md';
import metadata from './Pavol_Hejn_a_photograph_of_a_glacier_on_a_distant_planet_with_t_6c11a9ac-584a-4ef1-bbe8-d2518ca38b76-0_1.json';

/**
 * Image of A photograph of a glacier on a distant planet, with the blue and white colors contrasting against the dark sky.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function APhotographOfAGlacierOnADistantPlanetWithT6c11a9ac584a4ef1Bbe8D2518ca38b760_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A photograph of a glacier on a distant planet, with the blue and white colors contrasting against the dark sky."
            src="https://cdn.midjourney.com/6c11a9ac-584a-4ef1-bbe8-d2518ca38b76/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
APhotographOfAGlacierOnADistantPlanetWithT6c11a9ac584a4ef1Bbe8D2518ca38b760_1_Image.src = new URL(
    'https://cdn.midjourney.com/6c11a9ac-584a-4ef1-bbe8-d2518ca38b76/0_1.png',
);
APhotographOfAGlacierOnADistantPlanetWithT6c11a9ac584a4ef1Bbe8D2518ca38b760_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APhotographOfAGlacierOnADistantPlanetWithT6c11a9ac584a4ef1Bbe8D2518ca38b760_1_Image.colorStats =
    hydrateColorStats(colorStats);
APhotographOfAGlacierOnADistantPlanetWithT6c11a9ac584a4ef1Bbe8D2518ca38b760_1_Image.content = content;
