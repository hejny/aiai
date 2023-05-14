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
import colorStats from './Pavol_Hejn_a_wallpaper_with_a_simple_graphic_of_a_robot_arm_aga_68120b38-4c74-4b36-b757-4e8797c14310-0_2.colors.json';
import content from './Pavol_Hejn_a_wallpaper_with_a_simple_graphic_of_a_robot_arm_aga_68120b38-4c74-4b36-b757-4e8797c14310-0_2.content.md';
import metadata from './Pavol_Hejn_a_wallpaper_with_a_simple_graphic_of_a_robot_arm_aga_68120b38-4c74-4b36-b757-4e8797c14310-0_2.json';

/**
 * Image of A wallpaper with a simple graphic of a robot arm, against a gradient background of two complementary colors.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithASimpleGraphicOfARobotArmAga68120b384c744b36B7574e8797c143100_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a simple graphic of a robot arm, against a gradient background of two complementary colors."
            src="https://cdn.midjourney.com/68120b38-4c74-4b36-b757-4e8797c14310/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AWallpaperWithASimpleGraphicOfARobotArmAga68120b384c744b36B7574e8797c143100_2_Image.src = new URL(
    'https://cdn.midjourney.com/68120b38-4c74-4b36-b757-4e8797c14310/0_2.png',
);
AWallpaperWithASimpleGraphicOfARobotArmAga68120b384c744b36B7574e8797c143100_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithASimpleGraphicOfARobotArmAga68120b384c744b36B7574e8797c143100_2_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperWithASimpleGraphicOfARobotArmAga68120b384c744b36B7574e8797c143100_2_Image.content = content;
