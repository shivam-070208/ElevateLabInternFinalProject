import React, { useEffect, useRef } from 'react';

import { Heroic } from '../component';
import Features from '../component/Features';
import HowItWorks from '../component/HowItWorks';
import Templates from '../component/Templates';
import Testimonials from '../component/Testimonials';
import Footer from '../component/Footer';
// Vendors
// Vendors






const Home = () => {
  

  return (
    <div  className='scroll-container' >
     

      <Heroic />
      <Features />
      <HowItWorks />
      <Templates />
      <Testimonials />
      <Footer />
    
    </div>
   
  );
};

export default Home;
