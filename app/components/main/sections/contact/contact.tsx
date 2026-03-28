import { useState } from 'react';

type FormFields = {
	name: string;
	email: string;
	phone: string;
	message: string;
	consent: boolean;
};

type FormErrors = Partial<Record<keyof FormFields, string>>;

function validate(fields: FormFields): FormErrors {
	const errors: FormErrors = {};
	if (!fields.name.trim()) errors.name = 'error';
	if (!fields.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) errors.email = 'error';
	if (!fields.consent) errors.consent = 'error';
	return errors;
}

export function Contact() {
	const [fields, setFields] = useState<FormFields>({
		name: '',
		email: '',
		phone: '',
		message: '',
		consent: false,
	});

	const [errors, setErrors] = useState<FormErrors>({});
	const [touched, setTouched] = useState<Partial<Record<keyof FormFields, boolean>>>({});

	const isValid = Object.keys(validate(fields)).length === 0;

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { id, value, type, required } = e.target;
		const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

		setFields(prev => ({ ...prev, [id]: val }));

		if (required && touched[id as keyof FormFields]) {
			setErrors(validate({ ...fields, [id]: val }));
		}
	};

	const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { id, required } = e.target;
		if (!required) return;
		setTouched(prev => ({ ...prev, [id]: true }));
		setErrors(validate(fields));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setTouched({ name: true, email: true, consent: true });
		const errs = validate(fields);
		setErrors(errs);
		if (Object.keys(errs).length > 0) return;

		// sent formulář
		console.log('Odesláno:', fields);
	};

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
						<form onSubmit={handleSubmit} noValidate>
							<div>
								<label htmlFor="name" className={errors.name && touched.name ? 'error' : ''}>Vaše celé jméno</label>
								<input
									id="name"
									className={errors.name && touched.name ? 'error' : ''}
									type="text"
									value={fields.name}
									onChange={handleChange}
									onBlur={handleBlur}/>
							</div>
							<div>
								<label htmlFor="email" className={errors.email && touched.email ? 'error' : ''}>E-mail</label>
								<input
									id="email"
									className={errors.email && touched.email ? 'error' : ''}
									type="text"
									value={fields.email}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
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
								<label htmlFor="consent" className={errors.consent && touched.consent ? 'error' : ''}>
									<input
										id="consent"
										className={errors.consent && touched.consent ? 'error' : ''}
										type="checkbox"
										checked={fields.consent}
										onChange={handleChange}/>
									<span>Souhlasím se <a href="#">zpracováním os. údajů</a></span>
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
