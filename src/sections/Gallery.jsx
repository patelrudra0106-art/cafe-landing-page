import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { cafeData } from '../data/cafeData';

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openLightbox = (index) => {
    setSelectedIndex(index);
    setSelectedImage(cafeData.gallery[index]);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    const newIndex = (selectedIndex + 1) % cafeData.gallery.length;
    setSelectedIndex(newIndex);
    setSelectedImage(cafeData.gallery[newIndex]);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    const newIndex = (selectedIndex - 1 + cafeData.gallery.length) % cafeData.gallery.length;
    setSelectedIndex(newIndex);
    setSelectedImage(cafeData.gallery[newIndex]);
  };

  return (
    <section id="gallery" className="py-24 bg-cafe-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-cafe-charcoal mb-4">The Atmosphere</h2>
          <p className="text-lg text-cafe-charcoal/70 font-light max-w-xl mx-auto">
            A glimpse into our space, our craft, and the moments we share.
          </p>
        </div>

        {/* Editorial Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {cafeData.gallery.map((img, index) => {
            // Create a varied grid layout
            const spanClass = img.size === 'large' 
              ? 'md:col-span-2 md:row-span-2' 
              : img.size === 'medium' 
                ? 'md:col-span-2' 
                : 'md:col-span-1';

            return (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${spanClass} relative rounded-3xl overflow-hidden group cursor-pointer aspect-square md:aspect-auto`}
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Glass overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    View
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              onClick={closeLightbox}
            >
              <X size={28} />
            </button>

            <button 
              className="absolute left-6 text-white/70 hover:text-white p-3 rounded-full bg-white/5 hover:bg-white/20 transition-colors hidden md:block"
              onClick={prevImage}
            >
              <ChevronLeft size={36} />
            </button>

            <motion.img
              key={selectedImage.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />

            <button 
              className="absolute right-6 text-white/70 hover:text-white p-3 rounded-full bg-white/5 hover:bg-white/20 transition-colors hidden md:block"
              onClick={nextImage}
            >
              <ChevronRight size={36} />
            </button>
            
            <div className="absolute bottom-8 left-0 right-0 text-center text-white/60 text-sm">
              {selectedIndex + 1} / {cafeData.gallery.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
