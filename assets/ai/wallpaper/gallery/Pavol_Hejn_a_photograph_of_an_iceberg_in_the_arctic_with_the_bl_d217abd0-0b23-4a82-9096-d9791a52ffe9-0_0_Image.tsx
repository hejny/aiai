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
import colorStats from './Pavol_Hejn_a_photograph_of_an_iceberg_in_the_arctic_with_the_bl_d217abd0-0b23-4a82-9096-d9791a52ffe9-0_0.colors.json';
import content from './Pavol_Hejn_a_photograph_of_an_iceberg_in_the_arctic_with_the_bl_d217abd0-0b23-4a82-9096-d9791a52ffe9-0_0.content.md';
import metadata from './Pavol_Hejn_a_photograph_of_an_iceberg_in_the_arctic_with_the_bl_d217abd0-0b23-4a82-9096-d9791a52ffe9-0_0.json';

/**
 * Image of A photograph of an iceberg in the Arctic, with the blue and white colors contrasting against a dark sky.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function APhotographOfAnIcebergInTheArcticWithTheBlD217abd00b234a829096D9791a52ffe90_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A photograph of an iceberg in the Arctic, with the blue and white colors contrasting against a dark sky."
            src="https://cdn.midjourney.com/d217abd0-0b23-4a82-9096-d9791a52ffe9/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
APhotographOfAnIcebergInTheArcticWithTheBlD217abd00b234a829096D9791a52ffe90_0_Image.src = new URL(
    'https://cdn.midjourney.com/d217abd0-0b23-4a82-9096-d9791a52ffe9/0_0.png',
);
APhotographOfAnIcebergInTheArcticWithTheBlD217abd00b234a829096D9791a52ffe90_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APhotographOfAnIcebergInTheArcticWithTheBlD217abd00b234a829096D9791a52ffe90_0_Image.colorStats =
    hydrateColorStats(colorStats);
APhotographOfAnIcebergInTheArcticWithTheBlD217abd00b234a829096D9791a52ffe90_0_Image.content = content;
