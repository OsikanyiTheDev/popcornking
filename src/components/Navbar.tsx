import React, { useState, useEffect } from 'react';
import { ShoppingBag, Phone, Menu, X, Sparkles, MessageCircle, Calendar } from 'lucide-react';
import { CartItem } from '../types';
import { PopcornKingLogo } from './PopcornKingLogo';

interface NavbarProps {
  cartItems: CartItem[];
  onOpenCart: () => void;
  onOpenBooking: () => void;
  onOpenPhysicalMenu?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartItems, onOpenCart, onOpenBooking, onOpenPhysicalMenu }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Flavours', href: '#flavours' },
    { label: 'Catering', href: '#catering' },
    { label: 'Locations', href: '#locations' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      {/* Top Banner with Brand Royalty Gold & Navy Accent */}
      <div className="bg-[#FFC800] text-[#0A192F] text-xs sm:text-sm font-bold py-1.5 px-4 text-center flex items-center justify-center gap-2 tracking-wide border-b border-[#FFC800]/40 shadow-sm">
        <Sparkles className="w-4 h-4 shrink-0 fill-[#0A192F]" />
        <span>
          <strong>POPCORN KING ACCRA</strong> • <em>&ldquo;Fresh popcorn. Big moments.&rdquo;</em> • Live Cart Catering & Retail Packs
        </span>
        <a 
          href="https://wa.me/233550999008?text=Hello%20Popcorn%20King,%20I%20would%20like%20to%20order%20popcorn%20or%20book%20an%20event!" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-1 font-extrabold text-[#0A192F] hover:text-[#FF4B3E] underline ml-2 transition-colors"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-[#0A192F]" /> WhatsApp: +233 55 099 9008
        </a>
      </div>

      {/* Main Nav Bar (Mid-Night Navy `#0A192F` background with gold border accent) */}
      <div className={`transition-all duration-300 ${isScrolled ? 'bg-[#0A192F]/95 backdrop-blur-md shadow-2xl shadow-black/60 border-b border-[#1E3A5F] py-2.5' : 'bg-[#0A192F]/85 backdrop-blur-sm py-3.5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo with exact Popcorn King Shield Emblem */}
          <a href="#" className="flex items-center group focus:outline-none">
            <PopcornKingLogo size="md" showText={true} />
          </a>

          {/* Desktop Navigation Links - Clean, uncluttered 5 core items */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-slate-200 hover:text-[#FFC800] transition-colors duration-150 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 sm:px-3.5 sm:py-2 rounded-xl bg-[#0D203D] border border-[#1E3A5F] text-slate-200 hover:text-[#FFC800] hover:border-[#FFC800]/50 transition-all flex items-center gap-2 shadow-sm"
              aria-label="View shopping cart"
            >
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFC800]" />
              <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider">Cart</span>
              {totalCartCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-[#FF4B3E] text-white font-black text-xs flex items-center justify-center animate-bounce shadow-md">
                  {totalCartCount}
                </span>
              )}
            </button>

            {/* Electric Coral CTA: Book Event */}
            <button
              onClick={onOpenBooking}
              className="hidden sm:inline-flex items-center gap-2 bg-[#FF4B3E] hover:bg-[#ff3526] text-white font-black px-4 py-2 rounded-xl shadow-lg shadow-[#FF4B3E]/30 text-xs sm:text-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0 uppercase tracking-wider"
            >
              <Calendar className="w-4 h-4" />
              <span>Book for Event</span>
            </button>

            {/* WhatsApp Direct Order Button */}
            <a
              href="https://wa.me/233550999008?text=Hello%20Popcorn%20King,%20I%20would%20like%20to%20order%20fresh%20popcorn!"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 bg-[#FFC800] hover:bg-[#e6b400] text-[#0A192F] font-black px-3.5 py-2 rounded-xl text-xs shadow-md transition-all uppercase tracking-wider"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-[#0A192F]" />
              <span>Order Fresh</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-[#0D203D] text-slate-200 hover:text-white border border-[#1E3A5F]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A192F] border-b border-[#1E3A5F] px-6 py-6 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-200 hover:text-[#FFC800] py-2 border-b border-[#1E3A5F]/40 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-[#FFC800]">→</span>
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              {onOpenPhysicalMenu && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenPhysicalMenu();
                  }}
                  className="w-full bg-[#0D203D] hover:bg-[#1E3A5F] border border-[#FFC800]/40 text-[#FFC800] font-bold py-2.5 rounded-xl text-center flex items-center justify-center gap-2 text-sm"
                >
                  <span>📄 View Official Printed Menu & Flyers</span>
                </button>
              )}

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-[#FF4B3E] hover:bg-[#ff3526] text-white font-black py-3 rounded-xl text-center shadow-lg uppercase tracking-wider text-sm flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Event Catering</span>
              </button>

              <a
                href="https://wa.me/233550999008?text=Hello%20Popcorn%20King,%20I%20want%20to%20order%20fresh%20popcorn!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#FFC800] text-[#0A192F] font-black py-3 rounded-xl text-center flex items-center justify-center gap-2 shadow-lg text-sm uppercase tracking-wider"
              >
                <MessageCircle className="w-4 h-4 fill-[#0A192F]" />
                <span>Order on WhatsApp (+233 55 099 9008)</span>
              </a>

              <a
                href="tel:+233550999008"
                className="w-full bg-[#0D203D] border border-[#1E3A5F] text-slate-200 font-medium py-2.5 rounded-xl text-center flex items-center justify-center gap-2 text-sm"
              >
                <Phone className="w-4 h-4 text-[#FFC800]" />
                <span>Call Us Direct (+233 55 099 9008)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
