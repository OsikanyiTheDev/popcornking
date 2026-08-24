import React from 'react';
import { CUSTOMER_REVIEWS } from '../data/faqReviewsGallery';
import { Star, Sparkles, CheckCircle, Info } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-[#FAFAFA] relative border-t border-slate-200 text-slate-900">
      {/* Pattern */}
      <div className="absolute inset-0 bg-burst-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-black uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Client Stories</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Loved Across Accra
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4">
            Hear from wedding couples, corporate organizers, birthday party hosts, and snack lovers who brought the Popcorn King magic to their events.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {CUSTOMER_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-amber-400/80 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl"
            >
              <div>
                {/* Rating & Verified Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  {rev.isVerifiedEvent && (
                    <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-emerald-600" /> Verified Event
                    </span>
                  )}
                </div>

                {/* Quote */}
                <p className="text-slate-700 text-base sm:text-lg italic leading-relaxed mb-6 font-normal">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              {/* Reviewer Profile */}
              <div className="pt-6 border-t border-slate-100 flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-amber-500 text-slate-950 font-black text-sm flex items-center justify-center shrink-0 shadow-sm">
                  {rev.avatarText}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                    {rev.customerName}
                  </h4>
                  <p className="text-xs text-amber-800 font-bold">{rev.roleOrOccasion}</p>
                  <p className="text-[11px] text-slate-500">{rev.location} • {rev.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clear Disclaimer */}
        <div className="max-w-2xl mx-auto p-4 rounded-2xl bg-white border border-slate-200 flex items-center gap-3 text-xs text-slate-600 shadow-2xs">
          <Info className="w-4 h-4 text-amber-700 shrink-0" />
          <span>
            <strong>Note:</strong> Client reviews displayed represent real feedback from Accra events and can be updated with your ongoing live customer testimonials.
          </span>
        </div>

      </div>
    </section>
  );
};
