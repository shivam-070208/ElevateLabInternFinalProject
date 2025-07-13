import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../ui/Button';

gsap.registerPlugin(ScrollTrigger);

const Templates = () => {
  const templatesRef = useRef(null);
  const titleRef = useRef(null);
  const templateCardsRef = useRef([]);
  const bgImageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background parallax animation
      gsap.to(bgImageRef.current, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: templatesRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      // Title animation with split text effect
      gsap.fromTo(titleRef.current, 
        { opacity: 0, y: 100, rotationX: 90 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%"
          }
        }
      );

      // Template cards reveal animation
      gsap.fromTo(templateCardsRef.current,
        { opacity: 0, y: 80, rotationY: 45 },
        {
          opacity: 1,
          y: 0,
          rotationY: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: templatesRef.current,
            start: "top 60%",
            end: "bottom 40%"
          }
        }
      );
    }, templatesRef);

    return () => ctx.revert();
  }, []);

  const templates = [
    {
      id: 1,
      name: "Professional",
      description: "Clean and modern design perfect for corporate roles",
      category: "Corporate",
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      name: "Creative",
      description: "Bold and artistic template for creative professionals",
      category: "Design",
      color: "from-pink-500 to-red-500"
    },
    {
      id: 3,
      name: "Minimal",
      description: "Simple and elegant design that focuses on content",
      category: "Classic",
      color: "from-gray-600 to-gray-800"
    },
    {
      id: 4,
      name: "Modern",
      description: "Contemporary layout with eye-catching elements",
      category: "Tech",
      color: "from-green-500 to-teal-600"
    },
    {
      id: 5,
      name: "Executive",
      description: "Professional template for senior-level positions",
      category: "Leadership",
      color: "from-indigo-500 to-blue-700"
    },
    {
      id: 6,
      name: "Academic",
      description: "Structured format ideal for academic positions",
      category: "Education",
      color: "from-yellow-500 to-orange-600"
    }
  ];

  return (
    <section ref={templatesRef} className="min-h-screen bg-gray-900 relative overflow-hidden py-20 px-4" data-scroll-section>
      {/* Background with parallax effect */}
      <div
        ref={bgImageRef}
        className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black opacity-50"
        data-scroll
        data-scroll-speed="-0.5"
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Choose Your <span className="text-blue-400">Template</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Select from our collection of professionally designed templates
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <div
              key={template.id}
              ref={el => templateCardsRef.current[index] = el}
              className="group cursor-pointer"
              data-scroll
              data-scroll-speed="0.3"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 group-hover:scale-105">
                {/* Template Preview */}
                <div className={`h-48 rounded-lg bg-gradient-to-br ${template.color} mb-4 flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-4 bg-white/20 rounded border border-white/30">
                    <div className="p-3 space-y-1">
                      <div className="h-2 bg-white/40 rounded w-3/4"></div>
                      <div className="h-1 bg-white/30 rounded w-1/2"></div>
                      <div className="h-1 bg-white/30 rounded w-2/3"></div>
                      <div className="mt-2 space-y-1">
                        <div className="h-1 bg-white/25 rounded w-full"></div>
                        <div className="h-1 bg-white/25 rounded w-4/5"></div>
                        <div className="h-1 bg-white/25 rounded w-3/4"></div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 bg-black/20 text-white text-xs px-2 py-1 rounded">
                    {template.category}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{template.name}</h3>
                <p className="text-gray-300 mb-4">{template.description}</p>
                
                <div className="flex justify-between items-center">
                  <span className="text-blue-400 font-semibold">Preview</span>
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center group-hover:bg-blue-400 transition-colors">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button>View All Templates</Button>
        </div>
      </div>
    </section>
  );
};

export default Templates;
