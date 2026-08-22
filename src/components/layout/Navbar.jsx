import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cafeData } from '../../data/cafeData';
import { cn } from '../../lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8 md:py-6 flex justify-center"
      >
        <div 
          className={cn(
            "w-full max-w-6xl rounded-full px-6 py-3 md:py-4 flex items-center justify-between transition-all duration-500",
            isScrolled ? "glass-panel bg-white/70 shadow-lg" : "bg-transparent"
          )}
        >
          {/* Logo */}
          <a href="#home" className={cn(
            "text-xl md:text-2xl font-serif font-bold z-50 transition-colors duration-300",
            isScrolled ? "text-cafe-charcoal" : "text-white"
          )}>
            {cafeData.cafe.name}
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-300",
                  isScrolled ? "text-cafe-charcoal/80 hover:text-cafe-charcoal" : "text-white/80 hover:text-white"
                )}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4 z-50">
            <a 
              href="#menu"
              className={cn(
                "hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 shadow-md",
                isScrolled ? "bg-cafe-charcoal text-white hover:bg-black" : "bg-white text-cafe-charcoal hover:bg-cafe-beige"
              )}
            >
              View Menu
            </a>
            <button 
              className={cn(
                "md:hidden p-2 transition-colors duration-300",
                isScrolled ? "text-cafe-charcoal" : "text-white"
              )}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-white/80 flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-serif text-cafe-charcoal hover:text-cafe-amber transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.1, duration: 0.5 }}
                href="#menu"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 px-8 py-4 rounded-full bg-cafe-charcoal text-white text-lg font-medium shadow-xl"
              >
                View Menu
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
