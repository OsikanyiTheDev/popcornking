import React, { useState } from 'react';
import { PopcornKingLogo } from './PopcornKingLogo';
import { X, Printer, Sparkles, Phone, Instagram, CheckCircle2, Award, Download, Eye, Layers } from 'lucide-react';
import { PopcornImages } from '../assets/images';

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
      image: PopcornImages.caramelFlyer,
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
      image: PopcornImages.seaSaltFlyer,
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
      image: PopcornImages.chocolateFlyer,
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
      image: PopcornImages.milkywayFlyer,
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
      image: PopcornImages.rainbowFlyer,
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
      className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
    >
      <div className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl my-6 text-slate-900 flex flex-col max-h-[92vh]">
        
        {/* Modal Top Header Bar */}
        <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-amber-100 border border-amber-300 text-amber-900">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                Popcorn King Official Menu & Flyers
              </h3>
              <p className="text-xs text-slate-600">
                Official physical print menu & artisanal flavour showcase
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Tab switch */}
            <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200">
              <button
                id="tab-physical-menu"
                onClick={() => setActiveTab('menu')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'menu'
                    ? 'bg-amber-400 text-slate-950 shadow-xs'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                📄 Printed Menu
              </button>
              <button
                id="tab-flavour-flyers"
                onClick={() => setActiveTab('flyers')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'flyers'
                    ? 'bg-amber-400 text-slate-950 shadow-xs'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                🎨 Flavour Flyers
              </button>
            </div>

            <button
              id="btn-print-menu"
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-700 hover:bg-emerald-100 text-xs font-bold flex items-center gap-1.5 transition-all"
              title="Print Physical Menu"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print Menu</span>
            </button>

            <button
              id="btn-close-physical-menu-modal"
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-100 border border-slate-200 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-slate-100/70 scrollbar-thin">
          {activeTab === 'menu' ? (
            /* =========================================================================
               PRINTABLE PHYSICAL MENU DESIGN (MATCHING THE OFFICIAL POPCORN KING FLYER)
               ========================================================================= */
            <div
              id="printable-menu-sheet"
              className="max-w-2xl mx-auto bg-white border-2 border-amber-400/50 rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden text-slate-900"
            >
              {/* Gold Top Accent Line */}
              <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500" />
              
              {/* Watermark / BG decoration */}
              <div className="absolute inset-0 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

              {/* Menu Header */}
              <div className="text-center relative z-10 mb-8 border-b border-slate-200 pb-6">
                <div className="flex justify-center mb-3">
                  <PopcornKingLogo className="scale-110" />
                </div>
                <h1 className="font-display text-2xl sm:text-3xl font-black text-amber-800 tracking-wider uppercase">
                  POPCORN KING MENU
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 font-medium tracking-wide mt-1">
                  Ghana&apos;s Royal Gourmet Popcorn & Live Event Catering
                </p>
                <div className="inline-block mt-3 px-3 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold">
                  ✨ Freshly Popped Daily • Accra, Ghana
                </div>
              </div>

              {/* Menu Content Sections */}
              <div className="space-y-8 relative z-10">

                {/* 1. SIGNATURE POPCORN */}
                <div>
                  <div className="flex items-center gap-2 border-b border-amber-300 pb-2 mb-3">
                    <span className="text-lg">🍿</span>
                    <h2 className="font-display text-base sm:text-lg font-black text-amber-800 tracking-wider uppercase">
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
                      <div key={idx} className="flex justify-between items-start gap-4 p-2 rounded-xl hover:bg-slate-50 transition-colors">
                        <div>
                          <h4 className="font-bold text-slate-900 text-sm sm:text-base">{item.name}</h4>
                          <p className="text-xs text-slate-500 italic">{item.desc}</p>
                        </div>
                        <span className="font-display font-black text-sm sm:text-base text-amber-800 whitespace-nowrap bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. REFRESHMENTS */}
                <div>
                  <div className="flex items-center gap-2 border-b border-amber-300 pb-2 mb-3">
                    <span className="text-lg">🥤</span>
                    <h2 className="font-display text-base sm:text-lg font-black text-amber-800 tracking-wider uppercase">
                      REFRESHMENTS
                    </h2>
                  </div>
                  <div className="space-y-3">
                    {[
                      { name: 'Chilled Soft Drinks', desc: 'Coke, Fanta, Sprite (500ml)', price: 'GH₵ 10' },
                      { name: 'Signature Milkshakes', desc: 'Rich & creamy handcrafted shakes', price: 'GH₵ 25' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex justify-between items-start gap-4 p-2 rounded-xl hover:bg-slate-50 transition-colors">
                        <div>
                          <h4 className="font-bold text-slate-900 text-sm sm:text-base">{item.name}</h4>
                          <p className="text-xs text-slate-500 italic">{item.desc}</p>
                        </div>
                        <span className="font-display font-black text-sm sm:text-base text-amber-800 whitespace-nowrap bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. EVENT PACKAGES */}
                <div>
                  <div className="flex items-center gap-2 border-b border-amber-300 pb-2 mb-3">
                    <span className="text-lg">🎪</span>
                    <h2 className="font-display text-base sm:text-lg font-black text-amber-800 tracking-wider uppercase">
                      EVENT PACKAGES
                    </h2>
                  </div>
                  <div className="space-y-3">
                    {[
                      { name: 'Live Vending Station', desc: 'Vintage popping cart + 2 uniformed attendants + hot unlimited batches (Ideal for 50 - 150 guests)', price: 'GH₵ 1,499.99' },
                      { name: 'Bulk Party Boxes and Crates', desc: 'Pre-packaged branded snack bags/buckets delivered fresh (Ideal for 50 to 100 guests)', price: 'GH₵ 699.99' },
                      { name: 'Corporate', desc: 'Dual high-output commercial live stations + VIP attendants (Ideal for 250 to 500 guests)', price: 'GH₵ 3,499.99' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex justify-between items-start gap-4 p-2 rounded-xl hover:bg-slate-50 transition-colors">
                        <div>
                          <h4 className="font-bold text-slate-900 text-sm sm:text-base">{item.name}</h4>
                          <p className="text-xs text-slate-500 italic">{item.desc}</p>
                        </div>
                        <span className="font-display font-black text-sm sm:text-base text-amber-800 whitespace-nowrap bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Menu Footer Contact Band */}
              <div className="mt-8 pt-6 border-t border-slate-200 text-center relative z-10 bg-amber-50/60 rounded-2xl p-4 border border-amber-200">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs sm:text-sm font-semibold text-slate-700">
                  <a
                    href="tel:+233550999008"
                    className="flex items-center gap-1.5 text-amber-800 hover:underline font-bold"
                  >
                    <Phone className="w-4 h-4" />
                    <span>+233 550 999 008</span>
                  </a>
                  <span className="hidden sm:inline text-slate-400">•</span>
                  <a
                    href="https://instagram.com/popcornkingghana"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-amber-800 hover:underline font-bold"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>@popcornkingghana</span>
                  </a>
                </div>
                <p className="text-[11px] text-slate-600 mt-2">
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
                        ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20 scale-105'
                        : 'bg-white text-slate-700 hover:text-slate-950 border border-slate-200'
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
                  <div className="max-w-xl mx-auto bg-white border-2 border-amber-300 rounded-3xl overflow-hidden shadow-lg p-6 sm:p-8 text-slate-900">
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 font-bold text-xs border border-amber-300">
                        {current.badge}
                      </span>
                      <span className="font-display text-2xl font-black text-amber-800">
                        {current.price}
                      </span>
                    </div>

                    {/* Official Flyer Visual */}
                    {current.image && (
                      <div className="mb-6 rounded-2xl overflow-hidden border border-slate-200 shadow-md max-h-72 aspect-square mx-auto bg-slate-50">
                        <img
                          src={current.image}
                          alt={`${current.name} Official Flyer`}
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1572177191856-3cde618dee1f?auto=format&fit=crop&w=800&q=80';
                          }}
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
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600">
                        Flavor Highlights:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {current.notes.map((note, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-800">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                            <span>{note}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-200 text-xs text-slate-600">
                      <div className="flex items-center gap-2">
                        <PopcornKingLogo className="scale-75" />
                        <span className="font-bold text-slate-900">Popcorn King Ghana</span>
                      </div>
                      <span className="text-amber-800 font-bold">Accra, Ghana</span>
                    </div>

                  </div>
                );
              })()}

            </div>
          )}
        </div>

        {/* Modal Footer Bar */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3 text-xs text-slate-600 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Official Popcorn King Brand Assets</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-amber-400 text-slate-950 font-bold hover:bg-amber-500 transition-colors flex items-center gap-1 shadow-2xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Download Menu</span>
            </button>
            <button
              onClick={onClose}
              className="px-3 py-1.5 rounded-lg bg-slate-200 text-slate-800 hover:bg-slate-300 transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
