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
import colorStats from './Pavol_Hejn_a_neon_cityscape_with_futuristic_skyscrapers_for_a_t_d4478282-5bdc-43b6-8164-585a94e21a16-0_0.colors.json';
import content from './Pavol_Hejn_a_neon_cityscape_with_futuristic_skyscrapers_for_a_t_d4478282-5bdc-43b6-8164-585a94e21a16-0_0.content.md';
import metadata from './Pavol_Hejn_a_neon_cityscape_with_futuristic_skyscrapers_for_a_t_d4478282-5bdc-43b6-8164-585a94e21a16-0_0.json';

/**
 * Image of A neon cityscape with futuristic skyscrapers for a tech blog homepage
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function ANeonCityscapeWithFuturisticSkyscrapersForATD44782825bdc43b68164585a94e21a160_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A neon cityscape with futuristic skyscrapers for a tech blog homepage"
            src="https://cdn.midjourney.com/d4478282-5bdc-43b6-8164-585a94e21a16/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
ANeonCityscapeWithFuturisticSkyscrapersForATD44782825bdc43b68164585a94e21a160_0_Image.src = new URL(
    'https://cdn.midjourney.com/d4478282-5bdc-43b6-8164-585a94e21a16/0_0.png',
);
ANeonCityscapeWithFuturisticSkyscrapersForATD44782825bdc43b68164585a94e21a160_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ANeonCityscapeWithFuturisticSkyscrapersForATD44782825bdc43b68164585a94e21a160_0_Image.colorStats =
    hydrateColorStats(colorStats);
ANeonCityscapeWithFuturisticSkyscrapersForATD44782825bdc43b68164585a94e21a160_0_Image.content = content;
