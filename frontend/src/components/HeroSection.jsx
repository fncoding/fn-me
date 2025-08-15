import React, { useRef, useState, useEffect } from 'react';

const HeroSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [contactHover, setContactHover] = useState(false);

  useEffect(() => {
    // Ensure video starts muted so autoplay works in browsers
    const v = videoRef.current;
    if (v) {
      v.muted = true;
      // try to play on mount
      v.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  const handleGetStarted = (e) => {
    e.preventDefault();
    const next = document.getElementById('faq');
    if (next) {
      next.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background video (place hero-bg.mp4 in frontend/public so it's served at /hero-bg.mp4) */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      {/* Dark gradient overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/60" />

      {/* Content */}
      <div className="relative z-10 px-6 max-w-4xl text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
          felixneumann
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8">
            Modern, Immersive, Web -Designs & CyberSecurity
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleGetStarted}
            className={`px-8 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/30 cursor-pointer ${contactHover ? 'text-white bg-transparent border-0' : 'border border-white text-white bg-transparent'}`}
            aria-label="Get started - scroll to main"
          >
            Get Started
          </button>

          <a
            href="/contact"
            onMouseEnter={() => setContactHover(true)}
            onMouseLeave={() => setContactHover(false)}
            className="group btn btn-ghost btn-lg px-6 relative overflow-hidden transition-all duration-300 border border-transparent rounded-lg hover:border-white hover:scale-105 hover:bg-transparent"
            aria-label="Contact"
          >
            <span className="relative z-10">Contact</span>
            {/* Animated rounded border layer (appears on hover) */}
            <span className="absolute inset-0 rounded-lg border border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </a>
        </div>
      </div>

      {/* Controls (bottom left) */}
      <div className="absolute left-6 bottom-6 z-20 flex items-center gap-3">
        <button
          onClick={togglePlay}
          className="btn btn-circle btn-sm bg-white/10 hover:bg-white/20 border-none"
          aria-pressed={!isPlaying}
          aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
          title={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 9v6m4-6v6" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" stroke="none">
              <path d="M5 3.868v16.264A1 1 0 0 0 6.555 21.02l12.89-8.632A1 1 0 0 0 19.444 10.61L6.555 1.379A1 1 0 0 0 5 3.868z" />
            </svg>
          )}
        </button>

        <div className="text-sm text-white/90">Video: {isPlaying ? 'playing' : 'paused'}</div>
      </div>
    </section>
  );
};

export default HeroSection;