export function Hero() {
	return (
		<section id="intro" className="section section-intro">
			<div className="section-intro-top">
				<div className="container-fluid-narrow">
					<div className="row">
						<div className="col-xxl-8 col-xl-9 col-10">
							<h1 className="section-title">
								Nezávislá <br />
								správa majetku
							</h1>
						</div>
					</div>
					<div className="row">
						<div className="col-10">
							<div className="section-intro-people">
								<img src="/images/vit-sedlacek.jpg" alt="Vít Sedláček" />
								<img src="/images/ales-izak.jpg" alt="Aleš Izák" />
								<div>
									<div className="section-intro-people-label">kdo stojí za&nbsp;projektem</div>
									<div>
										<span className="section-intro-people-icon">
											<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
												<path d="M20.8 3.9H5.196C4.48 3.9 3.9 4.49 3.9 5.212v15.576c0 .723.58 1.312 1.296 1.312H20.8c.715 0 1.3-.59 1.3-1.312V5.212A1.31 1.31 0 0 0 20.8 3.9zM9.4 19.5H6.704v-8.686h2.702V19.5H9.4zm-1.348-13c.865 0 1.564.699 1.564 1.564 0 .865-.699 1.564-1.564 1.564a1.562 1.562 0 0 1-1.564-1.564c0-.865.699-1.564 1.564-1.564zm11.46 13h-2.697v-4.225c0-1.008-.02-2.303-1.402-2.303-1.405 0-1.62 1.096-1.62 2.23V19.5h-2.698v-8.686h2.587v1.187h.037c.362-.683 1.243-1.402 2.555-1.402 2.73 0 3.238 1.8 3.238 4.14V19.5z" fill="#000014"/>
											</svg>
										</span>
										<a
											href="https://www.linkedin.com/in/v%C3%ADt-sedl%C3%A1%C4%8Dek-685b1179/"
											target="_blank"
											rel="noopener noreferrer"
										>
											Vít&nbsp;Sedláček
										</a>
										<span> &amp; </span>
										<a
											href="https://www.linkedin.com/in/ales-izak-0a698427/"
											target="_blank"
											rel="noopener noreferrer"
										>
											Aleš&nbsp;Izák
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="section-intro-bottom">
				<div className="container-fluid">
					<div className="row">
						<div className="col-10">
							<div className="section-intro-box">
								<p>
									Bez střetu zájmů. <b>Pro dlouhodobou ochranu a zhodnocení</b>{' '}
									vašeho majetku.
								</p>
								<p>
									Zajišťujeme dlouhodobou správu a promyšlené rozložení majetku,
									včetně jeho mezinárodního umístění. Vybíráme vhodné privátní
									banky, vyjednáváme s nimi optimální podmínky a udržujeme přehled
									o všech bankovních účtech a investicích, aby bylo vaše portfolio
									řízeno efektivně a transparentně.
								</p>
								<p>
									Na základě vašich cílů připravujeme individuální investiční
									strategii a průběžně sledujeme rizika i měnovou expozici.
									Pravidelně poskytujeme srozumitelný reporting o vývoji majetku a
									plánujeme jeho čerpání tak, aby dlouhodobě odpovídalo vašim
									potřebám a záměrům.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
