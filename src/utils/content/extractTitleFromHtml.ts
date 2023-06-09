import spaceTrim from 'spacetrim';
import { DOMParser } from 'xmldom-qsa';
import { string_html, string_title } from '../typeAliases';

/**
 * Extract the first heading from HTML using regex
 *
 * @param contentText HTML
 * @returns heading
 */
export function extractTitleFromHtml(contentHtml: string_html): string_title | null {
    const parser = new DOMParser();
    const document = parser.parseFromString(
        spaceTrim(`
            <!DOCTYPE html>
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    ${contentHtml}
                </body>
            </html>
        `),
        'text/html',
    );

    for (const headingType of ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']) {
        const headingElements = Array.from(document.querySelectorAll(headingType));

        if (headingElements.length === 0) {
            continue;
        }

        return headingElements
            .map((headingElement) => (headingElement.textContent || '').replace(/\s/g, ' '))
            .join('\n');
    }

    return null;
}

/**
 * TODO: Maybe use jsdom (or other parser/polyfill) instead of xmldom-qsa
 *       This brings quite a lot of bundle size with it
 */
