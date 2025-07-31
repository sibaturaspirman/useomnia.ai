'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SnapSections() {
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray('.panel');

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: () => '+=' + containerRef.current.offsetHeight,
      pin: true,
      snap: 1 / (sections.length - 1),
      scrub: 1,
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef}>
      <section className="panel" style={{ height: '100vh', backgroundColor: '#ff6f61' }}>Section 1</section>
      <section className="panel" style={{ height: '100vh', backgroundColor: '#6b5b95' }}>Section 2</section>
      <section className="panel" style={{ height: '100vh', backgroundColor: '#88b04b' }}>Section 3</section>
      <section className="panel" style={{ height: '100vh', backgroundColor: '#f7cac9' }}>Section 4</section>
    </div>
  );
}
