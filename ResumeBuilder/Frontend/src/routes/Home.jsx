import React, { useEffect, useRef } from 'react';

import { Heroic } from '../component';
import Features from '../component/Features';
import HowItWorks from '../component/HowItWorks';
import Templates from '../component/Templates';
import Testimonials from '../component/Testimonials';
import Footer from '../component/Footer';
import LocomotiveScroll from 'locomotive-scroll';
import { Cursor } from '../ui';





const Home = () => {
  const scrollref = useRef(null);
  useEffect(()=>{
    if(!scrollref.current) return;

    const loco = new LocomotiveScroll({
      lenisOptions:{
        wrapper:scrollref.current,
        smoothWheel:true
      }
    })
  },[scrollref])

  return (
    <div ref={scrollref} className='scroll-container' >
     
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
