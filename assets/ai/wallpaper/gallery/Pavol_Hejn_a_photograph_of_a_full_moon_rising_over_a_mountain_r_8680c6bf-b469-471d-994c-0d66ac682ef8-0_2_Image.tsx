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
import colorStats from './Pavol_Hejn_a_photograph_of_a_full_moon_rising_over_a_mountain_r_8680c6bf-b469-471d-994c-0d66ac682ef8-0_2.colors.json';
import content from './Pavol_Hejn_a_photograph_of_a_full_moon_rising_over_a_mountain_r_8680c6bf-b469-471d-994c-0d66ac682ef8-0_2.content.md';
import metadata from './Pavol_Hejn_a_photograph_of_a_full_moon_rising_over_a_mountain_r_8680c6bf-b469-471d-994c-0d66ac682ef8-0_2.json';

/**
 * Image of A photograph of a full moon rising over a mountain range, with mist and clouds adding to the sense of mystery.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function APhotographOfAFullMoonRisingOverAMountainR8680c6bfB469471d994c0d66ac682ef80_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A photograph of a full moon rising over a mountain range, with mist and clouds adding to the sense of mystery."
            src="https://cdn.midjourney.com/8680c6bf-b469-471d-994c-0d66ac682ef8/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
APhotographOfAFullMoonRisingOverAMountainR8680c6bfB469471d994c0d66ac682ef80_2_Image.src = new URL(
    'https://cdn.midjourney.com/8680c6bf-b469-471d-994c-0d66ac682ef8/0_2.png',
);
APhotographOfAFullMoonRisingOverAMountainR8680c6bfB469471d994c0d66ac682ef80_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APhotographOfAFullMoonRisingOverAMountainR8680c6bfB469471d994c0d66ac682ef80_2_Image.colorStats =
    hydrateColorStats(colorStats);
APhotographOfAFullMoonRisingOverAMountainR8680c6bfB469471d994c0d66ac682ef80_2_Image.content = content;
