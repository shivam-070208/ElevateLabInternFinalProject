import React from 'react'

const Herogif = () => {
  return (
    <div className='w-full relative will-change-transform transform-3d perspective-distant h-full origin-center  '>
   {Array.from({ length: 20 }).map((_, index) => (
  <div
    key={index}
    className='w-[40vw] h-[40vw] opacity-10 blur-xl  bg-gradient-to-br from-red-400 via-blue-500 to-indigo-500 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 origin-center'
    style={{
      transform: `rotateX(${index * 8}deg) rotateY(${index * 35}deg) rotateZ(${index * 60}deg)`,
      animationName: 'heroic',
      animationIterationCount: 'infinite',
      animationDelay: `${index * 0.3}s`,
      animationDuration: `${6 + index * 2}s`,
    }}
  />
))}

    </div>
  )
}

export default Herogif
