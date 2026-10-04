import React, { useState } from 'react';
import { Calculator, Users, Check, MessageCircle } from 'lucide-react';
import { OFFICIAL_FLAVOURS } from '../data/products';
import { EVENT_TYPES, ACCRA_AREAS } from '../data/catering';
import confetti from 'canvas-confetti';

interface InstantEventCalculatorProps {
  onQuoteSent?: () => void;
}

export const InstantEventCalculator: React.FC<InstantEventCalculatorProps> = ({ onQuoteSent }) => {
  const [eventType, setEventType] = useState('Wedding Reception');
  const [guestCount, setGuestCount] = useState(120);
  const [serviceStyle, setServiceStyle] = useState<'live_cart' | 'sealed_packs' | 'luxury_tubs'>('live_cart');
  const [selectedFlavors, setSelectedFlavors] = useState<string[]>(['sweet-caramel', 'milkyway-galaxy', 'vibrant-rainbow']);
  const [customBranding, setCustomBranding] = useState(true);
  const [eventDate, setEventDate] = useState('');
  const [locationArea, setLocationArea] = useState('East Legon / Shiashie');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');

  const toggleFlavor = (id: string) => {
    if (selectedFlavors.includes(id)) {
      if (selectedFlavors.length > 1) {
        setSelectedFlavors(selectedFlavors.filter((f) => f !== id));
      }
    } else {
      setSelectedFlavors([...selectedFlavors, id]);
    }
  };

  // Pricing calculation in GH₵
  const calculateEstimate = () => {
    let perPersonRate = 14;
    let baseSetup = 500;

    if (serviceStyle === 'live_cart') {
      perPersonRate = 16;
      baseSetup = 700; // Machine, Attendant, Power & Station
    } else if (serviceStyle === 'sealed_packs') {
      perPersonRate = 12;
      baseSetup = 250;
    } else if (serviceStyle === 'luxury_tubs') {
      perPersonRate = 22;
      baseSetup = 350;
    }

    // Volume discount for larger events
    if (guestCount > 300) {
      perPersonRate *= 0.88;
    } else if (guestCount > 150) {
      perPersonRate *= 0.92;
    }

    let subtotal = baseSetup + (guestCount * perPersonRate);
    if (customBranding) {
      subtotal += Math.min(250, guestCount * 1.5);
    }

    return Math.round(subtotal);
  };

  const estimatedTotal = calculateEstimate();

  const handleSendQuoteWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#F5B800', '#FFFFFF', '#FFC700'],
      });
    } catch {
      // safe
    }

    const selectedFlavorNames = selectedFlavors
      .map((id) => OFFICIAL_FLAVOURS.find((f) => f.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const serviceName =
      serviceStyle === 'live_cart'
        ? 'Live Glass Popping Cart & Uniformed Attendant'
        : serviceStyle === 'sealed_packs'
        ? 'Pre-Packaged Custom Snack Bags'
        : 'Luxury Movie Tubs with Custom Labels';

    const message =
      `👑 *POPCORN KING INSTANT EVENT QUOTATION REQUEST* 🍿\n\n` +
      `• *Client Name:* ${clientName || 'Event Host'}\n` +
      `• *Contact Phone:* ${clientPhone || 'N/A'}\n` +
      `• *Event Type:* ${eventType}\n` +
      `• *Estimated Guests:* ${guestCount} people\n` +
      `• *Service Style:* ${serviceName}\n` +
      `• *Selected Flavours:* ${selectedFlavorNames}\n` +
      `• *Custom Logo/Branding:* ${customBranding ? 'Yes (Included)' : 'No'}\n` +
      `• *Venue / Location in Accra:* ${locationArea}\n` +
      `• *Target Event Date:* ${eventDate || 'To be confirmed'}\n\n` +
      `💰 *Estimated Budget:* ~GH₵ ${estimatedTotal.toLocaleString()}\n\n` +
      `_Hello Popcorn King! Please confirm availability for my event and send the official invoice proposal._`;

    const whatsappUrl = `https://wa.me/233550999008?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    if (onQuoteSent) onQuoteSent();
  };

  return (
    <section id="event-calculator" className="py-20 bg-[#0D0D0D] relative border-t border-neutral-800 overflow-hidden text-white">
      {/* Subtle Dot pattern */}
      <div className="absolute inset-0 bg-cart-dots opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-[#F5B800] text-xs font-black uppercase tracking-wider mb-3">
            <Calculator className="w-4 h-4 text-[#F5B800]" />
            <span>Instant Catering Calculator</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
            Calculate Your Event Popcorn Package
          </h2>
          <p className="font-script text-2xl sm:text-3xl text-[#F5B800] mt-1 font-bold">
            fresh Popcorn. Big Moments!!!
          </p>
          <p className="text-neutral-400 text-sm sm:text-base mt-2">
            Select your event type, guest count, and favourite flavours to generate an instant budget estimate and lock in dates with our Accra catering team.
          </p>
        </div>

        <form onSubmit={handleSendQuoteWhatsApp} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left / Main Control Panel (7 cols) */}
          <div className="lg:col-span-7 bg-neutral-900 rounded-3xl p-6 sm:p-8 border border-neutral-800 shadow-2xl space-y-6">
            
            {/* Step 1: Event Type */}
            <div>
              <label className="text-xs font-black text-[#F5B800] uppercase tracking-wider block mb-2">
                1. Select Event Type
              </label>
              <select
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className="w-full bg-neutral-950 border border-neutral-800 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F5B800] focus:ring-1 focus:ring-[#F5B800] font-semibold"
              >
                {EVENT_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Step 2: Guest Count Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-black text-[#F5B800] uppercase tracking-wider flex items-center gap-1.5">
                  <Users className="w-4 h-4" />
                  <span>2. Guest Count</span>
                </label>
                <span className="font-display text-xl font-black text-black px-3 py-1 bg-[#F5B800] rounded-lg tabular-nums">
                  {guestCount} Guests
                </span>
              </div>
              <input
                type="range"
                min="25"
                max="1000"
                step="25"
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full h-2.5 bg-neutral-950 rounded-lg appearance-none cursor-pointer accent-[#F5B800]"
              />
              <div className="flex justify-between text-[11px] text-neutral-400 mt-1 font-medium">
                <span>25 Guests (Intimate)</span>
                <span>250 (Mid-size)</span>
                <span>500 (Large)</span>
                <span>1,000+ (Festival)</span>
              </div>
            </div>

            {/* Step 3: Service Style Selection */}
            <div>
              <label className="text-xs font-black text-[#F5B800] uppercase tracking-wider block mb-2">
                3. Service Setup & Presentation
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  {
                    id: 'live_cart',
                    title: 'Live King Cart',
                    desc: 'Hot live popping cart + uniformed chef attendants',
                    badge: 'Most Popular',
                  },
                  {
                    id: 'sealed_packs',
                    title: 'Branded Snack Bags',
                    desc: 'Pre-sealed fresh party bags with event monograms',
                    badge: 'Quick & Clean',
                  },
                  {
                    id: 'luxury_tubs',
                    title: 'Cinema Movie Tubs',
                    desc: 'Large tubs with snap lids & custom branding',
                    badge: 'VIP Finish',
                  },
                ].map((style) => (
                  <button
                    key={style.id}
                    type="button"
                    onClick={() => setServiceStyle(style.id as any)}
                    className={`p-3.5 rounded-2xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                      serviceStyle === style.id
                        ? 'bg-neutral-950 border-[#F5B800] shadow-md text-white ring-1 ring-[#F5B800]'
                        : 'bg-neutral-950/60 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                    }`}
                  >
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-neutral-900 border border-neutral-700 text-[#F5B800] inline-block mb-1.5 shadow-2xs">
                        {style.badge}
                      </span>
                      <p className="font-display text-sm font-bold text-white">{style.title}</p>
                      <p className="text-[11px] text-neutral-400 mt-1 leading-snug">{style.desc}</p>
                    </div>
                    {serviceStyle === style.id && (
                      <div className="mt-2 flex items-center gap-1 text-[11px] font-bold text-[#F5B800]">
                        <Check className="w-3.5 h-3.5 stroke-[3]" /> Selected
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Flavor Selection Matrix (The 7 Official Flavours) */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-black text-[#F5B800] uppercase tracking-wider">
                  4. Signature Flavour Selection ({selectedFlavors.length} chosen)
                </label>
                <span className="text-[11px] text-neutral-400">Tap to toggle</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {OFFICIAL_FLAVOURS.map((flavor) => {
                  const isSelected = selectedFlavors.includes(flavor.id);
                  return (
                    <button
                      key={flavor.id}
                      type="button"
                      onClick={() => toggleFlavor(flavor.id)}
                      className={`p-3 rounded-xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? 'bg-neutral-950 border-[#F5B800] text-white shadow-xs'
                          : 'bg-neutral-950/60 border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
                      }`}
                    >
                      <div>
                        <p className="text-xs font-bold text-white flex items-center gap-1.5">
                          <span>🍿</span> {flavor.name}
                        </p>
                        <p className="text-[10px] text-neutral-400 line-clamp-1 mt-0.5">{flavor.desc}</p>
                      </div>
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] shrink-0 font-black ${
                          isSelected ? 'bg-[#F5B800] text-black' : 'bg-neutral-800 border border-neutral-700'
                        }`}
                      >
                        {isSelected && '✓'}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 5: Custom Branding Toggle */}
            <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-white">Custom Logo & Event Theme Stickers</p>
                <p className="text-[11px] text-neutral-400 mt-0.5">
                  Print your wedding couple names, birthday theme, or corporate logo directly on all packaging.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setCustomBranding(!customBranding)}
                className={`w-12 h-6 rounded-full transition-colors relative flex items-center p-0.5 cursor-pointer ${
                  customBranding ? 'bg-[#F5B800]' : 'bg-neutral-800'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full transition-transform ${
                    customBranding ? 'translate-x-6 bg-black' : 'translate-x-0 bg-neutral-500'
                  }`}
                />
              </button>
            </div>

          </div>

          {/* Right / Instant Summary Card (5 cols) */}
          <div className="lg:col-span-5 bg-neutral-900 rounded-3xl p-6 sm:p-8 border-2 border-neutral-800 hover:border-[#F5B800]/50 shadow-2xl space-y-6 sticky top-28">
            
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#F5B800]">
                  Estimated Budget
                </span>
                <h3 className="font-display text-3xl sm:text-4xl font-black text-white mt-0.5 tabular-nums">
                  GH₵ {estimatedTotal.toLocaleString()}
                </h3>
              </div>
              <div className="text-right">
                <span className="text-[11px] text-black font-bold bg-[#F5B800] px-2.5 py-1 rounded-full">
                  Instant Estimate
                </span>
                <p className="text-[10px] text-neutral-400 mt-1 tabular-nums">
                  ~GH₵ {(estimatedTotal / guestCount).toFixed(1)} / guest
                </p>
              </div>
            </div>

            {/* Breakdown summary */}
            <div className="space-y-2.5 text-xs text-neutral-300">
              <div className="flex justify-between py-1 border-b border-neutral-800">
                <span className="text-neutral-400">Event Type:</span>
                <strong className="text-white">{eventType}</strong>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-800">
                <span className="text-neutral-400">Guest Count:</span>
                <strong className="text-white">{guestCount} Attendees</strong>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-800">
                <span className="text-neutral-400">Flavours ({selectedFlavors.length}):</span>
                <strong className="text-[#F5B800] text-right max-w-[200px] truncate">
                  {selectedFlavors.map((f) => OFFICIAL_FLAVOURS.find((fl) => fl.id === f)?.name).join(', ')}
                </strong>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-800">
                <span className="text-neutral-400">Custom Logo Stickers:</span>
                <strong className="text-white">{customBranding ? 'Included' : 'Standard'}</strong>
              </div>
            </div>

            {/* Booking Details Input */}
            <div className="space-y-3 pt-2">
              <div>
                <label className="text-[11px] font-bold text-neutral-300 block mb-1">
                  Your Name / Organization *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ama Darko / Corporate Host"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#F5B800] focus:ring-1 focus:ring-[#F5B800]"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[11px] font-bold text-neutral-300 block mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="055 099 9008"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#F5B800] focus:ring-1 focus:ring-[#F5B800]"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-neutral-300 block mb-1">Event Date</label>
                  <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 text-white rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#F5B800] focus:ring-1 focus:ring-[#F5B800]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold text-neutral-300 block mb-1">
                  Accra Location / Venue
                </label>
                <select
                  value={locationArea}
                  onChange={(e) => setLocationArea(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 text-white rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#F5B800] focus:ring-1 focus:ring-[#F5B800]"
                >
                  {ACCRA_AREAS.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Instant WhatsApp Proposal Action */}
            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-[#F5B800] hover:bg-[#FFC700] text-black font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-[#F5B800]/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-black text-[#F5B800]" />
              <span>Send Quote to WhatsApp (+233 550 999 008)</span>
            </button>

            <p className="text-[10px] text-center text-neutral-400">
              ⚡ Rapid confirmation from our Accra catering manager within 15 minutes.
            </p>

          </div>

        </form>

      </div>
    </section>
  );
};
