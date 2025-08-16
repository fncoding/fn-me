import React, { useEffect, useState } from 'react';
import { initGsapReveal } from './hooks/useGsapReveal';
import NavBar from './components/NavBar';
import Services from './components/Services';
import HeroSection from './components/HeroSection';
import Accordion from './components/Accordion';
import AboutMe from './components/AboutMe';
import Separator from './components/Separator';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';


function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollTop}
      aria-label="Nach oben scrollen"
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full border border-white text-white bg-transparent hover:bg-white hover:text-black transition-transform duration-200 transform hover:scale-110 flex items-center justify-center shadow-lg"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}

function App() {
  useEffect(() => {
    initGsapReveal();
  }, []);

  return (
    <>
      <NavBar />
      <HeroSection />
      <Accordion />
      <Separator />
      <Services />
      <Separator />
      <AboutMe />
      <Separator />
      <Portfolio />
      <Separator />
     <Separator />
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default App;
