
import React from 'react'
import gsap from 'gsap'
const Button =({children,id=null})=>{
 
// Detect if the device supports hover (i.e., is not a touch device)
const canHover = window.matchMedia('(hover: hover)').matches;

const mouseenter = () => {
    if (!canHover) return;
  
    gsap.to('.mouse', {
        scale: 8.0,
        ease: 'linear',
        duration: 0.1,
        zIndex: id?-1:2
    });
};

const mouseleave = () => {
    if (!canHover) return;
    
    gsap.to('.mouse', {
        scale: 1.0,
        ease: 'circ',
        duration: 0.1,
        x: '-50%',
        y: '-50%',
        delay:0.2,
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
        translateX: lerpX * 30,
        translateY: lerpY * 10
    });
};
  return (
    <div onMouseEnter={mouseenter} onMouseMove={mousemove} onMouseLeave={mouseleave} className='rounded z-[999] hover:bg-transparent transition-all  cursor-pointer px-10  py-4 text-xl font-semibold inline-block text-white bg-blue-600' >
      <div className='relative buttonspan z-[100]  block '>
        {children}
       
        </div>
    </div>
  )
}

export default Button
