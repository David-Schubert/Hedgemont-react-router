import { useState } from 'react';
import emailjs from '@emailjs/browser';

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

	const [botField, setBotField] = useState('');
	const [errors, setErrors] = useState<FormErrors>({});
	const [touched, setTouched] = useState<Partial<Record<keyof FormFields, boolean>>>({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { id, value, type } = e.target;
		const val = type === 'checkbox'
			? (e.target as HTMLInputElement).checked
			: value;

		const updatedFields = { ...fields, [id]: val };

		setFields(updatedFields);

		setErrors(validate(updatedFields));
	};

	const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { id, required } = e.target;
		if (!required) return;
		setTouched(prev => ({ ...prev, [id]: true }));
		setErrors(validate(fields));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (botField) {
			return;
		}

		setTouched({ name: true, email: true, consent: true });

		const errs = validate(fields);
		setErrors(errs);
		if (Object.keys(errs).length > 0) return;

		setIsSubmitting(true);
		setSubmitStatus('idle');

		try {
			await emailjs.send(
				'service_7ofmt29',
				'template_y2xj57o',
				{
					name: fields.name,
					email: fields.email,
					phone: fields.phone,
					message: fields.message,
				},
				'OtW_-UhieM75BA9qh'
			);

			setSubmitStatus('success');
			setFields({
				name: '',
				email: '',
				phone: '',
				message: '',
				consent: false,
			});
			setTouched({});
		} catch (err) {
			console.error(err);
			setSubmitStatus('error');
		} finally {
			setIsSubmitting(false);
		}
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
									required
									value={fields.name}
									onChange={handleChange}
									onBlur={handleBlur}/>
							</div>
							<div>
								<label htmlFor="email" className={errors.email && touched.email ? 'error' : ''}>E-mail</label>
								<input
									id="email"
									className={errors.email && touched.email ? 'error' : ''}
									type="email"
									required
									value={fields.email}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
							</div>
							<div>
								<label htmlFor="phone">
									Telefon <span className="label-note">nepovinné</span>
								</label>
								<input
									id="phone"
									type="text"
									value={fields.phone}
									onChange={handleChange}
								/>
							</div>
							<div>
								<label htmlFor="message">
									Zpráva <span className="label-note">nepovinné</span>
								</label>
								<textarea
									id="message"
									cols={30}
									rows={10}
									value={fields.message}
									onChange={handleChange}
								></textarea>
							</div>
							<div>
								<label htmlFor="consent" className={errors.consent && touched.consent ? 'error' : ''}>
									<input
										id="consent"
										className={errors.consent && touched.consent ? 'error' : ''}
										type="checkbox"
										required
										checked={fields.consent}
										onChange={handleChange}/>
									<span>Souhlasím se <a href="#">zpracováním os. údajů</a></span>
								</label>
							</div>
							<div>
								<input
									type="text"
									name="fax"
									value={botField}
									tabIndex={-1}
									onChange={(e) => setBotField(e.target.value)}
									style={{
										position: 'absolute',
										left: '-9999px',
										opacity: 0,
										height: 0,
										pointerEvents: 'none'
									}}
									autoComplete="off"
								/>
							</div>
							<div>
								<button name="submit" className="btn btn-primary" type="submit" disabled={isSubmitting}>
									{isSubmitting ? 'Odesílám...' : 'Odeslat formulář'}
								</button>
							</div>

							{isSubmitting ? (<div className="loading"></div>) : null}

							{submitStatus === 'success' && (
								<div className="form-status form-status-success">Zpráva byla úspěšně odeslána.</div>
							)}

							{submitStatus === 'error' && (
								<div className="form-status form-status-error">Něco se pokazilo, zkuste to prosím znovu.</div>
							)}
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
