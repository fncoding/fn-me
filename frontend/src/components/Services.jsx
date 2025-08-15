import React from 'react';

export default function Services() {
  return (
    <section id="services" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Leistungen</h2>
        <p className="text-center text-muted mb-8">Ein Überblick über meine Kernleistungen — maßgeschneidert, sicher und performant.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="p-6 rounded-lg border border-base-300 bg-base-200/30">
            <h3 className="text-xl font-semibold mb-2">Websites & Web‑Apps</h3>
            <p className="text-sm mb-3">Responsive Landingpages, Single‑Page‑Apps oder komplexe Webanwendungen mit Fokus auf Performance und UX.</p>
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li>Konzeption & UI/UX</li>
              <li>React / Vite basierte Apps</li>
              <li>CMS- und Headless-Integrationen</li>
            </ul>
          </article>

          <article className="p-6 rounded-lg border border-base-300 bg-base-200/30">
            <h3 className="text-xl font-semibold mb-2">Hosting & Betrieb</h3>
            <p className="text-sm mb-3">VPS‑Einrichtung, Deployment‑Pipelines, Monitoring und Backups — stabiler Betrieb inklusive.</p>
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li>CI/CD & Deploy Automatisierung</li>
              <li>Backups & Wiederherstellungspläne</li>
              <li>Monitoring & Alerts</li>
            </ul>
          </article>

          <article className="p-6 rounded-lg border border-base-300 bg-base-200/30">
            <h3 className="text-xl font-semibold mb-2">SecOps & IT‑Security</h3>
            <p className="text-sm mb-3">Penetration‑Tests, Schwachstellen‑Analysen und Beratung zur Absicherung von Web‑ und Infrastruktur.</p>
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li>Vulnerability Scans & Pentests</li>
              <li>Incident Response & Forensik</li>
              <li>Hardening & Best Practices</li>
            </ul>
          </article>

          <article className="p-6 rounded-lg border border-base-300 bg-base-200/30">
            <h3 className="text-xl font-semibold mb-2">Integrationen & Automatisierung</h3>
            <p className="text-sm mb-3">API‑Integrationen, Benachrichtigungen (WhatsApp/Telegram) und Automatisierungen für wiederkehrende Prozesse.</p>
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li>API‑Anbindung</li>
              <li>Webhook‑ und Event‑Streams</li>
              <li>Automatisierte Workflows</li>
            </ul>
          </article>

          <article className="p-6 rounded-lg border border-base-300 bg-base-200/30">
            <h3 className="text-xl font-semibold mb-2">Backend & Frameworks</h3>
            <p className="text-sm mb-3">Serverseitige Anwendungen mit PHP (Symfony) und Python (Django). Ich entwickle Geschäftslogik, sichere REST/GraphQL‑APIs und sorge für skalierbare Deployments.</p>
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li>Symfony & Django Projekte (Architektur, Implementierung, Tests)</li>
              <li>Datenbankdesign, Migrationen und Performance‑Tuning</li>
              <li>Workshops & Schulungen zu Datenbanken, Modellierung und Best Practices</li>
            </ul>
          </article>
        </div>

        <div className="mt-8 text-center">
          <a
            href="/contact"
            className="inline-block px-8 py-3 rounded-lg border border-white text-white bg-transparent transition-all duration-200 cursor-pointer hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            Anfrage stellen
          </a>
        </div>

        {/* Full menu: clean responsive table + modern cards */}
        <div className="mt-10 max-w-4xl mx-auto">
          {/* Responsive table */}
          <div className="overflow-x-auto bg-transparent rounded-lg border border-base-300 p-4">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="text-left text-muted">
                  <th className="pb-2">Paket</th>
                  <th className="pb-2">Einmalig (€)</th>
                  <th className="pb-2">Jährlich (€)</th>
                  <th className="pb-2">Beschreibung</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="py-3 font-semibold">1.1</td>
                  <td className="py-3">600</td>
                  <td className="py-3">–</td>
                  <td className="py-3">Einfache Landingpage (1–2 Seiten)</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold">1.2</td>
                  <td className="py-3">1.200</td>
                  <td className="py-3">–</td>
                  <td className="py-3">Landingpage mit Login/Kontakt</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold">1.3</td>
                  <td className="py-3">ab 1.800</td>
                  <td className="py-3">–</td>
                  <td className="py-3">Komplexe Landingpage, individuell</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold">2 (Hosting)</td>
                  <td className="py-3">300–450</td>
                  <td className="py-3">120</td>
                  <td className="py-3">Hosting inkl. Einrichtung</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold">3 (DSGVO)</td>
                  <td className="py-3">–</td>
                  <td className="py-3">250</td>
                  <td className="py-3">Cookies & DSGVO-Service</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Cards visual (same info) */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border border-base-300 bg-base-200/30">
              <h4 className="text-lg font-semibold mb-1">Paket 1.1 — Einfache Landingpage</h4>
              <div className="font-bold mb-2">600 € • einmalig</div>
              <p className="text-sm mb-2">1–2 Seiten, Impressum inklusive. Ideal für schnelle Online‑Präsenz.</p>
              <ul className="list-disc ml-5 text-sm space-y-1">
                <li>Landingpage & Kontakt</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg border border-base-300 bg-base-200/30">
              <h4 className="text-lg font-semibold mb-1">Paket 1.2 — Login Landingpage</h4>
              <div className="font-bold mb-2">1.200 € • einmalig</div>
              <p className="text-sm mb-2">Landingpage mit Login/Registrierung und individuellem Kontaktformular.</p>
              <ul className="list-disc ml-5 text-sm space-y-1">
                <li>Login, Registrierung, Formulare</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg border border-base-300 bg-base-200/30">
              <h4 className="text-lg font-semibold mb-1">Paket 1.3 — Komplexe Landingpage</h4>
              <div className="font-bold mb-2">ab 1.800 € • einmalig</div>
              <p className="text-sm mb-2">Maßgeschneiderte Funktionen (Termin-System, Benachrichtigungen, Integrationen).</p>
              <ul className="list-disc ml-5 text-sm space-y-1">
                <li>Individuelle Features & Integrationen</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg border border-base-300 bg-base-200/30">
              <h4 className="text-lg font-semibold mb-1">Hosting — Paket 2</h4>
              <div className="font-bold mb-2">300–450 € einmalig · 120 €/Jahr</div>
              <p className="text-sm mb-2">VPS‑Hosting, Liveschaltung, Backups und Wartung.</p>
              <ul className="list-disc ml-5 text-sm space-y-1">
                <li>Einrichtung, Monitoring, Backups</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg border border-base-300 bg-base-200/30 sm:col-span-2">
              <h4 className="text-lg font-semibold mb-1">DSGVO / Cookie-Service — Paket 3</h4>
              <div className="font-bold mb-2">250 € • jährlich</div>
              <p className="text-sm mb-2">Cookie‑Banner, Datenschutzerklärung und DSGVO‑Prüfung.</p>
            </div>
          </div>
        </div>

        {/* Separator between services and CTA */}
        <div className="my-8 flex items-center justify-center" aria-hidden="true">
          <span className="block w-40 h-px bg-white/20 rounded" />
        </div>

      </div>
    </section>
  );
}
