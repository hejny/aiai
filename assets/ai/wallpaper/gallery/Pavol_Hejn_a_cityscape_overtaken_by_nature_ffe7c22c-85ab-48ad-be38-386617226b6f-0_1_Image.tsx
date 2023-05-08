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
import metadata from './Pavol_Hejn_a_cityscape_overtaken_by_nature_ffe7c22c-85ab-48ad-be38-386617226b6f-0_1.json';
import source from './Pavol_Hejn_a_cityscape_overtaken_by_nature_ffe7c22c-85ab-48ad-be38-386617226b6f-0_1.png';

/**
 * Image of A cityscape overtaken by nature
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function ACityscapeOvertakenByNatureFfe7c22c85ab48adBe38386617226b6f0_1_Image(props: IWallpaperComponentProps) {
    const { width, quality } = props;

    return (
        <Image
            alt="A cityscape overtaken by nature"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ACityscapeOvertakenByNatureFfe7c22c85ab48adBe38386617226b6f0_1_Image.metadata = metadata satisfies IWallpaperMetadata;
ACityscapeOvertakenByNatureFfe7c22c85ab48adBe38386617226b6f0_1_Image.colorStats = {
    averageColor: Color.fromHex('#4e533f'),
    lightestColor: Color.fromHex('#eeeedd'),
    darkestColor: Color.fromHex('#001100'),
    minmaxWhite: [Color.fromHex('#eeeedd'), Color.fromHex('#001100')],
    minmaxRed: [Color.fromHex('#aa6633'), Color.fromHex('#eeeedd')],
    minmaxGreen: [Color.fromHex('#779944'), Color.fromHex('#eedddd')],
    minmaxBlue: [Color.fromHex('#556677'), Color.fromHex('#eeff88')],
    mostFrequentColor: Color.fromHex('#112211'),
    mostSaturatedColor: Color.fromHex('#112200'),
    mostGroupedColor: Color.fromHex('#111111'),
    bottom: {
        averageColor: Color.fromHex('#333c22'),
        lightestColor: Color.fromHex('#eeddaa'),
        darkestColor: Color.fromHex('#001100'),
        minmaxWhite: [Color.fromHex('#eeddaa'), Color.fromHex('#001100')],
        minmaxRed: [Color.fromHex('#663322'), Color.fromHex('#ffff99')],
        minmaxGreen: [Color.fromHex('#88aa44'), Color.fromHex('#221111')],
        minmaxBlue: [Color.fromHex('#223333'), Color.fromHex('#ffff99')],
        mostFrequentColor: Color.fromHex('#112211'),
        mostSaturatedColor: Color.fromHex('#112200'),
        mostGroupedColor: Color.fromHex('#112211'),
    },
} satisfies IImageColorStats;
