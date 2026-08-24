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
    <section id="how-it-works" className="py-20 bg-white relative border-t border-slate-200 text-slate-900">
      {/* Pattern */}
      <div className="absolute inset-0 bg-burst-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-black uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Simple & Seamless</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            How It Works
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4">
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
                className="bg-slate-50 rounded-3xl border border-slate-200 p-8 flex flex-col justify-between relative group hover:border-amber-400/80 transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display text-3xl sm:text-4xl font-black text-amber-700">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-800 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <span className="text-[11px] font-black text-[#FF4B3E] uppercase tracking-wider bg-white px-2.5 py-1 rounded-md border border-slate-200 inline-block mb-3 shadow-2xs">
                    {step.tag}
                  </span>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200 flex items-center text-xs font-bold text-slate-500 group-hover:text-amber-800 transition-colors">
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
