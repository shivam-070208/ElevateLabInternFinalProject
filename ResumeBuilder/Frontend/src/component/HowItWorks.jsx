import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const stepsRef = useRef([]);
  const pathRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title with typewriter effect
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current
          }
        }
      );

      // Animate connecting path
      gsap.fromTo(pathRef.current,
        { strokeDasharray: "0 1000" },
        {
          strokeDasharray: "1000 0",
          duration: 0.8,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
           top:'-40%',
           end:'bottom 30%',
           toggleActions:'play none none reverse'
           
          }
        }
      );

      // Animate steps with stagger
      stepsRef.current.forEach((step, index) => {
        gsap.fromTo(step,
          { 
            opacity: 0, 
            y: 100,
            scale: 0.8,
            rotation: 10
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotation: 0,
            duration: 1,
            delay: index * 0.3,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: step,
              toggleActions:'play none none reverse'
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      number: "01",
      title: "Choose Template",
      description: "Select from our collection of professionally designed templates that match your industry and style.",
      icon: "🎨",
      color: "from-purple-500 to-pink-500"
    },
    {
      number: "02",
      title: "Enter Your Details",
      description: "Fill in your personal information, work experience, education, and skills using our intuitive form.",
      icon: "✏️",
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "03",
      title: "AI Enhancement",
      description: "Our AI analyzes your content and suggests improvements to make your resume more compelling.",
      icon: "🤖",
      color: "from-green-500 to-teal-500"
    },
    {
      number: "04",
      title: "Download & Share",
      description: "Export your polished resume in PDF format and start applying for your dream job.",
      icon: "📄",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section ref={sectionRef} className="min-h-screen bg-white py-20 px-4" >
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            How It <span className="text-blue-600">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create your professional resume in just 4 simple steps
          </p>
        </div>

        <div className="relative">
          {/* Connecting Path */}
          <svg 
            className="absolute top-0 left-0 w-full h-full pointer-events-none hidden lg:block"
            style={{ zIndex: 1 }}
          >
            <path
              ref={pathRef}
              d="M 200 100 Q 400 200 600 100 T 1000 100 Q 1200 200 1400 100"
              stroke="#3b82f6"
              strokeWidth="3"
              fill="none"
              strokeDasharray="0 50"
         
            />
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={el => stepsRef.current[index] = el}
                className="group"
                data-scroll
                data-scroll-speed="0.2"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                  {/* Step Number */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Progress indicator */}
                  <div className="mt-6 flex items-center">
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${step.color} transition-all duration-500 group-hover:w-full`}
                        style={{ width: `${(index + 1) * 25}%` }}
                      />
                    </div>
                    <span className="ml-3 text-sm font-medium text-gray-500">
                      {(index + 1) * 25}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-2 bg-blue-50 px-6 py-3 rounded-full">
            <span className="text-blue-600 font-semibold">Ready to get started?</span>
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
