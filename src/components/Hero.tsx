import React from 'react';
import { Sparkles, MapPin, ArrowRight, Calendar, MessageCircle, Star, Phone, Instagram, Facebook } from 'lucide-react';
import { motion } from 'motion/react';
import { PopcornKingLogo } from './PopcornKingLogo';
import { PopcornImages } from '../assets/images';

interface HeroProps {
  onOrderClick: () => void;
  onBookClick: () => void;
  onOpenPhysicalMenu?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOrderClick, onBookClick, onOpenPhysicalMenu }) => {
  const flavours = [
    'Sweet Caramel',
    'Milkyway Galaxy',
    'Classic Sea Salt',
    'Rich Chocolate',
    'Cinnamon Delight',
    'Vibrant Rainbow',
    'Fiery Ginger',
  ];

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-[#0D0D0D] text-white border-b border-neutral-800">
      {/* Background Chalk & Ambient Golden Glow Texture */}
      <div className="absolute inset-0 bg-chalk-texture pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#F5B800]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#F5B800]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Hand-Drawn Doodle Stars floating in background */}
      <div className="absolute top-36 left-8 sm:left-16 pointer-events-none opacity-40">
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <path d="M22 2L26 15L39 15L29 23L33 36L22 28L11 36L15 23L5 15L18 15Z" stroke="#F5B800" strokeWidth="2" />
        </svg>
      </div>
      <div className="absolute top-44 right-10 sm:right-24 pointer-events-none opacity-30">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 2L19 11L28 11L21 17L24 26L16 20L8 26L11 17L4 11L13 11Z" stroke="#F5B800" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Brand Hierarchy & Story */}
          <div className="lg:col-span-7 flex flex-col items-start text-left order-1">
            
            {/* Location & Accra Hubs Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-[#F5B800] text-xs sm:text-sm font-bold mb-4 shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-[#F5B800] animate-ping" />
              <MapPin className="w-3.5 h-3.5 text-[#F5B800] shrink-0" />
              <span>Accra, Ghana • East Legon · Osu · Airport City · Spintex</span>
            </motion.div>

            {/* Official Cart Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] mb-3"
            >
              Fresh Popcorn. <br />
              <span className="font-script text-5xl sm:text-7xl lg:text-8xl text-[#F5B800] drop-shadow-[0_2px_15px_rgba(245,184,0,0.35)] block -mt-1 sm:-mt-2">
                Big Moments!!!
              </span>
            </motion.h1>

            {/* 3 Pillars from Physical Cart Sides: Event Catering · Private Parties · Pop-Up Vending */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-wrap items-center gap-2 sm:gap-4 my-3 text-sm sm:text-lg font-script font-bold"
            >
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-900/90 border border-neutral-800">
                <span className="text-[#F5B800]">Event</span>
                <span className="text-white">Catering</span>
              </div>
              <span className="text-neutral-600 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-900/90 border border-neutral-800">
                <span className="text-white">Private</span>
                <span className="text-[#F5B800]">Parties</span>
              </div>
              <span className="text-neutral-600 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-900/90 border border-neutral-800">
                <span className="text-[#F5B800]">Pop-Up</span>
                <span className="text-white">Vending</span>
              </div>
            </motion.div>

            {/* Narrative Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed mb-6 font-normal"
            >
              Handcrafted gourmet popcorn popped 100% fresh daily with 7 signature Ghanaian flavours. Hire our commercial live glass cart stations for weddings and corporate galas, or grab retail packs delivered straight to your door across Accra.
            </motion.p>

            {/* Desktop Dual CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex w-full sm:w-auto flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8"
            >
              {/* Primary Popcorn Gold CTA */}
              <button
                onClick={onBookClick}
                className="inline-flex items-center justify-center gap-3 bg-[#F5B800] hover:bg-[#FFC700] text-black font-black text-base px-8 py-4 rounded-2xl shadow-xl shadow-[#F5B800]/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 uppercase tracking-wider cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Event Catering</span>
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </button>

              {/* Secondary CTA: Order Fresh */}
              <button
                onClick={onOrderClick}
                className="inline-flex items-center justify-center gap-2.5 bg-neutral-900 hover:bg-neutral-800 border-2 border-neutral-700 hover:border-[#F5B800] text-white font-black text-base px-7 py-4 rounded-2xl shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 uppercase tracking-wider cursor-pointer"
              >
                <span>Order Fresh (Retail)</span>
              </button>

              {onOpenPhysicalMenu && (
                <button
                  onClick={onOpenPhysicalMenu}
                  className="inline-flex items-center justify-center gap-2 text-xs font-bold text-[#F5B800] hover:underline px-4 py-3"
                >
                  <span>📄 View Menu Board</span>
                </button>
              )}
            </motion.div>

            {/* 7 Flavours Quick Ticker */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-5 border-t border-neutral-800 w-full"
            >
              <div className="flex items-center justify-between flex-wrap gap-2 mb-2.5">
                <p className="text-xs font-bold uppercase tracking-wider text-[#F5B800] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 fill-[#F5B800]" />
                  <span>7 Official Signature Flavours (From GH₵ 10)</span>
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                {flavours.map((flv) => (
                  <span
                    key={flv}
                    className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-white font-semibold hover:border-[#F5B800] transition-colors"
                  >
                    🍿 {flv}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative flex justify-center order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-md lg:max-w-none"
            >
              {/* Outer Golden Ambient Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#F5B800]/30 to-amber-500/10 rounded-3xl blur-xl" />

              {/* Showcase Container */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-neutral-800 hover:border-[#F5B800] bg-neutral-950 shadow-2xl aspect-[4/3] sm:aspect-square group transition-all duration-500">
                <img
                  src={PopcornImages.cupClassicLogo}
                  alt="Official POPCORN KING Ghana Signature Popcorn Cup"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Contrast Vignette Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20" />

                {/* Top Corner Official Brand Logo Badge */}
                <div className="absolute top-4 left-4 bg-neutral-950/90 backdrop-blur-md p-2 rounded-2xl border border-neutral-800 shadow-xl flex items-center gap-2">
                  <PopcornKingLogo size="sm" showText={false} />
                  <div className="pr-1">
                    <p className="text-[10px] font-black text-[#F5B800] leading-none uppercase">Official</p>
                    <p className="text-xs font-black text-white leading-none">POPCORN KING</p>
                  </div>
                </div>

                {/* Top Right Live Popping Badge */}
                <div className="absolute top-4 right-4 bg-[#F5B800] text-black text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
                  <span>Live Popping</span>
                </div>

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-neutral-950/95 backdrop-blur-md p-4 rounded-2xl border border-neutral-800 flex items-center justify-between shadow-2xl">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-[#F5B800] font-bold uppercase tracking-wider">
                      <Star className="w-3.5 h-3.5 fill-[#F5B800] text-[#F5B800]" />
                      <span>100% Fresh Daily In Accra</span>
                    </div>
                    <p className="text-sm font-bold text-white mt-0.5">Small · Regular · Large</p>
                  </div>
                  <span className="text-xs font-black px-3.5 py-2 rounded-xl bg-[#F5B800] text-black shadow-md">
                    From GH₵ 10
                  </span>
                </div>
              </div>

              {/* Floating Bottom Card: Event Station */}
              <div className="hidden sm:flex absolute -bottom-6 -left-4 bg-neutral-900 border border-neutral-800 p-3.5 rounded-2xl shadow-2xl items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F5B800]/15 border border-[#F5B800]/40 flex items-center justify-center text-[#F5B800]">
                  <Sparkles className="w-5 h-5 fill-[#F5B800]" />
                </div>
                <div>
                  <p className="text-xs font-black text-white">Full Event Catering Cart</p>
                  <p className="text-[11px] text-neutral-400">Heated Glass Kettle & Uniformed Attendants</p>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>

      {/* Cart-Matching Bottom Strip (Full-Width Gold Strip from Front & Side Cart Graphics) */}
      <div className="mt-14 bg-[#F5B800] text-black py-2.5 px-4 shadow-xl border-y border-[#FFC700]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm font-black">
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 fill-black" />
            <a
              href="https://wa.me/233550999008"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base sm:text-lg font-black tracking-wide hover:underline"
            >
              +233 550 999 008
            </a>
          </div>
          <div className="flex items-center gap-4 text-sm font-black">
            <span className="flex items-center gap-1.5">
              <Instagram className="w-4 h-4" />
              <Facebook className="w-4 h-4" />
              <span>@popcornkingghana</span>
            </span>
            <span className="hidden md:inline text-black/50">|</span>
            <span className="hidden md:inline font-script text-base">Accra's #1 Gourmet Popcorn Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
};
