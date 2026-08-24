import React from 'react';
import { Sparkles, Flame, Users, Palette, Clock, Smile, CheckCircle2 } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const valueProps = [
    {
      icon: Flame,
      title: 'Freshly Prepared Daily',
      description: 'We never serve stale, pre-bagged popcorn. Every batch is freshly popped with premium non-GMO corn kernels, creamery butter, and pure cane sugar on demand in Accra.',
      badge: '100% Fresh Daily',
    },
    {
      icon: Users,
      title: 'Everyday Snacking to 500+ Events',
      description: 'From a single student grab-and-go snack bag to large 500+ attendee corporate summits, weddings, school fairs, and music festivals.',
      badge: '25 - 2,000+ Guests',
    },
    {
      icon: Palette,
      title: 'Signature Handcrafted Glazes',
      description: 'Classic Sea Salt, Sweet Caramel, Rich Chocolate, Milkyway, and Vibrant Rainbow — recipes perfected for Ghanaian celebrations and movie nights.',
      badge: 'Signature Popcorn',
    },
    {
      icon: Clock,
      title: 'Punctual & Reliable Service',
      description: 'Punctual arrivals, spotless commercial glass machines, certified hygiene stations, friendly uniformed attendants, and rapid Accra dispatch.',
      badge: 'Punctual & Certified',
    },
    {
      icon: Smile,
      title: 'High-Energy Fun Experience',
      description: 'We bring the golden glow, irresistible cinema popping aroma, and pure celebration excitement that turns ordinary gatherings into big moments.',
      badge: 'Big Moments',
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-[#0A192F] relative border-t border-[#1E3A5F] text-white">
      {/* Burst pattern overlay */}
      <div className="absolute inset-0 bg-burst-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFC800]/15 border border-[#FFC800]/30 text-[#FFC800] text-xs font-black uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Popcorn King Standard</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
            Why Popcorn King?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-4">
            We are redefining popcorn in Ghana with unmatched freshness, modern African brand energy, and commercial event excellence.
          </p>
        </div>

        {/* Value Props Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {valueProps.map((prop) => {
            const Icon = prop.icon;
            return (
              <div
                key={prop.title}
                className="p-8 rounded-3xl bg-[#0D203D] border border-[#1E3A5F] hover:border-[#FFC800]/50 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-2xl hover:shadow-[#FFC800]/10"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#FFC800]/15 border border-[#FFC800]/30 flex items-center justify-center text-[#FFC800] group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 stroke-[2]" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#0A192F] border border-[#1E3A5F] text-[#FFC800]">
                      {prop.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-[#FFC800] transition-colors">
                    {prop.title}
                  </h3>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {prop.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#1E3A5F] flex items-center gap-2 text-xs font-bold text-[#FFC800]">
                  <CheckCircle2 className="w-4 h-4 text-[#FFC800] shrink-0" />
                  <span>Guaranteed Freshness & Quality</span>
                </div>
              </div>
            );
          })}

          {/* Call to Action Box in the 6th Grid Slot (Electric Coral) */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#FF4B3E] to-[#e0372b] text-white flex flex-col justify-between shadow-2xl shadow-[#FF4B3E]/30">
            <div>
              <span className="text-xs font-black uppercase tracking-wider bg-black/25 px-3 py-1 rounded-full inline-block mb-4">
                Fresh popcorn. Big moments.
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-black leading-tight mb-3">
                Elevate Your Next Accra Celebration
              </h3>
              <p className="text-white/90 text-sm sm:text-base font-normal leading-relaxed">
                Connect directly with our Accra catering team for live machine bookings, corporate gift packs, or custom themed popcorn stations.
              </p>
            </div>

            <div className="pt-6 mt-6">
              <a
                href="#event-calculator"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#0A192F] hover:bg-[#05101E] text-[#FFC800] font-black px-6 py-4 rounded-2xl text-xs uppercase tracking-wider transition-all shadow-xl"
              >
                <span>Calculate Your Event Quote</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
