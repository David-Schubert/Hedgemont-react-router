export function Contact() {
	return (
		<section id="kontakt" className="section-contact">
			<div className="container-fluid-narrow">
				<div className="row">
					<div className="col-10">
						<h1 className="section-title">Kontakt</h1>
					</div>
				</div>

				<div className="row">
					<div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-4">
						<div className="section-contacts">
							<div className="section-contacts-item">
								<h3>Napište nebo zavolejte</h3>
								<div className="font-size-20">
									<div>
										<a href="tel:+420 732 142 031">+420 732 142 031</a>
									</div>
									<div>
										<a href="mailto:info@hedgemont.cz">info@hedgemont.cz</a>
									</div>
								</div>
							</div>
							<div className="section-contacts-item">
								<h3>HedgeMont s.r.o.</h3>
								<div className="font-size-20 pb-3">
									Třebohostická 3463/12a, Strašnice, 100 00 Praha 10
								</div>
								<div className="font-size-14">
									C 430781 vedená u Městského soudu v Praze
								</div>
							</div>
							<div className="section-contacts-item">
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
										<a href="#">Less important links</a>
									</div>
									<div>
										<a href="#">Osvědčení</a>
									</div>
									<div>
										<a href="#">Registrace k DPH</a>
									</div>
									<div>
										<a href="#">Další odkaz</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-xxl-5 col-xl-6 col-lg-6">
						<form action="">
							<div>
								<label htmlFor="name">Vaše celé jméno</label>
								<input id="name" type="text" />
							</div>
							<div>
								<label htmlFor="email">E-mail</label>
								<input id="email" type="text" />
							</div>
							<div>
								<label htmlFor="phone">
									Telefon <span className="label-note">nepovinné</span>
								</label>
								<input id="phone" type="text" />
							</div>
							<div>
								<label htmlFor="message">
									Zpráva <span className="label-note">nepovinné</span>
								</label>
								<textarea id="message" cols={30} rows={10}></textarea>
							</div>
							<div>
								<label htmlFor="consent">
									<input id="consent" type="checkbox" />
									<span>
										Souhlasím se <a href="#">zpracováním os. údajů</a>
									</span>
								</label>
							</div>
							<div>
								<button className="btn btn-primary" type="submit">
									Odeslat formulář
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
