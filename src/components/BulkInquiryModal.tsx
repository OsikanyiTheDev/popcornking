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
        origin: { y: 0.6 }
      });
    } catch {
      // safe
    }

    const message = `👑 *POPCORN KING BULK / CUSTOM FLAVOUR INQUIRY* 🍿\n\n` +
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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white border border-slate-200 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in duration-200 text-slate-900">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-900 border border-amber-300 flex items-center justify-center text-xl">
            🍿
          </div>
          <div>
            <h3 className="font-display text-2xl font-black text-slate-900">
              Bulk Order & Custom Flavours
            </h3>
            <p className="text-xs text-slate-600">
              For church programs, school fairs, corporate PR, and custom event packaging.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Your Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. David Mensah"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-amber-500"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">WhatsApp Phone *</label>
              <input
                type="tel"
                required
                placeholder="e.g. 055 099 9008"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Order Type</label>
              <select
                value={orderType}
                onChange={(e) => setOrderType(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-amber-500 font-medium"
              >
                <option value="Bulk Mega Sacks (50L+)">Bulk Mega Sacks (50L+)</option>
                <option value="Pre-Packaged Snack Bags (50 - 5000 units)">Pre-Packaged Snack Bags</option>
                <option value="Movie Tubs with Custom Labels">Movie Tubs with Custom Labels</option>
                <option value="Custom Flavour Blend Creation">Custom Flavour Creation</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Estimated Quantity</label>
              <input
                type="text"
                placeholder="e.g. 150 bags or 5 Mega Sacks"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">Custom Flavour or Event Colors (Optional)</label>
            <input
              type="text"
              placeholder="e.g. Custom pink & gold Rainbow mix or extra ginger punch"
              value={customFlavorIdea}
              onChange={(e) => setCustomFlavorIdea(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">Date Needed in Accra</label>
            <input
              type="date"
              value={targetDate}
              onChange={(e) => setTargetDate(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">Additional Notes</label>
            <textarea
              rows={2}
              placeholder="Describe your event, delivery address, or specific packaging requirements..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-amber-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-[#FF4B3E] hover:bg-[#ff3526] text-white font-black text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow-md shadow-[#FF4B3E]/25 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Send Bulk Inquiry to WhatsApp (+233 55 099 9008)</span>
          </button>
        </form>
      </div>
    </div>
  );
};
