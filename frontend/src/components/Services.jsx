import React from 'react';
import Separator from './Separator';
export default function Services() {
  return (
    <section id="services" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="reveal text-3xl md:text-4xl font-bold text-center mb-6">Leistungen</h2>
        <p className="text-center text-muted mb-8">Ein Überblick über meine Kernleistungen — maßgeschneidert, sicher und performant.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="card reveal bg-base-200/30 border border-base-300 rounded-lg">
            <div className="card-body">
              <h3 className="card-title">Websites & Web‑Apps</h3>
              <p className="text-sm mb-2">Responsive Landingpages, Single‑Page‑Apps oder komplexe Webanwendungen mit Fokus auf Performance und UX.</p>
              <ul className="list-disc ml-5 text-sm space-y-1">
                <li>Konzeption & UI/UX</li>
                <li>React / Vite basierte Apps</li>
                <li>Moderne skalierbare Backend Frameworks</li>
              </ul>
            </div>
          </article>

          <article className="card reveal bg-base-200/30 border border-base-300 rounded-lg">
            <div className="card-body">
              <h3 className="card-title">Hosting & Betrieb</h3>
              <p className="text-sm mb-2">VPS‑Einrichtung, Deployment‑Pipelines, Monitoring und Backups — stabiler Betrieb inklusive.</p>
              <ul className="list-disc ml-5 text-sm space-y-1">
                <li>CI/CD & Deploy Automatisierung</li>
                <li>Backups & Wiederherstellungspläne</li>
                <li>Monitoring & Alerts</li>
              </ul>
            </div>
          </article>

          <article className="card reveal bg-base-200/30 border border-base-300 rounded-lg">
            <div className="card-body">
              <h3 className="card-title">SecOps & IT‑Security</h3>
              <p className="text-sm mb-2">Penetration‑Tests, Schwachstellen‑Analysen und Beratung zur Absicherung von Web‑ und Infrastruktur.</p>
              <ul className="list-disc ml-5 text-sm space-y-1">
                <li>Vulnerability Scans & Pentests</li>
                <li>Incident Response & Forensik</li>
                <li>Hardening & Best Practices</li>
              </ul>
            </div>
          </article>

          <article className="card reveal bg-base-200/30 border border-base-300 rounded-lg">
            <div className="card-body">
              <h3 className="card-title">Integrationen & Automatisierung</h3>
              <p className="text-sm mb-2">API‑Integrationen, Benachrichtigungen (WhatsApp/Telegram) und Automatisierungen für wiederkehrende Prozesse.</p>
              <ul className="list-disc ml-5 text-sm space-y-1">
                <li>API‑Anbindung</li>
                <li>Webhook‑ und Event‑Streams</li>
                <li>Automatisierte Workflows</li>
              </ul>
            </div>
          </article>

        </div>

        <div className="mt-8 text-center">
          <a
            href="#contact"
            className="inline-block px-8 py-3 rounded-lg border border-white text-white bg-transparent transition-all duration-200 cursor-pointer hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            Anfrage stellen
          </a>
        </div>

        {/* Full menu: clean responsive table + modern cards (DaisyUI) */}
        <div className="mt-10 max-w-4xl mx-auto">
          {/* Responsive table using DaisyUI */}
          <div className="card overflow-x-auto bg-transparent rounded-lg border border-base-300 p-4">
            <table className="table table-compact w-full">
              <thead>
                <tr>
                  <th>Paket</th>
                  <th>Einmalig (€)</th>
                  <th>Jährlich (€)</th>
                  <th>Beschreibung</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1.1</th>
                  <td>600</td>
                  <td>–</td>
                  <td>Einfache Landingpage (1–2 Seiten)</td>
                </tr>
                <tr>
                  <th>1.2</th>
                  <td>1.200</td>
                  <td>–</td>
                  <td>Landingpage mit Login/Kontakt</td>
                </tr>
                <tr>
                  <th>1.3</th>
                  <td>ab 1.800</td>
                  <td>–</td>
                  <td>Komplexe Landingpage, individuell</td>
                </tr>
                <tr>
                  <th>2 (Hosting)</th>
                  <td>300–450</td>
                  <td>120</td>
                  <td>Hosting inkl. Einrichtung</td>
                </tr>
                <tr>
                  <th>3 (DSGVO)</th>
                  <td>–</td>
                  <td>250</td>
                  <td>Cookies & DSGVO-Service</td>
                </tr>
              </tbody>
            </table>
          </div>
            <Separator className="my-8" />
          {/* DaisyUI cards visual (same info) */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="card bg-base-200/30 border border-base-300">
              <div className="card-body">
                <h4 className="card-title">Paket 1.1 — Einfache Landingpage</h4>
                <div className="font-bold">600 € • einmalig</div>
                <p className="text-sm mt-2">1–2 Seiten, Impressum inklusive. Ideal für schnelle Online‑Präsenz.</p>
                <ul className="list-disc ml-5 text-sm mt-2">
                  <li>Landingpage & Kontakt</li>
                </ul>
              </div>
            </div>

            <div className="card bg-base-200/30 border border-base-300">
              <div className="card-body">
                <h4 className="card-title">Paket 1.2 — Login Landingpage</h4>
                <div className="font-bold">1.200 € • einmalig</div>
                <p className="text-sm mt-2">Landingpage mit Login/Registrierung und individuellem Kontaktformular.</p>
                <ul className="list-disc ml-5 text-sm mt-2">
                  <li>Login, Registrierung, Formulare</li>
                </ul>
              </div>
            </div>

            <div className="card bg-base-200/30 border border-base-300">
              <div className="card-body">
                <h4 className="card-title">Paket 1.3 — Komplexe Landingpage</h4>
                <div className="font-bold">ab 1.800 € • einmalig</div>
                <p className="text-sm mt-2">Maßgeschneiderte Funktionen (Termin-System, Benachrichtigungen, Integrationen).</p>
                <ul className="list-disc ml-5 text-sm mt-2">
                  <li>Individuelle Features & Integrationen</li>
                </ul>
              </div>
            </div>

            <div className="card bg-base-200/30 border border-base-300">
              <div className="card-body">
                <h4 className="card-title">Hosting — Paket 2</h4>
                <div className="font-bold">300–450 € einmalig · 120 €/Jahr</div>
                <p className="text-sm mt-2">VPS‑Hosting, Liveschaltung, Backups und Wartung.</p>
                <ul className="list-disc ml-5 text-sm mt-2">
                  <li>Einrichtung, Monitoring, Backups</li>
                </ul>
              </div>
            </div>

            <div className="card bg-base-200/30 border border-base-300">
              <div className="card-body">
                <h4 className="card-title">DSGVO / Cookie-Service — Paket 3</h4>
                <div className="font-bold">250 € • jährlich</div>
                <p className="text-sm mt-2">Cookie‑Banner, Datenschutzerklärung und DSGVO‑Prüfung.</p>
                <p className="text-sm mt-2">Halbjährige Anpassung neuer Anforderungen</p>
              </div>
            </div>

            <div className="card bg-base-200/30 border border-base-300">
              <div className="card-body">
                <h4 className="card-title">Sonstige Leistungen — Pentesting & Cybersecurity</h4>
                <div className="font-bold">ab 180 €</div>
                <p className="text-sm mt-2">Schwachstellen-Checks, automatisierte Scans und gezielte Pentests für Webanwendungen und Infrastruktur.</p>
                <ul className="list-disc ml-5 text-sm mt-2">
                  <li>Website Pentesting</li>
                  <li>Vulnerability Scans & Reporting</li>
                  <li>Beratung & Incident Response</li>
                </ul>
              </div>
            </div>
          </div>
          
        </div>

        {/* Separator between services and CTA */}
        <div className="my-8 flex items-center justify-center" aria-hidden="true">
          <span className="block w-40 h-px bg-white/20 rounded" />
        </div>
         <div className="mt-8 text-center">
          <a
            href="#contact"
            className="inline-block px-8 py-3 rounded-lg border border-white text-white bg-transparent transition-all duration-200 cursor-pointer hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            Anfrage stellen
          </a>
        </div>
      </div>
      
    </section>
  );
}
