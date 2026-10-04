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
    <section id="gallery" className="py-24 bg-[#0D0D0D] relative border-t border-neutral-800 text-white">
      {/* Ambient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F5B800]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-[#F5B800]/40 text-[#F5B800] text-xs font-black uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#F5B800]" />
            <span>Visual Showcase</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
            Popcorn King <span className="text-[#F5B800]">Moments</span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg mt-4">
            A glimpse into our live Accra event setups, mouth-watering gourmet batches, custom branding, and joyful celebrations.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex justify-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black whitespace-nowrap transition-all uppercase tracking-wider cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#F5B800] text-black shadow-lg shadow-[#F5B800]/20'
                  : 'bg-[#141414] text-neutral-300 hover:text-white border border-neutral-800'
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
              className="relative aspect-square rounded-3xl overflow-hidden bg-[#141414] border border-neutral-800 group cursor-pointer shadow-lg hover:shadow-2xl hover:border-[#F5B800] transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1572177191856-3cde618dee1f?auto=format&fit=crop&w=800&q=80';
                }}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <div className="flex items-center justify-between">
                  <h4 className="font-display text-base font-bold text-white">{item.title}</h4>
                  <div className="p-1.5 rounded-lg bg-[#F5B800] text-black">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-xs text-neutral-300 line-clamp-2 mt-1">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
            <div className="relative max-w-3xl w-full bg-[#0D0D0D] border-2 border-neutral-800 rounded-3xl overflow-hidden shadow-2xl">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-neutral-900/90 hover:bg-neutral-800 text-white shadow-md transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[4/3] w-full bg-neutral-950 flex items-center justify-center">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6 bg-[#141414] border-t border-neutral-800">
                <h3 className="font-display text-2xl font-bold text-white">{selectedImage.title}</h3>
                <p className="text-sm text-neutral-300 mt-2">{selectedImage.caption}</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
