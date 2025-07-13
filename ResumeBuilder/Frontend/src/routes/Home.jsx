import React, { useEffect, useRef } from 'react';

import { Heroic } from '../component';
import Features from '../component/Features';
import HowItWorks from '../component/HowItWorks';
import Templates from '../component/Templates';
import Testimonials from '../component/Testimonials';
import Footer from '../component/Footer';
import LocomotiveScroll from 'locomotive-scroll';
import { Cursor } from '../ui';
import 'locomotive-scroll/dist/locomotive-scroll.css'




const Home = () => {
  const scrollref = useRef(null);
  useEffect(()=>{
    if(!scrollref.current) return;

    const loco = new LocomotiveScroll({
       lenisOptions: {
        wrapper: scrollref.current,
     
        duration:1.2,
        normalizeWheel: true,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      
    }
    })
  },[scrollref])

  return (
    <div ref={scrollref} className='w-screen h-screen ' data-scroll-container >
     
      <Heroic />
      <Features />
      <HowItWorks />
      <Templates />
      <Testimonials />
      <Footer />
 <Cursor /> 
    
    </div>
   
  );
};

export default Home;
