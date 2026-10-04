import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/faqReviewsGallery';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-[#0D0D0D] relative border-t border-neutral-800 text-white">
      {/* Ambient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F5B800]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-[#F5B800]/40 text-[#F5B800] text-xs font-black uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#F5B800]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
            Frequently Asked <span className="text-[#F5B800]">Questions</span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg mt-4">
            Everything you need to know about ordering, delivery in Accra, live machine catering, pricing, and custom event packaging.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#141414] border-[#F5B800] shadow-lg ring-1 ring-[#F5B800]'
                    : 'bg-[#141414] border-neutral-800 hover:border-neutral-700'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-display text-base sm:text-lg font-bold text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-[#F5B800] text-black rotate-180' : 'bg-neutral-900 text-neutral-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-neutral-300 leading-relaxed border-t border-neutral-800/80 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 text-center p-8 rounded-3xl bg-[#141414] border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-left">
            <h4 className="font-display text-xl font-bold text-white">
              Still have a specific question?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Our Accra support team is active on WhatsApp to assist with instant responses.
            </p>
          </div>
          <a
            href="https://wa.me/233550999008?text=Hello%20Popcorn%20King,%20I%20have%20a%20question%20about%20your%20services!"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-6 py-3.5 bg-[#F5B800] hover:bg-[#FFC700] text-black font-black text-xs uppercase tracking-wider rounded-xl flex items-center gap-2 shadow-md transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-black text-[#F5B800]" />
            <span>Chat on WhatsApp (+233 55 099 9008)</span>
          </a>
        </div>

      </div>
    </section>
  );
};
