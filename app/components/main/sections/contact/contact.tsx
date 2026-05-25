import { useTranslation } from "react-i18next";

export function Contact() {
	const { t } = useTranslation();

	return (
		<section id="kontakt" className="section-contact">
			<div className="container-fluid-narrow">
				<div className="row">
					<div className="col-10">
						<h2 className="section-title">{t("contact.title")}</h2>
					</div>
				</div>

				<div className="row">
					<div className="col-xl-3 col-lg-3 col-md-5">
						<div className="section-contacts-item">
							<h3>{t("contact.subtitle")}</h3>
							<div className="font-size-20">
								<div>
									<a href="tel:+420732142031">+420 732 142 031</a>
								</div>
								<div>
									<a href="mailto:info@hedgemont.cz">info@hedgemont.cz</a>
								</div>
							</div>
						</div>
					</div>

					<div className="col-xl-3 col-lg-3 col-md-5">
						<div className="section-contacts-item">
							<h3>{t("contact.company")}</h3>
							<div className="font-size-20 pb-3">
								<div>{t("contact.address-line1")}</div>
								<div>{t("contact.address-line2")}</div>
							</div>
							<div className="font-size-14">
								{t("contact.registration")}
							</div>
						</div>
					</div>

					<div className="col-xl-4 col-lg-3 col-md-5">
						<div className="section-contacts-item ms-lg-5 ps-xl-5 ms-0 ps-0">
							<h3>{t("contact.links-title")}</h3>
							<div className="font-size-20 pb-3">
								<div>
									<a
										href="https://www.ininvest.cz/dokumenty-pro-klienty"
										target="_blank"
										rel="noopener noreferrer"
									>
										{t("contact.terms")}
									</a>
								</div>
								<div>
									<a href="#">{t("contact.privacy")}</a>
								</div>
							</div>

							<div className="font-size-16">
								<div>
									<a href="#">{t("contact.certificate")}</a>
								</div>
								<div>
									<a href="#">{t("contact.vat")}</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}