import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cafeData } from '../data/cafeData';
import { GlassCard } from '../components/ui/GlassCard';

export function FullMenu() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredMenu = activeCategory === 'All' 
    ? cafeData.menu 
    : cafeData.menu.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-cafe-white min-h-[800px]">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-cafe-charcoal mb-6">Our Menu</h2>
          
          {/* Glass Filter Pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {cafeData.menuCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category 
                    ? 'bg-cafe-charcoal text-white shadow-md' 
                    : 'bg-white/60 text-cafe-charcoal/70 hover:bg-white hover:shadow-sm border border-black/5'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          <AnimatePresence>
            {filteredMenu.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="flex gap-6 group cursor-pointer"
              >
                {/* Optional small image thumbnail - leaving space if want to add later, or just rely on layout */}
                <div className="flex-1 border-b border-black/5 pb-6 group-hover:border-cafe-brown/30 transition-colors">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-xl font-serif text-cafe-charcoal flex items-center gap-2">
                      {item.name}
                      {item.isVeg && (
                        <span className="inline-block w-2.5 h-2.5 rounded-full border border-green-600 bg-green-100 flex-shrink-0" title="Vegetarian" />
                      )}
                    </h3>
                    <span className="text-lg font-medium text-cafe-brown shrink-0 ml-4">{item.price}</span>
                  </div>
                  <p className="text-cafe-charcoal/60 font-light text-sm pr-12">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
      </div>
    </section>
  );
}
