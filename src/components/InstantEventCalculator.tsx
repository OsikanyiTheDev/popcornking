import React, { useState } from 'react';
import { Calculator, Sparkles, Users, Calendar, ArrowRight, MessageCircle, Check, CheckCircle2, Sliders } from 'lucide-react';
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
  const [selectedFlavors, setSelectedFlavors] = useState<string[]>(['sweet-caramel', 'milkyway', 'vibrant-rainbow']);
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
        origin: { y: 0.6 }
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

    const message = `👑 *POPCORN KING INSTANT EVENT QUOTATION REQUEST* 🍿\n\n` +
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
    <section id="event-calculator" className="py-20 bg-[#FAFAFA] relative border-t border-slate-200 overflow-hidden text-slate-900">
      {/* Pattern background */}
      <div className="absolute inset-0 bg-burst-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 border border-rose-300 text-rose-900 text-xs font-black uppercase tracking-wider mb-3">
            <Calculator className="w-4 h-4 text-rose-700" />
            <span>Instant Event Quotation Engine</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Calculate Your Event Popcorn Package
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Select your event type, guest count, and favourite flavours to generate an instant budget estimate and lock in dates with our Accra catering team.
          </p>
        </div>

        <form onSubmit={handleSendQuoteWhatsApp} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left / Main Control Panel (8 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">
            
            {/* Step 1: Event Type */}
            <div>
              <label className="text-xs font-extrabold text-amber-800 uppercase tracking-wider block mb-2">
                1. Select Event Type
              </label>
              <select
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 focus:bg-white font-semibold"
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
                <label className="text-xs font-extrabold text-amber-800 uppercase tracking-wider flex items-center gap-1.5">
                  <Users className="w-4 h-4" />
                  <span>2. Guest Count</span>
                </label>
                <span className="font-display text-xl font-black text-slate-900 px-3 py-1 bg-amber-50 rounded-lg border border-amber-200">
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
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#FF4B3E]"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-medium">
                <span>25 Guests (Intimate)</span>
                <span>250 (Mid-size)</span>
                <span>500 (Large)</span>
                <span>1,000+ (Festival)</span>
              </div>
            </div>

            {/* Step 3: Service Style Selection */}
            <div>
              <label className="text-xs font-extrabold text-amber-800 uppercase tracking-wider block mb-2">
                3. Service Setup & Presentation
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  {
                    id: 'live_cart',
                    title: 'Live King Cart',
                    desc: 'Hot live popping cart + uniformed chef attendant',
                    badge: 'Most Popular',
                  },
                  {
                    id: 'sealed_packs',
                    title: 'Branded Snack Bags',
                    desc: 'Pre-sealed fresh party bags with event stickers',
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
                    className={`p-3.5 rounded-2xl border text-left flex flex-col justify-between transition-all ${
                      serviceStyle === style.id
                        ? 'bg-rose-50 border-[#FF4B3E] shadow-sm text-slate-900 ring-1 ring-[#FF4B3E]'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-white border border-slate-200 text-amber-900 inline-block mb-1.5 shadow-2xs">
                        {style.badge}
                      </span>
                      <p className="font-display text-sm font-bold text-slate-900">{style.title}</p>
                      <p className="text-[11px] text-slate-600 mt-1 leading-snug">{style.desc}</p>
                    </div>
                    {serviceStyle === style.id && (
                      <div className="mt-2 flex items-center gap-1 text-[11px] font-bold text-[#FF4B3E]">
                        <Check className="w-3.5 h-3.5 stroke-[3]" /> Selected
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Flavor Selection Matrix (The 6 Official Flavours) */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-extrabold text-amber-800 uppercase tracking-wider">
                  4. Flavor Selection Matrix ({selectedFlavors.length} chosen)
                </label>
                <span className="text-[11px] text-slate-500">Click to select/unselect</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {OFFICIAL_FLAVOURS.map((flavor) => {
                  const isSelected = selectedFlavors.includes(flavor.id);
                  return (
                    <button
                      key={flavor.id}
                      type="button"
                      onClick={() => toggleFlavor(flavor.id)}
                      className={`p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-amber-50 border-amber-400 text-slate-900 shadow-2xs'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300'
                      }`}
                    >
                      <div>
                        <p className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                          <span>🍿</span> {flavor.name}
                        </p>
                        <p className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">{flavor.desc}</p>
                      </div>
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] shrink-0 font-black ${
                          isSelected ? 'bg-[#FFC800] text-[#0A192F]' : 'bg-white border border-slate-300'
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
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-slate-900">Custom Logo & Event Theme Branding</p>
                <p className="text-[11px] text-slate-600 mt-0.5">
                  Print your wedding couple name, birthday theme, or corporate logo directly on all popcorn packaging.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setCustomBranding(!customBranding)}
                className={`w-12 h-6 rounded-full transition-colors relative flex items-center p-0.5 ${
                  customBranding ? 'bg-[#FF4B3E]' : 'bg-slate-300'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white transition-transform ${
                    customBranding ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

          </div>

          {/* Right / Instant Summary Card (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border-2 border-amber-300 shadow-xl space-y-6 sticky top-28">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#FF4B3E]">Estimated Budget</span>
                <h3 className="font-display text-3xl sm:text-4xl font-black text-slate-900 mt-0.5">
                  GH₵ {estimatedTotal.toLocaleString()}
                </h3>
              </div>
              <div className="text-right">
                <span className="text-[11px] text-emerald-800 font-bold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  Instant Estimate
                </span>
                <p className="text-[10px] text-slate-500 mt-1">~GH₵ {(estimatedTotal / guestCount).toFixed(1)} / guest</p>
              </div>
            </div>

            {/* Breakdown summary */}
            <div className="space-y-2.5 text-xs text-slate-600">
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span>Event Type:</span>
                <strong className="text-slate-900">{eventType}</strong>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span>Guest Count:</span>
                <strong className="text-slate-900">{guestCount} Attendees</strong>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span>Flavours ({selectedFlavors.length}):</span>
                <strong className="text-amber-800 text-right max-w-[200px] truncate">
                  {selectedFlavors.map((f) => OFFICIAL_FLAVOURS.find((fl) => fl.id === f)?.name).join(', ')}
                </strong>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span>Custom Logo Stickers:</span>
                <strong className="text-slate-900">{customBranding ? 'Included' : 'Standard'}</strong>
              </div>
            </div>

            {/* Booking Details Input */}
            <div className="space-y-3 pt-2">
              <div>
                <label className="text-[11px] font-bold text-slate-700 block mb-1">Your Name / Organization *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ama Darko / KPMG"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-amber-500 focus:bg-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[11px] font-bold text-slate-700 block mb-1">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="055 099 9008"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-amber-500 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-slate-700 block mb-1">Event Date</label>
                  <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-amber-500 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-700 block mb-1">Accra Location / Venue</label>
                <select
                  value={locationArea}
                  onChange={(e) => setLocationArea(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-amber-500 focus:bg-white"
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
              className="w-full py-4 rounded-2xl bg-[#FF4B3E] hover:bg-[#ff3526] text-white font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-[#FF4B3E]/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Send Quote to WhatsApp (+233 55 099 9008)</span>
            </button>

            <p className="text-[10px] text-center text-slate-500">
              ⚡ Guaranteed rapid response within 15 minutes during Accra operating hours.
            </p>

          </div>

        </form>

      </div>
    </section>
  );
};
