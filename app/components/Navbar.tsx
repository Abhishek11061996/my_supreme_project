'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaLinkedin, FaGlobe, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const navbarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY <= 0) {
        setVisible(true);
        setIsScrolled(false);
        return;
      }

      if (currentScrollY > lastScrollY && visible) {
        setVisible(false);
      } else if (currentScrollY < lastScrollY && !visible) {
        setVisible(true);
      }

      setIsScrolled(currentScrollY > 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, visible]);

  return (
    <header 
      ref={navbarRef}
      className={`w-full fixed top-0 z-50 h-[80px] bg-white transition-all duration-300 ${
        isScrolled ? 'shadow-md' : 'shadow-sm'
      } ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center">
            <Image
              src="/assets/images/Supreme_logos.png"
              alt="Supreme Group Logo"
              width={120}
              height={40}
              priority
              className="w-auto h-8 sm:h-10"
            />
          </div>

          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            <button className="h-12 px-4 lg:px-6 rounded-full border border-black bg-[#5CD6FF] text-black font-medium hover:opacity-90 transition-all text-sm lg:text-base">
              Contact Us
            </button>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-black hover:opacity-80 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <button
              className="text-xl text-black hover:opacity-80 transition"
              aria-label="Change Language"
            >
              <FaGlobe />
            </button>
          </div>

          <button
            className="md:hidden text-2xl text-black focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col items-center gap-4">
              <button className="w-full h-12 rounded-full border border-black bg-[#5CD6FF] text-black font-medium hover:opacity-90 transition-all">
                Contact Us
              </button>
              
              <div className="flex items-center justify-center gap-6 py-4">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-black hover:opacity-80 transition"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <button
                  className="text-2xl text-black hover:opacity-80 transition"
                  aria-label="Change Language"
                >
                  <FaGlobe />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;