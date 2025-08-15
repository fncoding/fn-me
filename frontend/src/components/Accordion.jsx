import React, { useState } from 'react';

const faqs = [
	{
		q: 'Welche Services biete ich an?',
		a: (
			<div>
				<p className="mb-2">
					Ich biete Web‑ & IT‑Services für Privatpersonen, kleine Unternehmen und
					Startups. Dazu gehören unter anderem:
				</p>
				<ul className="list-disc ml-6 space-y-1 text-gray-700 dark:text-gray-200">
					<li>
						<strong>Websites & Web‑Apps</strong> – von einfachen Landingpages bis zu
						individuellen Applikationen (Paket 1.1–1.3).
					</li>
					<li>
						<strong>Hosting & Liveschaltung</strong> – VPS‑Hosting, Einrichtung und
						Wartung (Paket 2).
					</li>
					<li>
						<strong>DSGVO & Cookie‑Service</strong> – Datenschutzerklärungen,
						Cookie‑Banner und Prüfung (Paket 3).
					</li>
					<li>
						<strong>SecOps & IT‑Security</strong> – Penetration Tests, Vulnerability
						Scans, Forensik, Incident Response, Backup‑Strategien und mehr.
					</li>
					<li>
						<strong>Integrationen</strong> – z. B. Termin‑Systeme,
						Benachrichtigungen (WhatsApp/Telegram) und Automatisierungen.
					</li>
				</ul>
				<p className="mt-2 text-sm text-muted">
					Für detaillierte Angebote siehe die Beispielpreise oder frag ein
					individuelles Angebot an.
				</p>
			</div>
		),
	},
	{
		q: 'Welche Pakete und Preisbeispiele gibt es?',
		a: (
			<div>
				<p className="mb-2">Kurzüberblick (Beispiele):</p>
				<ul className="list-disc ml-6 space-y-1 text-gray-700 dark:text-gray-200">
					<li>
						<strong>1.1</strong> Einfache Landingpage: ca. 600€ (einmalig)
					</li>
					<li>
						<strong>1.2</strong> Landingpage mit Login/Kontakt: ca. 1.200€ (einmalig)
					</li>
					<li>
						<strong>1.3</strong> Komplexe, individuelle Lösungen: ab 1.800€ (einmalig)
					</li>
					<li>
						<strong>Hosting</strong> Einrichtung: 300–450€ einmalig, 120€/Jahr ab Jahr
						2
					</li>
					<li>
						<strong>DSGVO/Service</strong> (optional): 250€/Jahr
					</li>
				</ul>
				<p className="mt-2 text-sm text-muted">
					Kombinationen (z. B. 1.1 + Hosting) und individuelle Angebote sind
					möglich — frag gern nach einem Angebot.
				</p>
			</div>
		),
	},
	{
		q: 'Wie kann ich dich erreichen?',
		a: (
			<div>
				<p className="mb-2">Am einfachsten per E‑Mail:</p>
				<p className="mb-2">
					<a
						href="mailto:info@felixneumann.me"
						className="link link-primary"
					>
						info@felixneumann.me
					</a>
				</p>
				<p className="text-sm text-muted">
					Alternativ über das Kontaktformular auf der Website oder die Seite{' '}
					<a href="/contact" className="link">
						/contact
					</a>
					.
				</p>
			</div>
		),
	},
];

export default function Accordion() {
	const [openIndex, setOpenIndex] = useState(null);

	const toggle = (i) => {
		setOpenIndex(openIndex === i ? null : i);
	};

	return (
		<section id="faq" className="py-16 px-6 bg-base-200">
			<div className="max-w-4xl mx-auto">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
					Häufig gestellte Fragen
				</h2>
				<p className="text-center text-muted mb-8">
					Antworten zu meinen Services, Paketen und Kontaktmöglichkeiten.
				</p>

				<div className="space-y-3">
					{faqs.map((item, i) => (
						<div
							key={i}
							tabIndex={0}
							className={`collapse collapse-plus border border-base-300 bg-base-100 rounded-box ${
								openIndex === i ? 'collapse-open' : ''
							}`}
						>
							<div
								className="collapse-title text-lg font-medium flex justify-between items-center"
								role="button"
								aria-expanded={openIndex === i}
								onClick={() => toggle(i)}
								onKeyDown={(e) => {
									if (e.key === 'Enter' || e.key === ' ') {
										e.preventDefault();
										toggle(i);
									}
								}}
							>
								{item.q}
							</div>
							<div className="collapse-content">
								<div>{item.a}</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}