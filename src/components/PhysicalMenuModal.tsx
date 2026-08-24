import React, { useState } from 'react';
import { PopcornKingLogo } from './PopcornKingLogo';
import { X, Printer, Sparkles, Phone, Instagram, CheckCircle2, Award, Download, Eye, Layers } from 'lucide-react';

interface PhysicalMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PhysicalMenuModal: React.FC<PhysicalMenuModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'menu' | 'flyers'>('menu');
  const [selectedFlyer, setSelectedFlyer] = useState<string>('caramel');

  if (!isOpen) return null;

  const flyers = [
    {
      id: 'caramel',
      name: 'Sweet Caramel',
      badge: '👑 Best Seller',
      tagline: 'Rich, crunchy golden glaze for serious sweet tooths',
      price: 'GH₵ 10',
      image: '/src/assets/images/caramel_popcorn_flyer_1787530953937.jpg',
      color: 'from-[#D97706] to-[#92400E]',
      borderAccent: 'border-[#F59E0B]',
      description: 'Artisanal brown sugar melted into thick golden butter glaze, coating every popped kernel in a crystal crunch.',
      notes: ['Handcrafted Golden Glaze', 'Rich Butter Caramel', 'Crunch in Every Bite'],
    },
    {
      id: 'sea-salt',
      name: 'Classic Sea Salt',
      badge: '🍿 Cinema Favorite',
      tagline: 'Light, airy, perfectly salted traditional style',
      price: 'GH₵ 10',
      image: '/src/assets/images/sea_salt_flyer_1787530969931.jpg',
      color: 'from-[#0284C7] to-[#0369A1]',
      borderAccent: 'border-[#38BDF8]',
      description: 'Pristine, fluffy kernels tossed with fine Atlantic sea salt crystals for the ultimate pure movie theater experience.',
      notes: ['Pure Atlantic Sea Salt', 'Featherlight & Fluffy', 'Zero Artificial Preservatives'],
    },
    {
      id: 'chocolate',
      name: 'Rich Chocolate',
      badge: '🍫 Premium Cocoa',
      tagline: 'Indulgent cocoa glaze over crispy kernels',
      price: 'GH₵ 20',
      image: '/src/assets/images/chocolate_popcorn_flyer_1787530983913.jpg',
      color: 'from-[#78350F] to-[#451A03]',
      borderAccent: 'border-[#B45309]',
      description: 'Velvety Ghanaian cocoa glaze coated over hot crispy popcorn, delivering a rich chocolatey explosion.',
      notes: ['Rich Ghanaian Cocoa', 'Silky Cocoa Coating', 'Decadent Sweet Crunch'],
    },
    {
      id: 'milkyway',
      name: 'Milkyway',
      badge: '✨ Sweet Milk Drizzle',
      tagline: 'Creamy chocolate drizzled with sweet milk notes',
      price: 'GH₵ 10',
      image: '/src/assets/images/milkyway_popcorn_flyer_1787530999860.jpg',
      color: 'from-[#4C1D95] to-[#312E81]',
      borderAccent: 'border-[#818CF8]',
      description: 'Dual layer of creamy milk glaze and luscious chocolate notes crafted for a delightful, silky taste profile.',
      notes: ['Sweet Milk Swirls', 'Creamy Chocolate Notes', 'Meltaway Sweetness'],
    },
    {
      id: 'rainbow',
      name: 'Vibrant Rainbow',
      badge: '🌈 Party Hit',
      tagline: 'Fun, colorful candied mix packed with flavor',
      price: 'GH₵ 10',
      image: '/src/assets/images/rainbow_popcorn_flyer_1787531014949.jpg',
      color: 'from-[#BE185D] via-[#7C3AED] to-[#047857]',
      borderAccent: 'border-[#F472B6]',
      description: 'A dazzling festive mix of candied jewel-toned kernels in strawberry red, blue raspberry, grape, and sunshine citrus.',
      notes: ['Vibrant Jewel Colors', 'Fruity Candied Glaze', 'Perfect for Celebrations'],
    },
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="physical-menu-modal"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
    >
      <div className="relative w-full max-w-4xl bg-[#0A192F] border border-[#1E3A5F] rounded-3xl overflow-hidden shadow-2xl my-6 text-white flex flex-col max-h-[92vh]">
        
        {/* Modal Top Header Bar */}
        <div className="p-4 sm:p-6 bg-[#0D203D] border-b border-[#1E3A5F] flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-[#FFC800]/15 border border-[#FFC800]/30 text-[#FFC800]">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                Popcorn King Official Menu & Flyers
              </h3>
              <p className="text-xs text-slate-300">
                Official physical print menu & artisanal flavour showcase
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Tab switch */}
            <div className="flex bg-[#0A192F] p-1 rounded-xl border border-[#1E3A5F]">
              <button
                id="tab-physical-menu"
                onClick={() => setActiveTab('menu')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'menu'
                    ? 'bg-[#FFC800] text-[#0A192F] shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                📄 Printed Menu
              </button>
              <button
                id="tab-flavour-flyers"
                onClick={() => setActiveTab('flyers')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'flyers'
                    ? 'bg-[#FFC800] text-[#0A192F] shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                🎨 Flavour Flyers
              </button>
            </div>

            <button
              id="btn-print-menu"
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500 hover:text-slate-950 text-xs font-bold flex items-center gap-1.5 transition-all"
              title="Print Physical Menu"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print Menu</span>
            </button>

            <button
              id="btn-close-physical-menu-modal"
              onClick={onClose}
              className="p-2 rounded-xl bg-[#0A192F] border border-[#1E3A5F] hover:bg-[#1E3A5F] text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-[#071324] scrollbar-thin">
          {activeTab === 'menu' ? (
            /* =========================================================================
               PRINTABLE PHYSICAL MENU DESIGN (MATCHING THE OFFICIAL POPCORN KING FLYER)
               ========================================================================= */
            <div
              id="printable-menu-sheet"
              className="max-w-2xl mx-auto bg-gradient-to-b from-[#0A192F] via-[#0D203D] to-[#0A192F] border-2 border-[#FFC800]/40 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden"
            >
              {/* Gold Top Accent Line */}
              <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#FFC800] via-[#FBBF24] to-[#FFC800]" />
              
              {/* Watermark / BG decoration */}
              <div className="absolute inset-0 bg-[radial-gradient(#FFC800_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

              {/* Menu Header */}
              <div className="text-center relative z-10 mb-8 border-b border-[#1E3A5F] pb-6">
                <div className="flex justify-center mb-3">
                  <PopcornKingLogo className="scale-110" />
                </div>
                <h1 className="font-display text-2xl sm:text-3xl font-black text-[#FFC800] tracking-wider uppercase">
                  POPCORN KING MENU
                </h1>
                <p className="text-xs sm:text-sm text-slate-300 font-medium tracking-wide mt-1">
                  Ghana&apos;s Royal Gourmet Popcorn & Live Event Catering
                </p>
                <div className="inline-block mt-3 px-3 py-1 rounded-full bg-[#FFC800]/10 border border-[#FFC800]/30 text-[#FFC800] text-xs font-bold">
                  ✨ Freshly Popped Daily • Accra, Ghana
                </div>
              </div>

              {/* Menu Content Sections */}
              <div className="space-y-8 relative z-10">

                {/* 1. SIGNATURE POPCORN */}
                <div>
                  <div className="flex items-center gap-2 border-b border-[#FFC800]/30 pb-2 mb-3">
                    <span className="text-lg">🍿</span>
                    <h2 className="font-display text-base sm:text-lg font-black text-[#FFC800] tracking-wider uppercase">
                      SIGNATURE POPCORN
                    </h2>
                  </div>
                  <div className="space-y-3">
                    {[
                      { name: 'Classic Sea Salt', desc: 'Light, airy, perfectly salted traditional style', price: 'GH₵ 10' },
                      { name: 'Sweet Caramel', desc: 'Rich, crunchy golden glaze for serious sweet tooths', price: 'GH₵ 10' },
                      { name: 'Rich Chocolate', desc: 'Indulgent cocoa glaze over crispy kernels', price: 'GH₵ 20' },
                      { name: 'Milkyway', desc: 'Creamy chocolate drizzled with sweet milk notes', price: 'GH₵ 10' },
                      { name: 'Vibrant Rainbow', desc: 'Fun, colorful candied mix packed with flavor', price: 'GH₵ 10' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex justify-between items-start gap-4 p-2 rounded-xl hover:bg-white/5 transition-colors">
                        <div>
                          <h4 className="font-bold text-white text-sm sm:text-base">{item.name}</h4>
                          <p className="text-xs text-slate-300 italic">{item.desc}</p>
                        </div>
                        <span className="font-display font-black text-sm sm:text-base text-[#FFC800] whitespace-nowrap bg-[#FFC800]/10 px-2.5 py-1 rounded-lg border border-[#FFC800]/20">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. POPCORN PACKAGING */}
                <div>
                  <div className="flex items-center gap-2 border-b border-[#FFC800]/30 pb-2 mb-3">
                    <span className="text-lg">📦</span>
                    <h2 className="font-display text-base sm:text-lg font-black text-[#FFC800] tracking-wider uppercase">
                      POPCORN PACKAGING
                    </h2>
                  </div>
                  <div className="space-y-3">
                    {[
                      { name: 'Regular Round Cup', desc: 'Perfect individual single-serve size', price: 'GH₵ 10' },
                      { name: 'Large Party Bucket', desc: 'Shareable tub for groups & movie nights', price: 'GH₵ 25' },
                      { name: 'Sealed Event Bag', desc: 'Compact, neat snack pouch for catering & bulk orders', price: 'GH₵ 15' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex justify-between items-start gap-4 p-2 rounded-xl hover:bg-white/5 transition-colors">
                        <div>
                          <h4 className="font-bold text-white text-sm sm:text-base">{item.name}</h4>
                          <p className="text-xs text-slate-300 italic">{item.desc}</p>
                        </div>
                        <span className="font-display font-black text-sm sm:text-base text-[#FFC800] whitespace-nowrap bg-[#FFC800]/10 px-2.5 py-1 rounded-lg border border-[#FFC800]/20">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. REFRESHMENTS */}
                <div>
                  <div className="flex items-center gap-2 border-b border-[#FFC800]/30 pb-2 mb-3">
                    <span className="text-lg">🥤</span>
                    <h2 className="font-display text-base sm:text-lg font-black text-[#FFC800] tracking-wider uppercase">
                      REFRESHMENTS
                    </h2>
                  </div>
                  <div className="space-y-3">
                    {[
                      { name: 'Chilled Soft Drinks', desc: 'Coke, Fanta, Sprite (500ml)', price: 'GH₵ 10' },
                      { name: 'Signature Milkshakes', desc: 'Rich & creamy handcrafted shakes', price: 'GH₵ 25' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex justify-between items-start gap-4 p-2 rounded-xl hover:bg-white/5 transition-colors">
                        <div>
                          <h4 className="font-bold text-white text-sm sm:text-base">{item.name}</h4>
                          <p className="text-xs text-slate-300 italic">{item.desc}</p>
                        </div>
                        <span className="font-display font-black text-sm sm:text-base text-[#FFC800] whitespace-nowrap bg-[#FFC800]/10 px-2.5 py-1 rounded-lg border border-[#FFC800]/20">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. EVENT PACKAGES */}
                <div>
                  <div className="flex items-center gap-2 border-b border-[#FFC800]/30 pb-2 mb-3">
                    <span className="text-lg">🎪</span>
                    <h2 className="font-display text-base sm:text-lg font-black text-[#FFC800] tracking-wider uppercase">
                      EVENT PACKAGES
                    </h2>
                  </div>
                  <div className="space-y-3">
                    {[
                      { name: 'Live Vending Station', desc: 'Vintage popping cart + uniformed chef + hot unlimited batches for 3 hrs', price: '*Quote on Request' },
                      { name: 'Bulk Party Boxes', desc: 'Pre-packaged branded snack bags ready for birthdays, weddings & school fairs', price: '*Quote on Request' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex justify-between items-start gap-4 p-2 rounded-xl hover:bg-white/5 transition-colors">
                        <div>
                          <h4 className="font-bold text-white text-sm sm:text-base">{item.name}</h4>
                          <p className="text-xs text-slate-300 italic">{item.desc}</p>
                        </div>
                        <span className="font-display font-bold text-xs sm:text-sm text-emerald-400 whitespace-nowrap bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Menu Footer Contact Band */}
              <div className="mt-8 pt-6 border-t border-[#1E3A5F] text-center relative z-10 bg-[#0A192F]/80 rounded-2xl p-4 border border-[#FFC800]/20">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs sm:text-sm font-semibold text-slate-300">
                  <a
                    href="tel:+233550999008"
                    className="flex items-center gap-1.5 text-[#FFC800] hover:underline"
                  >
                    <Phone className="w-4 h-4" />
                    <span>+233 550 999 008</span>
                  </a>
                  <span className="hidden sm:inline text-slate-600">•</span>
                  <a
                    href="https://instagram.com/popcornkingghana"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-[#FFC800] hover:underline"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>@popcornkingghana</span>
                  </a>
                </div>
                <p className="text-[11px] text-slate-300 mt-2">
                  Contact us for weddings, corporate functions, birthdays & customized bulk orders across Accra!
                </p>
              </div>

            </div>
          ) : (
            /* =========================================================================
               OFFICIAL FLAVOUR FLYERS SHOWCASE
               ========================================================================= */
            <div className="space-y-6">
              
              {/* Flavor Selector Buttons */}
              <div className="flex flex-wrap gap-2 justify-center">
                {flyers.map((flyer) => (
                  <button
                    key={flyer.id}
                    onClick={() => setSelectedFlyer(flyer.id)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all ${
                      selectedFlyer === flyer.id
                        ? 'bg-[#FFC800] text-[#0A192F] shadow-lg shadow-[#FFC800]/20 scale-105'
                        : 'bg-[#0D203D] text-slate-300 hover:text-white border border-[#1E3A5F]'
                    }`}
                  >
                    {flyer.name}
                  </button>
                ))}
              </div>

              {/* Active Flyer Card Display */}
              {(() => {
                const current = flyers.find((f) => f.id === selectedFlyer) || flyers[0];
                return (
                  <div className="max-w-xl mx-auto bg-[#0A192F] border-2 border-[#FFC800]/40 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8">
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full bg-[#FFC800]/15 text-[#FFC800] font-bold text-xs border border-[#FFC800]/30">
                        {current.badge}
                      </span>
                      <span className="font-display text-2xl font-black text-[#FFC800]">
                        {current.price}
                      </span>
                    </div>

                    {/* Official Flyer Visual */}
                    {current.image && (
                      <div className="mb-6 rounded-2xl overflow-hidden border border-[#FFC800]/30 shadow-xl max-h-72 aspect-square mx-auto">
                        <img
                          src={current.image}
                          alt={`${current.name} Official Flyer`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}

                    <div className={`rounded-2xl p-6 bg-gradient-to-br ${current.color} border ${current.borderAccent} shadow-inner text-white mb-6 relative overflow-hidden`}>
                      <div className="absolute -right-6 -bottom-6 opacity-15 text-8xl font-black">
                        🍿
                      </div>
                      <h3 className="font-display text-2xl sm:text-3xl font-black tracking-tight text-white mb-2">
                        {current.name} Popcorn
                      </h3>
                      <p className="text-sm font-medium text-white/90 mb-4 italic">
                        &ldquo;{current.tagline}&rdquo;
                      </p>
                      <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                        {current.description}
                      </p>
                    </div>

                    <div className="space-y-2 mb-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                        Flavor Highlights:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {current.notes.map((note, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 p-2 rounded-lg bg-[#0D203D] border border-[#1E3A5F] text-xs text-slate-200">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#FFC800] shrink-0" />
                            <span>{note}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-[#1E3A5F] text-xs text-slate-300">
                      <div className="flex items-center gap-2">
                        <PopcornKingLogo className="scale-75" />
                        <span className="font-bold text-white">Popcorn King Ghana</span>
                      </div>
                      <span className="text-[#FFC800] font-bold">Accra, Ghana</span>
                    </div>

                  </div>
                );
              })()}

            </div>
          )}
        </div>

        {/* Modal Footer Bar */}
        <div className="p-4 bg-[#0D203D] border-t border-[#1E3A5F] flex items-center justify-between gap-3 text-xs text-slate-300 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Official Popcorn King Brand Assets</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-[#FFC800] text-[#0A192F] font-bold hover:bg-[#FFD700] transition-colors flex items-center gap-1"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Download Menu</span>
            </button>
            <button
              onClick={onClose}
              className="px-3 py-1.5 rounded-lg bg-[#1E3A5F] text-white hover:bg-[#254673] transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
