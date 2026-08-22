import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Leaf, Heart, Home } from 'lucide-react';
import { cafeData } from '../data/cafeData';
import { GlassCard } from '../components/ui/GlassCard';

const iconMap = {
  Coffee: <Coffee size={32} strokeWidth={1.5} />,
  Leaf: <Leaf size={32} strokeWidth={1.5} />,
  Heart: <Heart size={32} strokeWidth={1.5} />,
  Home: <Home size={32} strokeWidth={1.5} />
};

export function Features() {
  return (
    <section className="py-24 bg-cafe-beige/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cafeData.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard className="p-8 h-full flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-500 bg-white/50">
                <div className="w-16 h-16 rounded-full bg-cafe-brown/5 text-cafe-brown flex items-center justify-center mb-6">
                  {iconMap[feature.icon]}
                </div>
                <h3 className="text-xl font-serif text-cafe-charcoal mb-3">{feature.title}</h3>
                <div className="w-12 h-px bg-cafe-brown/20 mt-auto" />
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
