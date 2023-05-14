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
import colorStats from './Pavol_Hejn_a_close_up_image_of_a_robot_s_eye_with_neon_green_ac_266438f7-f004-428a-adc4-ee13a5139e63-0_3.colors.json';
import content from './Pavol_Hejn_a_close_up_image_of_a_robot_s_eye_with_neon_green_ac_266438f7-f004-428a-adc4-ee13a5139e63-0_3.content.md';
import metadata from './Pavol_Hejn_a_close_up_image_of_a_robot_s_eye_with_neon_green_ac_266438f7-f004-428a-adc4-ee13a5139e63-0_3.json';

/**
 * Image of A close-up image of a robot's eye with neon green accents
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function ACloseUpImageOfARobotSEyeWithNeonGreenAc266438f7F004428aAdc4Ee13a5139e630_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A close-up image of a robot's eye with neon green accents"
            src="https://cdn.midjourney.com/266438f7-f004-428a-adc4-ee13a5139e63/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
ACloseUpImageOfARobotSEyeWithNeonGreenAc266438f7F004428aAdc4Ee13a5139e630_3_Image.src = new URL(
    'https://cdn.midjourney.com/266438f7-f004-428a-adc4-ee13a5139e63/0_3.png',
);
ACloseUpImageOfARobotSEyeWithNeonGreenAc266438f7F004428aAdc4Ee13a5139e630_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ACloseUpImageOfARobotSEyeWithNeonGreenAc266438f7F004428aAdc4Ee13a5139e630_3_Image.colorStats =
    hydrateColorStats(colorStats);
ACloseUpImageOfARobotSEyeWithNeonGreenAc266438f7F004428aAdc4Ee13a5139e630_3_Image.content = content;
