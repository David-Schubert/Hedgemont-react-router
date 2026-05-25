import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-xl-3 col-lg-4">
            <div className="footer-logo">
              <img
                className="img-fluid"
                src="/images/hegdemont-logo-color-white.png"
                alt={t("footer.logo-alt")}
              />
            </div>
          </div>
          <div className="col-xl-7 col-lg-6">
            <p>{t("footer.copyright", { year })}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
