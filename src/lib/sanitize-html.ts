import sanitizeHtml from 'sanitize-html';

/**
 * Allowlist-based sanitizer for admin-authored blog post HTML.
 *
 * Applied both when a post is saved and when it is rendered, so content that
 * was stored before sanitization existed is covered too. Scripts, event
 * handlers, inline styles, and non-http(s)/mailto URLs are stripped.
 */

const ALLOWED_IFRAME_HOSTS = ['www.youtube.com', 'www.youtube-nocookie.com', 'player.vimeo.com'];

const options: sanitizeHtml.IOptions = {
  allowedTags: [
    ...sanitizeHtml.defaults.allowedTags,
    'img',
    'h1',
    'h2',
    'figure',
    'figcaption',
    'iframe',
    'u',
    's',
    'sub',
    'sup',
  ],
  allowedAttributes: {
    a: ['href', 'name', 'target', 'rel', 'title'],
    img: ['src', 'alt', 'title', 'width', 'height', 'loading'],
    iframe: ['src', 'width', 'height', 'allow', 'allowfullscreen', 'title', 'frameborder'],
    td: ['colspan', 'rowspan'],
    th: ['colspan', 'rowspan', 'scope'],
    '*': ['id'],
  },
  allowedSchemes: ['http', 'https', 'mailto'],
  allowedSchemesByTag: {
    img: ['http', 'https'],
    iframe: ['https'],
  },
  allowedIframeHostnames: ALLOWED_IFRAME_HOSTS,
  allowProtocolRelative: false,
  // Any link that opens a new tab must not be able to reach back to our window.
  transformTags: {
    a: (tagName, attribs) => {
      if (attribs.target === '_blank') {
        return { tagName, attribs: { ...attribs, rel: 'noopener noreferrer' } };
      }
      return { tagName, attribs };
    },
  },
};

export function sanitizePostHtml(html: unknown): string {
  if (typeof html !== 'string') return '';
  return sanitizeHtml(html, options);
}
