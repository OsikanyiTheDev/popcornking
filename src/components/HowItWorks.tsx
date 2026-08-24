import React from 'react';
import { Sparkles, ShoppingBag, Send, CheckCircle2, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Choose Your Popcorn',
      description: 'Select your preferred flavours (Caramel, Milky Way, Rainbow, Classic Sea Salt, Chocolate, Ginger), retail sizes, or live cart hire packages.',
      icon: ShoppingBag,
      tag: 'Pick Your Flavours',
    },
    {
      number: '02',
      title: 'Submit Event Details',
      description: 'Provide your delivery location in Greater Accra, preferred date, expected guest count, and any custom logo branding requirements.',
      icon: Send,
      tag: 'WhatsApp / Quick Form',
    },
    {
      number: '03',
      title: 'We Handle the Magic',
      description: 'We pop your order fresh, deliver hot to your doorstep, or arrive early with our commercial cart to serve your guests with warmth and flair.',
      icon: CheckCircle2,
      tag: 'Fresh & Hassle-Free',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-[#0A192F] relative border-t border-[#1E3A5F] text-white">
      {/* Pattern */}
      <div className="absolute inset-0 bg-burst-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFC800]/15 border border-[#FFC800]/30 text-[#FFC800] text-xs font-black uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Simple & Seamless</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
            How It Works
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-4">
            Getting fresh gourmet popcorn for your personal snack craving or booking an event catering station in Accra takes just three effortless steps.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-[#0D203D] rounded-3xl border border-[#1E3A5F] p-8 flex flex-col justify-between relative group hover:border-[#FFC800]/60 transition-all duration-300 shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display text-3xl sm:text-4xl font-black text-[#FFC800]">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#FFC800]/15 border border-[#FFC800]/30 flex items-center justify-center text-[#FFC800] group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <span className="text-[11px] font-black text-[#FF4B3E] uppercase tracking-wider bg-[#0A192F] px-2.5 py-1 rounded-md border border-[#1E3A5F] inline-block mb-3">
                    {step.tag}
                  </span>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3">
                    {step.title}
                  </h3>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#1E3A5F] flex items-center text-xs font-bold text-slate-400 group-hover:text-[#FFC800] transition-colors">
                  <span>Step {idx + 1} of 3</span>
                  <ArrowRight className="w-4 h-4 ml-auto" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
