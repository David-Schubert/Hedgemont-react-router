import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { EmblaSectionCarousel } from "~/components/main/sections/carousel/carousel";
import { formatDate } from "~/utils/date";
import type { SubstackArticleSummary } from "~/utils/substack.server";

type Props = {
  articles: SubstackArticleSummary[];
};

export function Articles({ articles }: Props) {
  const { t, i18n } = useTranslation();

  if (articles.length === 0) return null;

  return (
    <EmblaSectionCarousel
      id="clanky"
      sectionClassName="section-articles"
      title={t("articles.title")}
    >
      {articles.map((article) => (
        <div className="embla-item" key={article.slug}>
          <Link
            to={`/clanky/${article.slug}`}
            className="section-carousel-item article-card"
          >
            {article.coverImage && (
              <img
                src={article.coverImage}
                alt=""
                className="img-fluid"
                loading="lazy"
              />
            )}
            <h3>
              <time dateTime={article.publishedAt}>
                {formatDate(article.publishedAt, i18n.language)}
              </time>
            </h3>
            <h2>{article.title}</h2>
            {article.excerpt && <p>{article.excerpt}</p>}
          </Link>
        </div>
      ))}
    </EmblaSectionCarousel>
  );
}
