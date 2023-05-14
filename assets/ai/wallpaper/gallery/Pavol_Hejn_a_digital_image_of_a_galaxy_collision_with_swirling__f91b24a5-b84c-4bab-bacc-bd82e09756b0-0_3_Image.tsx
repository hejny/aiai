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
import colorStats from './Pavol_Hejn_a_digital_image_of_a_galaxy_collision_with_swirling__f91b24a5-b84c-4bab-bacc-bd82e09756b0-0_3.colors.json';
import content from './Pavol_Hejn_a_digital_image_of_a_galaxy_collision_with_swirling__f91b24a5-b84c-4bab-bacc-bd82e09756b0-0_3.content.md';
import metadata from './Pavol_Hejn_a_digital_image_of_a_galaxy_collision_with_swirling__f91b24a5-b84c-4bab-bacc-bd82e09756b0-0_3.json';

/**
 * Image of A digital image of a galaxy collision, with swirling colors and distorted shapes representing the chaos of the event.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function ADigitalImageOfAGalaxyCollisionWithSwirlingF91b24a5B84c4babBaccBd82e09756b00_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A digital image of a galaxy collision, with swirling colors and distorted shapes representing the chaos of the event."
            src="https://cdn.midjourney.com/f91b24a5-b84c-4bab-bacc-bd82e09756b0/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
ADigitalImageOfAGalaxyCollisionWithSwirlingF91b24a5B84c4babBaccBd82e09756b00_3_Image.src = new URL(
    'https://cdn.midjourney.com/f91b24a5-b84c-4bab-bacc-bd82e09756b0/0_3.png',
);
ADigitalImageOfAGalaxyCollisionWithSwirlingF91b24a5B84c4babBaccBd82e09756b00_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ADigitalImageOfAGalaxyCollisionWithSwirlingF91b24a5B84c4babBaccBd82e09756b00_3_Image.colorStats =
    hydrateColorStats(colorStats);
ADigitalImageOfAGalaxyCollisionWithSwirlingF91b24a5B84c4babBaccBd82e09756b00_3_Image.content = content;
