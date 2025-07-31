'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap/ScrollSmoother';


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function HeroSection() {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);
  const section7Ref = useRef(null);
  const section8Ref = useRef(null);
  const section9Ref = useRef(null);
  const section10Ref = useRef(null);
  const bg1Ref = useRef(null);
  const bg2Ref = useRef(null);
  const bg3Ref = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const prevRef = useRef(null);
  const nextRef = useRef(null);


  useEffect(() => {
    const isMobile = window.innerWidth < 1024; // asumsi breakpoint tailwind lg: 1024px
    const smoother = ScrollSmoother.create({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      smooth: 2,
      normalizeScroll: true,
      effects: true,
    });

    // BG change starts ONLY on Section 3
    if (section3Ref.current) {
        ScrollTrigger.create({
            trigger: section3Ref.current,
            start: 'top center',
            end: 'bottom center',
            onEnter: () => {
                // BG Fade
                gsap.to(bg1Ref.current, { opacity: 0, duration: 0.6 });
                gsap.to(bg2Ref.current, { opacity: 1, duration: 0.6 });
        
                // Hide bungkusCharacter
                gsap.to('#bungkusCharacter', {
                opacity: 0,
                duration: 0.2,
                ease: 'linear',
                pointerEvents: 'none', // optional, to prevent interaction
                scrub: false,
                });
            },
            onLeaveBack: () => {
                // BG Reset
                gsap.to(bg1Ref.current, { opacity: 1, duration: 0.6 });
                gsap.to(bg2Ref.current, { opacity: 0, duration: 0.6 });
        
                // Show bungkusCharacter again
                gsap.to('#bungkusCharacter', {
                opacity: 1,
                duration: 0.2,
                ease: 'linear',
                pointerEvents: 'auto',
                scrub: false,
                });
            },
        });
    }

    // SECTION 2
    // FadeInUp untuk empl1-empl6 secara berurutan saat masuk Section 2
    const emplIds = ['empl1', 'empl2', 'empl3', 'titleSection2', 'empl4', 'empl5', 'empl6'];
    const emplEls = emplIds.map(id => document.getElementById(id)).filter(Boolean);

    const tl = gsap.timeline({
    scrollTrigger: {
        trigger: section2Ref.current,
        start: 'top 50% center',
        // start: 'top+=100 center',
        end: 'bottom center',
        toggleActions: 'play none none reverse',
        markers: false,
        scrub: false,
    },
    });

    emplEls.forEach((el, i) => {
    tl.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power3.out',
            // delay: i * 0.05,
        },
        i * 0.05
    );
    });
    // !SECTION 2

    // SECTION 3
    // FadeInUp
    const apaItuds = ['apaItu1', 'apaItu2', 'apaItu3', 'apaItu4'];
    const apaituEls = apaItuds.map(id => document.getElementById(id)).filter(Boolean);

    const tlApaitu = gsap.timeline({
    scrollTrigger: {
        trigger: section3Ref.current,
        // start: 'top 35% center',
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play none none reverse',
        markers: false,
        scrub: true,
    },
    });

    apaituEls.forEach((el, i) => {
        tlApaitu.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: 'power3.out',
            // delay: i * 0.05,
        },
        i * 0.05
    );
    });

    // FadeInLeft
    const apaItuImgds = ['apaItuStep1', 'apaItuStep2', 'apaItuStep3', 'apaItuStep4', 'apaItuStep5'];
    const apaituImgEls = apaItuImgds.map(id => document.getElementById(id)).filter(Boolean);
    const totalDelay = apaituEls.length * 0.03 + 0.3; // total waktu + 1 durasi terakhir

    const tlApaituImg = gsap.timeline({
    scrollTrigger: {
        trigger: section3Ref.current,
        // start: 'top 35% center',
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play none none reverse',
        markers: false,
        scrub: true,
    },
    });

    apaituImgEls.forEach((el, i) => {
        tlApaituImg.fromTo(
        el,
        { opacity: 0, x: 40 },
        {
            opacity: 1,
            x: 0,
            duration: 0.3,
            ease: 'power3.out',
            // delay: i * 0.05,
        },
        i * 0.05
        );
    });
    // !SECTION 3

    // === SECTION 4: Munculkan apaItuC1 & apaItu5, hide lainnya ===
    if (section4Ref.current) {
        ScrollTrigger.create({
        trigger: section4Ref.current,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
        onEnter: () => {
            // Show
            const apaItu5 = document.getElementById('apaItu5');
            const apaItuC1 = document.getElementById('apaItuC1');
            const apaItuC12 = document.getElementById('apaItuC12');
            if (apaItu5){
                gsap.fromTo(
                    apaItu5,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.3,
                        ease: 'power3.out',
                    },
                );
            }
            if (apaItuC1){
                gsap.fromTo(
                    apaItuC1,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.3,
                        ease: 'power3.out',
                        delay: 0.15
                    },
                );
            }
            if (apaItuC12){
                const targetScale = isMobile ? 1.3 : 1;
                gsap.fromTo(
                    apaItuC12,
                    { opacity: 0, scale: .4 },
                    {
                        opacity: 1,
                        scale: targetScale,
                        duration: 0.3,
                        ease: 'power3.out',
                        delay: 0.35
                    },
                );
            }
    
            // Hide apaItu4 + apaItuStep1–5
            const apaItuHideIds = ['apaItu4', 'apaItuStep1', 'apaItuStep2', 'apaItuStep3', 'apaItuStep4', 'apaItuStep5'];
            apaItuHideIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) gsap.to(el, { opacity: 0, duration: 0.4, ease: 'power2.out' });
            });
        },
        onLeaveBack: () => {
            // Reset visibility if needed
            const apaItu5 = document.getElementById('apaItu5');
            const apaItuC1 = document.getElementById('apaItuC1');
            const apaItuC12 = document.getElementById('apaItuC12');
            if (apaItu5) gsap.to(apaItu5, { opacity: 0, y: 40, duration: 0.5, ease: 'power2.out' });
            if (apaItuC1) gsap.to(apaItuC1, { opacity: 0, y: 40, duration: 0.5, ease: 'power2.out' });
            if (apaItuC12) gsap.to(apaItuC12, { opacity: 0, y: 40, duration: 0.5, ease: 'power2.out' });
    
            // Show back apaItu4 + steps
            const apaItuHideIds = ['apaItu4', 'apaItuStep1', 'apaItuStep2', 'apaItuStep3', 'apaItuStep4', 'apaItuStep5'];
            apaItuHideIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) gsap.to(el, { opacity: 1, duration: 0.4, ease: 'power2.out' });
            });
        },
        });
    }
    // !SECTION 4

    // === SECTION 5 ===
    if (section5Ref.current) {
        // FadeInLeft
        const apaItuImgds = ['apaItuStep41', 'apaItuStep2', 'apaItuStep3', 'apaItuStep4', 'apaItuStep51'];
        const apaituImgEls = apaItuImgds.map(id => document.getElementById(id)).filter(Boolean);
        const totalDelay = apaituEls.length * 0.03 + 0.3; // total waktu + 1 durasi terakhir

        const tlApaituImg = gsap.timeline({
        scrollTrigger: {
            trigger: section5Ref.current,
            start: 'top center',
            end: 'bottom center',
            toggleActions: 'play none none reverse',
            markers: false,
            scrub: true,
        },
        });

        apaituImgEls.forEach((el, i) => {
            tlApaituImg.fromTo(
            el,
            { opacity: 0, x: 40 },
            {
                opacity: 1,
                x: 0,
                duration: 0.3,
                ease: 'power3.out',
                // delay: i * 0.05,
            },
            i * 0.05
            );
        });

        ScrollTrigger.create({
        trigger: section5Ref.current,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
        onEnter: () => {
            const hideIds = ['apaItuC12', 'apaItuC1', 'apaItu5'];
            const apaItu6 = document.getElementById('apaItu6');
            const s2Mobile = document.getElementById('s2Mobile');
            const s4Mobile = document.getElementById('s4Mobile');
            if (apaItu6){
                gsap.fromTo(
                    apaItu6,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.3,
                        ease: 'power3.out',
                    },
                );
            }
    
            hideIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                gsap.to(el, { opacity: 0, duration: 0.4, ease: 'power2.out' });
            }
            });

            // Sembunyikan s2Mobile, tampilkan s4Mobile
            if (s2Mobile && s4Mobile) {
                gsap.to(s2Mobile, { opacity: 0, duration: 0.4, ease: 'power2.out' });
                gsap.to(s4Mobile, { opacity: 1, duration: 0.4, ease: 'power2.out' });
            }
        },
        onLeaveBack: () => {
            const showIds = ['apaItuStep41', 'apaItuStep2', 'apaItuStep3', 'apaItuStep4', 'apaItuStep51', 'apaItu6'];
            const hideIds = ['apaItuC12', 'apaItuC1', 'apaItu5'];
            const s2Mobile = document.getElementById('s2Mobile');
            const s4Mobile = document.getElementById('s4Mobile');
    
            // Balikkan semua seperti semula
            showIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                gsap.to(el, { opacity: 0, duration: 0.5, ease: 'power2.out' });
            }
            });
    
            hideIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                gsap.to(el, { opacity: 1, duration: 0.4, ease: 'power2.out' });
            }
            });

            // Balikkan ke awal: tampilkan s2Mobile, sembunyikan s4Mobile
            if (s2Mobile && s4Mobile) {
                gsap.to(s2Mobile, { opacity: 1, duration: 0.4, ease: 'power2.out' });
                gsap.to(s4Mobile, { opacity: 0, duration: 0.4, ease: 'power2.out' });
            }
        },
        });
    }
    // !SECTION 5

    // SECTION 6
    const title = document.getElementById('titleSection6');
    const slider = document.getElementById('sliderSection6');
    if (section6Ref.current) {
        const tlSection6 = gsap.timeline({
        scrollTrigger: {
            trigger: section6Ref.current,
            start: 'top center',
            end: 'bottom center',
            toggleActions: 'play none none reverse',
            markers: false,
            scrub: false,
        },
        });
    
        tlSection6
        .fromTo(
            title,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
        )
        .fromTo(
            slider,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
            "+=0.05"
        );

        ScrollTrigger.create({
          trigger: section6Ref.current,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => {
            const hideSection5Ids = [
              'apaItuStep41',
              'apaItuStep2',
              'apaItuStep3',
              'apaItuStep4',
              'apaItuStep51',
              'apaItu6',
              'apaItu1',
              'apaItu2',
              'apaItu3'
            ];
      
            hideSection5Ids.forEach(id => {
              const el = document.getElementById(id);
              if (el) {
                gsap.to(el, { opacity: 0, duration: 0.4, ease: 'power2.out' });
              }
            });
          },
          onLeaveBack: () => {
            const showSection5Ids = [
              'apaItuStep41',
              'apaItuStep2',
              'apaItuStep3',
              'apaItuStep4',
              'apaItuStep51',
              'apaItu6',
              'apaItu1',
              'apaItu2',
              'apaItu3'
            ];
      
            showSection5Ids.forEach(id => {
              const el = document.getElementById(id);
              if (el) {
                gsap.to(el, { opacity: 1, duration: 0.4, ease: 'power2.out' });
              }
            });
          },
        });
    }
    // !SECTION 6

    // SECTION 7
    const titles7 = document.getElementById('titleSection7');
    const sliders7 = document.getElementById('sliderSection7');
    if (section7Ref.current) {
        const tlSection7 = gsap.timeline({
        scrollTrigger: {
            trigger: section7Ref.current,
            start: 'top center',
            end: 'bottom center',
            toggleActions: 'play none none reverse',
            markers: false,
            scrub: false,
        },
        });
    
        tlSection7
        .fromTo(
            titles7,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
        )
        .fromTo(
            sliders7,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
            "+=0.05"
        );
    }
    // !SECTION 7


    // SECTION 8
    const titles8 = document.getElementById('titleSection8');
    const kontenSection8 = document.getElementById('kontenSection8');
    if (section8Ref.current) {
        const tlSection8 = gsap.timeline({
        scrollTrigger: {
            trigger: section8Ref.current,
            start: 'top center',
            end: 'bottom center',
            toggleActions: 'play none none reverse',
            markers: false,
            scrub: false,
        },
        });
    
        tlSection8
        .fromTo(
            titles8,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
        )
        .fromTo(
            kontenSection8,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
            "+=0.05"
        );
    }
    // !SECTION 8


    // SECTION 9
    const titles9 = document.getElementById('titleSection9');
    const kontenSection9 = document.getElementById('kontenSection9');
    if (section9Ref.current) {
        const tlSection9 = gsap.timeline({
        scrollTrigger: {
            trigger: section9Ref.current,
            start: 'top center',
            end: 'bottom center',
            toggleActions: 'play none none reverse',
            markers: false,
            scrub: false,
        },
        });
    
        tlSection9
        .fromTo(
            titles9,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
        )
        .fromTo(
            kontenSection9,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
            "+=0.05"
        );
    }
    // !SECTION 9

    // SECTION 10
    const titles10 = document.getElementById('titleSection10');
    const ctaContact = document.getElementById('ctaContact');
    if (section10Ref.current) {
        const tlSection10 = gsap.timeline({
        scrollTrigger: {
            trigger: section10Ref.current,
            start: 'top center',
            end: 'bottom center',
            toggleActions: 'play none none reverse',
            markers: false,
            scrub: false,
        },
        });
    
        tlSection10
        .fromTo(
            titles10,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
        )
        .fromTo(
            ctaContact,
            { opacity: 1, y: 0},
            { opacity: 1, y: 140, duration: 0.5, ease: 'power2.out' },
            "+=0.05"
        );


        ScrollTrigger.create({
            trigger: section10Ref.current,
            start: 'top center',
            end: 'bottom center',
            onEnter: () => {
                // BG Fade
                gsap.to(bg2Ref.current, { opacity: 0, duration: 0.6 });
                gsap.to(bg3Ref.current, { opacity: 1, duration: 0.6 });
            },
            onLeaveBack: () => {
                // BG Reset
                gsap.to(bg2Ref.current, { opacity: 1, duration: 0.6 });
                gsap.to(bg3Ref.current, { opacity: 0, duration: 0.6 });
            },
        });
    }
    // !SECTION 10
      
  

  

    return () => {
      smoother.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div>
      {/* Background Layers */}
      <div
        id="bgChange1"
        ref={bg1Ref}
        className="fixed top-0 left-0 w-full min-h-screen bg z-[-1]"
        style={{ opacity: 1 }}
      ></div>
      <div
        id="bgChange2"
        ref={bg2Ref}
        className="fixed top-0 left-0 w-full min-h-screen bg-page z-[-1]"
        style={{ opacity: 0 }}
      ></div>
      <div
        id="bgChange3"
        ref={bg3Ref}
        className="fixed top-0 left-0 w-full min-h-screen bg-page2 z-[-1]"
        style={{ opacity: 0 }}
      ></div>

      {/* CTA */}
      <a href='https://wa.me/+6282123432400?text=Hallo saya mau tanya omniAi?' target='_blank' className='block fixed left-0 right-0 w-[200px] mx-auto bottom-1 z-50 transition hover:scale-[1.1] cursor-pointer' id='ctaContact'>
        <Image
            src="/images/cta-contact.png"
            alt="omnia"
            className="w-full animate-bounce"
            width={442}
            height={180}
        />
      </a>

        {/* CHARACTER */}
        <div id='bungkusCharacter' className='fixed left-0 right-0 w-full h-full flex flex-col items-center justify-center mx-auto bottom z-[-1]'>
            <div id='empl6' className="absolute left-0 right-0 mx-auto scale-[1.6] lg:scale-[1] w-[100%] lg:w-[80%] lg:bottom-8 opacity-0">
                <Image
                src="/images/c6.png"
                alt="omnia"
                className="w-full"
                width={1161}
                height={673}
                />
            </div>
            <div id='empl5' className="absolute left-0 right-0 mx-auto scale-[1.6] lg:scale-[1] w-[100%] lg:w-[80%] lg:bottom-8 opacity-0">
                <Image
                src="/images/c5.png"
                alt="omnia"
                className="w-full"
                width={1161}
                height={673}
                />
            </div>
            <div id='empl4' className="absolute left-0 right-0 mx-auto scale-[1.6] lg:scale-[1] w-[100%] lg:w-[80%] lg:bottom-8 opacity-0">
                <Image
                src="/images/c4.png"
                alt="omnia"
                className="w-full"
                width={1161}
                height={673}
                />
            </div>
            <div id='empl3' className="absolute left-0 right-0 mx-auto scale-[1.6] lg:scale-[1] w-[100%] lg:w-[80%] lg:bottom-8 opacity-0">
                <Image
                src="/images/c3.png"
                alt="omnia"
                className="w-full"
                width={1161}
                height={673}
                />
            </div>
            <div id='empl2' className="absolute left-0 right-0 mx-auto scale-[1.6] lg:scale-[1] w-[100%] lg:w-[80%] lg:bottom-8 opacity-0">
                <Image
                src="/images/c2.png"
                alt="omnia"
                className="w-full"
                width={1161}
                height={673}
                />
            </div>
            <div id='empl1' className="absolute left-0 right-0 mx-auto scale-[1.6] lg:scale-[1] w-[100%] lg:w-[80%] lg:bottom-8 opacity-0">
                <Image
                src="/images/c1.png"
                alt="omnia"
                className="w-full"
                width={1161}
                height={673}
                />
            </div>

            <div className="text-center text-white absolute bottom-[7rem] lg:bottom-[8rem] px-5 lg:px-0 opacity-0" id='titleSection2'>
                <p className="text-base lg:text-[24px] hidden lg:block">AI Employee pertama yang benar-benar <br/> bekerja seperti tim.</p>
                <p className="text-base lg:text-[24px] lg:hidden">AI Employee pertama yang benar-benar  bekerja seperti tim.</p>
                <h5 className="text-base lg:text-[32px] font-bold mt-2 lg:mt-0">Dirancang khusus untuk bisnis&nbsp;kamu.</h5>
            </div>
        </div>

        {/* APAITU */}
        <div id='bungkusApaitu' className='fixed left-0 right-0 w-full h-full flex flex-col items-center justify-center mx-auto bottom z-[-1]'>

            <div className="w-full text-center text-white absolute px-5 lg:px-0 opacity-100 lg:mt-[-4rem]">
                <h5 className="text-base lg:text-[32px] font-bold mt-2 lg:mt-0 opacity-0" id='apaItu1'>Apa itu AI Employee?</h5>
                <p className="text-base lg:text-[24px] opacity-0" id='apaItu2'>Ia bekerja sebagai karyawan kamu yang bisa</p>
                <Image
                src="/images/divider.png"
                alt="omnia"
                className="mx-auto mt-5 lg:w-[20%] opacity-0"
                width={324}
                height={1} id='apaItu3'
                />
                <div className='relative w-full'>
                    <h5 className="text-xl lg:text-[48px] font-bold mt-2 lg:mt-0 text-[#FFD4C2] opacity-0" id='apaItu4'>Merespon sesuai kebutuhan</h5>
                    <h5 className="absolute top-0 w-full text-xl lg:text-[48px] font-bold mt-2 lg:mt-0 text-[#FFD4C2] opacity-0" id='apaItu5'>Menggunakan semua aplikasi</h5>
                    <h5 className="absolute top-0 w-full text-xl lg:text-[48px] font-bold mt-2 lg:mt-0 text-[#FFD4C2] opacity-0" id='apaItu6'>Mengerjakan tugas</h5>
                </div>

                <div className='relative w-full flex items-center justify-center mt-5'>
                    <div className='relative w-[25%] hidden lg:block'>
                        <Image
                        src="/images/s2-p1.png"
                        alt="omnia"
                        className="w-full opacity-0"
                        width={343}
                        height={88} id='apaItuStep1'
                        />

                        <Image
                        src="/images/s4-p1.png"
                        alt="omnia"
                        className="w-full absolute top-0 left-0 opacity-0"
                        width={343}
                        height={88} id='apaItuStep41'
                        />
                    </div>
                    <div className='relative w-[88px] mt-4 hidden lg:block'>
                        <Image
                        src="/images/arrow.png"
                        alt="omnia"
                        className="w-full opacity-0"
                        width={88}
                        height={1} id='apaItuStep2'
                        />
                    </div>
                    <div className='relative w-[100%] lg:w-[20%] opacity-0' id='apaItuStep3'>
                        <Image
                        src="/images/s2-p2.png"
                        alt="omnia"
                        className="w-full hidden lg:block"
                        width={343}
                        height={88}
                        />
                        <Image
                        src="/images/s2-pmobile.png"
                        alt="omnia"
                        className="w-full block lg:hidden"
                        width={351}
                        height={277}
                        id='s2Mobile'
                        />
                        <Image
                        src="/images/s4-pmobile.png"
                        alt="omnia"
                        className="absolute top-0 w-full block lg:hidden opacity-0"
                        width={351}
                        height={277}
                        id='s4Mobile'
                        />
                    </div>
                    <div className='relative w-[88px] mt-4 hidden lg:block'>
                        <Image
                        src="/images/arrow.png"
                        alt="omnia"
                        className="w-full opacity-0"
                        width={88}
                        height={1} id='apaItuStep4'
                        />
                    </div>
                    <div className='relative w-[25%] hidden lg:block'>
                        <Image
                        src="/images/s2-p3.png"
                        alt="omnia"
                        className="w-full opacity-0"
                        width={343}
                        height={88} id='apaItuStep5'
                        />

                        <Image
                        src="/images/s4-p2.png"
                        alt="omnia"
                        className="lg:w-[60%] absolute top-[-3rem] left-0 opacity-0"
                        width={211}
                        height={208} id='apaItuStep51'
                        />
                    </div>
                </div>
            </div>

            <div id='apaItuC12' className="absolute left-0 right-0 mx-auto scale-[1.6] lg:scale-[1] w-[100%] lg:w-[80%] bottom-[13rem] lg:bottom-4 opacity-0">
                <Image
                src="/images/apaituc6.png"
                alt="omnia"
                className="w-full"
                width={1161}
                height={673}
                />
            </div>
            <div id='apaItuC1' className="absolute left-0 right-0 mx-auto scale-[1.6] lg:scale-[1] w-[100%] lg:w-[80%] bottom-[13rem] lg:bottom-2 opacity-0">
                <Image
                src="/images/c1.png"
                alt="omnia"
                className="w-full"
                width={1161}
                height={673}
                />
            </div>
        </div>

        <div id="smooth-wrapper" ref={wrapperRef}>
            <div id="smooth-content" ref={contentRef}>
            {/* SECTION 1 */}
            <div className="relative flex flex-col items-center justify-center min-h-screen z-10">
                <div className="relative text-center text-white top-[-4rem] lg:top-0">
                <p className="text-xl lg:text-[24px]">Ini bukan Chatbot</p>
                <h2 className="text-4xl lg:text-[90px] font-bold leading-[1.5]">AI Employee</h2>
                <h5 className="text-xl lg:text-[42px]">yang bisa bekerja 24/7</h5>
                </div>
            </div>

            {/* SECTION 2 */}
            <div
                ref={section2Ref}
                className="relative flex flex-col items-center justify-center min-h-screen z-10"
            >
                {/* <div className='relative w-full top-[-4rem] lg:top-[11rem] flex flex-col items-center justify-end'>
                <div id='empl6' className="absolute left-0 right-0 mx-auto scale-[1.6] lg:scale-[1] w-[100%] lg:w-[80%] lg:bottom-8 opacity-0">
                    <Image
                    src="/images/c6.png"
                    alt="omnia"
                    className="w-full"
                    width={1161}
                    height={673}
                    />
                </div>
                <div id='empl5' className="absolute left-0 right-0 mx-auto scale-[1.6] lg:scale-[1] w-[100%] lg:w-[80%] lg:bottom-8 opacity-0">
                    <Image
                    src="/images/c5.png"
                    alt="omnia"
                    className="w-full"
                    width={1161}
                    height={673}
                    />
                </div>
                <div id='empl4' className="absolute left-0 right-0 mx-auto scale-[1.6] lg:scale-[1] w-[100%] lg:w-[80%] lg:bottom-8 opacity-0">
                    <Image
                    src="/images/c4.png"
                    alt="omnia"
                    className="w-full"
                    width={1161}
                    height={673}
                    />
                </div>
                <div id='empl3' className="absolute left-0 right-0 mx-auto scale-[1.6] lg:scale-[1] w-[100%] lg:w-[80%] lg:bottom-8 opacity-0">
                    <Image
                    src="/images/c3.png"
                    alt="omnia"
                    className="w-full"
                    width={1161}
                    height={673}
                    />
                </div>
                <div id='empl2' className="absolute left-0 right-0 mx-auto scale-[1.6] lg:scale-[1] w-[100%] lg:w-[80%] lg:bottom-8 opacity-0">
                    <Image
                    src="/images/c2.png"
                    alt="omnia"
                    className="w-full"
                    width={1161}
                    height={673}
                    />
                </div>
                <div id='empl1' className="absolute left-0 right-0 mx-auto scale-[1.6] lg:scale-[1] w-[100%] lg:w-[80%] lg:bottom-8 opacity-0">
                    <Image
                    src="/images/c1.png"
                    alt="omnia"
                    className="w-full"
                    width={1161}
                    height={673}
                    />
                </div>

                <div className="text-center text-white absolute bottom-[-4rem] lg:bottom-[8rem] px-5 lg:px-0 opacity-0" id='titleSection2'>
                    <p className="text-base lg:text-[24px] hidden lg:block">AI Employee pertama yang benar-benar <br/> bekerja seperti tim.</p>
                    <p className="text-base lg:text-[24px] lg:hidden">AI Employee pertama yang benar-benar  bekerja seperti tim.</p>
                    <h5 className="text-base lg:text-[32px] font-bold mt-2 lg:mt-0">Dirancang khusus untuk bisnis&nbsp;kamu.</h5>
                </div>
                </div> */}
            </div>

            {/* SECTION 3 */}
            <div
                ref={section3Ref}
                className="flex flex-col items-center justify-center min-h-screen z-10 relative"
            >
                {/* <div className='absolute block left-0 right-0 h-[20px] bg-red-50 bottom-[10rem] w-full opacity-50' id='endSection4'></div> */}
            </div>

            {/* SECTION 4 */}
            <div
                ref={section4Ref}
                className="flex flex-col items-center justify-center min-h-screen z-10"
            ></div>

            {/* SECTION 5 */}
            <div
                ref={section5Ref}
                className="flex flex-col items-center justify-center min-h-screen z-10"
            ></div>

            {/* SECTION 6 */}
            <section ref={section6Ref} id="section6" className="relative flex flex-col items-center justify-center lg:justify-end  text-white min-h-screen">
                <div className="text-center mb-6 lg:mb-10">
                    <h2 className="text-base md:text-4xl font-bold" id='titleSection6'>
                    Our AI employee untuk semua <br /> kerjaan bisnis kamu.
                    </h2>
                </div>
            
                <div className='relative w-full' id='sliderSection6'>
                    <div className='absolute top-[-2.5rem] left-0 right-0 h-full mx-auto lg:w-[310px] flex items-center justify-between z-50 cursor-pointer'>
                        <div ref={prevRef}>
                            <Image
                            src="/images/pprev.png"
                            alt="omnia"
                            className="w-full"
                            width={48}
                            height={48}
                            />
                        </div>
                        <div ref={nextRef}>
                            <Image
                            src="/images/pnext.png"
                            alt="omnia"
                            className="w-full"
                            width={48}
                            height={48}
                            />
                        </div>
                    </div>
                    <Swiper
                    modules={[Navigation]}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onInit={(swiper) => {
                        setActiveIndex(swiper.realIndex)
                        // Link navigation manually after mount
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}

                    centeredSlides
                    loop
                    spaceBetween={0}
                    slidesPerView={1.7}
                    breakpoints={{
                        768: {
                        slidesPerView: 'auto',
                        },
                    }}
                    className="w-full px-4"
                    >
                        {[
                        {
                            img: '/images/card1.png',
                        },
                        {
                            img: '/images/card2.png',
                        },
                        {
                            img: '/images/card3.png',
                        },
                        {
                            img: '/images/card4.png',
                        },
                        {
                            img: '/images/card5.png',
                        },
                        {
                            img: '/images/card6.png',
                        },
                        {
                            img: '/images/card1.png',
                        },
                        {
                            img: '/images/card2.png',
                        },
                        {
                            img: '/images/card3.png',
                        },
                        {
                            img: '/images/card4.png',
                        },
                        {
                            img: '/images/card5.png',
                        },
                        {
                            img: '/images/card6.png',
                        },
                        ].map((item, index) => (
                        <SwiperSlide key={index} className='lg:!w-[280px]'>
                            <div
                            className={`transition-all pb-10 ${activeIndex === index
                                ? 'scale-105 opacity-100 border-orange-500 shadow-lg'
                                : 'scale-90 opacity-50 border-transparent'}`}
                            >
                                <Image
                                src={item.img}
                                alt="omnia"
                                className="w-full"
                                width={340}
                                height={504}
                                />
                            </div>
                        </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            {/* Section 7 */}
            <section ref={section7Ref} id="section7" className="relative flex flex-col items-center justify-center lg:justify-end  text-white min-h-screen">
                <div className="max-w-5xl mx-auto text-center mb-6 px-4" id='titleSection7'>
                    <h2 className="text-base md:text-2xl font-mono font-bold leading-snug">
                    <span>
                        OmniAI bisa otomatisasi sampai 90% pekerjaan kamu,
                    </span><br />
                    <span>
                        hemat berjam-jam waktu setiap harinya.
                    </span>
                    </h2>
                </div>

                <div className='max-w-5xl relative mx-auto' id='sliderSection7'>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={2}
                    breakpoints={{
                        768: {
                        slidesPerView: 'auto',
                        },
                    }}
                    className="relative px-4"
                    >
                        <SwiperSlide className='lg:!w-[250px]'>
                            <div className='relative bg-[#1a1a1a] rounded-xl p-2 text-center shadow-lg border border-orange-500 cursor-pointer my-3 ml-4 mx-2 transition-all hover:scale-[1.02]' onClick={() => document.getElementById('videoSalon').play()}>
                                <video
                                src="/videos/salon.mp4"
                                poster="/images/salon.jpg"
                                className="w-full h-full object-cover"
                                loop
                                playsInline
                                preload="metadata"
                                id="videoSalon"
                                />
                            </div>
                            <h5 className='text-xs lg:text-base text-center mt-3 font-bold'>Klinik Kecantikan</h5>
                        </SwiperSlide>
                        <SwiperSlide className='lg:!w-[250px]'>
                            <div className='relative bg-[#1a1a1a] rounded-xl p-2 text-center shadow-lg border border-orange-500 cursor-pointer my-3 mx-2 mr-4 transition-all hover:scale-[1.02]' onClick={() => document.getElementById('videoMaterial').play()}>
                                <video
                                src="/videos/material.mp4"
                                poster="/images/material.jpg"
                                className="w-full h-full object-cover"
                                loop
                                playsInline
                                preload="metadata"
                                id="videoMaterial"
                                />
                            </div>
                            <h5 className='text-xs lg:text-base text-center mt-3 font-bold'>Toko Material</h5>
                        </SwiperSlide>
                </Swiper>
                </div>
            </section>

            {/* Section 8 */}
            <section ref={section8Ref} id="section8" className="relative flex flex-col items-center justify-center lg:justify-end text-white min-h-screen">
                <div className="max-w-5xl mx-auto text-center mb-2 lg:mb-6 px-4" id='titleSection8'>
                    <h5 className="text-base lg:text-[32px] font-bold">Bagaimana cara setup?</h5>
                    <p className="text-xs lg:text-[24px]">Proses simple untuk transformasi bisnis Anda</p>
                </div>

                <div className="max-w-5xl" id='kontenSection8'>
                    <Image
                    src="/images/setup.png"
                    alt="omnia"
                    className="w-full hidden lg:block"
                    width={1153}
                    height={414}
                    />
                    <Image
                    src="/images/setup-m.png"
                    alt="omnia"
                    className="w-full block lg:hidden px-10"
                    width={335}
                    height={503}
                    />
                </div>
            </section>

            {/* Section 9 */}
            <section ref={section9Ref} id="section9" className="relative flex flex-col items-center justify-center lg:justify-end text-white min-h-screen pb-10">
                <div className="max-w-5xl mx-auto text-center mb-2 lg:mb-6 px-4" id='titleSection9'>
                    <h5 className="text-base lg:text-[32px] font-bold">Package Plan</h5>
                    <p className="text-xs lg:text-[24px]">Pilih paket yang sesuai dengan kebutuhan Anda</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0" id='kontenSection9'>
                    <a href='https://wa.me/+6282123432400?text=Hallo saya mau tanya package free?' target='_blank' className='block transition-all hover:scale-[1.05]'>
                        <Image
                        src="/images/paket1.png"
                        alt="omnia"
                        className="w-full"
                        width={320}
                        height={448}
                        />
                    </a>
                    <a href='https://wa.me/+6282123432400?text=Hallo saya mau tanya package basic?' target='_blank' className='block transition-all hover:scale-[1.05]'>
                        <Image
                        src="/images/paket2.png"
                        alt="omnia"
                        className="w-full"
                        width={320}
                        height={448}
                        />
                    </a>
                    <a href='https://wa.me/+6282123432400?text=Hallo saya mau tanya package pro?' target='_blank' className='block transition-all hover:scale-[1.05]'>
                        <Image
                        src="/images/paket3.png"
                        alt="omnia"
                        className="w-full"
                        width={320}
                        height={448}
                        />
                    </a>
                    <a href='https://wa.me/+6282123432400?text=Hallo saya mau tanya package custom?' target='_blank' className='block transition-all hover:scale-[1.05]'>
                        <Image
                        src="/images/paket4.png"
                        alt="omnia"
                        className="w-full"
                        width={320}
                        height={448}
                        />
                    </a>
                </div>
            </section>



            {/* Section 10 */}
            <section ref={section10Ref} id="section10" className="relative flex flex-col items-center justify-center  text-white min-h-screen">
                <div className="max-w-5xl mx-auto text-center px-4" id='titleSection10'>
                    <h5 className="text-xl mb-1 lg:mb-0 lg:text-[32px] font-bold">Siap Transformasi Bisnis&nbsp;Anda?</h5>
                    <p className="text-base lg:text-[24px]">Bergabunglah dengan 100+ UMKM Indonesia yang sudah merasakan manfaat AI Employee</p>
                    <a href='https://wa.me/+6282123432400?text=Hallo saya mau tanya omniAi?' target='_blank' className="mt-4 lg:mt-10 px-4 lg:px-6 py-3 lg:py-3 rounded-lg font-mono text-white text-xs lg:text-[24px] bg-gradient-to-r from-[#802600] to-[#310E00] border border-[#ff733f] shadow-[0_0_15px_#ff4d00] hover:shadow-[0_0_20px_#ff4d00] transition duration-300 inline-block cursor-pointer font-bold">
                    Hubungi Kami sekarang!
                    </a>
                </div>

                <footer className="text-white font-mono text-sm py-8 px-4 absolute bottom-4 left-0 right-0">
                    <div className="max-w-6xl text-xs lg:text-base mx-auto grid grid-cols-1 lg:grid-cols-3 items-center">
                        
                        {/* Left */}
                        <div className="text-center lg:text-left lg:mb-2">
                        <a href="/privacy-policy" className="hover:underline tracking-widest">
                            KEBIJAKAN PRIVASI
                        </a>
                        </div>

                        {/* Center */}
                        <div className="flex justify-center items-center space-x-4 lg:mb-2">
                        <a href="https://www.instagram.com/useomnia.ai/" target="_blank" rel="noopener noreferrer" className="hover:underline tracking-widest">
                            INSTAGRAM
                        </a>
                        <span className="text-orange-500">•</span>
                        <a href='https://wa.me/+6282123432400?text=Hallo saya mau tanya omniAi?' target='_blank' className="hover:underline tracking-widest">
                            CONTACT US
                        </a>
                        </div>

                        {/* Right */}
                        <div className="text-center lg:text-right tracking-widest">
                        © 2025 ALL RIGHTS RESERVED
                        </div>
                    </div>
                    </footer>
            </section>



            </div>
        </div>
    </div>
  );
}
