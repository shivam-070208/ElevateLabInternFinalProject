
import React from 'react'
import gsap from 'gsap'
const Button =({children})=>{
 
// Detect if the device supports hover (i.e., is not a touch device)
const canHover = window.matchMedia('(hover: hover)').matches;

const mouseenter = () => {
    if (!canHover) return;
  
    gsap.to('.mouse', {
        scale: 8.0,
        ease: 'linear',
        duration: 0.1,
        zIndex: -1
    });
};

const mouseleave = (e) => {
    if (!canHover) return;
    
    gsap.to('.mouse', {
        scale: 1.0,
        ease: 'circ',
        duration: 0.1,
        x: '-50%',
        y: '-50%',
        zIndex: 999
    });
    gsap.to('.buttonspan', {
        translateX: 0,
        translateY: 0,
        ease: 'elastic.inOut'
    });
};

const mousemove = (e) => {
    if (!canHover) return;
    const elm = e.target;
    const rect = elm.getBoundingClientRect();
    const endY = rect.top + rect.height / 2;
    const lerpY = (e.clientY - endY) / rect.height;
    const endX = rect.left + rect.width / 2;
    const lerpX = (e.clientX - endX) / rect.width;

    gsap.to('.buttonspan', {
        translateX: lerpX * 50,
        translateY: lerpY * 40
    });
};
  return (
    <div onMouseEnter={mouseenter} onMouseMove={mousemove} onMouseLeave={mouseleave} className='rounded  hover:bg-transparent transition-all  cursor-pointer px-8  py-4 text-xl font-semibold text-white bg-blue-600' >
      <div className='relative buttonspan z-100 block '>
        {children}
       
        </div>
    </div>
  )
}

export default Button
