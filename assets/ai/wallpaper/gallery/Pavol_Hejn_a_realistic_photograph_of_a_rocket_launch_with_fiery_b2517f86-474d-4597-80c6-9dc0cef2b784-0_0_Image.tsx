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
import colorStats from './Pavol_Hejn_a_realistic_photograph_of_a_rocket_launch_with_fiery_b2517f86-474d-4597-80c6-9dc0cef2b784-0_0.colors.json';
import content from './Pavol_Hejn_a_realistic_photograph_of_a_rocket_launch_with_fiery_b2517f86-474d-4597-80c6-9dc0cef2b784-0_0.content.md';
import metadata from './Pavol_Hejn_a_realistic_photograph_of_a_rocket_launch_with_fiery_b2517f86-474d-4597-80c6-9dc0cef2b784-0_0.json';

/**
 * Image of A realistic photograph of a rocket launch, with fiery trails and smoke visible in the sky.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function ARealisticPhotographOfARocketLaunchWithFieryB2517f86474d459780c69dc0cef2b7840_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A realistic photograph of a rocket launch, with fiery trails and smoke visible in the sky."
            src="https://cdn.midjourney.com/b2517f86-474d-4597-80c6-9dc0cef2b784/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
ARealisticPhotographOfARocketLaunchWithFieryB2517f86474d459780c69dc0cef2b7840_0_Image.src = new URL(
    'https://cdn.midjourney.com/b2517f86-474d-4597-80c6-9dc0cef2b784/0_0.png',
);
ARealisticPhotographOfARocketLaunchWithFieryB2517f86474d459780c69dc0cef2b7840_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ARealisticPhotographOfARocketLaunchWithFieryB2517f86474d459780c69dc0cef2b7840_0_Image.colorStats =
    hydrateColorStats(colorStats);
ARealisticPhotographOfARocketLaunchWithFieryB2517f86474d459780c69dc0cef2b7840_0_Image.content = content;
