import { useTranslation } from "react-i18next";
import { EmblaSectionCarousel } from "~/components/main/sections/carousel/carousel";

export function Services() {
  const { t } = useTranslation();

  return (
    <EmblaSectionCarousel
      id="sluzby"
      sectionClassName="section-services"
      title={t("services.title")}
      options={{ loop: true, align: "start" }}
    >
      <div className="embla-item">
        <div className="section-carousel-item">
          <h2>{t("services.investment.title")}</h2>
          <h3>{t("services.investment.strategy.title")}</h3>
          <p>{t("services.investment.strategy.description")}</p>
          <h3>{t("services.investment.selection.title")}</h3>
          <p>{t("services.investment.selection.description")}</p>
          <h3>{t("services.investment.allocation.title")}</h3>
          <p>{t("services.investment.allocation.description")}</p>
          <h3>{t("services.investment.consolidation.title")}</h3>
          <p>{t("services.investment.consolidation.description")}</p>
        </div>
      </div>

      <div className="embla-item">
        <div className="section-carousel-item">
          <h2>{t("services.management.title")}</h2>
          <h3>{t("services.management.trusts.title")}</h3>
          <p>{t("services.management.trusts.description")}</p>
          <h3>{t("services.management.coordination.title")}</h3>
          <p>{t("services.management.coordination.description")}</p>
          <h3>{t("services.management.protection.title")}</h3>
          <p>{t("services.management.protection.description")}</p>
          <h3>{t("services.management.consolidation.title")}</h3>
          <p>{t("services.management.consolidation.description")}</p>
        </div>
      </div>

      <div className="embla-item">
        <div className="section-carousel-item">
          <h2>{t("services.heritage.title")}</h2>
          <h3>{t("services.heritage.succession.title")}</h3>
          <p>{t("services.heritage.succession.description")}</p>
          <h3>{t("services.heritage.philanthropy.title")}</h3>
          <p>{t("services.heritage.philanthropy.description")}</p>
          <h3>{t("services.heritage.constitution.title")}</h3>
          <p>{t("services.heritage.constitution.description")}</p>
          <h3>{t("services.heritage.education.title")}</h3>
          <p>{t("services.heritage.education.description")}</p>
        </div>
      </div>
    </EmblaSectionCarousel>
  );
}