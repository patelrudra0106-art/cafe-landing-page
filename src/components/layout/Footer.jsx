import React from 'react';
import { cafeData } from '../../data/cafeData';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cafe-charcoal text-white pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          
          <div className="md:col-span-1">
            <h3 className="text-2xl font-serif mb-4">{cafeData.cafe.name}</h3>
            <p className="text-white/90 font-light text-sm max-w-xs mb-6">
              {cafeData.cafe.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-6 text-white/80">Explore</h4>
            <ul className="space-y-4 text-white/60 font-light text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Menu</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-6 text-white/80">Visit</h4>
            <ul className="space-y-4 text-white/60 font-light text-sm">
              <li>{cafeData.contact.address}</li>
              <li>{cafeData.contact.hours}</li>
              <li>
                <a href={`tel:${cafeData.contact.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {cafeData.contact.phone}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-6 text-white/80">Connect</h4>
            <ul className="space-y-4 text-white/60 font-light text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-white transition-colors">WhatsApp</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs font-light">
          <p>© {currentYear} {cafeData.cafe.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
