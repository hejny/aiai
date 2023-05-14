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
import colorStats from './Pavol_Hejn_a_group_of_ainauts_observing_the_rings_of_saturn_fro_fdae2082-0fae-42be-bd9d-639ddbc532f9-0_2.colors.json';
import content from './Pavol_Hejn_a_group_of_ainauts_observing_the_rings_of_saturn_fro_fdae2082-0fae-42be-bd9d-639ddbc532f9-0_2.content.md';
import metadata from './Pavol_Hejn_a_group_of_ainauts_observing_the_rings_of_saturn_fro_fdae2082-0fae-42be-bd9d-639ddbc532f9-0_2.json';

/**
 * Image of A group of AInauts observing the rings of Saturn from a high-tech space station, surrounded by stars and galaxies.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AGroupOfAinautsObservingTheRingsOfSaturnFroFdae20820fae42beBd9d639ddbc532f90_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A group of AInauts observing the rings of Saturn from a high-tech space station, surrounded by stars and galaxies."
            src="https://cdn.midjourney.com/fdae2082-0fae-42be-bd9d-639ddbc532f9/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AGroupOfAinautsObservingTheRingsOfSaturnFroFdae20820fae42beBd9d639ddbc532f90_2_Image.src = new URL(
    'https://cdn.midjourney.com/fdae2082-0fae-42be-bd9d-639ddbc532f9/0_2.png',
);
AGroupOfAinautsObservingTheRingsOfSaturnFroFdae20820fae42beBd9d639ddbc532f90_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AGroupOfAinautsObservingTheRingsOfSaturnFroFdae20820fae42beBd9d639ddbc532f90_2_Image.colorStats =
    hydrateColorStats(colorStats);
AGroupOfAinautsObservingTheRingsOfSaturnFroFdae20820fae42beBd9d639ddbc532f90_2_Image.content = content;
