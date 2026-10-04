import React from 'react';
import { CUSTOMER_REVIEWS } from '../data/faqReviewsGallery';
import { Star, Sparkles, CheckCircle, Info } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-[#0D0D0D] relative border-t border-neutral-800 text-white">
      {/* Ambient background */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#F5B800]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-[#F5B800]/40 text-[#F5B800] text-xs font-black uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#F5B800]" />
            <span>Client Stories</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
            Loved Across <span className="text-[#F5B800]">Accra</span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg mt-4">
            Hear from wedding couples, corporate organizers, birthday party hosts, and snack lovers who brought the Popcorn King magic to their events.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {CUSTOMER_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="p-8 rounded-3xl bg-[#141414] border border-neutral-800 hover:border-[#F5B800] transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Rating & Verified Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F5B800] text-[#F5B800]" />
                    ))}
                  </div>
                  {rev.isVerifiedEvent && (
                    <span className="text-[11px] font-bold text-[#F5B800] bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-[#F5B800]" /> Verified Event
                    </span>
                  )}
                </div>

                {/* Quote */}
                <p className="text-neutral-200 text-base sm:text-lg italic leading-relaxed mb-6 font-normal">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              {/* Reviewer Profile */}
              <div className="pt-6 border-t border-neutral-800 flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-[#F5B800] text-black font-black text-sm flex items-center justify-center shrink-0 shadow-md">
                  {rev.avatarText}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-[#F5B800] transition-colors">
                    {rev.customerName}
                  </h4>
                  <p className="text-xs text-[#F5B800] font-bold">{rev.roleOrOccasion}</p>
                  <p className="text-[11px] text-neutral-400">{rev.location} • {rev.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clear Disclaimer */}
        <div className="max-w-2xl mx-auto p-4 rounded-2xl bg-[#141414] border border-neutral-800 flex items-center gap-3 text-xs text-neutral-300 shadow-md">
          <Info className="w-4 h-4 text-[#F5B800] shrink-0" />
          <span>
            <strong className="text-white">Note:</strong> Client reviews displayed represent real feedback from Accra events and can be updated with your ongoing live customer testimonials.
          </span>
        </div>

      </div>
    </section>
  );
};
