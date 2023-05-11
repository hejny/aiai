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
import { IImageColorStats } from '../../../../src/utils/image/utils/IImageColorStats';
import { IWallpaperMetadata, IWallpaperComponentProps } from '../IWallpaperComponent';
import metadata from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_a__506d18e2-5600-454a-9179-789ad6f40c99-0_2.json';
import source from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_a__506d18e2-5600-454a-9179-789ad6f40c99-0_2.png';

/**
 * Image of A wallpaper featuring an abstract illustration of a futuristic cityscape, with glowing lights and a dark and moody color scheme, set against a gradient background.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingAnAbstractIllustrationOfA506d18e25600454a9179789ad6f40c990_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper featuring an abstract illustration of a futuristic cityscape, with glowing lights and a dark and moody color scheme, set against a gradient background."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperFeaturingAnAbstractIllustrationOfA506d18e25600454a9179789ad6f40c990_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingAnAbstractIllustrationOfA506d18e25600454a9179789ad6f40c990_2_Image.colorStats = {
    averageColor: Color.fromHex('#111c22'),
    lightestColor: Color.fromHex('#ddffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#eeffee'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#cc3344'), Color.fromHex('#aaffff')],
    minmaxGreen: [Color.fromHex('#44aa55'), Color.fromHex('#880033')],
    minmaxBlue: [Color.fromHex('#005588'), Color.fromHex('#eeffee')],
    mostFrequentColor: Color.fromHex('#000011'),
    mostSaturatedColor: Color.fromHex('#001111'),
    mostGroupedColor: Color.fromHex('#001111'),
    bottom: {
        averageColor: Color.fromHex('#0e0d17'),
        lightestColor: Color.fromHex('#ddffee'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ddffee'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#cc3344'), Color.fromHex('#ddffee')],
        minmaxGreen: [Color.fromHex('#44aa55'), Color.fromHex('#880033')],
        minmaxBlue: [Color.fromHex('#005588'), Color.fromHex('#ffdd99')],
        mostFrequentColor: Color.fromHex('#000011'),
        mostSaturatedColor: Color.fromHex('#001111'),
        mostGroupedColor: Color.fromHex('#000000'),
    },
} satisfies IImageColorStats;
