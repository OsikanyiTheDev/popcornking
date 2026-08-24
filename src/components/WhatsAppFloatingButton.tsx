import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
      {/* Interactive Tooltip Pop-up */}
      {showTooltip && (
        <div className="bg-[#0A192F] border border-[#FFC800]/50 text-white p-3.5 rounded-2xl shadow-2xl max-w-xs text-xs flex items-start gap-2.5 animate-in fade-in slide-in-from-bottom duration-300">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0 mt-1 animate-ping" />
          <div className="flex-1">
            <p className="font-black text-[#FFC800]">Online in Accra 🍿</p>
            <p className="text-slate-300 text-[11px] mt-0.5 leading-snug">
              Need fresh popcorn delivery or an instant event catering quote? Chat with Popcorn King!
            </p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5"
            title="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href="https://wa.me/233550999008?text=Hello%20Popcorn%20King,%20I%20want%20to%20order%20popcorn%20or%20inquire%20about%20catering!"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#FF4B3E] hover:bg-[#ff3526] text-white shadow-2xl shadow-[#FF4B3E]/50 transform hover:scale-110 active:scale-95 transition-all duration-200"
        aria-label="Chat with Popcorn King on WhatsApp (+233 55 099 9008)"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#FFC800] border-2 border-[#0A192F] flex items-center justify-center text-[9px] font-black text-[#0A192F]">
          1
        </span>
        <MessageCircle className="w-7 h-7 fill-white stroke-[1.5]" />
      </a>
    </div>
  );
};
