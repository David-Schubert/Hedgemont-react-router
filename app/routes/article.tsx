import { data, Link, redirect } from "react-router";
import { useTranslation } from "react-i18next";
import type { Route } from "./+types/article";
import { formatDate } from "~/utils/date";
import { getArticle, substackUrl } from "~/utils/substack.server";

export async function loader({ params }: Route.LoaderArgs) {
  const article = await getArticle(params.slug);

  if (!article) {
    // The RSS feed holds only the newest posts, older ones are still on Substack
    if (substackUrl) {
      throw redirect(`${substackUrl}/p/${encodeURIComponent(params.slug)}`);
    }
    throw data(null, { status: 404 });
  }

  return { article, subscribeUrl: `${substackUrl}/subscribe` };
}

export function meta({ loaderData }: Route.MetaArgs) {
  if (!loaderData) return [];

  const { article } = loaderData;

  return [
    { title: `${article.title} | HedgeMont` },
    { name: "description", content: article.excerpt },
    { property: "og:type", content: "article" },
    { property: "og:title", content: article.title },
    { property: "og:description", content: article.excerpt },
    ...(article.coverImage
      ? [{ property: "og:image", content: article.coverImage }]
      : []),
    // The original lives on Substack, avoid duplicate content in search engines
    { tagName: "link", rel: "canonical", href: article.url },
  ];
}

export default function Article({ loaderData }: Route.ComponentProps) {
  const { article, subscribeUrl } = loaderData;
  const { t, i18n } = useTranslation();

  return (
    <main>
      <article className="article">
        <div className="container-fluid-narrow">
          <div className="article-body">
            <Link className="article-back" to="/#clanky">
              <svg
                width="21"
                height="16"
                viewBox="0 0 21 16"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M.904 8.877 0 7.997l.904-.882L7.3.881 8.205 0l1.811 1.765-5.118 4.988H21v2.494H4.898l5.118 4.988L8.205 16l-.904-.88L.904 8.884v-.008z" />
              </svg>
              {t("articles.back")}
            </Link>

            <p className="article-meta">
              <time dateTime={article.publishedAt}>
                {formatDate(article.publishedAt, i18n.language)}
              </time>
              {article.author && ` · ${article.author}`}
            </p>
            <h1 className="article-title">{article.title}</h1>
            {article.subtitle && (
              <p className="article-subtitle">{article.subtitle}</p>
            )}

            {/* Sanitized in substack.server.ts */}
            <div
              className="article-content"
              dangerouslySetInnerHTML={{ __html: article.contentHtml }}
            />

            <div className="article-actions">
              <a
                className="btn btn-primary"
                href={subscribeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("articles.subscribe")}
              </a>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {t("articles.read-on-substack")}
              </a>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
