import React from 'react';
import { motion } from 'framer-motion';
import { cafeData } from '../data/cafeData';
import { GlassCard } from '../components/ui/GlassCard';

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-cafe-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-cafe-charcoal mb-8 leading-tight">
              More than just <br/>a coffee shop.
            </h2>
            <p className="text-lg text-cafe-charcoal/70 leading-relaxed font-light mb-12">
              {cafeData.cafe.story}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {cafeData.cafe.stats.map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.4 }}
                  className="flex flex-col"
                >
                  <span className="text-3xl font-serif text-cafe-brown mb-2">{stat.value}</span>
                  <span className="text-sm font-medium text-cafe-charcoal/60 uppercase tracking-wider">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image & Glass Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1000" 
                alt="Cafe Interior" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Glass Card */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 max-w-[280px]"
            >
              <GlassCard className="p-6 md:p-8 bg-white/70">
                <h3 className="text-xl font-serif text-cafe-charcoal mb-2">Our Philosophy</h3>
                <p className="text-sm text-cafe-charcoal/70 font-light">
                  Slowing down to appreciate the art of a perfectly brewed cup.
                </p>
              </GlassCard>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
