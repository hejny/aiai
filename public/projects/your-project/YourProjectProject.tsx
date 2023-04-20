/**
 * 🏭 GENERATED WITH 🖼️ Generate projects library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import { Item } from '../../../src/components/Items/Item';
import { Translate } from '../../../src/components/Translate/Translate';
// import { effectToRef } from '../../../src/utils/Drawing/effectToRef';
// import { yourProjectEffect } from '../../../src/utils/Drawing/projectsEffectsLibrary';
import pavolHejnColoringBookBlackAndWhiteIllustrationOutlineOFbf45e15A73d474c8d0898188a1010ef from './Pavol_Hejn_Coloring_book_black_and_white_illustration_outline_o_fbf45e15-a73d-474c-8d08-98188a1010ef.svg';

/**
 * Presentation of project Your project
 *
 * @see /public/projects/your-project/your-project.en.md
 * @see /public/projects/your-project/your-project.cs.md
 * @generated by generate-projects-library
 */
export function YourProjectProject() {
    return (
        <a href="/#contact" target="_blank" rel="noreferrer">
            <Item>
                <Item.Title>
                    <Translate locale="en">Your project</Translate>
                    <Translate locale="cs">Váš projekt</Translate>
                </Item.Title>
                <Item.Description>
                    <Translate locale="en">
                        <p>Let&apos;s get your ideas off the ground and turn them into a reality!</p>
                    </Translate>
                    <Translate locale="cs">
                        <p>Pomohu Vám s vašim nápadem a proměním ho ve skutečnost!</p>
                    </Translate>
                </Item.Description>
                <Item.Image>
                    <div
                        // ref={effectToRef(yourProjectEffect)}
                        style={{
                            backgroundImage: `url(${pavolHejnColoringBookBlackAndWhiteIllustrationOutlineOFbf45e15A73d474c8d0898188a1010ef.src})`,
                        }}
                    />
                    {/* <Image alt="Light bulb of ideas" src={background} draggable="false" placeholder="blur" /> */}
                </Item.Image>
            </Item>
        </a>
    );
}
