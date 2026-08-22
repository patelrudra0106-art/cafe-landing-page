import React, { useEffect, useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { FeaturedMenu } from './sections/FeaturedMenu';
import { FullMenu } from './sections/FullMenu';
import { SpecialOffer } from './sections/SpecialOffer';
import { Experience } from './sections/Experience';
import { Gallery } from './sections/Gallery';
import { Features } from './sections/Features';
import { Reviews } from './sections/Reviews';
import { LocationContact } from './sections/LocationContact';
import { SocialGallery } from './sections/SocialGallery';
import { Footer } from './components/layout/Footer';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [showWhatsAppPopup, setShowWhatsAppPopup] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-cafe-white font-sans overflow-x-hidden selection:bg-cafe-brown selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <FeaturedMenu />
        <SpecialOffer />
        <FullMenu />
        <Experience />
        <Gallery />
        <Features />
        <Reviews />
        <LocationContact />
        <SocialGallery />
      </main>

      <Footer />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4 items-end">
        {/* WhatsApp Button Wrapper */}
        <div className="relative flex items-center justify-center">
          
          {/* WhatsApp Popup */}
          <AnimatePresence>
            {showWhatsAppPopup && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                transition={{ duration: 0.3, delay: 1 }}
                className="absolute right-full mr-6 bottom-1 w-72 bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-4 pr-8 pointer-events-auto border border-gray-100"
              >
                <button 
                  onClick={() => setShowWhatsAppPopup(false)}
                  className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-full p-1.5 transition-colors"
                  aria-label="Close"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
                <h4 className="text-[#1A202C] font-semibold text-[15px] mb-1.5 flex items-center gap-1.5">
                  Need help ordering? <span className="animate-wave inline-block origin-[70%_70%]">👋</span>
                </h4>
                <p className="text-gray-500 text-[13px] leading-snug">
                  Chat with our team on WhatsApp
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Pulsing rings */}
          <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-20 animate-ping" style={{ animationDuration: '2.5s' }}></div>
          <div className="absolute inset-[-8px] rounded-full bg-[#25D366] opacity-10 animate-ping" style={{ animationDuration: '2.5s', animationDelay: '1.25s' }}></div>

          {/* WhatsApp Button */}
          <motion.a
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            href="https://wa.me/916352813895?text=Hello%20Brew%20%26%20Bean!%20I%20would%20like%20to%20know%20more."
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.3)] hover:bg-[#128C7E] hover:scale-110 transition-all duration-300 flex items-center justify-center group relative z-10"
            aria-label="Chat on WhatsApp"
            onClick={() => setShowWhatsAppPopup(false)}
          >
            <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
            </svg>
            {!showWhatsAppPopup && (
              <span className="absolute right-full mr-4 whitespace-nowrap bg-cafe-charcoal text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
                Chat with us
              </span>
            )}
          </motion.a>
        </div>

        {/* Back to top button */}
        <AnimatePresence>
          {showTopBtn && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              onClick={scrollToTop}
              className="p-3.5 rounded-full bg-cafe-charcoal text-white shadow-lg hover:bg-black transition-colors flex items-center justify-center"
              aria-label="Scroll to top"
            >
              <ChevronUp size={24} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
