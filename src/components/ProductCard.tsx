import React, { useState } from 'react';
import { ShoppingBag, MessageCircle, Check, Info, Sparkles, Calendar, ArrowRight } from 'lucide-react';
import { MenuItem, PopcornSizeOption } from '../types';

interface ProductCardProps {
  product: MenuItem;
  onAddToCart: (product: MenuItem, selectedSize: PopcornSizeOption, quantity: number, selectedOption?: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const defaultSize: PopcornSizeOption = (product.sizes && product.sizes.length > 0)
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
      // scroll to event catering or open quote
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
        `👑 *POPCORN KING EVENT PACKAGE INQUIRY* 🍿\n\n• *Package Name:* ${product.name}\n• *Details:* ${product.description}\n\n_Hello Popcorn King! Please provide quotation and availability for this event package in Accra._`
      )}`
    : `https://wa.me/233550999008?text=${encodeURIComponent(
        `👑 *POPCORN KING DIRECT ORDER* 🍿\n\n• *Item / Category:* ${product.name} (${product.categoryLabel})\n• *Selected Size / Pack:* ${selectedSize.name}${selectedOption ? `\n• *Selected Option:* ${selectedOption}` : ''}\n• *Quantity:* ${quantity}\n• *Estimated Total:* GH₵ ${(selectedSize.priceGHS * quantity).toFixed(2)}\n\n_Hello Popcorn King! Please confirm availability and delivery in Accra._`
      )}`;

  return (
    <div className="bg-white rounded-3xl border border-slate-200 hover:border-amber-400/80 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-md hover:shadow-xl text-slate-900">
      {/* Product Image & Badges */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />

        {/* Gradient Shadow */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

        {/* Category Pill Top Left */}
        <div className="absolute top-3 left-3 flex flex-wrap items-center gap-1.5 pointer-events-none">
          <span className="text-[10px] font-black px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-sm text-slate-900 border border-slate-200 shadow-xs uppercase tracking-wider">
            {product.categoryLabel}
          </span>
          {product.badge && (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FF4B3E] text-white shadow-xs">
              {product.badge}
            </span>
          )}
        </div>

        {/* Price Tag Overlay Top Right */}
        <div className="absolute top-3 right-3 bg-[#FFC800] text-[#0A192F] font-black text-xs px-2.5 py-1 rounded-xl shadow-md uppercase tracking-wider">
          {isQuoteOnRequest ? <em className="not-italic">Quote on Request</em> : product.priceDisplay}
        </div>

        {/* Info Toggle Button */}
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="absolute bottom-3 right-3 p-2 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-amber-700 backdrop-blur-sm border border-slate-200 transition-colors shadow-xs"
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
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-display text-xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors leading-tight">
                {product.name}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 italic mt-1.5 leading-relaxed">
              &ldquo;{product.description}&rdquo;
            </p>
          </div>

          {/* Details Drawer if open */}
          {showDetails && (
            <div className="my-3 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1.5 animate-in fade-in duration-200">
              <p><strong>Category:</strong> {product.categoryLabel}</p>
              <p><strong>Description:</strong> <em>{product.description}</em></p>
              {product.unitLabel && <p><strong>Serving Style:</strong> {product.unitLabel}</p>}
            </div>
          )}

          {/* Flavor Notes Tags */}
          {product.flavorNotes && product.flavorNotes.length > 0 && (
            <div className="flex flex-wrap gap-1.5 my-3">
              {product.flavorNotes.map((note) => (
                <span
                  key={note}
                  className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-amber-50 text-amber-900 border border-amber-200"
                >
                  {note}
                </span>
              ))}
            </div>
          )}

          {/* Flavor/Drink Option Selector if available (e.g. Vanilla / Chocolate / Strawberry) */}
          {product.options && product.options.length > 0 && (
            <div className="mt-3">
              <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-1.5">
                Choose Variety:
              </label>
              <div className="flex flex-wrap gap-1.5">
                {product.options.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setSelectedOption(opt)}
                    className={`text-xs px-2.5 py-1 rounded-lg border transition-all ${
                      selectedOption === opt
                        ? 'bg-[#FFC800] text-[#0A192F] font-bold border-[#FFC800] shadow-2xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-400'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Packaging / Portion Option Selector if multiple sizes */}
          {product.sizes && product.sizes.length > 1 && (
            <div className="mt-3">
              <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-1.5">
                Select Size / Format:
              </label>
              <div className="grid grid-cols-1 gap-1.5">
                {product.sizes.map((size) => {
                  const isSelected = selectedSize.id === size.id;
                  return (
                    <button
                      key={size.id}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`text-left px-3 py-2 rounded-xl border transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-amber-50 border-amber-400 text-slate-900 shadow-2xs'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900'
                      }`}
                    >
                      <div>
                        <span className={`text-xs font-bold ${isSelected ? 'text-amber-900' : 'text-slate-800'}`}>
                          {size.name}
                        </span>
                        {size.servings && (
                          <span className="text-[10px] text-slate-500 ml-1.5 italic">({size.servings})</span>
                        )}
                      </div>
                      <span className="text-xs font-black text-amber-700">
                        {size.priceDisplay || `GH₵ ${size.priceGHS}`}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Pricing & Actions */}
        <div className="pt-4 mt-4 border-t border-slate-100">
          {!isQuoteOnRequest ? (
            <>
              <div className="flex items-center justify-between mb-3.5">
                <div>
                  <span className="text-[11px] text-slate-500 block italic">Total Price</span>
                  <span className="font-display text-2xl font-black text-slate-900">
                    GH₵ {(selectedSize.priceGHS * quantity).toFixed(2)}
                  </span>
                </div>

                {/* Quantity Selector */}
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-xl p-0.5">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-7 h-7 flex items-center justify-center text-slate-600 hover:text-slate-950 hover:bg-slate-200 rounded-lg text-sm font-bold transition-colors"
                  >
                    -
                  </button>
                  <span className="w-8 text-center text-xs font-bold text-slate-900">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-7 h-7 flex items-center justify-center text-slate-600 hover:text-slate-950 hover:bg-slate-200 rounded-lg text-sm font-bold transition-colors"
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
                  className={`w-full py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-xs uppercase tracking-wider ${
                    addedAnimation
                      ? 'bg-emerald-500 text-white'
                      : 'bg-[#FFC800] hover:bg-[#e6b400] text-[#0A192F]'
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
                  className="w-full py-2.5 px-3 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-1.5 transition-colors text-center shadow-xs uppercase tracking-wider"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </>
          ) : (
            <div className="space-y-2">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-slate-500 italic">Custom Event Pricing</span>
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                  <em>*Quote on Request*</em>
                </span>
              </div>
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl font-bold text-xs bg-[#FF4B3E] hover:bg-[#ff3526] text-white flex items-center justify-center gap-2 transition-all text-center shadow-md uppercase tracking-wider"
              >
                <Calendar className="w-4 h-4" />
                <span>Request Official Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
