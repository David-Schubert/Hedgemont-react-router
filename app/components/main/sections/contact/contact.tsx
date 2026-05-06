export function Contact() {
	return (
		<section id="kontakt" className="section-contact">
			<div className="container-fluid-narrow">
				<div className="row">
					<div className="col-10">
						<h2 className="section-title">Kontakt</h2>
					</div>
				</div>

				<div className="row">
					<div className="col-xl-3 col-lg-3 col-md-5">
						<div className="section-contacts-item">
							<h3>Napište nebo zavolejte</h3>
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
							<h3>HedgeMont s.r.o.</h3>
							<div className="font-size-20 pb-3">
								<div>Třebohostická 3463/12a,</div>
								<div>Strašnice, 100 00 Praha 10</div>
							</div>
							<div className="font-size-14">
								C 430781 vedená u Městského soudu v Praze
							</div>
						</div>
					</div>

					<div className="col-xl-4 col-lg-3 col-md-5">
						<div className="section-contacts-item ms-lg-5 ps-xl-5 ms-0 ps-0">
							<h3>Odkazy</h3>
							<div className="font-size-20 pb-3">
								<div>
									<a
										href="https://www.ininvest.cz/dokumenty-pro-klienty"
										target="_blank"
										rel="noopener noreferrer"
									>
										Obchodní podmínky
									</a>
								</div>
								<div>
									<a href="#">Ochrana os. údajů</a>
								</div>
							</div>

							<div className="font-size-16">
								<div>
									<a href="#">Osvědčení</a>
								</div>
								<div>
									<a href="#">Registrace k DPH</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
