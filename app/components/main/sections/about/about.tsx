export function About() {
	return (
		<section id="kdo-jsme" className="section section-wwa">
			<div className="container-fluid-narrow">
				<div className="row">
					<div className="col-10">
						<h1 className="section-title">Kdo jsme</h1>
					</div>
				</div>

				<div className="row">
					<div className="col-10">
						<div className="section-wwa-item">
							<div className="section-wwa-item-text">
								<h2>
									Vít Sedláček <span>Praha / Brno</span>
								</h2>
								<ul>
									<li>
										<b>15 let zkušeností</b> v oblasti správy majetku
									</li>
									<li>
										<b>Ředitel v UBS Global Wealth Management</b>
									</li>
									<li>
										<b>
											Bývalý privátní bankéř v UniCredit Bank & Raiffeisenbank
										</b>
									</li>
									<li>
										<b>Certifikovaný poradce</b> pro správu majetku—FINMA
									</li>
								</ul>
							</div>
							<div className="section-wwa-item-img section-wwa-item-img-circle">
								<div className="section-wwa-item-img-wrap">
									<img
										className="img-fluid"
										src="/images/sedlacek-vit.jpg"
										alt="Vít Sedláček"
									/>
								</div>
							</div>
							<div className="section-wwa-item-logo">
								<img className="img-fluid" src="/images/logo-ubs.png" alt="UBS" />
								<img
									className="img-fluid"
									src="/images/logo-unicredit.png"
									alt="Unicredit Bank"
								/>
								<img className="img-fluid" src="/images/logo-rb.png" alt="Raiffeisen Bank" />
							</div>
						</div>

						<div className="section-wwa-item">
							<div className="section-wwa-item-img section-wwa-item-img-disc">
								<div className="section-wwa-item-img-wrap">
									<img className="img-fluid" src="/images/izak-ales.jpg" alt="Aleš Izák" />
								</div>
							</div>
							<div className="section-wwa-item-text">
								<h2>
									Aleš Izák <span>Praha / Brno</span>
								</h2>
								<ul>
									<li>
										<b>Více než 20 let zkušeností</b> v investicích HNWI a
										institucionální klientela
									</li>
									<li>
										Diskreční správa portfolií a dlouhodobé investiční strategie
									</li>
									<li>
										<b>ETF a alternativní investice</b>
									</li>
									<li>
										Fokus na <b>private equity, private debt</b> a nemovitostní
										investice
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
