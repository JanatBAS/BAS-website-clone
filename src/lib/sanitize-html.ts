import sanitizeHtml from 'sanitize-html';

/**
 * Allowlist-based sanitizer for admin-authored blog post HTML.
 *
 * Applied both when a post is saved and when it is rendered, so content that
 * was stored before sanitization existed is covered too. Scripts, event
 * handlers, inline styles, and non-http(s)/mailto URLs are stripped.
 */

const ALLOWED_IFRAME_HOSTS = ['www.youtube.com', 'www.youtube-nocookie.com', 'player.vimeo.com'];

/**
 * An element id is also a global variable in the browser. An id named like a
 * Next.js or Turbopack runtime global (self.__next_f, globalThis.TURBOPACK,
 * NEXT_DEPLOYMENT_ID) is read in its place before the runtime sets it, which
 * stops the page from hydrating, so such ids are dropped.
 */
const RUNTIME_GLOBAL_ID = /^(__|TURBOPACK|NEXT_)/;

function withoutRuntimeGlobalId(attribs: sanitizeHtml.Attributes): sanitizeHtml.Attributes {
  if (attribs.id === undefined || !RUNTIME_GLOBAL_ID.test(attribs.id)) return attribs;
  const rest = { ...attribs };
  delete rest.id;
  return rest;
}

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
  // Any link that opens another window (a "_blank" or a named target) must not
  // be able to reach back to our window.
  transformTags: {
    a: (tagName, attribs) => {
      if (attribs.target && attribs.target !== '_self') {
        return { tagName, attribs: { ...attribs, rel: 'noopener noreferrer' } };
      }
      return { tagName, attribs };
    },
    // Runs after the tag's own transform, on every element.
    '*': (tagName, attribs) => ({ tagName, attribs: withoutRuntimeGlobalId(attribs) }),
  },
};

export function sanitizePostHtml(html: unknown): string {
  if (typeof html !== 'string') return '';
  return sanitizeHtml(html, options);
}
