import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const HTML_ENTITIES: Record<string, string> = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'",
  '&nbsp;': ' ',
};

/**
 * Removes tags. No tag can start after the last ">", so that part is left
 * out of the regex: a long run of "<" without a closing ">" (e.g. in a
 * Meetup description) would otherwise take quadratic time.
 */
function removeTags(html: string): string {
  const end = html.lastIndexOf('>') + 1;
  return html.slice(0, end).replace(/<[^>]+>/g, '') + html.slice(end);
}

/** Converts an HTML fragment to plain text, keeping paragraph breaks as newlines. */
export function stripHtml(html: string): string {
  const withBreaks = html
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n\n');

  // Entities are decoded in one pass, so "&amp;lt;" becomes "&lt;", not "<".
  return removeTags(withBreaks)
    .replace(/&(?:amp|lt|gt|quot|#39|nbsp);/g, (entity) => HTML_ENTITIES[entity])
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}
