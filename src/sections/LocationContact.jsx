import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { cafeData } from '../data/cafeData';
import { GlassCard } from '../components/ui/GlassCard';

export function LocationContact() {
  return (
    <section id="contact" className="py-24 bg-cafe-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-cafe-charcoal mb-4">Visit Us</h2>
            <p className="text-lg text-cafe-charcoal/70 font-light mb-12 max-w-md">
              Come by for a coffee, stay for the atmosphere. We'd love to host you.
            </p>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 rounded-full bg-cafe-beige/50 flex items-center justify-center text-cafe-brown shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-cafe-charcoal/60 uppercase tracking-wider mb-1">Address</h4>
                  <p className="text-lg text-cafe-charcoal">{cafeData.contact.address}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 rounded-full bg-cafe-beige/50 flex items-center justify-center text-cafe-brown shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-cafe-charcoal/60 uppercase tracking-wider mb-1">Hours</h4>
                  <p className="text-lg text-cafe-charcoal">{cafeData.contact.hours}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 rounded-full bg-cafe-beige/50 flex items-center justify-center text-cafe-brown shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-cafe-charcoal/60 uppercase tracking-wider mb-1">Phone</h4>
                  <p className="text-lg text-cafe-charcoal">{cafeData.contact.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 rounded-full bg-cafe-beige/50 flex items-center justify-center text-cafe-brown shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-cafe-charcoal/60 uppercase tracking-wider mb-1">Email</h4>
                  <p className="text-lg text-cafe-charcoal">{cafeData.contact.email}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => alert("Get Directions")}
                className="px-8 py-4 rounded-full bg-cafe-charcoal text-white font-medium hover:bg-black transition-colors"
              >
                Get Directions
              </button>
              <button 
                onClick={() => alert("WhatsApp")}
                className="px-8 py-4 rounded-full border border-cafe-charcoal/20 text-cafe-charcoal font-medium hover:bg-cafe-beige transition-colors"
              >
                WhatsApp
              </button>
            </div>
          </motion.div>

          {/* Map Area */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl"
          >
            {/* Map Placeholder Image (in a real app, use Google Maps iframe) */}
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" 
              alt="Map Location" 
              className="w-full h-full object-cover"
            />
            
            {/* Glass Overlay on Map */}
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <GlassCard className="p-8 text-center max-w-sm w-full bg-white/80 backdrop-blur-xl">
                <div className="w-16 h-16 rounded-full bg-cafe-charcoal text-white flex items-center justify-center mx-auto mb-4">
                  <MapPin size={28} />
                </div>
                <h3 className="text-xl font-serif text-cafe-charcoal mb-2">{cafeData.cafe.name}</h3>
                <p className="text-cafe-charcoal/70 font-light mb-6 text-sm">
                  {cafeData.contact.address}
                </p>
                <button 
                  onClick={() => alert("Google Maps")}
                  className="w-full py-3 rounded-xl bg-cafe-brown text-white text-sm font-medium hover:bg-black transition-colors"
                >
                  Google Maps
                </button>
              </GlassCard>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
