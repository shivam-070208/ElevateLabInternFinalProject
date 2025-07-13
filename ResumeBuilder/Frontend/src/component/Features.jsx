import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../ui/Button';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const featuresRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current, 
        { opacity: 0, y: 100 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            toggleActions: "play none none reverse"
          }
        }
      );

      // Cards stagger animation
      gsap.fromTo(cardsRef.current,
        { opacity: 0, y: 60, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: featuresRef.current,
          
            toggleActions: "play none none reverse"
          }
        }
      );
    }, featuresRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      title: "AI-Powered Writing",
      description: "Let our AI help you write compelling content that stands out to employers.",
      icon: "🤖"
    },
    {
      title: "ATS-Friendly",
      description: "Our templates are optimized to pass through Applicant Tracking Systems.",
      icon: "✅"
    },
    {
      title: "Multiple Templates",
      description: "Choose from 20+ professionally designed templates for different industries.",
      icon: "🎨"
    },
    {
      title: "Real-time Preview",
      description: "See your resume come to life as you type with our live preview feature.",
      icon: "👀"
    },
    {
      title: "Export Options",
      description: "Download your resume in PDF, Word, or print-ready formats.",
      icon: "📄"
    },
    {
      title: "24/7 Support",
      description: "Get help anytime with our dedicated customer support team.",
      icon: "🛟"
    }
  ];

  return (
    <section ref={featuresRef} className="min-h-screen  py-20 px-4" data-scroll-section>
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Powerful <span className="text-blue-600">Features</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to create a professional resume that gets you hired
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              data-scroll
              data-scroll-speed="0.5"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button>Start Building Now</Button>
        </div>
      </div>
    </section>
  );
};

export default Features;
