import React, { useState } from 'react';
import { CATERING_PACKAGES, EVENT_TYPES, ACCRA_AREAS } from '../data/catering';
import { Sparkles, Check, MessageCircle, Calendar, Users, MapPin, CheckCircle2, ShieldCheck } from 'lucide-react';
import { CateringPackage } from '../types';
import confetti from 'canvas-confetti';

interface CateringSectionProps {
  onQuoteSubmitSuccess?: () => void;
}

export const CateringSection: React.FC<CateringSectionProps> = ({ onQuoteSubmitSuccess }) => {
  const [selectedPackage, setSelectedPackage] = useState<string>('live-king-station');
  const [guestCount, setGuestCount] = useState<number>(120);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [eventType, setEventType] = useState(EVENT_TYPES[0]);
  const [eventDate, setEventDate] = useState('');
  const [eventLocation, setEventLocation] = useState(ACCRA_AREAS[0]);
  const [specificVenue, setSpecificVenue] = useState('');
  const [selectedFlavors, setSelectedFlavors] = useState<string[]>(['Sweet Caramel', 'Milkyway', 'Vibrant Rainbow']);
  const [customBranding, setCustomBranding] = useState(true);
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const flavorOptions = [
    'Classic Sea Salt',
    'Sweet Caramel',
    'Rich Chocolate',
    'Milkyway',
    'Vibrant Rainbow',
  ];

  const handleFlavorToggle = (flavor: string) => {
    if (selectedFlavors.includes(flavor)) {
      if (selectedFlavors.length > 1) {
        setSelectedFlavors(selectedFlavors.filter((f) => f !== flavor));
      }
    } else {
      setSelectedFlavors([...selectedFlavors, flavor]);
    }
  };

  // Estimate calculation in GH₵
  const calculateEstimatedQuote = () => {
    let base = 850;
    if (selectedPackage === 'starter-party') {
      base = Math.max(750, guestCount * 14);
    } else if (selectedPackage === 'live-king-station') {
      base = Math.max(1850, 1850 + (guestCount > 100 ? (guestCount - 100) * 11 : 0));
    } else if (selectedPackage === 'grand-festival-station') {
      base = Math.max(3800, 3800 + (guestCount > 300 ? (guestCount - 300) * 9 : 0));
    } else if (selectedPackage === 'corporate-bulk-packs') {
      base = Math.max(950, guestCount * 18);
    }

    if (customBranding) base += 200;
    return Math.round(base);
  };

  const estimatedTotal = calculateEstimatedQuote();

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 }
      });
    } catch {
      // safe fallback
    }

    const currentPkg = CATERING_PACKAGES.find((p) => p.id === selectedPackage);

    const message = `👑 *POPCORN KING EVENT CATERING BOOKING ENQUIRY* 🎉\n\n` +
      `*Client Details:*\n` +
      `• Name: ${name || 'Prospective Client'}\n` +
      `• Phone: ${phone || 'Provided on chat'}\n` +
      `• Email: ${email || 'N/A'}\n\n` +
      `*Event Specifications:*\n` +
      `• Event Type: ${eventType}\n` +
      `• Date: ${eventDate || 'To be confirmed'}\n` +
      `• Area: ${eventLocation}\n` +
      `• Specific Venue: ${specificVenue || 'Accra venue'}\n` +
      `• Expected Guests: ${guestCount} people\n` +
      `• Selected Package: ${currentPkg?.name || selectedPackage}\n` +
      `• Flavours Requested: ${selectedFlavors.join(', ')}\n` +
      `• Custom Branding Required: ${customBranding ? 'Yes (Included)' : 'Standard Packaging'}\n` +
      `• Estimated Quote: ~GH₵ ${estimatedTotal.toLocaleString()}\n\n` +
      `*Special Requests / Notes:*\n${additionalInfo || 'None'}\n\n` +
      `_Hello Popcorn King team! Please confirm availability for my date and send over the official booking proposal._`;

    const whatsappUrl = `https://wa.me/233550999008?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    setIsSubmitted(true);
    if (onQuoteSubmitSuccess) onQuoteSubmitSuccess();
  };

  return (
    <section id="catering" className="py-24 bg-[#FAFAFA] relative border-t border-slate-200 overflow-hidden text-slate-900">
      
      {/* Burst pattern overlay */}
      <div className="absolute inset-0 bg-burst-pattern opacity-15 pointer-events-none" />

      {/* Atmospheric Glows */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-amber-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-rose-200/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 border border-rose-300 text-rose-900 text-xs font-black uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-rose-700" />
            <span>Commercial Cart Hire & Bulk Event Catering</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-black text-slate-900 tracking-tight">
            Make Your Accra Event <span className="text-amber-700">Pop.</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            From intimate weddings and birthday bashes to 500-person corporate conferences and church conventions — Popcorn King brings live commercial glass popping carts, fresh buttery aromas, and personalized packaging directly to your Accra venue.
          </p>

          {/* Event Types Pill Tags */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {[
              'Weddings',
              'Birthdays',
              'Corporate Summits',
              'School Fairs',
              'Church Programs',
              'Festivals & Concerts',
              'Movie Nights',
              'Brand Activations',
              'Private Parties',
            ].map((evt) => (
              <span
                key={evt}
                className="text-xs font-semibold px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-800 shadow-2xs"
              >
                ✨ {evt}
              </span>
            ))}
          </div>
        </div>

        {/* Catering Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {CATERING_PACKAGES.map((pkg) => {
            const isSelected = selectedPackage === pkg.id;
            return (
              <div
                key={pkg.id}
                className={`p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between relative ${
                  isSelected
                    ? 'bg-white border-amber-400 shadow-xl ring-2 ring-amber-400'
                    : 'bg-white/80 border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                {pkg.isBestSeller && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full bg-[#FF4B3E] text-white shadow-xs">
                    👑 Most Booked
                  </span>
                )}

                <div>
                  <div className="mb-4">
                    <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block">
                      {pkg.popularFor}
                    </span>
                    <h3 className="font-display text-xl font-bold text-slate-900 mt-1">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 min-h-[32px]">
                      {pkg.tagline}
                    </p>
                  </div>

                  <div className="my-4 py-3 border-y border-slate-100">
                    <span className="text-xs text-slate-500 block">Starting from:</span>
                    <span className="font-display text-2xl font-black text-slate-900">
                      GH₵ {pkg.startingPriceGHS}
                    </span>
                    <span className="text-[11px] text-slate-500 block mt-0.5">
                      Ideal for {pkg.minGuests} – {pkg.maxGuests}+ guests
                    </span>
                  </div>

                  {/* Feature List */}
                  <ul className="space-y-2 text-xs text-slate-600 mb-6">
                    {pkg.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedPackage(pkg.id)}
                  className={`w-full py-3 rounded-xl font-black text-xs uppercase tracking-wider transition-all shadow-xs ${
                    isSelected
                      ? 'bg-[#FFC800] text-[#0A192F]'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200'
                  }`}
                >
                  {isSelected ? '✓ Package Selected' : 'Choose Package'}
                </button>
              </div>
            );
          })}
        </div>

        {/* Detailed Booking Form */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Form Column */}
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-rose-100 border border-rose-200 flex items-center justify-center text-rose-700 font-bold">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-black text-slate-900">
                    Submit Event Catering Specification
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Lock in your event date with our team and receive a comprehensive proposal on WhatsApp.
                  </p>
                </div>
              </div>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-300 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900">Quote Request Transferred!</h4>
                  <p className="text-slate-700 text-sm max-w-md mx-auto">
                    Your request was opened on WhatsApp to <strong>+233 55 099 9008</strong>. Our catering manager will confirm machine availability and dispatch the formal invoice.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 bg-[#FFC800] text-[#0A192F] font-black rounded-xl text-xs uppercase tracking-wider"
                  >
                    Submit Another Event Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleQuoteSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Kwame Mensah / Tullow Oil"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">
                        WhatsApp / Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 055 099 9008"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="kwame@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">
                        Event Type *
                      </label>
                      <select
                        value={eventType}
                        onChange={(e) => setEventType(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-amber-500 focus:bg-white"
                      >
                        {EVENT_TYPES.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">
                        Target Event Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">
                        Event Area in Accra *
                      </label>
                      <select
                        value={eventLocation}
                        onChange={(e) => setEventLocation(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-amber-500 focus:bg-white"
                      >
                        {ACCRA_AREAS.map((loc) => (
                          <option key={loc} value={loc}>{loc}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">
                        Specific Venue Name / Landmark
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Grand Arena, Kempinski, Private Residence"
                        value={specificVenue}
                        onChange={(e) => setSpecificVenue(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* Flavour Preferences */}
                  <div>
                    <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-2">
                      Choose Your Preferred Flavours (Caramel, Milky Way, Rainbow, Classic Sea Salt, Chocolate, Ginger):
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {flavorOptions.map((flavor) => {
                        const isChecked = selectedFlavors.includes(flavor);
                        return (
                          <button
                            type="button"
                            key={flavor}
                            onClick={() => handleFlavorToggle(flavor)}
                            className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all ${
                              isChecked
                                ? 'bg-[#FFC800] text-[#0A192F] border-[#FFC800] shadow-2xs'
                                : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-400'
                            }`}
                          >
                            {isChecked ? '✓ ' : '+ '}{flavor}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Custom Branding Checkbox */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-slate-900">
                        Add Custom Branding / Monogram to Bags & Cart?
                      </p>
                      <p className="text-[11px] text-slate-600">
                        Print your company logo, event hashtag, or wedding monogram on all packaging (+GH₵ 200).
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={customBranding}
                      onChange={(e) => setCustomBranding(e.target.checked)}
                      className="w-5 h-5 accent-[#FF4B3E] rounded cursor-pointer"
                    />
                  </div>

                  {/* Additional Information */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Special Requests / Event Details
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Indoor stage setup, power socket available, need cart operational from 2pm to 6pm..."
                      value={additionalInfo}
                      onChange={(e) => setAdditionalInfo(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 focus:bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-[#FF4B3E] hover:bg-[#ff3526] text-white font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-[#FF4B3E]/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <MessageCircle className="w-5 h-5 fill-white" />
                    <span>Send Proposal Request to WhatsApp (+233 55 099 9008)</span>
                  </button>
                </form>
              )}
            </div>

            {/* Quote Summary Box Column */}
            <div className="lg:col-span-4 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 flex flex-col justify-between shadow-sm">
              <div>
                <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block mb-2">
                  Proposal Breakdown
                </span>
                <h4 className="font-display text-2xl font-black text-slate-900">
                  Event Estimate
                </h4>

                <div className="my-6 p-4 rounded-2xl bg-white border border-amber-300 text-center shadow-xs">
                  <span className="text-xs text-slate-500 block mb-1">Estimated Total</span>
                  <span className="font-display text-3xl sm:text-4xl font-black text-amber-700">
                    GH₵ {estimatedTotal.toLocaleString()}
                  </span>
                  <span className="text-[11px] text-slate-500 block mt-1">
                    *Guaranteed fixed quote provided upon venue review
                  </span>
                </div>

                <div className="space-y-3 text-xs text-slate-600 border-t border-slate-200 pt-4">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Package:</span>
                    <span className="font-bold text-slate-900">
                      {CATERING_PACKAGES.find((p) => p.id === selectedPackage)?.name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Guest Count:</span>
                    <span className="font-bold text-slate-900">{guestCount} people</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Location:</span>
                    <span className="font-bold text-slate-900">{eventLocation}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Custom Branding:</span>
                    <span className="font-bold text-slate-900">{customBranding ? 'Included' : 'Standard'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Flavours:</span>
                    <span className="font-bold text-amber-800">{selectedFlavors.length} Selected</span>
                  </div>
                </div>

                <div className="mt-6 p-3 rounded-xl bg-white border border-slate-200 text-[11px] text-slate-700 flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 shrink-0 text-amber-700 mt-0.5" />
                  <span>Includes uniformed Popcorn King chef attendant, certified hygiene station, napkins, and full cleanup.</span>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200 text-center">
                <p className="text-xs text-slate-500 mb-2">Need immediate date confirmation?</p>
                <a
                  href="tel:+233550999008"
                  className="text-xs font-bold text-amber-800 hover:underline block"
                >
                  Accra Event Line: +233 55 099 9008
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
