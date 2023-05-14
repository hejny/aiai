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
import colorStats from './Pavol_Hejn_ainauts_working_in_a_massive_laboratory_filled_with__664066a4-7076-4cfc-a434-02dc7b42eaa7-0_0.colors.json';
import content from './Pavol_Hejn_ainauts_working_in_a_massive_laboratory_filled_with__664066a4-7076-4cfc-a434-02dc7b42eaa7-0_0.content.md';
import metadata from './Pavol_Hejn_ainauts_working_in_a_massive_laboratory_filled_with__664066a4-7076-4cfc-a434-02dc7b42eaa7-0_0.json';

/**
 * Image of AInauts working in a massive laboratory filled with glowing equipment and holographic displays, conducting cutting-edge research.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AinautsWorkingInAMassiveLaboratoryFilledWith664066a470764cfcA43402dc7b42eaa70_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="AInauts working in a massive laboratory filled with glowing equipment and holographic displays, conducting cutting-edge research."
            src="https://cdn.midjourney.com/664066a4-7076-4cfc-a434-02dc7b42eaa7/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AinautsWorkingInAMassiveLaboratoryFilledWith664066a470764cfcA43402dc7b42eaa70_0_Image.src = new URL(
    'https://cdn.midjourney.com/664066a4-7076-4cfc-a434-02dc7b42eaa7/0_0.png',
);
AinautsWorkingInAMassiveLaboratoryFilledWith664066a470764cfcA43402dc7b42eaa70_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AinautsWorkingInAMassiveLaboratoryFilledWith664066a470764cfcA43402dc7b42eaa70_0_Image.colorStats =
    hydrateColorStats(colorStats);
AinautsWorkingInAMassiveLaboratoryFilledWith664066a470764cfcA43402dc7b42eaa70_0_Image.content = content;
