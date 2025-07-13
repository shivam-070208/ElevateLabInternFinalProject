import React from 'react';
import Heoicoverlay from './Heoicoverlay';
import { Herogif } from '../ui';

const Heroic = () => {
  return (
    <div className="w-screen min-h-screen py-20 relative" data-scroll-section>
      {/* Floating AI Animation */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none flex items-center justify-center -z-10">
        <Herogif />
      </div>
      
      {/* Content overlay */}
      <div className="relative -z-10">
        <Heoicoverlay />
      </div>
    </div>
  );
};

export default Heroic;
