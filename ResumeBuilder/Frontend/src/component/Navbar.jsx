import React, { useState } from 'react';
import Logo from '../ui/Logo';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="relative z-50">
      {/* Top Navbar */}
      <div className="w-full px-4 md:px-8 flex justify-between items-center py-5">
        <div className="text-4xl">
          <Logo />
        </div>

        {/* Hamburger */}
        <div
          onClick={() => setShowNav(!showNav)}
          className={`z-50 flex flex-col items-center justify-center origin-center space-y-1 cursor-pointer transition-all ${
            showNav ? 'rotate-90' : ''
          }`}
        >
          {[-1, 0, 1].map((item) => (
            <div
              key={item}
              className="bg-[#0e75ee] w-8 h-0.5 transition-all origin-center"
              style={{
                transform: showNav
                  ? `rotate(${item * 45}deg) translateY(${item * -8}px)`
                  : 'none',
                opacity: showNav ? Math.abs(item) * 1.0: 1,
              }}
            />
          ))}
        </div>
      </div>

      {/* Side Nav Panel */}
      <div
        className={`fixed z-49 top-0 right-0 h-full w-64 bg-white shadow-2xl transition-transform duration-500 ease-in-out p-6 flex flex-col gap-6 pt-20 ${
          showNav ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className="text-xl font-semibold text-gray-700 hover:text-[#0e75ee] transition-colors"
            onClick={() => setShowNav(false)}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Optional Overlay */}
      {showNav && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={() => setShowNav(false)}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
