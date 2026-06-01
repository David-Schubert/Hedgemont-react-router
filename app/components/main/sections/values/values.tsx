import { useTranslation } from "react-i18next";

export function Values() {
	const { t } = useTranslation();

	return (
		<section id="nase-hodnoty" className="section-our-values">
			<div className="container-fluid-narrow">
				<div className="row">
					<div className="col-10">
						<h2 className="section-title">{t("values.title")}</h2>

						<ol className="list-numbered">
							<li>
								<div className="row align-items-center w-100">
									<div className="col-xxl-7 mb-xxl-0 mb-1">{t("values.fairness.title")}</div>
									<div className="col-xxl-3">
										<span>{t("values.fairness.tagline")}</span>
									</div>
								</div>
							</li>
							<li>
								<div className="row align-items-center w-100">
									<div className="col-xxl-7 mb-xxl-0 mb-2">{t("values.longterm.title")}</div>
									<div className="col-xxl-3">
										<span>{t("values.longterm.tagline")}</span>
									</div>
								</div>
							</li>
							<li>
								<div className="row align-items-center w-100">
									<div className="col-xxl-7 mb-xxl-0 mb-2">{t("values.international.title")}</div>
									<div className="col-xxl-3">
										<span>{t("values.international.tagline")}</span>
									</div>
								</div>
							</li>
						</ol>
					</div>
				</div>
			</div>
		</section>
	);
}