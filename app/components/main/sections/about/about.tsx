import { useTranslation, Trans } from "react-i18next";

export function About() {
	const { t } = useTranslation();

	return (
		<section id="kdo-jsme" className="section section-wwa">
			<div className="container-fluid-narrow">
				<div className="row">
					<div className="col-10">
						<h2 className="section-title">{t("about.title")}</h2>
					</div>
				</div>

				<div className="row">
					<div className="col-10">
						<div className="section-wwa-item">
							<div className="section-wwa-item-text">
								<h2>
									{t("about.vit.name")} <span>{t("about.vit.location")}</span>
								</h2>
								<ul>
									<li>
										<Trans i18nKey="about.vit.bio-1" components={{ bold: <b /> }} />
									</li>
									<li>{t("about.vit.bio-2")}</li>
									<li>{t("about.vit.bio-3")}</li>
									<li>
										<a
											className="linkedin"
											href="https://www.linkedin.com/in/v%C3%ADt-sedl%C3%A1%C4%8Dek-685b1179/"
											target="_blank"
											rel="noopener noreferrer"
										>
											<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
												<path d="M20.8 3.9H5.196C4.48 3.9 3.9 4.49 3.9 5.212v15.576c0 .723.58 1.312 1.296 1.312H20.8c.715 0 1.3-.59 1.3-1.312V5.212A1.31 1.31 0 0 0 20.8 3.9zM9.4 19.5H6.704v-8.686h2.702V19.5H9.4zm-1.348-13c.865 0 1.564.699 1.564 1.564 0 .865-.699 1.564-1.564 1.564a1.562 1.562 0 0 1-1.564-1.564c0-.865.699-1.564 1.564-1.564zm11.46 13h-2.697v-4.225c0-1.008-.02-2.303-1.402-2.303-1.405 0-1.62 1.096-1.62 2.23V19.5h-2.698v-8.686h2.587v1.187h.037c.362-.683 1.243-1.402 2.555-1.402 2.73 0 3.238 1.8 3.238 4.14V19.5z" fill="#000014"/>
											</svg>
											<span>LinkedIn</span>
										</a>
									</li>
								</ul>
							</div>
							<div className="section-wwa-item-img section-wwa-item-img-circle">
								<div className="section-wwa-item-img-wrap">
									<img
										className="img-fluid"
										src="/images/vit-sedlacek-about.jpg"
										alt={t("about.vit.name")}
									/>
								</div>
							</div>
						</div>

						<div className="section-wwa-item">
							<div className="section-wwa-item-img section-wwa-item-img-disc">
								<div className="section-wwa-item-img-wrap">
									<img className="img-fluid" src="/images/ales-izak-about.jpg" alt={t("about.ales.name")} />
								</div>
							</div>
							<div className="section-wwa-item-text">
								<h2>
									{t("about.ales.name")} <span>{t("about.ales.location")}</span>
								</h2>
								<ul>
									<li>{t("about.ales.bio-1")}</li>
									<li>
										<Trans i18nKey="about.ales.bio-2" components={{ bold: <b /> }} />
									</li>
									<li>{t("about.ales.bio-3")}</li>
									<li>
										<a
											className="linkedin"
											href="https://www.linkedin.com/in/ales-izak-0a698427/"
											target="_blank"
											rel="noopener noreferrer"
										>
											<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
												<path d="M20.8 3.9H5.196C4.48 3.9 3.9 4.49 3.9 5.212v15.576c0 .723.58 1.312 1.296 1.312H20.8c.715 0 1.3-.59 1.3-1.312V5.212A1.31 1.31 0 0 0 20.8 3.9zM9.4 19.5H6.704v-8.686h2.702V19.5H9.4zm-1.348-13c.865 0 1.564.699 1.564 1.564 0 .865-.699 1.564-1.564 1.564a1.562 1.562 0 0 1-1.564-1.564c0-.865.699-1.564 1.564-1.564zm11.46 13h-2.697v-4.225c0-1.008-.02-2.303-1.402-2.303-1.405 0-1.62 1.096-1.62 2.23V19.5h-2.698v-8.686h2.587v1.187h.037c.362-.683 1.243-1.402 2.555-1.402 2.73 0 3.238 1.8 3.238 4.14V19.5z" fill="#000014"/>
											</svg>
											<span>LinkedIn</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}