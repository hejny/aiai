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
import colorStats from './Pavol_Hejn_an_abstract_interpretation_of_a_thunderstorm_74add395-e19e-43f0-a126-9006ac38a935-0_1.colors.json';
import content from './Pavol_Hejn_an_abstract_interpretation_of_a_thunderstorm_74add395-e19e-43f0-a126-9006ac38a935-0_1.content.md';
import metadata from './Pavol_Hejn_an_abstract_interpretation_of_a_thunderstorm_74add395-e19e-43f0-a126-9006ac38a935-0_1.json';

/**
 * Image of An abstract interpretation of a thunderstorm
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AnAbstractInterpretationOfAThunderstorm74add395E19e43f0A1269006ac38a9350_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An abstract interpretation of a thunderstorm"
            src="https://cdn.midjourney.com/74add395-e19e-43f0-a126-9006ac38a935/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AnAbstractInterpretationOfAThunderstorm74add395E19e43f0A1269006ac38a9350_1_Image.src = new URL(
    'https://cdn.midjourney.com/74add395-e19e-43f0-a126-9006ac38a935/0_1.png',
);
AnAbstractInterpretationOfAThunderstorm74add395E19e43f0A1269006ac38a9350_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractInterpretationOfAThunderstorm74add395E19e43f0A1269006ac38a9350_1_Image.colorStats =
    hydrateColorStats(colorStats);
AnAbstractInterpretationOfAThunderstorm74add395E19e43f0A1269006ac38a9350_1_Image.content = content;
