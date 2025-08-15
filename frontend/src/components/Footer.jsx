import React from 'react';
import { FiMail, FiGlobe } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-base-300 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-semibold">Felix Neumann</h3>
          <p className="text-sm text-muted">Web & CyberSecurity — maßgeschneiderte Lösungen</p>
        </div>

        <div className="flex gap-4 items-center">
          <a
            href="mailto:info@felixneumann.me"
            aria-label="E-Mail an info@felixneumann.me"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white text-white bg-transparent hover:bg-white hover:text-black transition-colors duration-200"
          >
            <FiMail className="h-5 w-5" />
          </a>

          <a
            href="https://github.com/fncoding"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub: fncoding"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white text-white bg-transparent hover:bg-white hover:text-black transition-colors duration-200"
          >
            <FaGithub className="h-5 w-5" />
          </a>

          <a
            href="https://felixneumann.me"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Website: felixneumann.me"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white text-white bg-transparent hover:bg-white hover:text-black transition-colors duration-200"
          >
            <FiGlobe className="h-5 w-5" />
          </a>
        </div>

        <div className="text-sm text-muted">© {year} felixneumann.me</div>
      </div>
    </footer>
  );
}
