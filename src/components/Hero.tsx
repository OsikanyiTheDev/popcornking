import React from 'react';
import { Sparkles, MapPin, ArrowRight, Calendar, MessageCircle, Flame, ShieldCheck, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { PopcornKingLogo } from './PopcornKingLogo';
import { PopcornImages } from '../assets/images';

interface HeroProps {
  onOrderClick: () => void;
  onBookClick: () => void;
  onOpenPhysicalMenu?: () => void;
  onOpenAiConcierge?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOrderClick, onBookClick, onOpenPhysicalMenu, onOpenAiConcierge }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-amber-50/60 via-white to-[#FAFAFA] text-slate-900 border-b border-slate-200/70">
      {/* Burst & Wave Geometric Pattern Overlay */}
      <div className="absolute inset-0 bg-burst-pattern pointer-events-none" />

      {/* Atmospheric Warm Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-amber-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-rose-200/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Positioning & High-Contrast CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Location & Freshness Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/90 border border-amber-300/80 text-amber-950 text-xs sm:text-sm font-bold mb-6 shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF4B3E] animate-ping" />
              <MapPin className="w-4 h-4 text-amber-700 shrink-0" />
              <span>Accra, Ghana • Everyday Snacking to 500+ Guest Events</span>
            </motion.div>

            {/* Main Primary Tagline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.05] mb-6"
            >
              Fresh popcorn. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 drop-shadow-xs">
                Big moments.
              </span>
            </motion.h1>

            {/* Core Narrative */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-xl text-slate-700 max-w-2xl leading-relaxed mb-8 font-normal"
            >
              Popcorn King transforms a humble street favorite into a premium, memorable experience — whether you are craving a crunchy fresh snack bag or booking live commercial cart catering for a 500-person wedding or corporate summit in Accra.
            </motion.p>

            {/* Dual CTAs (Electric Coral & Royalty Gold) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10"
            >
              {/* Electric Coral Primary CTA: Book for Event */}
              <button
                onClick={onBookClick}
                className="inline-flex items-center justify-center gap-3 bg-[#FF4B3E] hover:bg-[#ff3526] text-white font-black text-base sm:text-lg px-8 py-4 rounded-2xl shadow-lg shadow-[#FF4B3E]/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 uppercase tracking-wider"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Event Catering</span>
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </button>

              {/* Royalty Gold Secondary CTA: Order Fresh Retail */}
              <button
                onClick={onOrderClick}
                className="inline-flex items-center justify-center gap-2.5 bg-[#FFC800] hover:bg-[#e6b400] text-[#0A192F] font-black text-base sm:text-lg px-7 py-4 rounded-2xl shadow-md shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 uppercase tracking-wider"
              >
                <span>Order Fresh (Retail)</span>
              </button>

              {/* Direct WhatsApp CTA for Mobile */}
              <a
                href="https://wa.me/233550999008?text=Hello%20Popcorn%20King,%20I%20would%20like%20to%20order%20popcorn!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex sm:hidden items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base px-6 py-3.5 rounded-2xl shadow-md"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>WhatsApp: +233 55 099 9008</span>
              </a>
            </motion.div>

            {/* Quick Flavour Strip & Brand Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6 border-t border-slate-200 w-full"
            >
              <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                <p className="text-xs font-bold uppercase tracking-wider text-amber-800 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>Official Signature Popcorn Flavours</span>
                </p>
                <div className="flex items-center gap-3">
                  {onOpenAiConcierge && (
                    <button
                      onClick={onOpenAiConcierge}
                      className="text-xs font-bold text-amber-700 hover:text-amber-800 bg-amber-50 hover:bg-amber-100 border border-amber-300 px-2.5 py-1 rounded-lg flex items-center gap-1.5 transition-colors"
                    >
                      <Sparkles className="w-3.5 h-3.5 fill-amber-500" />
                      <span>✨ Ask AI Flavor & Event Concierge</span>
                    </button>
                  )}
                  {onOpenPhysicalMenu && (
                    <button
                      onClick={onOpenPhysicalMenu}
                      className="text-xs font-bold text-slate-600 hover:text-amber-700 underline flex items-center gap-1 transition-colors"
                    >
                      <span>📄 Printed Menu</span>
                    </button>
                  )}
                </div>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                {['Classic Sea Salt', 'Sweet Caramel', 'Rich Chocolate', 'Milkyway', 'Vibrant Rainbow'].map((flv) => (
                  <span
                    key={flv}
                    className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-800 font-semibold shadow-2xs hover:border-amber-400 hover:text-amber-700 transition-colors"
                  >
                    🍿 {flv}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Right Column: Hero Visual Showcase with Brand Emblem */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-md lg:max-w-none"
            >
              {/* Decorative Frame with Gold border and subtle shadow */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-amber-300 bg-white shadow-xl aspect-[4/3] sm:aspect-square">
                <img
                  src={PopcornImages.cupClassicLogo}
                  alt="Official Yellow Popcorn King Cup with Logo and Fresh Gourmet Popcorn"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Subtle bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                {/* Top Corner Official Brand Logo Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-2 rounded-2xl border border-slate-200 shadow-lg flex items-center gap-2">
                  <PopcornKingLogo size="sm" showText={false} />
                  <div className="pr-1">
                    <p className="text-[10px] font-black text-amber-700 leading-none uppercase">Official</p>
                    <p className="text-xs font-black text-slate-900 leading-none">POPCORN KING</p>
                  </div>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 flex items-center justify-between shadow-xl">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-amber-700 font-bold uppercase tracking-wider">
                      <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      <span>Accra Fresh Batch</span>
                    </div>
                    <p className="text-sm font-bold text-slate-900 mt-0.5">Handcrafted Gourmet Crunch</p>
                  </div>
                  <span className="text-xs font-black px-3 py-1.5 rounded-xl bg-[#FF4B3E] text-white shadow-xs">
                    From GH₵ 10
                  </span>
                </div>
              </div>

              {/* Floating Live Popping Badge Top Right */}
              <div className="absolute -top-3 -right-2 sm:-right-4 bg-[#FF4B3E] text-white text-xs font-black uppercase tracking-wider px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5 border border-white/30 animate-bounce">
                <Flame className="w-4 h-4 fill-white" />
                <span>Live Popping</span>
              </div>

              {/* Floating Event Badge Bottom Left */}
              <div className="hidden sm:flex absolute -bottom-5 -left-4 bg-white border border-slate-200 p-3.5 rounded-2xl shadow-xl items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-700">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-slate-900">Full Event Catering</p>
                  <p className="text-[11px] text-slate-600">Live Glass Carts & Uniformed Staff</p>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
