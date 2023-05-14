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
import colorStats from './Pavol_Hejn_an_abstract_image_of_a_comet_passing_through_the_sol_2742fafc-af96-4f65-a0bc-7090ed84bc40-0_0.colors.json';
import content from './Pavol_Hejn_an_abstract_image_of_a_comet_passing_through_the_sol_2742fafc-af96-4f65-a0bc-7090ed84bc40-0_0.content.md';
import metadata from './Pavol_Hejn_an_abstract_image_of_a_comet_passing_through_the_sol_2742fafc-af96-4f65-a0bc-7090ed84bc40-0_0.json';

/**
 * Image of An abstract image of a comet passing through the solar system, with bright colors and swirling patterns that represent its trajectory.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AnAbstractImageOfACometPassingThroughTheSol2742fafcAf964f65A0bc7090ed84bc400_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An abstract image of a comet passing through the solar system, with bright colors and swirling patterns that represent its trajectory."
            src="https://cdn.midjourney.com/2742fafc-af96-4f65-a0bc-7090ed84bc40/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AnAbstractImageOfACometPassingThroughTheSol2742fafcAf964f65A0bc7090ed84bc400_0_Image.src = new URL(
    'https://cdn.midjourney.com/2742fafc-af96-4f65-a0bc-7090ed84bc40/0_0.png',
);
AnAbstractImageOfACometPassingThroughTheSol2742fafcAf964f65A0bc7090ed84bc400_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractImageOfACometPassingThroughTheSol2742fafcAf964f65A0bc7090ed84bc400_0_Image.colorStats =
    hydrateColorStats(colorStats);
AnAbstractImageOfACometPassingThroughTheSol2742fafcAf964f65A0bc7090ed84bc400_0_Image.content = content;
