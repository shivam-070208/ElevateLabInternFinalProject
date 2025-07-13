import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../ui/Button';

gsap.registerPlugin(ScrollTrigger);

const Heoicoverlay = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup - hide elements
      gsap.set([titleRef.current, subtitleRef.current, buttonRef.current], { opacity: 0, y: 100 });
      
      // Animate elements on load
      const tl = gsap.timeline({ delay: 0.3 });
      
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out"
      })
      .to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.8")
      .to(buttonRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "back.out(1.7)"
      }, "-=0.5");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full bg-transparent relative h-full flex flex-col items-center justify-center text-center py-20 z-0 px-4"
      data-scroll
      data-scroll-speed="-0.5"
    >
      <h1 
        ref={titleRef} 
        className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight drop-shadow-lg heroic-title"
      >
        Build Your <span className="text-blue-600">CV</span>
      </h1>
      <p 
        ref={subtitleRef} 
        className="text-lg md:text-xl text-gray-700 mx-auto leading-tight max-w-2xl mb-10"
      >
        Create your AI-powered, ATS-friendly resume or CV in minutes. Just fill in your details and let us do the rest!
      </p>
      
      <div ref={buttonRef}>
        <Button>Get Resume!</Button>
      </div>
    </div>
  );
};

export default Heoicoverlay;
