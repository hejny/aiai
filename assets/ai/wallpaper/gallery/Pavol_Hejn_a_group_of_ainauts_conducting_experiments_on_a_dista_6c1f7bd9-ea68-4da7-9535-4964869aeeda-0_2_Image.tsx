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
import colorStats from './Pavol_Hejn_a_group_of_ainauts_conducting_experiments_on_a_dista_6c1f7bd9-ea68-4da7-9535-4964869aeeda-0_2.colors.json';
import content from './Pavol_Hejn_a_group_of_ainauts_conducting_experiments_on_a_dista_6c1f7bd9-ea68-4da7-9535-4964869aeeda-0_2.content.md';
import metadata from './Pavol_Hejn_a_group_of_ainauts_conducting_experiments_on_a_dista_6c1f7bd9-ea68-4da7-9535-4964869aeeda-0_2.json';

/**
 * Image of A group of AInauts conducting experiments on a distant moon, with a massive gas giant looming in the background.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AGroupOfAinautsConductingExperimentsOnADista6c1f7bd9Ea684da795354964869aeeda0_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A group of AInauts conducting experiments on a distant moon, with a massive gas giant looming in the background."
            src="https://cdn.midjourney.com/6c1f7bd9-ea68-4da7-9535-4964869aeeda/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AGroupOfAinautsConductingExperimentsOnADista6c1f7bd9Ea684da795354964869aeeda0_2_Image.src = new URL(
    'https://cdn.midjourney.com/6c1f7bd9-ea68-4da7-9535-4964869aeeda/0_2.png',
);
AGroupOfAinautsConductingExperimentsOnADista6c1f7bd9Ea684da795354964869aeeda0_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AGroupOfAinautsConductingExperimentsOnADista6c1f7bd9Ea684da795354964869aeeda0_2_Image.colorStats =
    hydrateColorStats(colorStats);
AGroupOfAinautsConductingExperimentsOnADista6c1f7bd9Ea684da795354964869aeeda0_2_Image.content = content;
