import React, { useEffect, useRef } from 'react'

const Cursor = () => {
    const cursorref = useRef(null)
    let stopTimeout;

  const mousemove = (e) => {
     

      // Move the cursor
      cursorref.current.style.top = `${e.clientY}px`;
      cursorref.current.style.left = `${e.clientX}px`
  }
    
    useEffect(()=>{
        if(!cursorref?.current) return
        window.addEventListener('mousemove',mousemove);
        return()=>{
            window.removeEventListener('mousemove',mousemove)
        }
    },[cursorref])
  return (
    <div ref={cursorref} className='fixed transition-all ease-linear duration-75  z-0 rounded-full pointer-events-none opacity-20  w-90 h-90 blur-xl  bg-blue-600 -translate-x-1/2 -translate-y-1/2' />
  )
}

export default Cursor
