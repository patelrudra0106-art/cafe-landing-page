import React from 'react';
import { motion } from 'framer-motion';
import { cafeData } from '../data/cafeData';
import { GlassCard } from '../components/ui/GlassCard';

export function FeaturedMenu() {
  const featuredItems = cafeData.menu.filter(item => item.featured);

  return (
    <section className="py-24 bg-cafe-beige/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-cafe-charcoal mb-4">Signature Items</h2>
            <p className="text-lg text-cafe-charcoal/70 font-light max-w-xl">
              Curated specialties crafted with passion and precision.
            </p>
          </motion.div>
          
          <motion.a 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            href="#menu"
            className="inline-flex items-center text-cafe-brown font-medium hover:text-cafe-charcoal transition-colors group"
          >
            View Full Menu
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {featuredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="group cursor-pointer relative"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6 shadow-md transition-all duration-500 group-hover:shadow-2xl">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
                
                {/* Floating Glass CTA on Hover */}
                <div className="absolute inset-x-0 bottom-6 px-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                  <GlassCard className="py-4 text-center bg-white/80 font-medium">
                    Order on WhatsApp
                  </GlassCard>
                </div>
              </div>
              
              <div className="px-2">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-serif text-cafe-charcoal">{item.name}</h3>
                  <span className="text-xl font-medium text-cafe-brown">{item.price}</span>
                </div>
                <p className="text-cafe-charcoal/60 font-light line-clamp-2">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
