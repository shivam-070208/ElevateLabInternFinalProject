import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../ui/Button';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const ctaRef = useRef(null);
  const contentRef = useRef(null);
  const wavesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animated waves
      wavesRef.current.forEach((wave, index) => {
        gsap.to(wave, {
          x: -100,
          duration: 8 + index * 2,
          repeat: -1,
          ease: "none"
        });
      });

      // CTA section animation
      gsap.fromTo(ctaRef.current,
        { opacity: 0, y: 80, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 80%",
            end: "bottom 20%"
          }
        }
      );

      // Footer content animation
      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 90%",
            end: "bottom 10%"
          }
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const footerLinks = {
    product: [
      { name: "Templates", href: "#" },
      { name: "Features", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Examples", href: "#" }
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Live Chat", href: "#" }
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
      { name: "Partners", href: "#" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "GDPR", href: "#" }
    ]
  };

  const socialLinks = [
    { name: "Twitter", icon: "🐦", href: "#" },
    { name: "LinkedIn", icon: "💼", href: "#" },
    { name: "Facebook", icon: "📘", href: "#" },
    { name: "Instagram", icon: "📸", href: "#" }
  ];

  return (
    <footer ref={footerRef} className="bg-gray-900 relative overflow-hidden" data-scroll-section>
      {/* Animated Background Waves */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            ref={el => wavesRef.current[index] = el}
            className="absolute w-full h-full opacity-10"
            style={{
              background: `linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.1), transparent)`,
              transform: `translateX(${index * 100}px) translateY(${index * 20}px)`,
              clipPath: `polygon(0 ${20 + index * 10}%, 100% ${30 + index * 10}%, 100% ${70 + index * 10}%, 0 ${60 + index * 10}%)`
            }}
          />
        ))}
      </div>

      {/* CTA Section */}
      <div ref={ctaRef} className="relative z-10 text-center py-20 px-4">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
          Ready to Build Your <span className="text-blue-400">Dream Resume?</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
          Join thousands of professionals who've transformed their careers with our AI-powered resume builder
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button>Start Building Now</Button>
          <button className="px-8 py-4 text-xl font-semibold text-blue-400 border-2 border-blue-400 rounded hover:bg-blue-400 hover:text-white transition-all duration-300">
            View Templates
          </button>
        </div>

        {/* Trust indicators */}
        <div className="flex justify-center items-center space-x-8 mt-16 text-gray-400">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span>SSL Secured</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span>GDPR Compliant</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <span>24/7 Support</span>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div ref={contentRef} className="relative z-10 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">ResumeBuilder</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Empowering professionals worldwide to create outstanding resumes that open doors to new opportunities.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-xl hover:bg-blue-600 transition-colors duration-300 group"
                  >
                    <span className="group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 mt-16 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 ResumeBuilder. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 mt-4 md:mt-0">
                <span className="text-gray-400 text-sm">Made with ❤️ for job seekers</span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-400 text-sm">All systems operational</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
