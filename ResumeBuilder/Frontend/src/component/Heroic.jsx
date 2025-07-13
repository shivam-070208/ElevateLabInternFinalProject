import React from 'react';

import { Herogif } from '../ui';
import Heroicoverlay from './Heoricoverlay';

const Heroic = () => {
  return (
    <div className="w-screen min-h-screen text-center z-0 py-40 relative">
      {/* Floating AI Animation */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none flex items-center justify-center ">
        <Herogif />
      </div>
      
      {/* Content overlay */}
      
        <Heroicoverlay />
     
    </div>
  );
};

export default Heroic;
