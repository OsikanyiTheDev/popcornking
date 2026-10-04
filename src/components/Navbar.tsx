import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Sparkles, MessageCircle, Calendar } from 'lucide-react';
import { CartItem } from '../types';
import { PopcornKingLogo } from './PopcornKingLogo';

interface NavbarProps {
  cartItems: CartItem[];
  onOpenCart: () => void;
  onOpenBooking: () => void;
  onOpenPhysicalMenu?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartItems,
  onOpenCart,
  onOpenBooking,
  onOpenPhysicalMenu,
}) => {
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
      {/* Top Banner - Popcorn Gold Strip matching the physical cart's bottom banner */}
      <div className="bg-[#F5B800] text-black text-xs sm:text-sm font-black py-1.5 px-4 text-center flex items-center justify-between sm:justify-center gap-3 tracking-wide shadow-md">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 shrink-0 fill-black" />
          <span>
            POPCORN KING GHANA • <span className="font-script text-sm sm:text-base font-bold">fresh Popcorn. Big Moments!!!</span>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/233550999008?text=Hello%20Popcorn%20King,%20I%20would%20like%20to%20order%20popcorn%20or%20book%20an%20event!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-black text-black hover:underline transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-black" />
            <span>+233 550 999 008</span>
          </a>
          <span className="hidden md:inline text-black/50">|</span>
          <span className="hidden md:inline font-bold">@popcornkingghana</span>
        </div>
      </div>

      {/* Main Nav Bar (Deep Black surface with subtle border and blur) */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0D0D0D]/95 backdrop-blur-md shadow-2xl border-b border-neutral-800 py-2.5'
            : 'bg-[#0D0D0D]/90 backdrop-blur-sm border-b border-neutral-800/80 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo with exact Popcorn King Cart Emblem */}
          <a href="#" className="flex items-center group focus:outline-none">
            <PopcornKingLogo size="md" showText={true} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-white/90 hover:text-[#F5B800] transition-colors duration-150 py-1"
              >
                {link.label}
              </a>
            ))}
            {onOpenPhysicalMenu && (
              <button
                onClick={onOpenPhysicalMenu}
                className="text-xs font-bold text-[#F5B800] hover:text-[#FFC700] border border-[#F5B800]/40 hover:border-[#F5B800] bg-neutral-900 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
              >
                📄 Menu Board
              </button>
            )}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 sm:px-3.5 sm:py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-white hover:text-[#F5B800] hover:border-[#F5B800]/60 transition-all flex items-center gap-2 shadow-xs cursor-pointer"
              aria-label="View shopping cart"
            >
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-[#F5B800]" />
              <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider">Cart</span>
              {totalCartCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-[#F5B800] text-black font-black text-xs flex items-center justify-center animate-bounce shadow-xs">
                  {totalCartCount}
                </span>
              )}
            </button>

            {/* Popcorn Gold CTA: Book Event */}
            <button
              onClick={onOpenBooking}
              className="hidden sm:inline-flex items-center gap-2 bg-[#F5B800] hover:bg-[#FFC700] text-black font-black px-4 py-2 rounded-xl shadow-lg shadow-[#F5B800]/20 text-xs sm:text-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0 uppercase tracking-wider cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Event</span>
            </button>

            {/* WhatsApp Direct Order Button */}
            <a
              href="https://wa.me/233550999008?text=Hello%20Popcorn%20King,%20I%20would%20like%20to%20order%20fresh%20popcorn!"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 bg-neutral-900 hover:bg-neutral-800 text-[#F5B800] border border-[#F5B800]/50 font-black px-3.5 py-2 rounded-xl text-xs transition-all uppercase tracking-wider"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-[#F5B800] text-neutral-900" />
              <span>Order Fresh</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-neutral-900 text-white hover:text-[#F5B800] border border-neutral-800"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0D0D0D] border-b border-neutral-800 px-6 py-6 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-white hover:text-[#F5B800] py-2 border-b border-neutral-800 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-[#F5B800]">→</span>
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              {onOpenPhysicalMenu && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenPhysicalMenu();
                  }}
                  className="w-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-[#F5B800] font-bold py-2.5 rounded-xl text-center flex items-center justify-center gap-2 text-sm"
                >
                  <span>📄 View Official Menu Board</span>
                </button>
              )}

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-[#F5B800] hover:bg-[#FFC700] text-black font-black py-3 rounded-xl text-center shadow-md uppercase tracking-wider text-sm flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Event Catering</span>
              </button>

              <a
                href="https://wa.me/233550999008?text=Hello%20Popcorn%20King,%20I%20want%20to%20order%20fresh%20popcorn!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-neutral-900 border border-[#F5B800] text-[#F5B800] font-black py-3 rounded-xl text-center flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
              >
                <MessageCircle className="w-4 h-4 fill-[#F5B800] text-neutral-900" />
                <span>Order on WhatsApp (+233 550 999 008)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
