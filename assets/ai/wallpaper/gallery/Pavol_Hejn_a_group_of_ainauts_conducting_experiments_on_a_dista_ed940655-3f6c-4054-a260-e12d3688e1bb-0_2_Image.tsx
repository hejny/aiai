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
import colorStats from './Pavol_Hejn_a_group_of_ainauts_conducting_experiments_on_a_dista_ed940655-3f6c-4054-a260-e12d3688e1bb-0_2.colors.json';
import content from './Pavol_Hejn_a_group_of_ainauts_conducting_experiments_on_a_dista_ed940655-3f6c-4054-a260-e12d3688e1bb-0_2.content.md';
import metadata from './Pavol_Hejn_a_group_of_ainauts_conducting_experiments_on_a_dista_ed940655-3f6c-4054-a260-e12d3688e1bb-0_2.json';

/**
 * Image of A group of AInauts conducting experiments on a distant planet, with a red sun setting behind them.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AGroupOfAinautsConductingExperimentsOnADistaEd9406553f6c4054A260E12d3688e1bb0_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A group of AInauts conducting experiments on a distant planet, with a red sun setting behind them."
            src="https://cdn.midjourney.com/ed940655-3f6c-4054-a260-e12d3688e1bb/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AGroupOfAinautsConductingExperimentsOnADistaEd9406553f6c4054A260E12d3688e1bb0_2_Image.src = new URL(
    'https://cdn.midjourney.com/ed940655-3f6c-4054-a260-e12d3688e1bb/0_2.png',
);
AGroupOfAinautsConductingExperimentsOnADistaEd9406553f6c4054A260E12d3688e1bb0_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AGroupOfAinautsConductingExperimentsOnADistaEd9406553f6c4054A260E12d3688e1bb0_2_Image.colorStats =
    hydrateColorStats(colorStats);
AGroupOfAinautsConductingExperimentsOnADistaEd9406553f6c4054A260E12d3688e1bb0_2_Image.content = content;
