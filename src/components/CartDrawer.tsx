import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, MessageCircle, MapPin, CheckCircle2 } from 'lucide-react';
import { CartItem } from '../types';
import confetti from 'canvas-confetti';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, newQuantity: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [deliveryArea, setDeliveryArea] = useState('East Legon / Shiashie');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [orderNote, setOrderNote] = useState('');
  const [orderPlacedSuccess, setOrderPlacedSuccess] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
  const isPickup = deliveryArea === 'Self-Pickup in Accra (Free)';
  const deliveryFee = isPickup ? 0 : 25; // standard Accra courier estimate
  const grandTotal = subtotal + (cartItems.length > 0 ? deliveryFee : 0);

  const handleWhatsAppCheckout = () => {
    if (cartItems.length === 0) return;

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // safe fallback
    }

    const itemsSummary = cartItems
      .map(
        (item, index) =>
          `${index + 1}. *${item.productName}* (${item.selectedSize.name})\n   Qty: ${item.quantity} × GH₵ ${item.selectedSize.priceGHS} = GH₵ ${item.totalPrice.toFixed(2)}`
      )
      .join('\n');

    const message = `👑 *NEW POPCORN KING DIRECT ORDER* 🍿\n\n` +
      `*Customer Details:*\n` +
      `• Name: ${customerName || 'Customer'}\n` +
      `• Phone: ${phone || 'Provided on chat'}\n` +
      `• Area: ${deliveryArea}\n` +
      `• Detailed Address: ${deliveryAddress || 'To be shared'}\n\n` +
      `*Order Breakdown:*\n${itemsSummary}\n\n` +
      `*Subtotal:* GH₵ ${subtotal.toFixed(2)}\n` +
      `*Estimated Delivery:* GH₵ ${deliveryFee.toFixed(2)}\n` +
      `*Total Amount:* GH₵ ${grandTotal.toFixed(2)}\n\n` +
      `*Special Notes:* ${orderNote || 'None'}\n\n` +
      `_Hello Popcorn King! Please confirm MoMo payment instructions and order delivery time._`;

    const whatsappUrl = `https://wa.me/233550999008?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    setOrderPlacedSuccess(true);
    setTimeout(() => {
      setOrderPlacedSuccess(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0A192F] border-l border-[#1E3A5F] shadow-2xl flex flex-col justify-between overflow-hidden text-white">
          
          {/* Header */}
          <div className="p-6 border-b border-[#1E3A5F] flex items-center justify-between bg-[#0D203D]">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#FFC800] flex items-center justify-center text-[#0A192F] font-black">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <h2 className="font-display text-xl font-black text-white">Your Popcorn Cart</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-[#1E3A5F] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 overflow-y-auto flex-1 space-y-6">
            {orderPlacedSuccess ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-white">Order Sent to WhatsApp!</h3>
                <p className="text-sm text-slate-300">
                  Our team in Accra (+233 55 099 9008) is preparing your fresh order details right now.
                </p>
              </div>
            ) : cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-[#0D203D] border border-[#1E3A5F] flex items-center justify-center mx-auto text-3xl">
                  🍿
                </div>
                <p className="text-slate-200 font-bold">Your cart is currently empty.</p>
                <p className="text-xs text-slate-400">
                  Explore our 6 gourmet flavours and add your favorite bags or tubs!
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-3 bg-[#FFC800] hover:bg-[#e6b400] text-[#0A192F] font-black rounded-xl text-xs uppercase tracking-wider transition-all"
                >
                  Browse 6 Flavours
                </button>
              </div>
            ) : (
              <>
                {/* Cart Items List */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Selected Items ({cartItems.length})
                    </span>
                    <button
                      onClick={onClearCart}
                      className="text-xs text-[#FF4B3E] hover:underline font-semibold transition-colors"
                    >
                      Clear All
                    </button>
                  </div>

                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="p-3.5 rounded-2xl bg-[#0D203D] border border-[#1E3A5F] flex items-center gap-3.5"
                    >
                      <img
                        src={item.productImage}
                        alt={item.productName}
                        referrerPolicy="no-referrer"
                        className="w-14 h-14 rounded-xl object-cover shrink-0 bg-[#0A192F]"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-bold text-white truncate">{item.productName}</h4>
                        <p className="text-xs text-[#FFC800] font-bold">
                          {item.selectedSize.name} ({item.selectedSize.weightLabel})
                        </p>
                        <p className="text-xs text-slate-300 mt-0.5">
                          GH₵ {item.selectedSize.priceGHS} each
                        </p>
                      </div>

                      {/* Quantity Modifier */}
                      <div className="flex items-center bg-[#0A192F] border border-[#1E3A5F] rounded-lg p-0.5">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 flex items-center justify-center text-slate-300 hover:text-white rounded"
                        >
                          -
                        </button>
                        <span className="w-6 text-center text-xs font-black text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center text-slate-300 hover:text-white rounded"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="p-2 text-slate-400 hover:text-[#FF4B3E] transition-colors"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Delivery & Contact Information */}
                <div className="pt-4 border-t border-[#1E3A5F] space-y-4">
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#FFC800] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" /> Delivery Information in Accra
                  </h3>

                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1">Your Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Kwame Mensah"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full bg-[#0D203D] border border-[#1E3A5F] text-white rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#FFC800]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1">WhatsApp / Phone Number</label>
                    <input
                      type="tel"
                      placeholder="e.g. 055 099 9008"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#0D203D] border border-[#1E3A5F] text-white rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#FFC800]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1">Accra Location / Neighborhood</label>
                    <select
                      value={deliveryArea}
                      onChange={(e) => setDeliveryArea(e.target.value)}
                      className="w-full bg-[#0D203D] border border-[#1E3A5F] text-white rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#FFC800]"
                    >
                      <option value="East Legon / Shiashie">East Legon / Shiashie</option>
                      <option value="Airport Residential / Airport City">Airport Residential / City</option>
                      <option value="Cantonments / Labone">Cantonments / Labone</option>
                      <option value="Osu / Ridge">Osu / Ridge</option>
                      <option value="Spintex Road / Baatsona">Spintex Road / Baatsona</option>
                      <option value="Tema (Comm 1 - 25)">Tema</option>
                      <option value="Legon / Madina / Adenta">Legon / Madina / Adenta</option>
                      <option value="Dzorwulu / Roman Ridge">Dzorwulu / Roman Ridge</option>
                      <option value="Dansoman / Latebiokorshie">Dansoman</option>
                      <option value="Lapaz / Achimota / West Legon">Lapaz / Achimota</option>
                      <option value="Self-Pickup in Accra (Free)">Self-Pickup in Accra (Free)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1">Landmark / Street Address</label>
                    <input
                      type="text"
                      placeholder="e.g. Near Shell filling station, House 12"
                      value={deliveryAddress}
                      onChange={(e) => setDeliveryAddress(e.target.value)}
                      className="w-full bg-[#0D203D] border border-[#1E3A5F] text-white rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#FFC800]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1">Special Order Notes (Optional)</label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Please include extra caramel drizzle or separate bags"
                      value={orderNote}
                      onChange={(e) => setOrderNote(e.target.value)}
                      className="w-full bg-[#0D203D] border border-[#1E3A5F] text-white rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-[#FFC800]"
                    />
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Footer & Checkout CTA */}
          {cartItems.length > 0 && !orderPlacedSuccess && (
            <div className="p-6 border-t border-[#1E3A5F] bg-[#0D203D] space-y-4">
              <div className="space-y-1.5 text-xs text-slate-300">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-white">GH₵ {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Courier Delivery</span>
                  <span className="font-bold text-white">
                    {isPickup ? 'FREE (Pickup)' : `GH₵ ${deliveryFee.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-[#1E3A5F]">
                  <span>Total Amount</span>
                  <span className="text-[#FFC800] font-display text-xl">GH₵ {grandTotal.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handleWhatsAppCheckout}
                className="w-full py-4 rounded-2xl bg-[#FF4B3E] hover:bg-[#ff3526] text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-xl shadow-[#FF4B3E]/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Checkout via WhatsApp (+233 55 099 9008)</span>
              </button>

              <p className="text-[11px] text-center text-slate-400">
                ⚡ Instant WhatsApp ordering • Fast Accra dispatch • MoMo / Cash accepted
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
