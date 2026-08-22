import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { cafeData } from '../data/cafeData';
import { GlassCard } from '../components/ui/GlassCard';

export function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % cafeData.reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + cafeData.reviews.length) % cafeData.reviews.length);
  };

  return (
    <section id="reviews" className="py-24 bg-cafe-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-cafe-charcoal mb-4">Guest Stories</h2>
            <p className="text-lg text-cafe-charcoal/70 font-light max-w-xl">
              Don't just take our word for it. Here's what our community has to say.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-4"
          >
            <button 
              onClick={prevReview}
              className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-cafe-charcoal hover:bg-black/5 transition-colors"
            >
              <ChevronLeft size={24} strokeWidth={1.5} />
            </button>
            <button 
              onClick={nextReview}
              className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-cafe-charcoal hover:bg-black/5 transition-colors"
            >
              <ChevronRight size={24} strokeWidth={1.5} />
            </button>
          </motion.div>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={containerRef}>
            <motion.div 
              className="flex gap-6 md:gap-8"
              animate={{ 
                x: `calc(-${currentIndex * 100}% - ${currentIndex * (window.innerWidth >= 768 ? 32 : 24)}px)` 
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ width: 'max-content' }}
            >
              {cafeData.reviews.map((review, idx) => (
                <div key={review.id} className="w-[85vw] md:w-[400px] lg:w-[450px] shrink-0">
                  <GlassCard className="p-8 md:p-10 h-full flex flex-col border border-black/5 bg-white/60">
                    <div className="flex gap-1 mb-6 text-cafe-amber">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={18} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-lg text-cafe-charcoal leading-relaxed mb-8 flex-grow">
                      "{review.text}"
                    </p>
                    <div className="flex items-center gap-4 mt-auto">
                      <img 
                        src={review.avatar} 
                        alt={review.name} 
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <span className="font-medium text-cafe-charcoal">{review.name}</span>
                    </div>
                  </GlassCard>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
