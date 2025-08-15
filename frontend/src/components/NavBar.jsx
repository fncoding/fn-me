import React, { useEffect, useState } from 'react';

const sections = [
  { id: '', label: 'Homepage' },
  { id: 'faq', label: 'FaQ' },
  { id: 'services', label: 'Leistungen' },
  { id: 'about', label: 'About Me' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'contact', label: 'Contact' },
  { id: 'impressum', label: 'Impressum' },
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
      el.scrollIntoView({ behavior: 'smooth' });
      // setActiveId(id); // IntersectionObserver will update soon
    }
  };

  return (
    <div className="navbar bg-transparent fixed sm:absolute top-0 left-0 w-full z-30">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {sections.map((s) => (
              <li key={s.label}>
                <a
                  href={s.id ? `#${s.id}` : '/'}
                  onClick={(e) => handleLinkClick(e, s.id)}
                  className={` ${
                    activeId === s.id ? 'text-primary font-semibold' : ''
                  }`}
                  aria-current={activeId === s.id ? 'page' : undefined}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="navbar-center">
        <a href="/" className="text-xl font-semibold hover:scale-105 transition-transform cursor-pointer" aria-label="Home">
          
        </a>
      </div>

      <div className="navbar-end">
        <a href="/" aria-label="Home">
          <img src="/cat.svg" alt="Cat" className="h-8 w-8 hover:scale-110 transition-transform cursor-pointer" />
        </a>
      </div>
    </div>
  );
}