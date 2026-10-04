import React from 'react';
import { Heart, MapPin, Phone, Mail, MessageCircle, Instagram, Facebook } from 'lucide-react';
import { PopcornKingLogo } from './PopcornKingLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0D0D0D] border-t border-neutral-800 text-neutral-300 relative">
      {/* Golden Contact Banner matching the physical cart's bottom strip */}
      <div className="bg-[#F5B800] text-black py-4 px-4 sm:px-8 border-b border-[#FFC700] shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-black">
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 fill-black" />
            <a
              href="https://wa.me/233550999008"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg sm:text-xl font-black hover:underline tracking-wide"
            >
              +233 550 999 008
            </a>
          </div>
          <div className="flex items-center gap-4 text-sm sm:text-base">
            <a
              href="https://instagram.com/popcornkingghana"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:underline"
            >
              <Instagram className="w-4 h-4" />
              <span>@popcornkingghana</span>
            </a>
            <span className="text-black/50">|</span>
            <span className="font-script text-lg sm:text-xl">fresh Popcorn. Big Moments!!!</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 sm:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <PopcornKingLogo size="lg" showText={true} />

            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-sm pt-1">
              Ghana's premier gourmet popcorn & live cart catering brand. Freshly popped daily with 7 signature flavours and high-output heated glass kettle carts for weddings, corporate summits, and celebrations across Accra.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/233550999008"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-neutral-900 hover:bg-[#F5B800] text-white hover:text-black flex items-center justify-center border border-neutral-800 transition-colors shadow-xs"
                title="WhatsApp Hotline"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://instagram.com/popcornkingghana"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-neutral-900 hover:bg-[#F5B800] text-white hover:text-black flex items-center justify-center border border-neutral-800 transition-colors shadow-xs"
                title="Instagram: @popcornkingghana"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61593377867403"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-neutral-900 hover:bg-[#F5B800] text-white hover:text-black flex items-center justify-center border border-neutral-800 transition-colors shadow-xs"
                title="Facebook: Popcorn King Ghana"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display text-xs font-black text-[#F5B800] uppercase tracking-wider">
              Explore Menu
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
              <li><a href="#flavours" className="hover:text-[#F5B800] transition-colors">7 Signature Flavours</a></li>
              <li><a href="#event-calculator" className="hover:text-[#F5B800] transition-colors">Event Calculator</a></li>
              <li><a href="#catering" className="hover:text-[#F5B800] transition-colors">Live Cart Catering</a></li>
              <li><a href="#experience" className="hover:text-[#F5B800] transition-colors">The King Experience</a></li>
              <li><a href="#locations" className="hover:text-[#F5B800] transition-colors">Accra Pickup Hubs</a></li>
              <li><a href="#gallery" className="hover:text-[#F5B800] transition-colors">Photo Showcase</a></li>
            </ul>
          </div>

          {/* Business & Services */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display text-xs font-black text-[#F5B800] uppercase tracking-wider">
              Event Catering
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
              <li><a href="#catering" className="hover:text-[#F5B800] transition-colors">Wedding Receptions</a></li>
              <li><a href="#catering" className="hover:text-[#F5B800] transition-colors">Private Parties</a></li>
              <li><a href="#catering" className="hover:text-[#F5B800] transition-colors">Corporate VIP Summits</a></li>
              <li><a href="#catering" className="hover:text-[#F5B800] transition-colors">Commercial Cart Hire</a></li>
              <li><a href="#catering" className="hover:text-[#F5B800] transition-colors">Branded Party Packs</a></li>
              <li><a href="#faq" className="hover:text-[#F5B800] transition-colors">FAQ & Support</a></li>
            </ul>
          </div>

          {/* Accra Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-xs font-black text-[#F5B800] uppercase tracking-wider">
              Accra Headquarters
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-neutral-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F5B800] shrink-0 mt-0.5" />
                <span>Accra & Greater Accra Region, Ghana</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#F5B800] shrink-0" />
                <a href="tel:+233550999008" className="hover:text-white font-bold">+233 550 999 008</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#F5B800] shrink-0" />
                <a href="mailto:jillskillion@gmail.com" className="hover:text-white">jillskillion@gmail.com</a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
          <p>© {new Date().getFullYear()} POPCORN KING GHANA. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span className="font-script text-base text-white">fresh Popcorn. Big Moments!!!</span>
            <Heart className="w-3.5 h-3.5 fill-[#F5B800] text-[#F5B800]" />
          </p>
        </div>

      </div>
    </footer>
  );
};
