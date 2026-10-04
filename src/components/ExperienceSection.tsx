import React, { useState } from 'react';
import { Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { PopcornImages } from '../assets/images';

export const ExperienceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const experienceSteps = [
    {
      id: 'equipment',
      title: 'Commercial Popping Carts',
      subtitle: 'Sleek, eye-catching retro & modern equipment',
      description: 'Our certified commercial glass popping stations and mobile carts with official black & gold graphics are designed to be a vibrant visual centerpiece at any wedding, birthday, or corporate gala in Accra.',
      image: PopcornImages.eventSetup,
      points: [
        'Heated glass display keeping popcorn steaming hot, fresh & crisp',
        'Built-in warmers and stainless steel hygienic kettles',
        'Clean electrical setup and power backup preparation for Accra venues',
      ],
    },
    {
      id: 'preparation',
      title: 'Live Artisan Preparation',
      subtitle: 'The irresistible aroma of freshly popped corn',
      description: 'Nothing compares to the sensory magic of hearing corn pop and watching rich buttery caramel glaze tumble over steaming kernels right before your guests’ eyes.',
      image: PopcornImages.caramelGourmet,
      points: [
        '100% premium non-GMO corn popped in pure vegetable and coconut oils',
        '7 signature recipes: Caramel, Milkyway Galaxy, Rainbow, Sea Salt, Chocolate, Cinnamon & Ginger',
        'Prepared live and continuously so all guests enjoy piping hot servings',
      ],
    },
    {
      id: 'packaging',
      title: 'Custom Branded Packaging',
      subtitle: 'Your logo, colors & celebration theme',
      description: 'From iconic Popcorn King royal gold crown tubs to custom corporate logo stickers, wedding hashtags, and birthday party packs that guests cherish.',
      image: PopcornImages.cupClassicLogo,
      points: [
        'Food-grade grease-proof tubs, cones, and aroma-sealed foil bags',
        'Custom sticker printing and personalized brand color matching',
        'Sealed moisture barriers ensuring lasting crunch throughout your event',
      ],
    },
    {
      id: 'hospitality',
      title: 'Uniformed Attendants & Smiles',
      subtitle: 'Professional hospitality with Ghanaian warmth',
      description: 'Our trained, certified, and friendly attendants arrive early, manage all station setup, serve your guests with welcoming smiles, and leave the venue spotless.',
      image: PopcornImages.vendingStand,
      points: [
        'Polished, uniformed, food safety-certified catering crew',
        'Warm, polite, and rapid service to keep lines moving effortlessly',
        'Zero stress for event hosts — we handle every single popping detail',
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-[#0D0D0D] relative border-t border-neutral-800 text-white">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#F5B800]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-[#F5B800]/40 text-[#F5B800] text-xs font-black uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#F5B800]" />
            <span>The Sensory Experience</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
            The <span className="text-[#F5B800]">Popcorn King</span> Experience
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg mt-4">
            It is more than just a snack — it is the sound of popping kernels, the rich aroma, and the unforgettable excitement we bring to your Accra gathering.
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="flex justify-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {experienceSteps.map((step, idx) => (
            <button
              key={step.id}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-3 rounded-2xl font-black text-xs sm:text-sm whitespace-nowrap transition-all flex items-center gap-2 uppercase tracking-wider cursor-pointer ${
                activeTab === idx
                  ? 'bg-[#F5B800] text-black shadow-lg shadow-[#F5B800]/20'
                  : 'bg-[#141414] text-neutral-300 hover:text-white border border-neutral-800'
              }`}
            >
              <span className={activeTab === idx ? 'text-black' : 'text-[#F5B800]'}>{idx + 1}.</span>
              <span>{step.title}</span>
            </button>
          ))}
        </div>

        {/* Tab Content Showcase */}
        {experienceSteps.map((step, idx) => {
          if (idx !== activeTab) return null;
          return (
            <div
              key={step.id}
              className="bg-[#141414] rounded-3xl border border-neutral-800 p-6 sm:p-10 shadow-2xl animate-in fade-in duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Visual Image Side */}
                <div className="lg:col-span-6 relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-900 border border-neutral-800 shadow-md">
                  <img
                    src={step.image}
                    alt={step.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1572177191856-3cde618dee1f?auto=format&fit=crop&w=800&q=80';
                    }}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                  <div className="absolute bottom-4 left-4 right-4 p-3 bg-black/90 backdrop-blur-md rounded-xl border border-neutral-800 text-xs text-white font-bold flex items-center gap-2 shadow-sm">
                    <Sparkles className="w-4 h-4 text-[#F5B800] shrink-0" />
                    <span>{step.subtitle}</span>
                  </div>
                </div>

                {/* Details Side */}
                <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                  <div>
                    <span className="text-xs font-black text-[#F5B800] uppercase tracking-wider block mb-1">
                      Highlight 0{idx + 1}
                    </span>
                    <h3 className="font-display text-2xl sm:text-4xl font-black text-white mb-4">
                      {step.title}
                    </h3>
                    <p className="text-neutral-300 text-base sm:text-lg leading-relaxed mb-6">
                      {step.description}
                    </p>

                    <div className="space-y-3">
                      {step.points.map((pt, i) => (
                        <div key={i} className="flex items-start gap-3 text-sm text-neutral-200">
                          <div className="w-5 h-5 rounded-full bg-[#F5B800] text-black flex items-center justify-center shrink-0 mt-0.5 text-xs font-black">
                            ✓
                          </div>
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-neutral-800 flex flex-wrap items-center gap-4">
                    <a
                      href="#catering"
                      className="px-7 py-3.5 bg-[#F5B800] hover:bg-[#FFC700] text-black font-black rounded-xl text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
                    >
                      <span>Book This Experience</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </a>
                    <a
                      href="https://wa.me/233550999008?text=Hello%20Popcorn%20King,%20tell%20me%20more%20about%20your%20live%20cart%20experience!"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-800 hover:border-neutral-700 rounded-xl text-xs font-bold transition-colors flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 fill-[#F5B800] text-[#F5B800]" />
                      <span>Inquire on WhatsApp</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
};
