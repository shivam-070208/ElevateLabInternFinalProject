import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const testimonialsRef = useRef([]);
  const floatingElementsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating background elements
      gsap.to(floatingElementsRef.current, {
        y: -30,
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: "power2.inOut",
        stagger: 0.2
      });

      // Title animation
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 100, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%"
          }
        }
      );

      // Testimonials animation
      testimonialsRef.current.forEach((testimonial, index) => {
        gsap.fromTo(testimonial,
          { 
            opacity: 0, 
            y: 100,
            rotationY: 45,
            scale: 0.8
          },
          {
            opacity: 1,
            y: 0,
            rotationY: 0,
            scale: 1,
            duration: 1.2,
            delay: index * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: testimonial,
              start: "top 85%",
              end: "bottom 15%"
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Manager",
      company: "Tech Corp",
      image: "👩‍💼",
      rating: 5,
      text: "This resume builder transformed my career! The AI suggestions were spot-on and helped me land my dream job. The templates are professional and modern.",
      gradient: "from-pink-500 to-purple-600"
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      company: "StartupXYZ",
      image: "👨‍💻",
      rating: 5,
      text: "As a developer, I appreciate clean, efficient tools. This platform delivered exactly that - intuitive interface and great results. Highly recommended!",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      name: "Emily Rodriguez",
      role: "UX Designer",
      company: "Design Studio",
      image: "👩‍🎨",
      rating: 5,
      text: "The design quality is exceptional! The templates are beautiful and the customization options are perfect. Got 3 interview calls in the first week!",
      gradient: "from-green-500 to-teal-600"
    },
    {
      name: "David Kim",
      role: "Project Manager",
      company: "Global Inc",
      image: "👨‍💼",
      rating: 5,
      text: "The step-by-step process made resume building so easy. The AI enhancement feature really helped improve my content. Worth every penny!",
      gradient: "from-orange-500 to-red-600"
    },
    {
      name: "Lisa Wang",
      role: "Data Scientist",
      company: "Analytics Co",
      image: "👩‍🔬",
      rating: 5,
      text: "Impressed by the attention to detail and ATS optimization. My resume now looks professional and passes all screening systems effortlessly.",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      name: "James Brown",
      role: "Sales Director",
      company: "Enterprise LLC",
      image: "👨‍💼",
      rating: 5,
      text: "The variety of templates and customization options are amazing. Created multiple versions for different roles - landed my ideal position!",
      gradient: "from-indigo-500 to-blue-600"
    }
  ];

  return (
    <section ref={sectionRef} className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-4 relative overflow-hidden" data-scroll-section>
      {/* Floating Background Elements */}
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          ref={el => floatingElementsRef.current[index] = el}
          className="absolute w-20 h-20 bg-blue-200 rounded-full opacity-20 blur-sm"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${index * 0.5}s`
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={titleRef} className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            What Our <span className="text-blue-600">Users Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of professionals who've transformed their careers with our resume builder
          </p>
          
          {/* Stats */}
          <div className="flex justify-center items-center space-x-8 mt-10">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">50K+</div>
              <div className="text-sm text-gray-500">Resumes Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">98%</div>
              <div className="text-sm text-gray-500">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">4.9/5</div>
              <div className="text-sm text-gray-500">User Rating</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={el => testimonialsRef.current[index] = el}
              className="group"
              data-scroll
              data-scroll-speed="0.1"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 h-full">
                {/* Header */}
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${testimonial.gradient} flex items-center justify-center text-2xl mr-4`}>
                    {testimonial.image}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    <p className="text-gray-500 text-xs">{testimonial.company}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>

                {/* Quote Icon */}
                <div className="flex justify-end">
                  <svg className="w-8 h-8 text-blue-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-3 bg-white px-8 py-4 rounded-full shadow-lg">
            <span className="text-gray-700 font-semibold">Join our success stories</span>
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
