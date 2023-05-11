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
import metadata from './Pavol_Hejn_an_abstract_illustration_of_an_ai_powered_chatbot_wi_cdfd5a3a-1160-47d6-8e4f-64966cd90be8-0_0.json';
import source from './Pavol_Hejn_an_abstract_illustration_of_an_ai_powered_chatbot_wi_cdfd5a3a-1160-47d6-8e4f-64966cd90be8-0_0.png';

/**
 * Image of An abstract illustration of an AI-powered chatbot, with sleek and modern graphics and a minimalist color scheme.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AnAbstractIllustrationOfAnAiPoweredChatbotWiCdfd5a3a116047d68e4f64966cd90be80_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An abstract illustration of an AI-powered chatbot, with sleek and modern graphics and a minimalist color scheme."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnAbstractIllustrationOfAnAiPoweredChatbotWiCdfd5a3a116047d68e4f64966cd90be80_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractIllustrationOfAnAiPoweredChatbotWiCdfd5a3a116047d68e4f64966cd90be80_0_Image.colorStats = {
    averageColor: Color.fromHex('#e0c5b9'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#001100'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#ff2222'), Color.fromHex('#ccffff')],
    minmaxGreen: [Color.fromHex('#229977'), Color.fromHex('#ff2233')],
    minmaxBlue: [Color.fromHex('#116699'), Color.fromHex('#ffcc33')],
    mostFrequentColor: Color.fromHex('#ffffee'),
    mostSaturatedColor: Color.fromHex('#002233'),
    mostGroupedColor: Color.fromHex('#ffeeee'),
    bottom: {
        averageColor: Color.fromHex('#d3bbad'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#001100'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000011')],
        minmaxRed: [Color.fromHex('#ee2222'), Color.fromHex('#ccffff')],
        minmaxGreen: [Color.fromHex('#55aa88'), Color.fromHex('#ff2233')],
        minmaxBlue: [Color.fromHex('#116699'), Color.fromHex('#ffffcc')],
        mostFrequentColor: Color.fromHex('#ffffee'),
        mostSaturatedColor: Color.fromHex('#002233'),
        mostGroupedColor: Color.fromHex('#ffeeee'),
    },
} satisfies IImageColorStats;
