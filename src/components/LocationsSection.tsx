import React, { useState } from 'react';
import { POPUP_LOCATIONS } from '../data/locations';
import { MapPin, Calendar, Clock, Navigation, ArrowRight, MessageCircle } from 'lucide-react';

interface LocationsSectionProps {
  onBookClick: () => void;
}

export const LocationsSection: React.FC<LocationsSectionProps> = ({ onBookClick }) => {
  const [locations] = useState(POPUP_LOCATIONS);

  return (
    <section id="locations" className="py-20 bg-[#0D203D] relative border-t border-[#1E3A5F] text-white">
      {/* Pattern */}
      <div className="absolute inset-0 bg-burst-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFC800]/15 border border-[#FFC800]/30 text-[#FFC800] text-xs font-black uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Accra Vending & Pop-Ups</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
            Find Popcorn King Near You
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-4">
            Catch our mobile pop-up carts at popular Accra shopping centers, beach festivals, and weekend markets popping fresh, crunchy corn all day long.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {locations.map((loc) => (
            <div
              key={loc.id}
              className="p-6 sm:p-8 rounded-3xl bg-[#0A192F] border border-[#1E3A5F] hover:border-[#FFC800]/50 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#FFC800]/15 border border-[#FFC800]/30 text-[#FFC800]">
                    {loc.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span>Active Station</span>
                  </div>
                </div>

                <h3 className="font-display text-2xl font-bold text-white group-hover:text-[#FFC800] transition-colors">
                  {loc.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-300 my-3 leading-relaxed">
                  {loc.description}
                </p>

                {/* Details List */}
                <div className="space-y-2.5 my-5 pt-4 border-t border-[#1E3A5F] text-xs sm:text-sm text-slate-300">
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-[#FFC800] shrink-0" />
                    <span><strong>Venue:</strong> {loc.venue}, {loc.area}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Calendar className="w-4 h-4 text-[#FFC800] shrink-0" />
                    <span><strong>Schedule:</strong> {loc.date}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-[#FFC800] shrink-0" />
                    <span><strong>Hours:</strong> {loc.time}</span>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-[#1E3A5F] flex items-center justify-between">
                <a
                  href={loc.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#FFC800] hover:underline transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Open in Google Maps</span>
                </a>

                <a
                  href={`https://wa.me/233550999008?text=Hello%20Popcorn%20King,%20are%20you%20at%20${encodeURIComponent(loc.venue)}%20today?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 px-3 rounded-xl bg-[#0D203D] hover:bg-[#152e54] text-slate-200 hover:text-white border border-[#1E3A5F] text-xs font-semibold flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Check Live Status</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bring Popcorn King To You Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0A192F] to-[#05101E] border-2 border-[#FFC800]/40 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-black uppercase tracking-wider px-3.5 py-1 rounded-full bg-[#FF4B3E] text-white inline-block">
              Host Your Own Pop-Up Station
            </span>
            <h3 className="font-display text-2xl sm:text-4xl font-black text-white">
              Planning an event? Bring Popcorn King to you.
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Do not wait for a weekend mall pop-up. We bring our full commercial live popping cart, friendly attendants, and all 6 signature flavours directly to your wedding, birthday, church program, or office party in Accra.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onBookClick}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#FF4B3E] hover:bg-[#ff3526] text-white font-black text-xs uppercase tracking-wider transition-all shadow-xl shadow-[#FF4B3E]/30 flex items-center justify-center gap-2"
              >
                <span>Book Popcorn King For Your Event</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <a
                href="https://wa.me/233550999008?text=Hello%20Popcorn%20King,%20I%20want%20to%20bring%20your%20popcorn%20stand%20to%20my%20event!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#0D203D] hover:bg-[#152e54] text-slate-200 font-bold text-xs uppercase tracking-wider border border-[#1E3A5F] transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: +233 55 099 9008</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
