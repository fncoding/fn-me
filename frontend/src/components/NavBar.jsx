import React, { useEffect, useState } from 'react';

const sections = [
  { id: '', label: 'Homepage' },
  { id: 'faq', label: 'FaQ' },
  { id: 'about', label: 'Über mich' },
  { id: 'services', label: 'Leistungen' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'contact', label: 'Contact' },
];

export default function NavBar() {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -40% 0px', // trigger when section enters top 60% of viewport
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id') || '';
        if (entry.isIntersecting) {
          setActiveId(id);
        }
      });
    }, observerOptions);

    sections.forEach((s) => {
      if (!s.id) return; // skip homepage (no id)
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    // fallback: clear on unmount
    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (e, id) => {
    // If id is empty -> scroll to top
    if (!id) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveId('');
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      // account for fixed navbar height by scrolling slightly above the element
      const navbarHeight = document.querySelector('.main-navbar')?.offsetHeight || 0;
      const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight - 12; // small offset
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className="main-navbar navbar fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/6">
      <div className="max-w-6xl mx-auto w-full flex items-center justify-between px-4">
        <div className="flex items-center">
          {/* Mobile dropdown trigger (kept as icon button) */}
          <div className="dropdown sm:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              {sections.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.id ? `#${s.id}` : '/'}
                    onClick={(e) => handleLinkClick(e, s.id)}
                    className={`${activeId === s.id ? 'text-white font-semibold' : ''}`}
                    aria-current={activeId === s.id ? 'page' : undefined}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Brand / Home on left for desktop */}
          <a href="/" className="hidden sm:inline-block text-lg font-semibold hover:scale-105 transition-transform ml-3" aria-label="Home">
            {/* optional brand/logo */}
          </a>
        </div>

        {/* Desktop menu: visible from sm and up */}
        <nav className="hidden sm:block">
          <ul className="flex gap-6 items-center">
            {sections.map((s) => (
              <li key={s.label}>
                <a
                  href={s.id ? `#${s.id}` : '/'}
                  onClick={(e) => handleLinkClick(e, s.id)}
                  className={`pb-2 border-b-2 border-transparent hover:border-white/30 transition-colors ${activeId === s.id ? 'border-white text-white font-semibold' : 'text-white/90'}`}
                  aria-current={activeId === s.id ? 'page' : undefined}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center">
          <a href="/" aria-label="Home">
            <img src="/cat.svg" alt="Cat" className="h-8 w-8 hover:scale-110 transition-transform cursor-pointer ml-4" />
          </a>
        </div>
      </div>
    </div>
  );
}