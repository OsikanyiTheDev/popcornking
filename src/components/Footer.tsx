import React from 'react';
import { Heart, MapPin, Phone, Mail, MessageCircle, Instagram, Facebook } from 'lucide-react';
import { PopcornKingLogo } from './PopcornKingLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#060F1D] border-t border-[#1E3A5F] text-slate-300 pt-16 pb-24 sm:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1E3A5F]">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <PopcornKingLogo size={42} />
              <div>
                <span className="font-display text-2xl font-black text-white tracking-tight leading-none block">
                  POPCORN <span className="text-[#FFC800]">KING</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#FFC800]">
                  Accra, Ghana
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed max-w-sm italic">
              &ldquo;Fresh popcorn. Big moments.&rdquo;
            </p>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Modern African consumer snack & event catering brand. Freshly popped gourmet corn with 6 signature Ghanaian flavours and commercial cart hire for high-energy celebrations.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/233550999008"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#0D203D] hover:bg-[#FF4B3E] text-slate-200 hover:text-white flex items-center justify-center border border-[#1E3A5F] transition-colors"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#0D203D] hover:bg-[#FFC800] text-slate-200 hover:text-[#0A192F] flex items-center justify-center border border-[#1E3A5F] transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#0D203D] hover:bg-[#FFC800] text-slate-200 hover:text-[#0A192F] flex items-center justify-center border border-[#1E3A5F] transition-colors"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display text-xs font-black text-[#FFC800] uppercase tracking-wider">
              Explore Menu
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li><a href="#flavours" className="hover:text-[#FFC800] transition-colors">6 Flavours Menu</a></li>
              <li><a href="#event-calculator" className="hover:text-[#FFC800] transition-colors">Event Calculator</a></li>
              <li><a href="#catering" className="hover:text-[#FFC800] transition-colors">Catering Packages</a></li>
              <li><a href="#experience" className="hover:text-[#FFC800] transition-colors">The Experience</a></li>
              <li><a href="#locations" className="hover:text-[#FFC800] transition-colors">Accra Pop-Up Locations</a></li>
              <li><a href="#gallery" className="hover:text-[#FFC800] transition-colors">Photo Showcase</a></li>
            </ul>
          </div>

          {/* Business & Services */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display text-xs font-black text-[#FFC800] uppercase tracking-wider">
              Catering Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li><a href="#catering" className="hover:text-[#FFC800] transition-colors">Wedding Catering</a></li>
              <li><a href="#catering" className="hover:text-[#FFC800] transition-colors">Birthday Parties</a></li>
              <li><a href="#catering" className="hover:text-[#FFC800] transition-colors">Corporate Summits</a></li>
              <li><a href="#catering" className="hover:text-[#FFC800] transition-colors">Commercial Cart Rental</a></li>
              <li><a href="#catering" className="hover:text-[#FFC800] transition-colors">Custom Branded Packs</a></li>
              <li><a href="#faq" className="hover:text-[#FFC800] transition-colors">FAQ & Support</a></li>
            </ul>
          </div>

          {/* Accra Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-xs font-black text-[#FFC800] uppercase tracking-wider">
              Accra Headquarters
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FFC800] shrink-0 mt-0.5" />
                <span>Accra & Greater Accra Region, Ghana</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FFC800] shrink-0" />
                <a href="tel:+233550999008" className="hover:text-white font-bold">+233 55 099 9008</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FFC800] shrink-0" />
                <a href="mailto:hello@popcornkinggh.com" className="hover:text-white">hello@popcornkinggh.com</a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} POPCORN KING GHANA. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Fresh popcorn. Big moments.</span>
            <Heart className="w-3.5 h-3.5 fill-[#FF4B3E] text-[#FF4B3E]" />
          </p>
        </div>

      </div>
    </footer>
  );
};
