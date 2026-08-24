import React, { useState } from 'react';
import { Sparkles, MessageCircle } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const experienceSteps = [
    {
      id: 'equipment',
      title: 'Commercial Popping Carts',
      subtitle: 'Sleek, eye-catching retro & modern equipment',
      description: 'Our certified commercial glass popping stations and vintage mobile carts are designed to be a vibrant visual centerpiece at any wedding, birthday, or corporate gala in Accra.',
      image: '/src/assets/images/popcorn_event_setup_1787441074590.jpg',
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
      image: '/src/assets/images/popcorn_caramel_gourmet_1787441086862.jpg',
      points: [
        '100% premium non-GMO corn popped in pure coconut and sunflower oil',
        'Handcrafted recipes: Caramel, Milky Way, Rainbow, Classic Sea Salt, Chocolate & Ginger',
        'Prepared live and continuously so all guests enjoy piping hot servings',
      ],
    },
    {
      id: 'packaging',
      title: 'Custom Branded Packaging',
      subtitle: 'Your logo, colors & celebration theme',
      description: 'From iconic Popcorn King royal gold crown tubs to custom corporate logo stickers, wedding hashtags, and birthday party packs that guests cherish.',
      image: '/src/assets/images/popcorn_cup_classic_logo_1787530651749.jpg',
      points: [
        'Food-grade grease-proof tubs, cones, and aroma-sealed foil bags',
        'Custom sticker printing and personalized brand color matching',
        'Sealed moisture barriers ensuring lasting crunch',
      ],
    },
    {
      id: 'hospitality',
      title: 'Uniformed Attendants & Smiles',
      subtitle: 'Professional hospitality with Ghanaian warmth',
      description: 'Our trained, certified, and friendly attendants arrive early, manage all station setup, serve your guests with welcoming smiles, and leave the venue spotless.',
      image: '/src/assets/images/popcorn_vending_stand_1787441100261.jpg',
      points: [
        'Polished, uniformed, food safety-certified catering crew',
        'Warm, polite, and rapid service to keep lines moving effortlessly',
        'Zero stress for event hosts — we handle every single popping detail',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-[#0D203D] relative border-t border-[#1E3A5F] text-white">
      {/* Pattern */}
      <div className="absolute inset-0 bg-burst-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFC800]/15 border border-[#FFC800]/30 text-[#FFC800] text-xs font-black uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Sensory Experience</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
            The Popcorn King Experience
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-4">
            It is more than just a snack — it is the sound of popping kernels, the rich buttery aroma, and the unforgettable communal excitement we bring to your Accra gathering.
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="flex justify-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {experienceSteps.map((step, idx) => (
            <button
              key={step.id}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-3 rounded-2xl font-black text-xs sm:text-sm whitespace-nowrap transition-all flex items-center gap-2 uppercase tracking-wider ${
                activeTab === idx
                  ? 'bg-[#FFC800] text-[#0A192F] shadow-lg shadow-[#FFC800]/20'
                  : 'bg-[#0A192F] text-slate-300 hover:text-white border border-[#1E3A5F]'
              }`}
            >
              <span>{idx + 1}.</span>
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
              className="bg-[#0A192F] rounded-3xl border border-[#1E3A5F] p-6 sm:p-10 shadow-2xl animate-in fade-in duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Visual Image Side */}
                <div className="lg:col-span-6 relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#0D203D] border border-[#1E3A5F]">
                  <img
                    src={step.image}
                    alt={step.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/80 via-transparent to-black/20" />
                  <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#0A192F]/90 backdrop-blur-md rounded-xl border border-[#1E3A5F] text-xs text-[#FFC800] font-bold flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#FFC800] shrink-0" />
                    <span>{step.subtitle}</span>
                  </div>
                </div>

                {/* Details Side */}
                <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                  <div>
                    <span className="text-xs font-black text-[#FF4B3E] uppercase tracking-wider block mb-1">
                      Highlight 0{idx + 1}
                    </span>
                    <h3 className="font-display text-2xl sm:text-4xl font-black text-white mb-4">
                      {step.title}
                    </h3>
                    <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
                      {step.description}
                    </p>

                    <div className="space-y-3">
                      {step.points.map((pt, i) => (
                        <div key={i} className="flex items-start gap-3 text-sm text-slate-200">
                          <div className="w-5 h-5 rounded-full bg-[#FFC800]/20 text-[#FFC800] flex items-center justify-center shrink-0 mt-0.5 text-xs font-black">
                            ✓
                          </div>
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[#1E3A5F] flex flex-wrap items-center gap-4">
                    <a
                      href="#catering"
                      className="px-7 py-3.5 bg-[#FFC800] hover:bg-[#e6b400] text-[#0A192F] font-black rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg"
                    >
                      Book This Experience
                    </a>
                    <a
                      href="https://wa.me/233550999008?text=Hello%20Popcorn%20King,%20tell%20me%20more%20about%20your%20live%20cart%20experience!"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3.5 bg-[#0D203D] hover:bg-[#152e54] text-slate-200 hover:text-white border border-[#1E3A5F] rounded-xl text-xs font-bold transition-colors flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 fill-slate-300" />
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
