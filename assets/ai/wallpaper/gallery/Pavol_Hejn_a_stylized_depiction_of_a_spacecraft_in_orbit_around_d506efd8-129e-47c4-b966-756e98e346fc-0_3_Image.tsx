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
import colorStats from './Pavol_Hejn_a_stylized_depiction_of_a_spacecraft_in_orbit_around_d506efd8-129e-47c4-b966-756e98e346fc-0_3.colors.json';
import content from './Pavol_Hejn_a_stylized_depiction_of_a_spacecraft_in_orbit_around_d506efd8-129e-47c4-b966-756e98e346fc-0_3.content.md';
import metadata from './Pavol_Hejn_a_stylized_depiction_of_a_spacecraft_in_orbit_around_d506efd8-129e-47c4-b966-756e98e346fc-0_3.json';

/**
 * Image of A stylized depiction of a spacecraft in orbit around a distant planet or moon, with dramatic lighting and shadows.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AStylizedDepictionOfASpacecraftInOrbitAroundD506efd8129e47c4B966756e98e346fc0_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A stylized depiction of a spacecraft in orbit around a distant planet or moon, with dramatic lighting and shadows."
            src="https://cdn.midjourney.com/d506efd8-129e-47c4-b966-756e98e346fc/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AStylizedDepictionOfASpacecraftInOrbitAroundD506efd8129e47c4B966756e98e346fc0_3_Image.src = new URL(
    'https://cdn.midjourney.com/d506efd8-129e-47c4-b966-756e98e346fc/0_3.png',
);
AStylizedDepictionOfASpacecraftInOrbitAroundD506efd8129e47c4B966756e98e346fc0_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AStylizedDepictionOfASpacecraftInOrbitAroundD506efd8129e47c4B966756e98e346fc0_3_Image.colorStats =
    hydrateColorStats(colorStats);
AStylizedDepictionOfASpacecraftInOrbitAroundD506efd8129e47c4B966756e98e346fc0_3_Image.content = content;
