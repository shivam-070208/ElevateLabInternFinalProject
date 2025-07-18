import React, { useEffect, useRef } from 'react';

import { Heroic } from '../component';
import Features from '../component/Features';
import HowItWorks from '../component/HowItWorks';
import Templates from '../component/Templates';
import Testimonials from '../component/Testimonials';
import Footer from '../component/Footer';

import { Cursor } from '../ui';





const Home = () => {


  return (
    <div  className='w-screen h-screen '  >
     
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
