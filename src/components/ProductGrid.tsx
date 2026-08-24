import React, { useState } from 'react';
import { MENU_ITEMS } from '../data/products';
import { ProductCard } from './ProductCard';
import { MenuItem, PopcornSizeOption, MenuCategoryKey } from '../types';
import { Sparkles, Search, Gift, List, LayoutGrid, MessageCircle, ShoppingBag, ArrowRight } from 'lucide-react';

interface ProductGridProps {
  onAddToCart: (product: MenuItem, selectedSize: PopcornSizeOption, quantity: number, selectedOption?: string) => void;
  onOpenBulkInquiry: () => void;
  onOpenPhysicalMenu?: () => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ onAddToCart, onOpenBulkInquiry, onOpenPhysicalMenu }) => {
  const [activeCategory, setActiveCategory] = useState<MenuCategoryKey>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');

  const categories: { id: MenuCategoryKey; label: string; count: number }[] = [
    { id: 'all', label: 'All Menu Items', count: MENU_ITEMS.length },
    { id: 'signature', label: '🍿 Signature Popcorn', count: MENU_ITEMS.filter((i) => i.category === 'signature').length },
    { id: 'packaging', label: '📦 Popcorn Packaging', count: MENU_ITEMS.filter((i) => i.category === 'packaging').length },
    { id: 'refreshments', label: '🥤 Refreshments', count: MENU_ITEMS.filter((i) => i.category === 'refreshments').length },
    { id: 'event_packages', label: '🎉 Event Packages', count: MENU_ITEMS.filter((i) => i.category === 'event_packages').length },
  ];

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.flavorNotes && item.flavorNotes.some((n) => n.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  const handleQuickAdd = (item: MenuItem) => {
    const defaultSize = (item.sizes && item.sizes.length > 0)
      ? item.sizes[0]
      : { id: 'standard', name: item.name, priceGHS: item.priceGHS, priceDisplay: item.priceDisplay };

    if (item.isQuoteOnRequest || item.priceGHS === 0) {
      const el = document.getElementById('catering') || document.getElementById('event-calculator');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onAddToCart(item, defaultSize, 1, item.options ? item.options[0] : undefined);
    }
  };

  return (
    <section id="flavours" className="py-20 bg-[#0A192F] relative border-t border-[#1E3A5F] text-white">
      {/* Subtle Burst Background Pattern */}
      <div className="absolute inset-0 bg-burst-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Poppins font & tasteful italics */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFC800]/15 border border-[#FFC800]/30 text-[#FFC800] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official Menu Architecture</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Popcorn King Menu Architecture
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            <em>&ldquo;Fresh popcorn. Big moments.&rdquo;</em> Explore our handcrafted signature glazes, customizable packaging sizes, ice-cold refreshments, and full live event packages in Accra.
          </p>
        </div>

        {/* Filter, Search & View Controls */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-8 pb-6 border-b border-[#1E3A5F]">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all uppercase tracking-wider flex items-center gap-1.5 ${
                  activeCategory === cat.id
                    ? 'bg-[#FFC800] text-[#0A192F] shadow-lg shadow-[#FFC800]/20 font-extrabold'
                    : 'bg-[#0D203D] text-slate-300 hover:text-white hover:bg-[#152e54] border border-[#1E3A5F]'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  activeCategory === cat.id ? 'bg-[#0A192F] text-[#FFC800]' : 'bg-[#0A192F]/60 text-slate-400'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search Input & View Toggle */}
          <div className="flex items-center gap-3 w-full lg:w-auto">
            <div className="relative flex-1 lg:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search menu (Caramel, Water, etc.)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0D203D] border border-[#1E3A5F] text-white placeholder-slate-400 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm focus:outline-none focus:border-[#FFC800]"
              />
            </div>

            {/* Physical Menu Flyer Button & View Mode Toggle Buttons */}
            {onOpenPhysicalMenu && (
              <button
                type="button"
                onClick={onOpenPhysicalMenu}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#0D203D] hover:bg-[#1E3A5F] border border-[#FFC800]/40 text-[#FFC800] text-xs font-bold transition-all shadow-sm shrink-0 whitespace-nowrap"
                title="View & Print Official Physical Menu Flyer"
              >
                <span>📄 Printable Menu & Flyers</span>
              </button>
            )}

            {/* View Mode Toggle Buttons */}
            <div className="flex items-center bg-[#0D203D] border border-[#1E3A5F] rounded-xl p-1 shrink-0">
              <button
                type="button"
                onClick={() => setViewMode('cards')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'cards' ? 'bg-[#FFC800] text-[#0A192F]' : 'text-slate-400 hover:text-white'
                }`}
                title="Grid Cards View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode('table')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'table' ? 'bg-[#FFC800] text-[#0A192F]' : 'text-slate-400 hover:text-white'
                }`}
                title="Official Menu Architecture Table View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* View Mode 1: Cards View */}
        {viewMode === 'cards' && (
          <>
            {filteredItems.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredItems.map((item) => (
                  <ProductCard
                    key={item.id}
                    product={item}
                    onAddToCart={onAddToCart}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-[#0D203D] rounded-3xl border border-[#1E3A5F]">
                <p className="text-slate-300 text-base">No items found matching &ldquo;{searchQuery}&rdquo;</p>
                <button
                  type="button"
                  onClick={() => {
                    setActiveCategory('all');
                    setSearchQuery('');
                  }}
                  className="mt-4 px-5 py-2.5 bg-[#FFC800] text-[#0A192F] font-bold rounded-xl text-xs uppercase tracking-wider"
                >
                  Reset Menu Filter
                </button>
              </div>
            )}
          </>
        )}

        {/* View Mode 2: Official Menu Architecture Table View */}
        {viewMode === 'table' && (
          <div className="bg-[#0D203D] rounded-3xl border border-[#1E3A5F] overflow-hidden shadow-2xl">
            <div className="p-6 border-b border-[#1E3A5F] flex items-center justify-between bg-[#0A192F]/60">
              <div>
                <h3 className="font-display text-xl font-bold text-white">
                  Official Menu Architecture Table
                </h3>
                <p className="text-xs text-slate-300 mt-0.5">
                  <em>Structured overview with exact categories, descriptions, and standard pricing</em>
                </p>
              </div>
              <span className="text-xs font-bold text-[#FFC800] px-3 py-1 bg-[#FFC800]/10 border border-[#FFC800]/30 rounded-full">
                Accra, Ghana
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#0A192F] text-[#FFC800] text-xs font-black uppercase tracking-wider border-b border-[#1E3A5F]">
                    <th className="py-4 px-6">Category</th>
                    <th className="py-4 px-6">Item / Flavor</th>
                    <th className="py-4 px-6">Description</th>
                    <th className="py-4 px-6">Price</th>
                    <th className="py-4 px-6 text-right">Quick Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1E3A5F]/70 text-xs sm:text-sm text-slate-200">
                  {filteredItems.map((item) => (
                    <tr key={item.id} className="hover:bg-[#122748]/50 transition-colors group">
                      <td className="py-4 px-6 font-bold text-[#FFC800] whitespace-nowrap">
                        <span className="px-2.5 py-1 rounded-lg bg-[#0A192F] border border-[#1E3A5F] text-[11px] uppercase tracking-wider">
                          {item.categoryLabel}
                        </span>
                      </td>
                      <td className="py-4 px-6 font-bold text-white">
                        <div className="flex items-center gap-3">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-10 h-10 rounded-lg object-cover bg-[#0A192F] shrink-0"
                            referrerPolicy="no-referrer"
                          />
                          <div>
                            <span>{item.name}</span>
                            {item.badge && (
                              <span className="block text-[10px] text-[#FF4B3E] font-medium">
                                {item.badge}
                              </span>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-slate-300 italic max-w-md">
                        &ldquo;{item.description}&rdquo;
                      </td>
                      <td className="py-4 px-6 font-extrabold text-white whitespace-nowrap">
                        {item.isQuoteOnRequest ? (
                          <span className="text-[#FFC800] italic font-semibold">*Quote on Request*</span>
                        ) : (
                          <span className="text-[#FFC800] font-black">{item.priceDisplay}</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-right whitespace-nowrap">
                        {item.isQuoteOnRequest ? (
                          <a
                            href={`https://wa.me/233550999008?text=${encodeURIComponent(
                              `👑 *POPCORN KING INQUIRY* 🍿\n\nI want to inquire about: *${item.name}*\nDescription: ${item.description}`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FF4B3E] hover:bg-[#ff3526] text-white font-bold text-xs shadow-md uppercase tracking-wider"
                          >
                            <MessageCircle className="w-3.5 h-3.5 fill-white" />
                            <span>Request Quote</span>
                          </a>
                        ) : (
                          <button
                            type="button"
                            onClick={() => handleQuickAdd(item)}
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#FFC800] hover:bg-[#e6b400] text-[#0A192F] font-extrabold text-xs shadow-md uppercase tracking-wider"
                          >
                            <ShoppingBag className="w-3.5 h-3.5" />
                            <span>Add (1)</span>
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Custom Corporate & Bulk Flavour Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0D203D] via-[#10274c] to-[#0D203D] border-2 border-[#FFC800]/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4 text-left">
            <div className="w-14 h-14 rounded-2xl bg-[#FFC800]/20 border border-[#FFC800]/40 flex items-center justify-center text-2xl shrink-0 text-[#FFC800]">
              <Gift className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-display text-xl font-extrabold text-white">
                Custom Branded Bags, Buckets & Bulk Catering
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                <em>Ordering for 50 to 5,000+ attendees?</em> We provide customized corporate stickers, event monograms, and custom flavor combinations across Greater Accra.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onOpenBulkInquiry}
            className="whitespace-nowrap px-7 py-4 rounded-xl bg-[#FF4B3E] hover:bg-[#ff3526] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xl shadow-[#FF4B3E]/30 shrink-0"
          >
            Request Bulk Corporate Proposal
          </button>
        </div>

      </div>
    </section>
  );
};
