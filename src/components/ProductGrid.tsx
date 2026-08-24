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
    <section id="flavours" className="py-20 bg-white relative border-t border-slate-200 text-slate-900">
      {/* Subtle Burst Background Pattern */}
      <div className="absolute inset-0 bg-burst-pattern opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Poppins font & tasteful italics */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300/80 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Official Menu Architecture</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Popcorn King Menu Architecture
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            <em>&ldquo;Fresh popcorn. Big moments.&rdquo;</em> Explore our handcrafted signature glazes, customizable packaging sizes, ice-cold refreshments, and full live event packages in Accra.
          </p>
        </div>

        {/* Filter, Search & View Controls */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all uppercase tracking-wider flex items-center gap-1.5 ${
                  activeCategory === cat.id
                    ? 'bg-[#FFC800] text-[#0A192F] shadow-sm font-black'
                    : 'bg-slate-50 text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  activeCategory === cat.id ? 'bg-[#0A192F] text-[#FFC800]' : 'bg-slate-200 text-slate-700'
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
                className="w-full bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm focus:outline-none focus:border-amber-500 focus:bg-white"
              />
            </div>

            {/* Physical Menu Flyer Button & View Mode Toggle Buttons */}
            {onOpenPhysicalMenu && (
              <button
                type="button"
                onClick={onOpenPhysicalMenu}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold transition-all shadow-2xs shrink-0 whitespace-nowrap"
                title="View & Print Official Physical Menu Flyer"
              >
                <span>📄 Printable Menu & Flyers</span>
              </button>
            )}

            {/* View Mode Toggle Buttons */}
            <div className="flex items-center bg-slate-100 border border-slate-200 rounded-xl p-1 shrink-0">
              <button
                type="button"
                onClick={() => setViewMode('cards')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'cards' ? 'bg-white text-slate-900 shadow-2xs font-bold' : 'text-slate-500 hover:text-slate-900'
                }`}
                title="Grid Cards View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode('table')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'table' ? 'bg-white text-slate-900 shadow-2xs font-bold' : 'text-slate-500 hover:text-slate-900'
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
              <div className="text-center py-16 bg-slate-50 rounded-3xl border border-slate-200">
                <p className="text-slate-600 text-base">No items found matching &ldquo;{searchQuery}&rdquo;</p>
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
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-lg">
            <div className="p-6 border-b border-slate-200 flex items-center justify-between bg-slate-50/70">
              <div>
                <h3 className="font-display text-xl font-bold text-slate-900">
                  Official Menu Architecture Table
                </h3>
                <p className="text-xs text-slate-600 mt-0.5">
                  <em>Structured overview with exact categories, descriptions, and standard pricing</em>
                </p>
              </div>
              <span className="text-xs font-bold text-amber-800 px-3 py-1 bg-amber-100 border border-amber-300 rounded-full">
                Accra, Ghana
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100/90 text-slate-900 text-xs font-black uppercase tracking-wider border-b border-slate-200">
                    <th className="py-4 px-6">Category</th>
                    <th className="py-4 px-6">Item / Flavor</th>
                    <th className="py-4 px-6">Description</th>
                    <th className="py-4 px-6">Price</th>
                    <th className="py-4 px-6 text-right">Quick Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm text-slate-700">
                  {filteredItems.map((item) => (
                    <tr key={item.id} className="hover:bg-amber-50/40 transition-colors group">
                      <td className="py-4 px-6 font-bold text-amber-800 whitespace-nowrap">
                        <span className="px-2.5 py-1 rounded-lg bg-amber-50 border border-amber-200 text-[11px] uppercase tracking-wider font-semibold">
                          {item.categoryLabel}
                        </span>
                      </td>
                      <td className="py-4 px-6 font-bold text-slate-900">
                        <div className="flex items-center gap-3">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-10 h-10 rounded-lg object-cover bg-slate-100 border border-slate-200 shrink-0"
                            referrerPolicy="no-referrer"
                          />
                          <div>
                            <span>{item.name}</span>
                            {item.badge && (
                              <span className="block text-[10px] text-[#FF4B3E] font-semibold">
                                {item.badge}
                              </span>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-slate-600 italic max-w-md">
                        &ldquo;{item.description}&rdquo;
                      </td>
                      <td className="py-4 px-6 font-extrabold text-slate-900 whitespace-nowrap">
                        {item.isQuoteOnRequest ? (
                          <span className="text-amber-700 italic font-semibold">*Quote on Request*</span>
                        ) : (
                          <span className="text-slate-900 font-black">{item.priceDisplay}</span>
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
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FF4B3E] hover:bg-[#ff3526] text-white font-bold text-xs shadow-xs uppercase tracking-wider"
                          >
                            <MessageCircle className="w-3.5 h-3.5 fill-white" />
                            <span>Request Quote</span>
                          </a>
                        ) : (
                          <button
                            type="button"
                            onClick={() => handleQuickAdd(item)}
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#FFC800] hover:bg-[#e6b400] text-[#0A192F] font-extrabold text-xs shadow-xs uppercase tracking-wider"
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
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-50 via-white to-amber-50 border-2 border-amber-300 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="flex items-center gap-4 text-left">
            <div className="w-14 h-14 rounded-2xl bg-amber-100 border border-amber-300 flex items-center justify-center text-2xl shrink-0 text-amber-800">
              <Gift className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-display text-xl font-extrabold text-slate-900">
                Custom Branded Bags, Buckets & Bulk Catering
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                <em>Ordering for 50 to 5,000+ attendees?</em> We provide customized corporate stickers, event monograms, and custom flavor combinations across Greater Accra.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onOpenBulkInquiry}
            className="whitespace-nowrap px-7 py-4 rounded-xl bg-[#FF4B3E] hover:bg-[#ff3526] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#FF4B3E]/20 shrink-0"
          >
            Request Bulk Corporate Proposal
          </button>
        </div>

      </div>
    </section>
  );
};
