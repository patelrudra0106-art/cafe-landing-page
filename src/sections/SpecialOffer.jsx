import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../components/ui/GlassCard';

export function SpecialOffer() {
  return (
    <section className="py-12 md:py-24 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl relative rounded-[2.5rem] overflow-hidden min-h-[500px] md:min-h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=2000" 
            alt="Weekend Dessert" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 flex justify-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-md w-full"
          >
            <GlassCard className="p-8 md:p-12 bg-white/70 backdrop-blur-xl border-white/40 shadow-2xl">
              <span className="text-cafe-amber font-medium tracking-widest uppercase text-sm mb-4 block">Limited Time</span>
              <h2 className="text-4xl font-serif text-cafe-charcoal mb-4 leading-tight">Weekend Coffee & Dessert</h2>
              <p className="text-cafe-charcoal/70 font-light mb-8">
                Enjoy our signature coffee with a freshly prepared basque cheesecake. The perfect pairing for slow weekend afternoons.
              </p>
              <button 
                onClick={() => alert("Reserve a Table")}
                className="w-full py-4 rounded-full bg-cafe-charcoal text-white font-medium hover:bg-black transition-colors"
              >
                Reserve a Table
              </button>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
