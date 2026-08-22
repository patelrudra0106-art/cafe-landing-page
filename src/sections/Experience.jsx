import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../components/ui/GlassCard';

export function Experience() {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <motion.div 
        initial={{ y: 0 }}
        whileInView={{ y: -50 }}
        viewport={{ margin: "-100px" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 h-[120%]"
      >
        <img 
          src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&q=80&w=2000" 
          alt="Cafe Interior Experience" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <GlassCard dark className="px-8 py-12 md:px-16 md:py-16 max-w-2xl bg-black/50 backdrop-blur-xl border-white/10 text-white">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">Your New Favorite Corner</h2>
            <p className="text-lg md:text-xl text-white font-light mb-10 leading-relaxed">
              Slow mornings, good conversations, and carefully crafted coffee. We've designed every detail to make you feel right at home.
            </p>
            <a 
              href="#gallery"
              className="inline-flex px-8 py-4 rounded-full bg-white text-cafe-charcoal font-medium hover:bg-cafe-beige transition-colors"
            >
              Discover Our Space
            </a>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
