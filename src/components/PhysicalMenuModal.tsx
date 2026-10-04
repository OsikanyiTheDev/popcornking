import React, { useState } from 'react';
import { PopcornKingLogo } from './PopcornKingLogo';
import { X, Printer, Phone, Instagram, CheckCircle2, Layers } from 'lucide-react';
import { PopcornImages } from '../assets/images';

interface PhysicalMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PhysicalMenuModal: React.FC<PhysicalMenuModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'menu' | 'flyers'>('menu');
  const [selectedFlyer, setSelectedFlyer] = useState<string>('caramel');

  if (!isOpen) return null;

  const menuItems = [
    { name: 'Sweet Caramel', icon: '🍯', small: 10, regular: 15, large: 20 },
    { name: 'Milkyway Galaxy', icon: '✨', small: 10, regular: 15, large: 20 },
    { name: 'Classic Sea Salt', icon: '🧂', small: 10, regular: 15, large: 20 },
    { name: 'Rich Chocolate', icon: '🍫', small: 20, regular: 25, large: 30 },
    { name: 'Cinnamon Delight', icon: '🍂', small: 10, regular: 15, large: 20 },
    { name: 'Vibrant Rainbow', icon: '🌈', small: 10, regular: 15, large: 20 },
    { name: 'Fiery Ginger', icon: '🔥', small: 10, regular: 15, large: 20 },
  ];

  const flyers = [
    {
      id: 'caramel',
      name: 'Sweet Caramel',
      badge: '👑 Best Seller',
      tagline: 'Rich, crunchy golden glaze for serious sweet tooths',
      prices: 'Small: 10 | Regular: 15 | Large: 20',
      image: PopcornImages.caramelFlyer,
      description: 'Artisanal caramelized sugar melted into rich butter glaze, coating every popped kernel in a crystal crunch.',
      notes: ['Handcrafted Golden Glaze', 'Rich Butter Caramel', 'Crunch in Every Bite'],
    },
    {
      id: 'milkyway',
      name: 'Milkyway Galaxy',
      badge: '✨ Sweet Milk Drizzle',
      tagline: 'Creamy chocolate drizzled with sweet milk notes',
      prices: 'Small: 10 | Regular: 15 | Large: 20',
      image: PopcornImages.milkywayFlyer,
      description: 'Dual layer of creamy milk glaze and luscious chocolate notes crafted for a delightful, silky taste profile.',
      notes: ['Sweet Milk Swirls', 'Creamy Chocolate Notes', 'Meltaway Sweetness'],
    },
    {
      id: 'sea-salt',
      name: 'Classic Sea Salt',
      badge: '🍿 Cinema Favorite',
      tagline: 'Light, airy, perfectly salted traditional style',
      prices: 'Small: 10 | Regular: 15 | Large: 20',
      image: PopcornImages.seaSaltFlyer,
      description: 'Pristine, fluffy kernels tossed with fine Atlantic sea salt crystals for the ultimate pure movie theater experience.',
      notes: ['Pure Atlantic Sea Salt', 'Featherlight & Fluffy', 'Zero Preservatives'],
    },
    {
      id: 'chocolate',
      name: 'Rich Chocolate',
      badge: '🍫 Premium Cocoa',
      tagline: 'Indulgent cocoa glaze over crispy kernels',
      prices: 'Small: 20 | Regular: 25 | Large: 30',
      image: PopcornImages.chocolateFlyer,
      description: 'Velvety Ghanaian cocoa glaze coated over hot crispy popcorn, delivering a rich chocolatey explosion.',
      notes: ['Rich Ghanaian Cocoa', 'Silky Cocoa Coating', 'Decadent Sweet Crunch'],
    },
    {
      id: 'cinnamon',
      name: 'Cinnamon Delight',
      badge: '🍂 Aromatic Spice',
      tagline: 'Warm cinnamon bark dust and sweet spun sugar',
      prices: 'Small: 10 | Regular: 15 | Large: 20',
      image: PopcornImages.cinnamonFlyer,
      description: 'Freshly popped giant kernels tossed in authentic cinnamon dust and warm spiced sugar glaze.',
      notes: ['Warm Cinnamon Bark', 'Aromatic Sugar Dust', 'Cozy Party Crunch'],
    },
    {
      id: 'rainbow',
      name: 'Vibrant Rainbow',
      badge: '🌈 Party Hit',
      tagline: 'Fun, colorful candied mix packed with flavor',
      prices: 'Small: 10 | Regular: 15 | Large: 20',
      image: PopcornImages.rainbowFlyer,
      description: 'A dazzling festive mix of candied jewel-toned kernels in strawberry red, blue raspberry, grape, and sunshine citrus.',
      notes: ['Vibrant Jewel Colors', 'Fruity Candied Glaze', 'Perfect for Celebrations'],
    },
    {
      id: 'ginger',
      name: 'Fiery Ginger',
      badge: '🔥 Bold & Spicy',
      tagline: 'Bold spicy ginger root kick with sweet crunch',
      prices: 'Small: 10 | Regular: 15 | Large: 20',
      image: PopcornImages.gingerFlyer,
      description: 'Real dried ginger root flakes and spicy glaze over puffed kernels for a warm, invigorating taste sensation.',
      notes: ['Fresh Ginger Heat', 'Zesty Sweet Finish', 'Unforgettable African Punch'],
    },
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="physical-menu-modal"
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
    >
      <div className="relative w-full max-w-4xl bg-[#0D0D0D] border-2 border-neutral-800 rounded-3xl overflow-hidden shadow-2xl my-6 text-white flex flex-col max-h-[92vh]">
        
        {/* Modal Top Header Bar */}
        <div className="p-4 sm:p-6 bg-neutral-950 border-b border-neutral-800 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-[#F5B800] text-black">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                Popcorn King Official Menu Board
              </h3>
              <p className="text-xs text-neutral-400">
                Official physical board layout matching our Accra vending carts
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Tab switch */}
            <div className="flex bg-neutral-900 p-1 rounded-xl border border-neutral-800">
              <button
                id="tab-physical-menu"
                onClick={() => setActiveTab('menu')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'menu'
                    ? 'bg-[#F5B800] text-black shadow-xs font-black'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                📄 Menu Board
              </button>
              <button
                id="tab-flavour-flyers"
                onClick={() => setActiveTab('flyers')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'flyers'
                    ? 'bg-[#F5B800] text-black shadow-xs font-black'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                🎨 Flavour Flyers
              </button>
            </div>

            <button
              id="btn-print-menu"
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-xl bg-neutral-900 border border-neutral-700 text-[#F5B800] hover:bg-neutral-800 text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
              title="Print Menu"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              id="btn-close-physical-menu-modal"
              onClick={onClose}
              className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-[#0D0D0D] scrollbar-thin">
          {activeTab === 'menu' ? (
            /* =========================================================================
               PHYSICAL MENU BOARD DESIGN (EXACT MATCH TO Menu.jpeg)
               ========================================================================= */
            <div
              id="printable-menu-sheet"
              className="max-w-2xl mx-auto bg-black border-2 border-[#F5B800]/50 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden text-white"
            >
              {/* Outer Golden Border Accent */}
              <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#F5B800] via-amber-300 to-[#F5B800]" />

              {/* Top Header Section matching Menu.jpeg */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-neutral-800 relative z-10">
                
                {/* Left: MENU Popcornking with Stars */}
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl sm:text-4xl">🍿</span>
                    <h1 className="font-display text-4xl sm:text-5xl font-black text-[#F5B800] tracking-wide uppercase drop-shadow-[0_2px_10px_rgba(245,184,0,0.3)]">
                      MENU
                    </h1>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#F5B800] mt-1 font-script text-base">
                    <span>★</span>
                    <span className="font-bold tracking-wider">Popcornking</span>
                    <span>★</span>
                  </div>
                </div>

                {/* Right: Three Popcorn Cup Size Icons & Headers */}
                <div className="grid grid-cols-3 gap-6 sm:gap-8 text-center">
                  <div className="flex flex-col items-center">
                    <span className="font-script text-sm sm:text-base font-bold text-white mb-1">Small</span>
                    <div className="w-9 h-11 bg-neutral-900 border-2 border-[#F5B800] rounded-b-md flex items-center justify-center text-xs">
                      🍿
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="font-script text-sm sm:text-base font-bold text-white mb-1">Regular</span>
                    <div className="w-10 h-13 bg-neutral-900 border-2 border-[#F5B800] rounded-b-md flex items-center justify-center text-sm">
                      🍿
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="font-script text-sm sm:text-base font-bold text-white mb-1">Large</span>
                    <div className="w-12 h-15 bg-neutral-900 border-2 border-[#F5B800] rounded-b-md flex items-center justify-center text-base">
                      🍿
                    </div>
                  </div>
                </div>

              </div>

              {/* 7 Signature Flavours List with Heart Bullet Points & Exact Pricing */}
              <div className="py-6 space-y-3 relative z-10 border-b border-neutral-800">
                {menuItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-neutral-900/60 transition-colors"
                  >
                    {/* Flavor Name with Heart Doodle and Ingredient Icon */}
                    <div className="flex items-center gap-2.5">
                      <span className="text-[#F5B800] text-sm">♡</span>
                      <span className="font-script text-xl sm:text-2xl font-bold text-white">
                        {item.name}
                      </span>
                      <span className="text-sm">{item.icon}</span>
                    </div>

                    {/* 3 Price Columns (Small, Regular, Large) in Bold Gold */}
                    <div className="grid grid-cols-3 gap-6 sm:gap-8 text-center font-display font-black text-lg sm:text-xl text-[#F5B800] tabular-nums">
                      <span className="w-10 text-center">{item.small}</span>
                      <span className="w-10 text-center">{item.regular}</span>
                      <span className="w-10 text-center">{item.large}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Event Packages & Carts Section */}
              <div className="pt-6 space-y-3 relative z-10 border-b border-neutral-800 pb-6">
                <p className="text-xs font-black uppercase tracking-wider text-[#F5B800]">
                  🎪 Live Event Vending Carts & Party Packages
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-neutral-900/80 p-3 rounded-xl border border-neutral-800">
                    <p className="text-xs font-bold text-white">Live Vending Station</p>
                    <p className="text-[11px] text-neutral-400">50 - 150 Guests</p>
                    <p className="text-sm font-black text-[#F5B800] mt-1">GH₵ 1,499.99</p>
                  </div>
                  <div className="bg-neutral-900/80 p-3 rounded-xl border border-neutral-800">
                    <p className="text-xs font-bold text-white">Bulk Party Boxes</p>
                    <p className="text-[11px] text-neutral-400">50 - 100 Guests</p>
                    <p className="text-sm font-black text-[#F5B800] mt-1">GH₵ 699.99</p>
                  </div>
                  <div className="bg-neutral-900/80 p-3 rounded-xl border border-neutral-800">
                    <p className="text-xs font-bold text-white">Corporate VIP Summit</p>
                    <p className="text-[11px] text-neutral-400">250 - 500 Guests</p>
                    <p className="text-sm font-black text-[#F5B800] mt-1">GH₵ 3,499.99</p>
                  </div>
                </div>
              </div>

              {/* Menu Footer Contact Band matching Cart Bottom Strip */}
              <div className="mt-6 pt-4 bg-[#F5B800] text-black rounded-2xl p-4 text-center font-black">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
                  <a
                    href="https://wa.me/233550999008"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 hover:underline"
                  >
                    <Phone className="w-4 h-4 fill-black" />
                    <span>+233 550 999 008</span>
                  </a>
                  <span className="hidden sm:inline text-black/50">|</span>
                  <a
                    href="https://instagram.com/popcornkingghana"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 hover:underline"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>@popcornkingghana</span>
                  </a>
                  <span className="hidden sm:inline text-black/50">|</span>
                  <span className="font-script text-base">fresh Popcorn. Big Moments!!!</span>
                </div>
              </div>

            </div>
          ) : (
            /* =========================================================================
               OFFICIAL FLAVOUR FLYERS SHOWCASE (ALL 7 SIGNATURE FLAVOURS)
               ========================================================================= */
            <div className="space-y-6">
              {/* Flavor Selector Buttons */}
              <div className="flex flex-wrap gap-2 justify-center">
                {flyers.map((flyer) => (
                  <button
                    key={flyer.id}
                    onClick={() => setSelectedFlyer(flyer.id)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                      selectedFlyer === flyer.id
                        ? 'bg-[#F5B800] text-black shadow-lg shadow-[#F5B800]/20 scale-105'
                        : 'bg-neutral-900 text-neutral-300 hover:text-white border border-neutral-800'
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
                  <div className="max-w-xl mx-auto bg-neutral-900 border-2 border-neutral-800 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 text-white">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full bg-black text-[#F5B800] font-bold text-xs border border-neutral-700">
                        {current.badge}
                      </span>
                      <span className="font-display text-sm font-black text-[#F5B800]">
                        {current.prices}
                      </span>
                    </div>

                    {/* Official Flyer Visual */}
                    {current.image && (
                      <div className="mb-6 rounded-2xl overflow-hidden border border-neutral-800 shadow-md max-h-72 aspect-square mx-auto bg-black">
                        <img
                          src={current.image}
                          alt={`${current.name} Official Flyer`}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}

                    <div className="rounded-2xl p-6 bg-black border border-neutral-800 shadow-inner text-white mb-6 relative overflow-hidden">
                      <h3 className="font-display text-2xl sm:text-3xl font-black tracking-tight text-white mb-2">
                        {current.name} Popcorn
                      </h3>
                      <p className="text-sm font-medium text-[#F5B800] mb-4 italic">
                        &ldquo;{current.tagline}&rdquo;
                      </p>
                      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                        {current.description}
                      </p>
                    </div>

                    <div className="space-y-2 mb-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                        Flavor Highlights:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {current.notes.map((note, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-1.5 p-2 rounded-lg bg-neutral-950 border border-neutral-800 text-xs text-neutral-300"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#F5B800] shrink-0" />
                            <span>{note}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-neutral-800 text-xs text-neutral-400">
                      <div className="flex items-center gap-2">
                        <PopcornKingLogo size="sm" showText={false} />
                        <span className="font-bold text-white">Popcorn King Ghana</span>
                      </div>
                      <span className="text-[#F5B800] font-bold">Accra, Ghana</span>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}
        </div>

        {/* Modal Footer Bar */}
        <div className="p-4 bg-neutral-950 border-t border-neutral-800 flex items-center justify-between gap-3 text-xs text-neutral-400 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#F5B800] animate-pulse" />
            <span>Official Popcorn King Brand Assets</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg bg-[#F5B800] text-black font-bold hover:bg-[#FFC700] transition-colors flex items-center gap-1 shadow-xs cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Menu Board</span>
            </button>
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-white hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
