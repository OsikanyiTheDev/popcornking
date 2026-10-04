import React, { useState } from 'react';
import { X, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BulkInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BulkInquiryModal: React.FC<BulkInquiryModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [orderType, setOrderType] = useState('Bulk Sacks (50L+)');
  const [customFlavorIdea, setCustomFlavorIdea] = useState('');
  const [quantity, setQuantity] = useState('100 Packs');
  const [targetDate, setTargetDate] = useState('');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#F5B800', '#FFFFFF', '#FFC700'],
      });
    } catch {
      // safe
    }

    const message =
      `👑 *POPCORN KING BULK / CUSTOM FLAVOUR INQUIRY* 🍿\n\n` +
      `• Name: ${name || 'Prospective Customer'}\n` +
      `• WhatsApp/Phone: ${phone || 'Provided on chat'}\n` +
      `• Order Type: ${orderType}\n` +
      `• Estimated Quantity: ${quantity}\n` +
      `• Target Delivery Date: ${targetDate || 'Flexible'}\n` +
      `• Custom Flavour / Theme Request: ${customFlavorIdea || 'Standard Mix'}\n\n` +
      `*Special Details:*\n${notes || 'None'}\n\n` +
      `_Please provide bulk wholesale pricing in GH₵ and preparation lead time!_`;

    const whatsappUrl = `https://wa.me/233550999008?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#0D0D0D] border-2 border-neutral-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in duration-200 text-white">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-11 h-11 rounded-xl bg-neutral-900 text-[#F5B800] border border-neutral-800 flex items-center justify-center text-xl">
            🍿
          </div>
          <div>
            <h3 className="font-display text-2xl font-black text-white">
              Bulk Order & Custom Packaging
            </h3>
            <p className="text-xs text-neutral-400">
              For church programs, school fairs, weddings, and corporate PR.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-neutral-300 block mb-1">Your Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. David Mensah"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#F5B800] focus:ring-1 focus:ring-[#F5B800]"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-neutral-300 block mb-1">WhatsApp Phone *</label>
              <input
                type="tel"
                required
                placeholder="e.g. 055 099 9008"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#F5B800] focus:ring-1 focus:ring-[#F5B800]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-neutral-300 block mb-1">Format</label>
              <select
                value={orderType}
                onChange={(e) => setOrderType(e.target.value)}
                className="w-full bg-neutral-950 border border-neutral-800 text-white rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#F5B800]"
              >
                <option value="Pre-Packaged Branded Bags">Pre-Packaged Branded Bags</option>
                <option value="Jumbo Movie Tubs">Jumbo Movie Tubs</option>
                <option value="Bulk Sacks (50L+)">Bulk Sacks (50L+)</option>
                <option value="Wedding / Party Favors">Wedding / Party Favors</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-bold text-neutral-300 block mb-1">Estimated Quantity</label>
              <input
                type="text"
                placeholder="e.g. 150 Bags"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-full bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#F5B800]"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-neutral-300 block mb-1">Custom Flavor / Colors Request</label>
            <input
              type="text"
              placeholder="e.g. Sweet Caramel & Rainbow mix with pink & gold theme"
              value={customFlavorIdea}
              onChange={(e) => setCustomFlavorIdea(e.target.value)}
              className="w-full bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#F5B800]"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-neutral-300 block mb-1">Target Delivery Date</label>
            <input
              type="date"
              value={targetDate}
              onChange={(e) => setTargetDate(e.target.value)}
              className="w-full bg-neutral-950 border border-neutral-800 text-white rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#F5B800]"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-neutral-300 block mb-1">Additional Notes</label>
            <textarea
              rows={2}
              placeholder="Delivery address in Accra, special instructions..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#F5B800]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-[#F5B800] hover:bg-[#FFC700] text-black font-black rounded-xl text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-black text-[#F5B800]" />
            <span>Send Inquiry to WhatsApp (+233 550 999 008)</span>
          </button>
        </form>
      </div>
    </div>
  );
};
