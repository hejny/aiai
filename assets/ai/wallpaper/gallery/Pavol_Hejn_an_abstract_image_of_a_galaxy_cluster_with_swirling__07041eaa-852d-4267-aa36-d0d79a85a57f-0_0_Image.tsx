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
import colorStats from './Pavol_Hejn_an_abstract_image_of_a_galaxy_cluster_with_swirling__07041eaa-852d-4267-aa36-d0d79a85a57f-0_0.colors.json';
import content from './Pavol_Hejn_an_abstract_image_of_a_galaxy_cluster_with_swirling__07041eaa-852d-4267-aa36-d0d79a85a57f-0_0.content.md';
import metadata from './Pavol_Hejn_an_abstract_image_of_a_galaxy_cluster_with_swirling__07041eaa-852d-4267-aa36-d0d79a85a57f-0_0.json';

/**
 * Image of An abstract image of a galaxy cluster, with swirling colors and patterns representing the vastness of space.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AnAbstractImageOfAGalaxyClusterWithSwirling7041eaa852d4267Aa36D0d79a85a57f00_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An abstract image of a galaxy cluster, with swirling colors and patterns representing the vastness of space."
            src="https://cdn.midjourney.com/07041eaa-852d-4267-aa36-d0d79a85a57f/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AnAbstractImageOfAGalaxyClusterWithSwirling7041eaa852d4267Aa36D0d79a85a57f00_0_Image.src = new URL(
    'https://cdn.midjourney.com/07041eaa-852d-4267-aa36-d0d79a85a57f/0_0.png',
);
AnAbstractImageOfAGalaxyClusterWithSwirling7041eaa852d4267Aa36D0d79a85a57f00_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractImageOfAGalaxyClusterWithSwirling7041eaa852d4267Aa36D0d79a85a57f00_0_Image.colorStats =
    hydrateColorStats(colorStats);
AnAbstractImageOfAGalaxyClusterWithSwirling7041eaa852d4267Aa36D0d79a85a57f00_0_Image.content = content;
