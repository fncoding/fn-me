import React from 'react';
import { FiMail, FiGlobe } from 'react-icons/fi';
import { FaGithub, FaDiscord, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="card reveal bg-base-200/6 border border-base-300 rounded-2xl overflow-hidden shadow-lg">
          <div className="card-body p-8 text-center">
            <h2 className="reveal text-2xl font-bold mb-2">Kontakt</h2>
            <p className="reveal text-sm text-muted mb-6">Schreib mir eine Nachricht oder nutze einen der folgenden Kanäle.</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
              <a
                href="mailto:info@felixneumann.me"
                className="inline-flex items-center gap-3 px-5 py-2 rounded-lg border border-white text-white bg-transparent hover:bg-white hover:text-black transition-colors duration-200"
                aria-label="E-Mail an info@felixneumann.me senden"
              >
                <FiMail className="h-5 w-5 text-white/90" />
                <span>info@felixneumann.me</span>
              </a>

              <a
                href="https://github.com/fncoding"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-5 py-2 rounded-lg border border-white text-white bg-transparent hover:bg-white hover:text-black transition-colors duration-200"
                aria-label="GitHub: fncoding"
              >
                <FaGithub className="h-5 w-5 text-white/90" />
                <span>github.com/fncoding</span>
              </a>

              <a
                href="https://felixneumann.me"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-5 py-2 rounded-lg border border-white text-white bg-transparent hover:bg-white hover:text-black transition-colors duration-200"
                aria-label="Website: felixneumann.me"
              >
                <FiGlobe className="h-5 w-5 text-white/90" />
                <span>felixneumann.me</span>
              </a>
            </div>

  <p className="text-xs text-muted mt-6">Falls du bevorzugst: nutze Telegram/Discord für schnellen Chat oder Email für formelle Anfragen.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
