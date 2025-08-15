import React from 'react';

export default function AboutMe() {
  return (
    <section id="about" className="px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="card reveal bg-base-200/8 border border-base-300 rounded-2xl relative overflow-visible" style={{
          boxShadow: '0 24px 48px rgba(7,16,51,0.12), 0 12px 30px rgba(6,78,59,0.08), 0 2px 6px rgba(255,255,255,0.03)'
        }}>
          <div className="md:flex items-center gap-8 p-6 md:p-8">
            {/* Profilbild */}
            <div className="flex-shrink-0">
              <div className="w-36 h-36 rounded-full border-4 border-white/6 overflow-hidden shadow-inner bg-base-200/30 flex items-center justify-center">
                <img src="/cat.svg" alt="Profilbild - Cat" className="w-28 h-28 object-contain" />
              </div>
            </div>

            {/* Text */}
            <div className="text-center md:text-left">
              <h3 className="reveal text-2xl font-extrabold mb-1">Felix Neumann</h3>
              <p className="reveal text-sm text-muted mb-4">Freiberuflicher Web‑ & IT‑Dienstleister</p>

              <p className="reveal mb-4 text-sm leading-relaxed">
                Ich entwickle moderne, performante Weblösungen und sichere IT‑Infrastrukturen für kleine Unternehmen und Projekte.
              </p>

              <p className="reveal mb-4 text-sm leading-relaxed">
                Mein Fokus liegt auf klarer, nutzerzentrierter Umsetzung, stabilem Hosting und praxisnaher IT‑Security.
              </p>

              <p className="reveal mb-4 text-sm leading-relaxed">
                Privat interessiere ich mich für Music Production, Coding und Cybersecurity — das verbindet kreatives Arbeiten mit technischem Tiefgang.
              </p>

              <div className="flex items-center justify-center md:justify-start gap-3 mt-2">
                <a href="#services" className="inline-block px-6 py-2 rounded-lg border border-white text-white bg-transparent hover:bg-white hover:text-black transition-colors duration-200">Leistungen</a>
                <a href="#contact" className="btn btn-ghost">Kontakt</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
