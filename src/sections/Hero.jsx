import React from 'react';
import { motion } from 'framer-motion';
import { cafeData } from '../data/cafeData';
import { GlassCard } from '../components/ui/GlassCard';

export function Hero() {
  return (
    <section id="home" className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=2000" 
          alt="Cafe Interior" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-16">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <GlassCard dark className="inline-flex px-4 py-1.5 rounded-full text-xs md:text-sm font-medium tracking-wide">
            {cafeData.contact.hours}
          </GlassCard>
        </motion.div>
        
        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white max-w-4xl leading-tight mb-8"
        >
          {cafeData.cafe.tagline}
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-white/80 max-w-2xl font-light mb-12"
        >
          {cafeData.cafe.description}
        </motion.p>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6"
        >
          <a 
            href="#menu"
            className="px-8 py-4 rounded-full bg-white text-cafe-charcoal font-medium hover:bg-cafe-beige transition-colors text-lg"
          >
            Explore Menu
          </a>
          <a 
            href="#contact"
            className="px-8 py-4 rounded-full glass-panel-dark text-white font-medium hover:bg-white/20 transition-colors text-lg"
          >
            Visit Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
