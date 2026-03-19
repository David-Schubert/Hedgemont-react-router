import { type ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import type { EmblaOptionsType } from 'embla-carousel';

type Props = {
	id: string;
	sectionClassName: string;
	title: string;
	options?: EmblaOptionsType;
	children: ReactNode;
};

export function EmblaSectionCarousel({
	id,
	sectionClassName,
	title,
	options,
	children,
}: Props) {
	const emblaOptions = useMemo<EmblaOptionsType>(
		() => ({ loop: true, align: 'start', ...options }),
		[options],
	);

	const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions);

	const [prevDisabled, setPrevDisabled] = useState(true);
	const [nextDisabled, setNextDisabled] = useState(true);
	const [showControls, setShowControls] = useState(false);

	const updateControls = useCallback(() => {
		if (!emblaApi) return;

		const canPrev = emblaApi.canScrollPrev();
		const canNext = emblaApi.canScrollNext();

		setPrevDisabled(!canPrev);
		setNextDisabled(!canNext);

		// když nejde ani doleva ani doprava, není co listovat
		setShowControls(canPrev || canNext);
	}, [emblaApi]);

	const onPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
	const onNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

	useEffect(() => {
		if (!emblaApi) return;

		emblaApi.on('init', updateControls);
		emblaApi.on('select', updateControls);
		emblaApi.on('reInit', updateControls);

		return () => {
			emblaApi.off('init', updateControls);
			emblaApi.off('select', updateControls);
			emblaApi.off('reInit', updateControls);
		};
	}, [emblaApi, updateControls]);

	return (
		<section id={id} className={sectionClassName} data-carousel>
			<div className="container-fluid-narrow">
				<div className="row">
					<div className="col-10">
						<h1 className="section-title">
							<span>{title}</span>

							{showControls && (
								<span className="embla-controls">
									<button
										className="embla-btn embla-btn-prev"
										type="button"
										aria-label="Předchozí"
										onClick={onPrev}
										disabled={prevDisabled}
									>
										<svg
											width="21"
											height="16"
											viewBox="0 0 21 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M.904 8.877 0 7.997l.904-.882L7.3.881 8.205 0l1.811 1.765-5.118 4.988H21v2.494H4.898l5.118 4.988L8.205 16l-.904-.88L.904 8.884v-.008z" />
										</svg>
									</button>

									<button
										className="embla-btn embla-btn-next"
										type="button"
										aria-label="Další"
										onClick={onNext}
										disabled={nextDisabled}
									>
										<svg
											width="21"
											height="16"
											viewBox="0 0 21 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="m20.096 8.877.904-.88-.904-.882L13.7.881 12.795 0l-1.811 1.765 5.118 4.988H0v2.494h16.102l-5.118 4.988L12.795 16l.904-.88 6.397-6.235v-.008z" />
										</svg>
									</button>
								</span>
							)}
						</h1>
					</div>
				</div>
			</div>

			<div className="container-full-right">
				<div className="embla" ref={emblaRef}>
					<div className="embla-container">{children}</div>
				</div>
			</div>
		</section>
	);
}
