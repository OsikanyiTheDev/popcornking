import React from 'react';
import { Sparkles, Flame, Users, Palette, Clock, Smile, CheckCircle2, ArrowRight } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const valueProps = [
    {
      icon: Flame,
      title: 'Freshly Prepared Daily',
      description: 'We never serve stale, pre-bagged popcorn. Every batch is freshly popped with premium non-GMO corn kernels, pure coconut oil, and rich caramel glaze on demand in Accra.',
      badge: '100% Fresh Daily',
    },
    {
      icon: Users,
      title: 'Snacking to 2,000+ Events',
      description: 'From personal movie-night snack bags (GH₵ 10 - GH₵ 35) to 500+ attendee corporate summits, weddings, school fairs, and music festivals.',
      badge: '25 - 2,000+ Guests',
    },
    {
      icon: Palette,
      title: '7 Handcrafted Signature Flavours',
      description: 'Sweet Caramel, Milkyway Galaxy, Classic Sea Salt, Rich Chocolate, Cinnamon Delight, Vibrant Rainbow, and Fiery Ginger — perfected for Ghanaian celebrations.',
      badge: 'Signature Popcorn',
    },
    {
      icon: Clock,
      title: 'Punctual & Reliable Service',
      description: 'Punctual arrivals, spotless commercial glass machines, certified hygiene stations, friendly uniformed attendants, and rapid dispatch across Greater Accra.',
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
    <section id="why-us" className="py-24 bg-[#0D0D0D] relative border-t border-neutral-800 text-white">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F5B800]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-[#F5B800]/40 text-[#F5B800] text-xs font-black uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#F5B800]" />
            <span>The Popcorn King Standard</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
            Why Choose <span className="text-[#F5B800]">Popcorn King</span>?
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg mt-4">
            We are redefining popcorn in Ghana with unmatched freshness, modern 3-color cart branding, and commercial event excellence.
          </p>
        </div>

        {/* Value Props Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {valueProps.map((prop) => {
            const Icon = prop.icon;
            return (
              <div
                key={prop.title}
                className="p-8 rounded-3xl bg-[#141414] border border-neutral-800 hover:border-[#F5B800] transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#F5B800] group-hover:scale-110 group-hover:border-[#F5B800]/40 transition-all">
                      <Icon className="w-7 h-7 stroke-[2]" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[#F5B800]">
                      {prop.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-[#F5B800] transition-colors">
                    {prop.title}
                  </h3>

                  <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                    {prop.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-800/80 flex items-center gap-2 text-xs font-bold text-neutral-400 group-hover:text-white transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-[#F5B800] shrink-0" />
                  <span>Guaranteed Freshness & Quality</span>
                </div>
              </div>
            );
          })}

          {/* Call to Action Box in the 6th Grid Slot */}
          <div className="p-8 rounded-3xl bg-[#141414] border-2 border-[#F5B800] text-white flex flex-col justify-between shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#F5B800]/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="relative z-10">
              <span className="text-[11px] font-black uppercase tracking-wider bg-[#F5B800] text-black px-3 py-1 rounded-full inline-block mb-4">
                Fresh Popcorn. Big Moments.
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-black leading-tight text-white mb-3">
                Elevate Your Next Accra Celebration
              </h3>
              <p className="text-neutral-300 text-sm sm:text-base font-normal leading-relaxed">
                Connect directly with our Accra catering team for live machine bookings, corporate gift packs, or custom-themed popcorn stations.
              </p>
            </div>

            <div className="pt-6 mt-6 relative z-10">
              <a
                href="#event-calculator"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#F5B800] hover:bg-[#FFC700] text-black font-black px-6 py-4 rounded-2xl text-xs uppercase tracking-wider transition-all shadow-md group-hover:shadow-xl group-hover:shadow-[#F5B800]/20"
              >
                <span>Calculate Your Event Quote</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
