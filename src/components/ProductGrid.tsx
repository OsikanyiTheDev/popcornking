import React, { useState } from 'react';
import { MENU_ITEMS } from '../data/products';
import { ProductCard } from './ProductCard';
import { MenuItem, PopcornSizeOption, MenuCategoryKey } from '../types';
import { Sparkles, Search, Gift, List, LayoutGrid, MessageCircle, ShoppingBag } from 'lucide-react';

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
    { id: 'all', label: 'All Items', count: MENU_ITEMS.length },
    { id: 'signature', label: '🍿 7 Signature Flavours', count: MENU_ITEMS.filter((i) => i.category === 'signature').length },
    { id: 'refreshments', label: '🥤 Refreshments', count: MENU_ITEMS.filter((i) => i.category === 'refreshments').length },
    { id: 'event_packages', label: '🎪 Event Packages', count: MENU_ITEMS.filter((i) => i.category === 'event_packages').length },
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
    const defaultSize =
      item.sizes && item.sizes.length > 0
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
    <section id="flavours" className="py-20 bg-[#0D0D0D] relative border-t border-neutral-800 text-white">
      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 bg-cart-dots opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-[#F5B800] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 fill-[#F5B800]" />
            <span>Official Menu Board</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
            Official Popcorn King Menu
          </h2>
          <p className="font-script text-2xl sm:text-3xl text-[#F5B800] mt-1 font-bold">
            fresh Popcorn. Big Moments!!!
          </p>
          <p className="text-neutral-400 text-sm sm:text-base mt-2 leading-relaxed">
            All 7 signature flavours available in <strong className="text-white">Small (GH₵ 10)</strong>, <strong className="text-white">Regular (GH₵ 15)</strong>, and <strong className="text-white">Large (GH₵ 20)</strong> portions — plus our famous Rich Ghanaian Chocolate, cold drinks, and full event carts!
          </p>
        </div>

        {/* Filter, Search & View Controls */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-8 pb-6 border-b border-neutral-800">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all uppercase tracking-wider flex items-center gap-2 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#F5B800] text-black shadow-md font-black'
                    : 'bg-neutral-900 text-neutral-300 hover:text-white hover:bg-neutral-800 border border-neutral-800'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    activeCategory === cat.id ? 'bg-black text-[#F5B800]' : 'bg-neutral-800 text-neutral-400'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search Input & View Toggle */}
          <div className="flex items-center gap-3 w-full lg:w-auto">
            <div className="relative flex-1 lg:w-72">
              <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search menu (Caramel, Ginger, etc.)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm focus:outline-none focus:border-[#F5B800] focus:ring-1 focus:ring-[#F5B800]"
              />
            </div>

            {/* Menu Board Modal Button */}
            {onOpenPhysicalMenu && (
              <button
                type="button"
                onClick={onOpenPhysicalMenu}
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-[#F5B800] text-xs font-bold transition-all shadow-xs shrink-0 whitespace-nowrap cursor-pointer"
                title="View Official Menu Board"
              >
                <span>📄 Menu Board</span>
              </button>
            )}

            {/* View Mode Toggle Buttons */}
            <div className="flex items-center bg-neutral-900 border border-neutral-800 rounded-xl p-1 shrink-0">
              <button
                type="button"
                onClick={() => setViewMode('cards')}
                className={`p-2 rounded-lg transition-colors cursor-pointer ${
                  viewMode === 'cards' ? 'bg-[#F5B800] text-black shadow-xs font-bold' : 'text-neutral-400 hover:text-white'
                }`}
                title="Grid Cards View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode('table')}
                className={`p-2 rounded-lg transition-colors cursor-pointer ${
                  viewMode === 'table' ? 'bg-[#F5B800] text-black shadow-xs font-bold' : 'text-neutral-400 hover:text-white'
                }`}
                title="Menu Table View"
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
                  <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-neutral-900/60 rounded-3xl border border-neutral-800">
                <p className="text-neutral-400 text-base">No items found matching &ldquo;{searchQuery}&rdquo;</p>
                <button
                  type="button"
                  onClick={() => {
                    setActiveCategory('all');
                    setSearchQuery('');
                  }}
                  className="mt-4 px-5 py-2.5 bg-[#F5B800] text-black font-bold rounded-xl text-xs uppercase tracking-wider cursor-pointer"
                >
                  Reset Menu Filter
                </button>
              </div>
            )}
          </>
        )}

        {/* View Mode 2: Official Menu Table View */}
        {viewMode === 'table' && (
          <div className="bg-neutral-900 rounded-3xl border border-neutral-800 overflow-hidden shadow-2xl">
            <div className="p-6 border-b border-neutral-800 flex items-center justify-between bg-neutral-950/80">
              <div>
                <h3 className="font-display text-xl font-bold text-white">
                  Official Menu Board Table
                </h3>
                <p className="text-xs text-neutral-400 mt-0.5">
                  Exact pricing and size tiers for all 7 signature flavours and packages
                </p>
              </div>
              <span className="text-xs font-bold text-black px-3 py-1 bg-[#F5B800] rounded-full">
                Accra, Ghana
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-neutral-950 text-[#F5B800] text-xs font-black uppercase tracking-wider border-b border-neutral-800">
                    <th className="py-4 px-6">Category</th>
                    <th className="py-4 px-6">Flavour / Item</th>
                    <th className="py-4 px-6">Description</th>
                    <th className="py-4 px-6">Price</th>
                    <th className="py-4 px-6 text-right">Quick Order</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800 text-xs sm:text-sm text-neutral-300">
                  {filteredItems.map((item) => (
                    <tr key={item.id} className="hover:bg-neutral-800/50 transition-colors group">
                      <td className="py-4 px-6 font-bold text-[#F5B800] whitespace-nowrap">
                        <span className="px-2.5 py-1 rounded-lg bg-neutral-950 border border-neutral-800 text-[11px] uppercase tracking-wider font-semibold">
                          {item.categoryLabel}
                        </span>
                      </td>
                      <td className="py-4 px-6 font-bold text-white">
                        <div className="flex items-center gap-3">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-10 h-10 rounded-lg object-cover bg-black border border-neutral-700 shrink-0"
                            referrerPolicy="no-referrer"
                          />
                          <div>
                            <span>{item.name}</span>
                            {item.badge && (
                              <span className="block text-[10px] text-[#F5B800] font-semibold">
                                {item.badge}
                              </span>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-neutral-400 max-w-md">
                        {item.description}
                      </td>
                      <td className="py-4 px-6 font-black text-[#F5B800] whitespace-nowrap tabular-nums">
                        {item.priceDisplay}
                      </td>
                      <td className="py-4 px-6 text-right whitespace-nowrap">
                        {item.isQuoteOnRequest ? (
                          <a
                            href={`https://wa.me/233550999008?text=${encodeURIComponent(
                              `👑 *POPCORN KING INQUIRY* 🍿\n\nI want to inquire about: *${item.name}*\nDescription: ${item.description}`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F5B800] hover:bg-[#FFC700] text-black font-black text-xs shadow-xs uppercase tracking-wider"
                          >
                            <MessageCircle className="w-3.5 h-3.5 fill-black" />
                            <span>Inquire</span>
                          </a>
                        ) : (
                          <button
                            type="button"
                            onClick={() => handleQuickAdd(item)}
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#F5B800] hover:bg-[#FFC700] text-black font-extrabold text-xs shadow-xs uppercase tracking-wider cursor-pointer"
                          >
                            <ShoppingBag className="w-3.5 h-3.5" />
                            <span>Add</span>
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
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-neutral-900 border-2 border-neutral-800 hover:border-[#F5B800]/50 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4 text-left">
            <div className="w-14 h-14 rounded-2xl bg-black border border-neutral-800 flex items-center justify-center text-2xl shrink-0 text-[#F5B800]">
              <Gift className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-display text-xl font-extrabold text-white">
                Custom Branded Bags, Buckets & Bulk Catering
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                Ordering for 50 to 5,000+ attendees? We provide customized company stickers, wedding monograms, and custom flavor combinations across Greater Accra.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onOpenBulkInquiry}
            className="whitespace-nowrap px-7 py-4 rounded-xl bg-[#F5B800] hover:bg-[#FFC700] text-black font-black text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#F5B800]/15 shrink-0 cursor-pointer"
          >
            Request Bulk Proposal
          </button>
        </div>

      </div>
    </section>
  );
};
