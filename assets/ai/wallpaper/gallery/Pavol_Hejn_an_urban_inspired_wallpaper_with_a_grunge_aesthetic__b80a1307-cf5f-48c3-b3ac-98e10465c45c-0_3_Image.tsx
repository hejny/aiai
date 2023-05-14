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
import colorStats from './Pavol_Hejn_an_urban_inspired_wallpaper_with_a_grunge_aesthetic__b80a1307-cf5f-48c3-b3ac-98e10465c45c-0_3.colors.json';
import content from './Pavol_Hejn_an_urban_inspired_wallpaper_with_a_grunge_aesthetic__b80a1307-cf5f-48c3-b3ac-98e10465c45c-0_3.content.md';
import metadata from './Pavol_Hejn_an_urban_inspired_wallpaper_with_a_grunge_aesthetic__b80a1307-cf5f-48c3-b3ac-98e10465c45c-0_3.json';

/**
 * Image of An urban-inspired wallpaper with a grunge aesthetic, featuring a neon-lit cityscape with futuristic elements such as holographic billboards.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AnUrbanInspiredWallpaperWithAGrungeAestheticB80a1307Cf5f48c3B3ac98e10465c45c0_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An urban-inspired wallpaper with a grunge aesthetic, featuring a neon-lit cityscape with futuristic elements such as holographic billboards."
            src="https://cdn.midjourney.com/b80a1307-cf5f-48c3-b3ac-98e10465c45c/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AnUrbanInspiredWallpaperWithAGrungeAestheticB80a1307Cf5f48c3B3ac98e10465c45c0_3_Image.src = new URL(
    'https://cdn.midjourney.com/b80a1307-cf5f-48c3-b3ac-98e10465c45c/0_3.png',
);
AnUrbanInspiredWallpaperWithAGrungeAestheticB80a1307Cf5f48c3B3ac98e10465c45c0_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnUrbanInspiredWallpaperWithAGrungeAestheticB80a1307Cf5f48c3B3ac98e10465c45c0_3_Image.colorStats =
    hydrateColorStats(colorStats);
AnUrbanInspiredWallpaperWithAGrungeAestheticB80a1307Cf5f48c3B3ac98e10465c45c0_3_Image.content = content;
