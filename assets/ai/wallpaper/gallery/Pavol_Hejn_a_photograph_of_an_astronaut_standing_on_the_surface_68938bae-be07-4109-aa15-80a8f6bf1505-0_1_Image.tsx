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
import metadata from './Pavol_Hejn_a_photograph_of_an_astronaut_standing_on_the_surface_68938bae-be07-4109-aa15-80a8f6bf1505-0_1.json';
import source from './Pavol_Hejn_a_photograph_of_an_astronaut_standing_on_the_surface_68938bae-be07-4109-aa15-80a8f6bf1505-0_1.png';

/**
 * Image of A photograph of an astronaut standing on the surface of the moon with Earth in the background.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function APhotographOfAnAstronautStandingOnTheSurface68938baeBe074109Aa1580a8f6bf15050_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A photograph of an astronaut standing on the surface of the moon with Earth in the background."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

APhotographOfAnAstronautStandingOnTheSurface68938baeBe074109Aa1580a8f6bf15050_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APhotographOfAnAstronautStandingOnTheSurface68938baeBe074109Aa1580a8f6bf15050_1_Image.colorStats = {
    averageColor: Color.fromHex('#222223'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#991111'), Color.fromHex('#eeffff')],
    minmaxGreen: [Color.fromHex('#778855'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#333355'), Color.fromHex('#ffffdd')],
    mostFrequentColor: Color.fromHex('#112222'),
    mostSaturatedColor: Color.fromHex('#000011'),
    mostGroupedColor: Color.fromHex('#000000'),
    bottom: {
        averageColor: Color.fromHex('#44413f'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#885544'), Color.fromHex('#eeffff')],
        minmaxGreen: [Color.fromHex('#889977'), Color.fromHex('#ffeeff')],
        minmaxBlue: [Color.fromHex('#334455'), Color.fromHex('#ffffdd')],
        mostFrequentColor: Color.fromHex('#112222'),
        mostSaturatedColor: Color.fromHex('#000011'),
        mostGroupedColor: Color.fromHex('#000000'),
    },
} satisfies IImageColorStats;
