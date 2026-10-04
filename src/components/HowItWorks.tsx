import React from 'react';
import { Sparkles, ShoppingBag, Send, CheckCircle2, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Choose Your Popcorn',
      description: 'Select your preferred flavours from our 7 signature choices (Sweet Caramel, Milkyway Galaxy, Classic Sea Salt, Rich Chocolate, Cinnamon, Rainbow, Ginger) in Small, Regular, or Large tubs.',
      icon: ShoppingBag,
      tag: 'Pick Your Flavours',
    },
    {
      number: '02',
      title: 'Submit Event or Order Details',
      description: 'Provide your delivery location in Greater Accra, preferred date, expected guest count, or live cart hire requirements with direct WhatsApp confirmation.',
      icon: Send,
      tag: 'WhatsApp / Quick Form',
    },
    {
      number: '03',
      title: 'We Handle the Magic',
      description: 'We pop your order fresh, deliver hot in sealed packaging, or arrive early with our commercial cart to serve your guests with Ghanaian warmth and flair.',
      icon: CheckCircle2,
      tag: 'Fresh & Hassle-Free',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#0D0D0D] relative border-t border-neutral-800 text-white">
      {/* Ambient background */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[#F5B800]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-[#F5B800]/40 text-[#F5B800] text-xs font-black uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#F5B800]" />
            <span>Simple & Seamless</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
            How It <span className="text-[#F5B800]">Works</span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg mt-4">
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
                className="bg-[#141414] rounded-3xl border border-neutral-800 p-8 flex flex-col justify-between relative group hover:border-[#F5B800] transition-all duration-300 shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display text-4xl sm:text-5xl font-black text-[#F5B800]">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#F5B800] group-hover:scale-110 group-hover:border-[#F5B800]/40 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <span className="text-[11px] font-black text-[#F5B800] uppercase tracking-wider bg-neutral-900 px-3 py-1 rounded-md border border-neutral-800 inline-block mb-3">
                    {step.tag}
                  </span>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#F5B800] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-800 flex items-center text-xs font-bold text-neutral-400 group-hover:text-[#F5B800] transition-colors">
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
