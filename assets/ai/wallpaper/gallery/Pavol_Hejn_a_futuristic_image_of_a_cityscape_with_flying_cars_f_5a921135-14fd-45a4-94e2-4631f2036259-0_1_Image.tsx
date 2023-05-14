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
import colorStats from './Pavol_Hejn_a_futuristic_image_of_a_cityscape_with_flying_cars_f_5a921135-14fd-45a4-94e2-4631f2036259-0_1.colors.json';
import content from './Pavol_Hejn_a_futuristic_image_of_a_cityscape_with_flying_cars_f_5a921135-14fd-45a4-94e2-4631f2036259-0_1.content.md';
import metadata from './Pavol_Hejn_a_futuristic_image_of_a_cityscape_with_flying_cars_f_5a921135-14fd-45a4-94e2-4631f2036259-0_1.json';

/**
 * Image of A futuristic image of a cityscape with flying cars for a sci-fi or technology website
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AFuturisticImageOfACityscapeWithFlyingCarsF5a92113514fd45a494e24631f20362590_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A futuristic image of a cityscape with flying cars for a sci-fi or technology website"
            src="https://cdn.midjourney.com/5a921135-14fd-45a4-94e2-4631f2036259/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AFuturisticImageOfACityscapeWithFlyingCarsF5a92113514fd45a494e24631f20362590_1_Image.src = new URL(
    'https://cdn.midjourney.com/5a921135-14fd-45a4-94e2-4631f2036259/0_1.png',
);
AFuturisticImageOfACityscapeWithFlyingCarsF5a92113514fd45a494e24631f20362590_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AFuturisticImageOfACityscapeWithFlyingCarsF5a92113514fd45a494e24631f20362590_1_Image.colorStats =
    hydrateColorStats(colorStats);
AFuturisticImageOfACityscapeWithFlyingCarsF5a92113514fd45a494e24631f20362590_1_Image.content = content;
