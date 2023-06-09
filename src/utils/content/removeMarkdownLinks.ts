import { string_markdown } from '../typeAliases';

/**
 * Removes Markdown link tags from a string.
 *
 * @param {string} str - The string to remove Markdown tags from.
 * @returns {string} The input string with all Markdown tags removed.
 */
export function removeMarkdownLinks(str: string_markdown): string_markdown {
    // Use regular expressions to remove Markdown tags from the string
    return str.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1');
}

/**
 * @see https://chat.openai.com/chat/bb7c3a5b-fe9c-4ccc-9057-f47e0fd66489
 */
