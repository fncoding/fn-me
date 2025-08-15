import React from 'react';
import PortfolioCard from './PortfolioCard';

export default function PortfolioList() {
  const projects = [
    {
      id: 1,
      title: 'Full Stack Project (fn-me)',
      description: 'Full Stack Project mit Email verification, registration und login. Stack: Python, Django, Bootstrap, SCSS.',
      image: '/projects/fn.png',
      preview: null,
      repo: 'https://github.com/fncoding/fn-me',
    },
    {
      id: 2,
      title: 'ICD Diagnosen API',
      description: 'ICD Diagnosen API — Backend + Frontend. Stack: Django (Backend), React (Frontend).',
      image: '/projects/icd.png',
      preview: 'https://github.com/fncoding/icd10-api-frontend',
      repo: 'https://github.com/fncoding/icd10-api',
    },
    {
      id: 3,
      title: 'Sneaker Landingpage',
      description: 'Landingpage mit Three.js und GSAP. Stack: React + Vite.',
      image: '/projects/sneaks.png',
      preview: 'https://mmsneaks.netlify.app/',
      repo: null,
    },
    {
      id: 4,
      title: 'Brutalism OnePager',
      description: 'Brutalist OnePager. Stack: React + Vite, Three.js, GSAP.',
      image: '/projects/onepager.png',
      preview: 'https://fncoding.netlify.app/',
      repo: 'https://github.com/fncoding/fn-logo-brutalism',
    },
    {
      id: 5,
      title: 'Arzt Landing OnePager',
      description: 'Landingpage für Arztpraxis. Stack: React + Tailwind + GSAP.',
      image: '/projects/arzt.png',
      preview: 'https://orthopraxis-template.netlify.app/',
      repo: 'https://github.com/fncoding/react-landing-page',
    },
  ];

  return (
    <section className="px-4 py-12">
      <h2 className="reveal text-center text-3xl font-bold mb-6">Portfolio</h2>
      <div className="space-y-6">
        {projects.map((p) => (
          <PortfolioCard key={p.id} project={p} />
        ))}

        {/* CTA card: möchtest du so eine Seite? */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="card reveal bg-base-200/6 border border-base-300 rounded-2xl overflow-hidden shadow-lg">
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">Du möchtest so eine Seite wie diese hier?</h3>
                <p className="text-sm text-muted mb-6">Ich erstelle dir eine individuelle, responsive Website — melde dich für ein kostenloses Erstgespräch.</p>
                <div className="flex justify-center">
                  <a
                    href="mailto:info@felixneumann.me"
                    className="inline-block px-6 py-2 rounded-lg border border-white text-white bg-transparent hover:bg-white hover:text-black transition-colors duration-200 transform hover:scale-105"
                    aria-label="Kontaktiere mich"
                  >
                    Kontaktiere mich
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
