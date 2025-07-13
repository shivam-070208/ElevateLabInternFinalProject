import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
const Cursor = () => {
    const cursorref = useRef(null)
    

  const mousemove = (e) => {
     

    gsap.to('.mouse',{
        left:e.clientX,
        top:e.clientY
    })
  }
    
    useEffect(()=>{
        if(!cursorref?.current) return
        window.addEventListener('mousemove',mousemove);
        return()=>{
            window.removeEventListener('mousemove',mousemove)
        }
    },[cursorref])
  return (
    <div ref={cursorref} className='fixed -translate-x-1/2 -translate-y-1/2  mouse backdrop-blur-3xl z-100 transition-all ease-linear duration-75  rounded-full pointer-events-none w-4 h-4  bg-blue-600 origin-center' />
  )
}

export default Cursor
