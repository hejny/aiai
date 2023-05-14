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
import colorStats from './Pavol_Hejn_a_geometric_design_in_shades_of_purple_and_pink_insp_e23e2973-b7f2-4d77-bc6f-9e75415332f9-0_3.colors.json';
import content from './Pavol_Hejn_a_geometric_design_in_shades_of_purple_and_pink_insp_e23e2973-b7f2-4d77-bc6f-9e75415332f9-0_3.content.md';
import metadata from './Pavol_Hejn_a_geometric_design_in_shades_of_purple_and_pink_insp_e23e2973-b7f2-4d77-bc6f-9e75415332f9-0_3.json';

/**
 * Image of A geometric design in shades of purple and pink, inspired by the shape of a quantum computer
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AGeometricDesignInShadesOfPurpleAndPinkInspE23e2973B7f24d77Bc6f9e75415332f90_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A geometric design in shades of purple and pink, inspired by the shape of a quantum computer"
            src="https://cdn.midjourney.com/e23e2973-b7f2-4d77-bc6f-9e75415332f9/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AGeometricDesignInShadesOfPurpleAndPinkInspE23e2973B7f24d77Bc6f9e75415332f90_3_Image.src = new URL(
    'https://cdn.midjourney.com/e23e2973-b7f2-4d77-bc6f-9e75415332f9/0_3.png',
);
AGeometricDesignInShadesOfPurpleAndPinkInspE23e2973B7f24d77Bc6f9e75415332f90_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AGeometricDesignInShadesOfPurpleAndPinkInspE23e2973B7f24d77Bc6f9e75415332f90_3_Image.colorStats =
    hydrateColorStats(colorStats);
AGeometricDesignInShadesOfPurpleAndPinkInspE23e2973B7f24d77Bc6f9e75415332f90_3_Image.content = content;
