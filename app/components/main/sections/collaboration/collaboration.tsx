import { useEffect, useRef, useState } from 'react';

export function Collaboration({
	activeClass = 'active',
	activeLine = 0.5,
	hysteresisPx = 12,
}: {
	activeClass?: string;
	activeLine?: number;
	hysteresisPx?: number;
} = {}) {
	const itemRefs = useRef<Array<HTMLLIElement | null>>([]);
	const [activeIndex, setActiveIndex] = useState(-1);

	// requestAnimationFrame "ticking" (pro výkon)
	const tickingRef = useRef(false);
	const activeIndexRef = useRef(-1);

	useEffect(() => {
		const updateActive = () => {
			const targetY = window.innerHeight * activeLine;

			let bestIdx = -1;
			let bestDist = Infinity;

			for (let i = 0; i < itemRefs.current.length; i++) {
				const el = itemRefs.current[i];
				if (!el) continue;

				const r = el.getBoundingClientRect();
				const centerY = r.top + r.height / 2;
				const dist = Math.abs(centerY - targetY);

				if (dist < bestDist) {
					bestDist = dist;
					bestIdx = i;
				}
			}

			if (bestIdx === -1) return;

			const currentIdx = activeIndexRef.current;
			if (currentIdx !== -1 && currentIdx !== bestIdx) {
				const activeEl = itemRefs.current[currentIdx];
				if (activeEl) {
					const ar = activeEl.getBoundingClientRect();
					const aCenter = ar.top + ar.height / 2;
					const aDist = Math.abs(aCenter - targetY);

					if (bestDist > aDist - hysteresisPx) {
						return;
					}
				}
			}

			activeIndexRef.current = bestIdx;
			setActiveIndex(bestIdx);
		};

		const onScrollOrResize = () => {
			if (tickingRef.current) return;
			tickingRef.current = true;

			requestAnimationFrame(() => {
				updateActive();
				tickingRef.current = false;
			});
		};

		window.addEventListener('scroll', onScrollOrResize, { passive: true });
		window.addEventListener('resize', onScrollOrResize);

		onScrollOrResize();

		return () => {
			window.removeEventListener('scroll', onScrollOrResize);
			window.removeEventListener('resize', onScrollOrResize);
		};
	}, [activeLine, hysteresisPx]);

	return (
		<section id="prubeh-spoluprace" className="section-collaboration">
			<div className="container-fluid-narrow">
				<div className="row">
					<div className="col-10">
						<h1 className="section-title">Průběh spolupráce</h1>

						<ol className="list-numbered list-numbered-circle">
							<li
								ref={(el) => {
									itemRefs.current[0] = el;
								}}
								className={`row ${activeIndex === 0 ? activeClass : ''}`}
							>
								<div className="col-xxl-5">Analýza současného stavu</div>
								<div className="col-xxl-5">
									<span>
										Detailně vyhodnotíme vaše aktuální aktiva a cíle. Položíme
										tak pevný základ pro efektivní správu a budoucí ochranu
										vašeho rodinného bohatství.
									</span>
								</div>
							</li>

							<li
								ref={(el) => {
									itemRefs.current[1] = el;
								}}
								className={`row ${activeIndex === 1 ? activeClass : ''}`}
							>
								<div className="col-xxl-5">Implementace strategie</div>
								<div className="col-xxl-5">
									<span>
										Navržená řešení uvedeme precizně do praxe. Využíváme přitom
										exkluzivní nástroje a prověřené postupy pro optimální
										zhodnocení vašeho kapitálu.
									</span>
								</div>
							</li>

							<li
								ref={(el) => {
									itemRefs.current[2] = el;
								}}
								className={`row ${activeIndex === 2 ? activeClass : ''}`}
							>
								<div className="col-xxl-5">Servis a udržování strategie</div>
								<div className="col-xxl-5">
									<span>
										Vaše portfolio neustále hlídáme a adaptujeme na vývoj trhu.
										Dlouhodobý servis a osobní přístup jsou pro nás závazkem k
										vaší finanční stabilitě.
									</span>
								</div>
							</li>
						</ol>
					</div>
				</div>
			</div>
		</section>
	);
}
