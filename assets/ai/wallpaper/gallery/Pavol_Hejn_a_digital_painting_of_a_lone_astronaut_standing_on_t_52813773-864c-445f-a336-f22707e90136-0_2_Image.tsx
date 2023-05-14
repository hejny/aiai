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
import colorStats from './Pavol_Hejn_a_digital_painting_of_a_lone_astronaut_standing_on_t_52813773-864c-445f-a336-f22707e90136-0_2.colors.json';
import content from './Pavol_Hejn_a_digital_painting_of_a_lone_astronaut_standing_on_t_52813773-864c-445f-a336-f22707e90136-0_2.content.md';
import metadata from './Pavol_Hejn_a_digital_painting_of_a_lone_astronaut_standing_on_t_52813773-864c-445f-a336-f22707e90136-0_2.json';

/**
 * Image of A digital painting of a lone astronaut standing on the edge of a crater, gazing out at the endless expanse of space.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ADigitalPaintingOfALoneAstronautStandingOnT52813773864c445fA336F22707e901360_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A digital painting of a lone astronaut standing on the edge of a crater, gazing out at the endless expanse of space."
            src="https://cdn.midjourney.com/52813773-864c-445f-a336-f22707e90136/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
ADigitalPaintingOfALoneAstronautStandingOnT52813773864c445fA336F22707e901360_2_Image.src = new URL(
    'https://cdn.midjourney.com/52813773-864c-445f-a336-f22707e90136/0_2.png',
);
ADigitalPaintingOfALoneAstronautStandingOnT52813773864c445fA336F22707e901360_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ADigitalPaintingOfALoneAstronautStandingOnT52813773864c445fA336F22707e901360_2_Image.colorStats =
    hydrateColorStats(colorStats);
ADigitalPaintingOfALoneAstronautStandingOnT52813773864c445fA336F22707e901360_2_Image.content = content;
