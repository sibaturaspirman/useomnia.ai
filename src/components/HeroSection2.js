'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap/ScrollSmoother';
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const HeroSection2 = () => {
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);
  const isScrolling = useRef(false);
  const currentIndex = useRef(0);

  useEffect(() => {
    if (!ScrollSmoother.get()) {
      ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1.2,
        effects: true,
      });
    }

    sectionRefs.current.forEach((section, i) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: 'bottom bottom',
        snap: 1,
        markers: false,
      });

      gsap.fromTo(
        section,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          duration: 0.5,
          ease: 'power2.out',
        }
      );
    });
  }, []);

  useEffect(() => {
    const scrollToSection = (index) => {
      if (index < 0 || index >= sectionRefs.current.length) return;
      isScrolling.current = true;
      sectionRefs.current[index].scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        isScrolling.current = false;
      }, 1000);
    };

    const handleWheel = (e) => {
      if (isScrolling.current) return;

      if (e.deltaY > 0) {
        currentIndex.current = Math.min(currentIndex.current + 1, sectionRefs.current.length - 1);
      } else {
        currentIndex.current = Math.max(currentIndex.current - 1, 0);
      }
      scrollToSection(currentIndex.current);
    };

    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <div id="smooth-wrapper" ref={containerRef}>
      <div id="smooth-content">
        <section
          ref={(el) => (sectionRefs.current[0] = el)}
          className="h-screen bg-blue-700 text-white flex items-center justify-center text-4xl"
        >
          Section 1
        </section>
        <section
          ref={(el) => (sectionRefs.current[1] = el)}
          className="h-screen bg-red-600 text-white flex items-center justify-center text-4xl"
        >
          Section 2
        </section>
        <section
          ref={(el) => (sectionRefs.current[2] = el)}
          className="h-screen bg-green-600 text-white flex items-center justify-center text-4xl"
        >
          Section 3
        </section>
        <section
          ref={(el) => (sectionRefs.current[3] = el)}
          className="h-screen bg-black text-white flex items-center justify-center text-4xl"
        >
          Section 4
        </section>
      </div>
    </div>
  );
};

export default HeroSection2;
