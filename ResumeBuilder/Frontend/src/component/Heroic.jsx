import React from 'react'
import Heoicoverlay from './Heoicoverlay';
const Herogif = React.lazy(() => import('../ui/Herogif'));

const Heroic = () => {
  return (
    <div className=" w-screen min-h-screen  py-20">
      {/* Floating AI Animation */}
      <div className="absolute top-0 left-0 -z-10 w-full h-full pointer-events-none flex items-center justify-center">
      <React.Suspense fallback={null}>
        <Herogif />
      </React.Suspense>
      </div>
     
     
      <Heoicoverlay />
     
    </div>
  )
}

export default Heroic
