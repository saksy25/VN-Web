import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/VN-LOGO.webp'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/events', label: 'Events' },
    { path: '/initiatives', label: 'Initiatives' },
    { path: '/resources', label: 'Resources' },
    { path: '/team', label: 'Team' },
    { path: '/faculty', label: 'Faculty' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/">
              <img
                className="h-12 w-auto"
                src={logo}
                alt="Logo"
              />
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-end flex-1">
            <div className="flex space-x-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-2 text-base font-title font-medium rounded-md transition-colors ${
                      isActive
                        ? 'text-red-600'
                        : 'text-gray-700 hover:text-red-600'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-red-600 focus:outline-none"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet menu dropdown */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="absolute right-0 w-64 mt-auto pt-2 bg-white shadow-lg rounded-bl-lg">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `block px-4 py-3 text-base font-medium border-b border-gray-100 last:border-b-0 ${
                  isActive
                    ? 'text-red-600 bg-gray-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;