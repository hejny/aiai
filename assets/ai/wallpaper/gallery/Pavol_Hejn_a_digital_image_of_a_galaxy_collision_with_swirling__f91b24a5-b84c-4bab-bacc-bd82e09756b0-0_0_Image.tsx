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
import { IImageColorStats } from '../../../../src/utils/image/utils/IImageColorStats';
import { IWallpaperMetadata, IWallpaperComponentProps } from '../IWallpaperComponent';
import metadata from './Pavol_Hejn_a_digital_image_of_a_galaxy_collision_with_swirling__f91b24a5-b84c-4bab-bacc-bd82e09756b0-0_0.json';
import source from './Pavol_Hejn_a_digital_image_of_a_galaxy_collision_with_swirling__f91b24a5-b84c-4bab-bacc-bd82e09756b0-0_0.png';

/**
 * Image of A digital image of a galaxy collision, with swirling colors and distorted shapes representing the chaos of the event.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function ADigitalImageOfAGalaxyCollisionWithSwirlingF91b24a5B84c4babBaccBd82e09756b00_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A digital image of a galaxy collision, with swirling colors and distorted shapes representing the chaos of the event."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ADigitalImageOfAGalaxyCollisionWithSwirlingF91b24a5B84c4babBaccBd82e09756b00_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ADigitalImageOfAGalaxyCollisionWithSwirlingF91b24a5B84c4babBaccBd82e09756b00_0_Image.colorStats = {
    averageColor: Color.fromHex('#463d37'),
    lightestColor: Color.fromHex('#ffeeff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffeeff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#dd3311'), Color.fromHex('#77ddee')],
    minmaxGreen: [Color.fromHex('#449977'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#225588'), Color.fromHex('#ffee77')],
    mostFrequentColor: Color.fromHex('#443322'),
    mostSaturatedColor: Color.fromHex('#000011'),
    mostGroupedColor: Color.fromHex('#001111'),
    bottom: {
        averageColor: Color.fromHex('#39302b'),
        lightestColor: Color.fromHex('#ccbbaa'),
        darkestColor: Color.fromHex('#001111'),
        minmaxWhite: [Color.fromHex('#ccbbaa'), Color.fromHex('#001111')],
        minmaxRed: [Color.fromHex('#aa4411'), Color.fromHex('#228888')],
        minmaxGreen: [Color.fromHex('#449977'), Color.fromHex('#440000')],
        minmaxBlue: [Color.fromHex('#224466'), Color.fromHex('#ffdd66')],
        mostFrequentColor: Color.fromHex('#443322'),
        mostSaturatedColor: Color.fromHex('#001111'),
        mostGroupedColor: Color.fromHex('#112233'),
    },
} satisfies IImageColorStats;
