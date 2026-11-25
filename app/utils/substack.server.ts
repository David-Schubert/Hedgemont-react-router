import { XMLParser } from "fast-xml-parser";
import sanitizeHtml from "sanitize-html";

export type SubstackArticle = {
  slug: string;
  url: string;
  title: string;
  subtitle: string;
  excerpt: string;
  author: string | null;
  publishedAt: string;
  coverImage: string | null;
  contentHtml: string;
};

export type SubstackArticleSummary = Pick<
  SubstackArticle,
  "slug" | "title" | "excerpt" | "publishedAt" | "coverImage"
>;

type RssItem = {
  title?: string;
  description?: string;
  link?: string;
  pubDate?: string;
  "dc:creator"?: string;
  "content:encoded"?: string;
  enclosure?: { url?: string; type?: string };
};

const CACHE_TTL_MS = 10 * 60 * 1000;
const RETRY_AFTER_MS = 60 * 1000;
const FETCH_TIMEOUT_MS = 5000;
const EXCERPT_LENGTH = 200;
const COVER_IMAGE_WIDTH = 1200;

export const substackUrl = parseOrigin(process.env.SUBSTACK_URL);

const xmlParser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "",
  parseTagValue: false,
  isArray: (_tagName, jPath) => jPath === "rss.channel.item",
});

const CONTENT_SANITIZE_OPTIONS: sanitizeHtml.IOptions = {
  allowedTags: [
    ...sanitizeHtml.defaults.allowedTags,
    "img",
    "picture",
    "source",
    "iframe",
  ],
  allowedAttributes: {
    a: ["href", "name", "target", "rel", "id"],
    img: ["src", "srcset", "sizes", "alt", "title", "width", "height", "loading"],
    source: ["srcset", "sizes", "type", "media"],
    iframe: ["src", "width", "height", "allow", "allowfullscreen", "frameborder", "loading", "title"],
    td: ["colspan", "rowspan", "align"],
    th: ["colspan", "rowspan", "align"],
  },
  // Only classes styled in _article.scss, the rest belongs to the Substack app.
  allowedClasses: {
    "*": [
      "image-caption",
      "pullquote",
      "callout-block",
      "button",
      "footnote",
      "footnote-anchor",
      "footnote-number",
      "youtube-inner",
    ],
  },
  allowedIframeHostnames: [
    "www.youtube-nocookie.com",
    "www.youtube.com",
    "player.vimeo.com",
    "open.spotify.com",
  ],
  // Image zoom and restack buttons of the Substack app.
  exclusiveFilter: (frame) =>
    frame.attribs.class?.split(" ").includes("image-link-expand") ?? false,
  transformTags: {
    a: (tagName, attribs) => ({
      tagName,
      attribs: attribs.href?.startsWith("#")
        ? attribs
        : { ...attribs, target: "_blank", rel: "noopener noreferrer" },
    }),
  },
};

const BLOCK_END = /<\/(?:p|div|li|h[1-6]|blockquote|figcaption|pre|td|th)>|<br\s*\/?>/gi;

let cache: { articles: SubstackArticle[]; expiresAt: number } | null = null;
let pending: Promise<SubstackArticle[]> | null = null;

/**
 * Latest articles from the publication RSS feed (Substack serves ~20 newest).
 * Cached in memory; an expired cache is served while the feed refreshes in the background.
 */
export async function getArticles(): Promise<SubstackArticle[]> {
  if (!substackUrl) return [];
  if (cache && cache.expiresAt > Date.now()) return cache.articles;

  const refreshing = refresh(substackUrl);
  return cache ? cache.articles : refreshing;
}

export async function getArticle(slug: string) {
  const articles = await getArticles();
  return articles.find((article) => article.slug === slug) ?? null;
}

export async function getArticleSummaries(
  limit: number,
): Promise<SubstackArticleSummary[]> {
  const articles = await getArticles();
  return articles
    .slice(0, limit)
    .map(({ slug, title, excerpt, publishedAt, coverImage }) => ({
      slug,
      title,
      excerpt,
      publishedAt,
      coverImage,
    }));
}

function refresh(baseUrl: string) {
  pending ??= fetchArticles(baseUrl)
    .then((articles) => {
      cache = { articles, expiresAt: Date.now() + CACHE_TTL_MS };
      return articles;
    })
    .catch((error: unknown) => {
      // eslint-disable-next-line no-console
      console.error("Failed to load Substack feed", error);
      cache = {
        articles: cache?.articles ?? [],
        expiresAt: Date.now() + RETRY_AFTER_MS,
      };
      return cache.articles;
    })
    .finally(() => {
      pending = null;
    });

  return pending;
}

async function fetchArticles(baseUrl: string) {
  const response = await fetch(`${baseUrl}/feed`, {
    headers: { Accept: "application/rss+xml, application/xml" },
    signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
  });

  if (!response.ok) {
    throw new Error(`Substack feed responded with ${response.status}`);
  }

  const feed = xmlParser.parse(await response.text());
  const items: RssItem[] = feed?.rss?.channel?.item ?? [];

  return items.flatMap((item) => {
    const article = toArticle(item);
    return article ? [article] : [];
  });
}

function toArticle(item: RssItem): SubstackArticle | null {
  const slug = item.link ? getSlug(item.link) : null;
  const publishedAt = new Date(item.pubDate ?? "");

  if (!item.link || !slug || !item.title || Number.isNaN(publishedAt.getTime())) {
    return null;
  }

  const contentHtml = sanitizeHtml(
    item["content:encoded"] ?? "",
    CONTENT_SANITIZE_OPTIONS,
  );
  const subtitle = toPlainText(item.description ?? "");
  const cover = item.enclosure?.type?.startsWith("image/")
    ? item.enclosure.url
    : undefined;

  return {
    slug,
    url: item.link,
    title: toPlainText(item.title),
    subtitle,
    excerpt: subtitle || truncate(toPlainText(contentHtml), EXCERPT_LENGTH),
    author: item["dc:creator"] ? toPlainText(item["dc:creator"]) : null,
    publishedAt: publishedAt.toISOString(),
    coverImage: cover ? resizeImage(cover, COVER_IMAGE_WIDTH) : null,
    contentHtml,
  };
}

function getSlug(link: string) {
  try {
    return /^\/p\/([^/]+)/.exec(new URL(link).pathname)?.[1] ?? null;
  } catch {
    return null;
  }
}

/** Substack sends text fields as HTML, with entities like &#8217;. */
function toPlainText(html: string) {
  // sanitize-html decodes entities but escapes &, < and > in its output
  return sanitizeHtml(html.replace(BLOCK_END, "$& "), {
    allowedTags: [],
    allowedAttributes: {},
  })
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function truncate(text: string, maxLength: number) {
  if (text.length <= maxLength) return text;

  const cut = text.slice(0, maxLength);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[\s.,;:–-]+$/, "")}…`;
}

/** Serves the image through the Substack CDN in the given width. */
function resizeImage(url: string, width: number) {
  const params = `w_${width},c_limit,f_auto,q_auto:good,fl_progressive:steep`;
  const cdnMatch =
    /^https:\/\/substackcdn\.com\/image\/fetch\/(\$s_![^!/]+!,)?[^/]*\/(.+)$/.exec(url);

  if (cdnMatch) {
    return `https://substackcdn.com/image/fetch/${cdnMatch[1] ?? ""}${params}/${cdnMatch[2]}`;
  }

  if (url.startsWith("https://substack-post-media.s3.amazonaws.com/")) {
    return `https://substackcdn.com/image/fetch/${params}/${encodeURIComponent(url)}`;
  }

  return url;
}

function parseOrigin(value: string | undefined) {
  if (!value?.trim()) return null;

  try {
    return new URL(value.trim()).origin;
  } catch {
    // eslint-disable-next-line no-console
    console.error(`Invalid SUBSTACK_URL: ${value}`);
    return null;
  }
}
