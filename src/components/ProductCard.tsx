import React, { useState } from 'react';
import { ShoppingBag, MessageCircle, Check, Info, Calendar, ArrowRight } from 'lucide-react';
import { MenuItem, PopcornSizeOption } from '../types';

interface ProductCardProps {
  product: MenuItem;
  onAddToCart: (product: MenuItem, selectedSize: PopcornSizeOption, quantity: number, selectedOption?: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const defaultSize: PopcornSizeOption =
    product.sizes && product.sizes.length > 0
      ? product.sizes[0]
      : {
          id: 'standard',
          name: product.name,
          priceGHS: product.priceGHS,
          priceDisplay: product.priceDisplay,
        };

  const [selectedSize, setSelectedSize] = useState<PopcornSizeOption>(defaultSize);
  const [selectedOption, setSelectedOption] = useState<string>(
    product.options && product.options.length > 0 ? product.options[0] : ''
  );
  const [quantity, setQuantity] = useState(1);
  const [showDetails, setShowDetails] = useState(false);
  const [addedAnimation, setAddedAnimation] = useState(false);

  const isQuoteOnRequest = product.isQuoteOnRequest || product.priceGHS === 0;

  const handleAdd = () => {
    if (isQuoteOnRequest) {
      const el = document.getElementById('catering') || document.getElementById('event-calculator');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    onAddToCart(product, selectedSize, quantity, selectedOption || undefined);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1500);
  };

  const directWhatsAppUrl = isQuoteOnRequest
    ? `https://wa.me/233550999008?text=${encodeURIComponent(
        `👑 *POPCORN KING EVENT INQUIRY* 🍿\n\n• *Package Name:* ${product.name}\n• *Details:* ${product.description}\n\n_Hello Popcorn King! Please confirm pricing and date availability in Accra._`
      )}`
    : `https://wa.me/233550999008?text=${encodeURIComponent(
        `👑 *POPCORN KING ORDER* 🍿\n\n• *Item:* ${product.name}\n• *Size:* ${selectedSize.name}${selectedOption ? `\n• *Option:* ${selectedOption}` : ''}\n• *Quantity:* ${quantity}\n• *Price:* GH₵ ${(selectedSize.priceGHS * quantity).toFixed(2)}\n\n_Hello Popcorn King! Please confirm delivery in Accra._`
      )}`;

  return (
    <div className="bg-neutral-900/90 rounded-3xl border border-neutral-800 hover:border-[#F5B800] transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-xl hover:shadow-2xl text-white">
      {/* Product Image & Badges */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
        <img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />

        {/* Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/30" />

        {/* Category Pill Top Left */}
        <div className="absolute top-3 left-3 flex flex-wrap items-center gap-1.5 pointer-events-none">
          <span className="text-[10px] font-black px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-sm text-[#F5B800] border border-neutral-700 shadow-xs uppercase tracking-wider">
            {product.categoryLabel}
          </span>
          {product.badge && (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#F5B800] text-black shadow-xs">
              {product.badge}
            </span>
          )}
        </div>

        {/* Price Tag Overlay Top Right */}
        <div className="absolute top-3 right-3 bg-[#F5B800] text-black font-black text-xs px-2.5 py-1 rounded-xl shadow-md uppercase tracking-wider">
          {product.priceDisplay}
        </div>

        {/* Info Toggle Button */}
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="absolute bottom-3 right-3 p-2 rounded-full bg-black/70 hover:bg-neutral-800 text-white/80 hover:text-[#F5B800] backdrop-blur-sm border border-neutral-700 transition-colors shadow-xs cursor-pointer"
          title="Item details"
        >
          <Info className="w-4 h-4" />
        </button>
      </div>

      {/* Product Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Header & Description */}
          <div className="mb-2">
            <h3 className="font-display text-xl font-bold text-white group-hover:text-[#F5B800] transition-colors leading-tight">
              {product.name}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1.5 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Details Drawer if open */}
          {showDetails && (
            <div className="my-3 p-3 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-neutral-300 space-y-1.5 animate-in fade-in duration-200">
              <p>
                <strong className="text-white">Category:</strong> {product.categoryLabel}
              </p>
              <p>
                <strong className="text-white">Profile:</strong> {product.description}
              </p>
              {product.unitLabel && (
                <p>
                  <strong className="text-white">Format:</strong> {product.unitLabel}
                </p>
              )}
            </div>
          )}

          {/* Flavor Notes Tags */}
          {product.flavorNotes && product.flavorNotes.length > 0 && (
            <div className="flex flex-wrap gap-1.5 my-3">
              {product.flavorNotes.map((note) => (
                <span
                  key={note}
                  className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-neutral-950 text-neutral-300 border border-neutral-800"
                >
                  {note}
                </span>
              ))}
            </div>
          )}

          {/* Flavor/Drink Option Selector if available */}
          {product.options && product.options.length > 0 && (
            <div className="mt-3">
              <label className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block mb-1.5">
                Choose Variety:
              </label>
              <div className="flex flex-wrap gap-1.5">
                {product.options.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setSelectedOption(opt)}
                    className={`text-xs px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                      selectedOption === opt
                        ? 'bg-[#F5B800] text-black font-bold border-[#F5B800] shadow-xs'
                        : 'bg-neutral-950 text-neutral-300 border-neutral-800 hover:border-neutral-700'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Packaging / Portion Option Selector (Small / Regular / Large) */}
          {product.sizes && product.sizes.length > 1 && (
            <div className="mt-3">
              <label className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block mb-1.5">
                Select Size:
              </label>
              <div className="grid grid-cols-3 gap-1.5">
                {product.sizes.map((size) => {
                  const isSelected = selectedSize.id === size.id;
                  return (
                    <button
                      key={size.id}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`text-center px-2 py-2 rounded-xl border transition-all flex flex-col items-center justify-center cursor-pointer ${
                        isSelected
                          ? 'bg-[#F5B800] border-[#F5B800] text-black shadow-md'
                          : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:border-neutral-700 hover:text-white'
                      }`}
                    >
                      <span className="text-xs font-bold leading-tight">
                        {size.name}
                      </span>
                      <span className={`text-xs font-black mt-0.5 ${isSelected ? 'text-black' : 'text-[#F5B800]'}`}>
                        GH₵ {size.priceGHS}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Pricing & Actions */}
        <div className="pt-4 mt-4 border-t border-neutral-800">
          {!isQuoteOnRequest ? (
            <>
              <div className="flex items-center justify-between mb-3.5">
                <div>
                  <span className="text-[11px] text-neutral-400 block">Total</span>
                  <span className="font-display text-2xl font-black text-[#F5B800] tabular-nums">
                    GH₵ {(selectedSize.priceGHS * quantity).toFixed(2)}
                  </span>
                </div>

                {/* Quantity Selector */}
                <div className="flex items-center bg-neutral-950 border border-neutral-800 rounded-xl p-0.5">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-7 h-7 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg text-sm font-bold transition-colors cursor-pointer"
                  >
                    -
                  </button>
                  <span className="w-8 text-center text-xs font-bold text-white tabular-nums">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-7 h-7 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg text-sm font-bold transition-colors cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={handleAdd}
                  className={`w-full py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-xs uppercase tracking-wider cursor-pointer ${
                    addedAnimation
                      ? 'bg-white text-black font-black'
                      : 'bg-[#F5B800] hover:bg-[#FFC700] text-black font-black'
                  }`}
                >
                  {addedAnimation ? (
                    <>
                      <Check className="w-4 h-4 stroke-[3]" />
                      <span>Added!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Add to Cart</span>
                    </>
                  )}
                </button>

                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-xl font-bold text-xs bg-neutral-950 hover:bg-neutral-800 border border-neutral-700 text-[#F5B800] flex items-center justify-center gap-1.5 transition-colors text-center shadow-xs uppercase tracking-wider"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-[#F5B800] text-neutral-950" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </>
          ) : (
            <div className="space-y-2">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-neutral-400">Custom Event Package</span>
                <span className="text-xs font-bold text-[#F5B800] uppercase tracking-wider">
                  GH₵ {product.priceGHS.toLocaleString()}
                </span>
              </div>
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl font-black text-xs bg-[#F5B800] hover:bg-[#FFC700] text-black flex items-center justify-center gap-2 transition-all text-center shadow-lg uppercase tracking-wider"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Station Package</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
