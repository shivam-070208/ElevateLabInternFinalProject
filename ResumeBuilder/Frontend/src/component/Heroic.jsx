import React from 'react'
const Herogif = React.lazy(() => import('../ui/Herogif'));

const Heroic = () => {
  return (
    <div className="relative w-screen min-h-screen  flex flex-col justify-center items-center overflow-hidden">
      {/* Floating AI Animation */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none flex items-center justify-center">
      <React.Suspense fallback={null}>
        <Herogif />
      </React.Suspense>
      </div>
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl px-6 pt-32 pb-20">
      
      </div>
    </div>
  )
}

export default Heroic
