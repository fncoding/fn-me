import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initGsapReveal() {
  if (typeof window === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  // clear previous triggers
  ScrollTrigger.getAll().forEach((st) => st.kill());

  // reveal elements (from below, smooth with scrub)
  gsap.utils.toArray('.reveal').forEach((el) => {
    gsap.set(el, { opacity: 0, y: 40, willChange: 'transform, opacity' });

    gsap.fromTo(
      el,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          end: 'top 40%',
          scrub: 0.6,
          // when scrolling up the animation will smoothly reverse because of scrub
          // markers: true,
        },
      }
    );
  });
}
