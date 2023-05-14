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
import colorStats from './Pavol_Hejn_ainauts_exploring_a_vast_network_of_tunnels_beneath__23dd2e38-a529-4e63-b9d6-19877ef9d20e-0_1.colors.json';
import content from './Pavol_Hejn_ainauts_exploring_a_vast_network_of_tunnels_beneath__23dd2e38-a529-4e63-b9d6-19877ef9d20e-0_1.content.md';
import metadata from './Pavol_Hejn_ainauts_exploring_a_vast_network_of_tunnels_beneath__23dd2e38-a529-4e63-b9d6-19877ef9d20e-0_1.json';

/**
 * Image of AInauts exploring a vast network of tunnels beneath the surface of a distant planet, with glowing crystals all around them.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AinautsExploringAVastNetworkOfTunnelsBeneath23dd2e38A5294e63B9d619877ef9d20e0_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="AInauts exploring a vast network of tunnels beneath the surface of a distant planet, with glowing crystals all around them."
            src="https://cdn.midjourney.com/23dd2e38-a529-4e63-b9d6-19877ef9d20e/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AinautsExploringAVastNetworkOfTunnelsBeneath23dd2e38A5294e63B9d619877ef9d20e0_1_Image.src = new URL(
    'https://cdn.midjourney.com/23dd2e38-a529-4e63-b9d6-19877ef9d20e/0_1.png',
);
AinautsExploringAVastNetworkOfTunnelsBeneath23dd2e38A5294e63B9d619877ef9d20e0_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AinautsExploringAVastNetworkOfTunnelsBeneath23dd2e38A5294e63B9d619877ef9d20e0_1_Image.colorStats =
    hydrateColorStats(colorStats);
AinautsExploringAVastNetworkOfTunnelsBeneath23dd2e38A5294e63B9d619877ef9d20e0_1_Image.content = content;
