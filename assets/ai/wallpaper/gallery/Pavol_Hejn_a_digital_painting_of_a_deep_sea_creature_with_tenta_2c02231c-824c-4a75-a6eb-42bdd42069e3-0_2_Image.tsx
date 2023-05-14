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
import colorStats from './Pavol_Hejn_a_digital_painting_of_a_deep_sea_creature_with_tenta_2c02231c-824c-4a75-a6eb-42bdd42069e3-0_2.colors.json';
import content from './Pavol_Hejn_a_digital_painting_of_a_deep_sea_creature_with_tenta_2c02231c-824c-4a75-a6eb-42bdd42069e3-0_2.content.md';
import metadata from './Pavol_Hejn_a_digital_painting_of_a_deep_sea_creature_with_tenta_2c02231c-824c-4a75-a6eb-42bdd42069e3-0_2.json';

/**
 * Image of A digital painting of a deep sea creature, with tentacles and bioluminescent patterns evoking a sense of mystery and exploration.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ADigitalPaintingOfADeepSeaCreatureWithTentac02231c824c4a75A6eb42bdd42069e302_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A digital painting of a deep sea creature, with tentacles and bioluminescent patterns evoking a sense of mystery and exploration."
            src="https://cdn.midjourney.com/2c02231c-824c-4a75-a6eb-42bdd42069e3/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
ADigitalPaintingOfADeepSeaCreatureWithTentac02231c824c4a75A6eb42bdd42069e302_2_Image.src = new URL(
    'https://cdn.midjourney.com/2c02231c-824c-4a75-a6eb-42bdd42069e3/0_2.png',
);
ADigitalPaintingOfADeepSeaCreatureWithTentac02231c824c4a75A6eb42bdd42069e302_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ADigitalPaintingOfADeepSeaCreatureWithTentac02231c824c4a75A6eb42bdd42069e302_2_Image.colorStats =
    hydrateColorStats(colorStats);
ADigitalPaintingOfADeepSeaCreatureWithTentac02231c824c4a75A6eb42bdd42069e302_2_Image.content = content;
