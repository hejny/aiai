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
import colorStats from './Pavol_Hejn_a_digital_painting_of_a_lone_astronaut_standing_on_t_5d35abac-1784-485f-a1a6-c977eb05e835-0_3.colors.json';
import content from './Pavol_Hejn_a_digital_painting_of_a_lone_astronaut_standing_on_t_5d35abac-1784-485f-a1a6-c977eb05e835-0_3.content.md';
import metadata from './Pavol_Hejn_a_digital_painting_of_a_lone_astronaut_standing_on_t_5d35abac-1784-485f-a1a6-c977eb05e835-0_3.json';

/**
 * Image of A digital painting of a lone astronaut standing on the edge of a crater, gazing out at the endless expanse of space.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function ADigitalPaintingOfALoneAstronautStandingOnT5d35abac1784485fA1a6C977eb05e8350_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A digital painting of a lone astronaut standing on the edge of a crater, gazing out at the endless expanse of space."
            src="https://cdn.midjourney.com/5d35abac-1784-485f-a1a6-c977eb05e835/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
ADigitalPaintingOfALoneAstronautStandingOnT5d35abac1784485fA1a6C977eb05e8350_3_Image.src = new URL(
    'https://cdn.midjourney.com/5d35abac-1784-485f-a1a6-c977eb05e835/0_3.png',
);
ADigitalPaintingOfALoneAstronautStandingOnT5d35abac1784485fA1a6C977eb05e8350_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ADigitalPaintingOfALoneAstronautStandingOnT5d35abac1784485fA1a6C977eb05e8350_3_Image.colorStats =
    hydrateColorStats(colorStats);
ADigitalPaintingOfALoneAstronautStandingOnT5d35abac1784485fA1a6C977eb05e8350_3_Image.content = content;
