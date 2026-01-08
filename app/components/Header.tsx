'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/about', label: 'About', icon: '👤' },
    { href: '/contact', label: 'Contact Us', icon: '📧' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between text-gray-900">
          {/* Logo/Brand */}
          <Link
            href="/"
            className="mr-4 cursor-pointer py-1.5 lg:ml-2 flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-lg bg-linear-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:shadow-lg transition-shadow">
              KT
            </div>
            <span className="text-xl font-bold text-gray-900 hidden sm:block">
              Kazi Tanvir
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <ul className="flex flex-row gap-2 p-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                        isActive
                          ? 'bg-gray-900 text-white shadow-md'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                      }`}
                    >
                      <span className="text-lg">{link.icon}</span>
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex gap-2">
            <a
              href="https://www.linkedin.com/in/kazi-tanvir/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/KaziTanvir"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium text-white bg-linear-to-r from-purple-600 to-indigo-600 rounded-lg hover:shadow-lg transition-all"
            >
              GitHub Profile
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setOpenNav(!openNav)}
            aria-label="Toggle navigation"
          >
            {openNav ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            openNav ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="mb-4 p-0 space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpenNav(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-sm transition-all ${
                      isActive
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span className="text-xl">{link.icon}</span>
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile Action Buttons */}
          <div className="flex flex-col gap-2 pb-4">
            <a
              href="https://www.linkedin.com/in/kazi-tanvir/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-4 py-2.5 text-sm font-medium text-center text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              LinkedIn Profile
            </a>
            <a
              href="https://github.com/KaziTanvir"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-4 py-2.5 text-sm font-medium text-center text-white bg-linear-to-r from-purple-600 to-indigo-600 rounded-lg hover:shadow-lg transition-all"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
