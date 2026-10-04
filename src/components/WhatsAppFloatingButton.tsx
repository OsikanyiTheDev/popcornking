import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
      {/* Interactive Tooltip Pop-up */}
      {showTooltip && (
        <div className="bg-neutral-950 border border-[#F5B800]/50 text-white p-3.5 rounded-2xl shadow-2xl max-w-xs text-xs flex items-start gap-2.5 animate-in fade-in slide-in-from-bottom duration-300">
          <div className="w-2.5 h-2.5 rounded-full bg-[#F5B800] shrink-0 mt-1 animate-ping" />
          <div className="flex-1">
            <p className="font-black text-[#F5B800]">Online in Accra 🍿</p>
            <p className="text-neutral-300 text-[11px] mt-0.5 leading-snug">
              Need fresh popcorn delivery or live cart catering? Chat directly on WhatsApp!
            </p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-neutral-400 hover:text-white p-0.5 cursor-pointer"
            title="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button in Popcorn Gold */}
      <a
        href="https://wa.me/233550999008?text=Hello%20Popcorn%20King,%20I%20want%20to%20order%20popcorn%20or%20inquire%20about%20catering!"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#F5B800] hover:bg-[#FFC700] text-black shadow-2xl shadow-[#F5B800]/40 transform hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
        aria-label="Chat with Popcorn King on WhatsApp (+233 550 999 008)"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-black border-2 border-[#F5B800] flex items-center justify-center text-[9px] font-black text-[#F5B800]">
          1
        </span>
        <MessageCircle className="w-7 h-7 fill-black stroke-[1.5]" />
      </a>
    </div>
  );
};
