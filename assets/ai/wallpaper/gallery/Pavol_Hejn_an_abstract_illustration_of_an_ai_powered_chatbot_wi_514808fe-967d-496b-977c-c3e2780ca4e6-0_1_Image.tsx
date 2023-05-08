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
import metadata from './Pavol_Hejn_an_abstract_illustration_of_an_ai_powered_chatbot_wi_514808fe-967d-496b-977c-c3e2780ca4e6-0_1.json';
import source from './Pavol_Hejn_an_abstract_illustration_of_an_ai_powered_chatbot_wi_514808fe-967d-496b-977c-c3e2780ca4e6-0_1.png';

/**
 * Image of An abstract illustration of an AI-powered chatbot, with sleek and modern graphics and a minimalist color scheme.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AnAbstractIllustrationOfAnAiPoweredChatbotWi514808fe967d496b977cC3e2780ca4e60_1_Image(
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

AnAbstractIllustrationOfAnAiPoweredChatbotWi514808fe967d496b977cC3e2780ca4e60_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractIllustrationOfAnAiPoweredChatbotWi514808fe967d496b977cC3e2780ca4e60_1_Image.colorStats = {
    averageColor: Color.fromHex('#3b4f6b'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#111133'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#220033')],
    minmaxRed: [Color.fromHex('#aa3355'), Color.fromHex('#55eeee')],
    minmaxGreen: [Color.fromHex('#228888'), Color.fromHex('#ffffff')],
    minmaxBlue: [Color.fromHex('#225588'), Color.fromHex('#ffffff')],
    mostFrequentColor: Color.fromHex('#112244'),
    mostSaturatedColor: Color.fromHex('#002244'),
    mostGroupedColor: Color.fromHex('#112244'),
    bottom: {
        averageColor: Color.fromHex('#3a516d'),
        lightestColor: Color.fromHex('#eeffff'),
        darkestColor: Color.fromHex('#111133'),
        minmaxWhite: [Color.fromHex('#eeffff'), Color.fromHex('#111133')],
        minmaxRed: [Color.fromHex('#cc5577'), Color.fromHex('#44eedd')],
        minmaxGreen: [Color.fromHex('#33bbbb'), Color.fromHex('#eeffff')],
        minmaxBlue: [Color.fromHex('#225588'), Color.fromHex('#eeffff')],
        mostFrequentColor: Color.fromHex('#112244'),
        mostSaturatedColor: Color.fromHex('#003355'),
        mostGroupedColor: Color.fromHex('#112244'),
    },
} satisfies IImageColorStats;
