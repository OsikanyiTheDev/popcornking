import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/faqReviewsGallery';
import { Sparkles, Maximize2, X } from 'lucide-react';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'events', label: 'Events & Catering' },
    { id: 'flavours', label: 'Popcorn Flavours' },
    { id: 'machines', label: 'Equipment & Carts' },
    { id: 'customers', label: 'Happy Customers' },
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) =>
    activeCategory === 'all' ? true : item.category === activeCategory
  );

  return (
    <section id="gallery" className="py-20 bg-[#0A192F] relative border-t border-[#1E3A5F] text-white">
      {/* Pattern */}
      <div className="absolute inset-0 bg-burst-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFC800]/15 border border-[#FFC800]/30 text-[#FFC800] text-xs font-black uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Visual Showcase</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
            Popcorn King Moments
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-4">
            A glimpse into our live Accra event setups, mouth-watering gourmet batches, custom branding, and joyful celebrations.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex justify-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black whitespace-nowrap transition-all uppercase tracking-wider ${
                activeCategory === cat.id
                  ? 'bg-[#FFC800] text-[#0A192F] shadow-lg shadow-[#FFC800]/20'
                  : 'bg-[#0D203D] text-slate-300 hover:text-white border border-[#1E3A5F]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="relative aspect-square rounded-3xl overflow-hidden bg-[#0D203D] border border-[#1E3A5F] group cursor-pointer shadow-xl hover:border-[#FFC800]/50 transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/90 via-[#0A192F]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <div className="flex items-center justify-between">
                  <h4 className="font-display text-base font-bold text-white">{item.title}</h4>
                  <div className="p-1.5 rounded-lg bg-[#FFC800] text-[#0A192F]">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-xs text-slate-300 line-clamp-2 mt-1">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
            <div className="relative max-w-3xl w-full bg-[#0A192F] border border-[#1E3A5F] rounded-3xl overflow-hidden shadow-2xl">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-[#0D203D] hover:bg-[#1E3A5F] text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[4/3] w-full bg-black">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6 bg-[#0D203D] border-t border-[#1E3A5F]">
                <h3 className="font-display text-2xl font-bold text-white">{selectedImage.title}</h3>
                <p className="text-sm text-slate-300 mt-2">{selectedImage.caption}</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
