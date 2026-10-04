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
        origin: { y: 0.6 },
        colors: ['#F5B800', '#FFFFFF', '#FFC700'],
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

    const message =
      `👑 *NEW POPCORN KING DIRECT ORDER* 🍿\n\n` +
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
        className="absolute inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0D0D0D] border-l border-neutral-800 shadow-2xl flex flex-col justify-between overflow-hidden text-white">
          
          {/* Header */}
          <div className="p-6 border-b border-neutral-800 flex items-center justify-between bg-neutral-950">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#F5B800] flex items-center justify-center text-black font-black">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <h2 className="font-display text-xl font-black text-white">Your Popcorn Cart</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 overflow-y-auto flex-1 space-y-6">
            {orderPlacedSuccess ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#F5B800]/20 text-[#F5B800] border border-[#F5B800]/40 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-white">Order Sent to WhatsApp!</h3>
                <p className="text-sm text-neutral-300">
                  Our Accra team (+233 550 999 008) is confirming your fresh order details right now.
                </p>
              </div>
            ) : cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mx-auto text-3xl">
                  🍿
                </div>
                <p className="text-white font-bold">Your cart is currently empty.</p>
                <p className="text-xs text-neutral-400">
                  Explore our 7 signature gourmet flavours and add your favourite packs!
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-3 bg-[#F5B800] hover:bg-[#FFC700] text-black font-black rounded-xl text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
                >
                  Browse Flavours
                </button>
              </div>
            ) : (
              <>
                {/* Cart Items List */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                      Selected Items ({cartItems.length})
                    </span>
                    <button
                      onClick={onClearCart}
                      className="text-xs text-[#F5B800] hover:underline font-semibold transition-colors cursor-pointer"
                    >
                      Clear All
                    </button>
                  </div>

                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="p-3.5 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center gap-3.5"
                    >
                      <img
                        src={item.productImage}
                        alt={item.productName}
                        referrerPolicy="no-referrer"
                        className="w-14 h-14 rounded-xl object-cover shrink-0 bg-black border border-neutral-700"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-bold text-white truncate">{item.productName}</h4>
                        <p className="text-xs text-[#F5B800] font-bold">
                          {item.selectedSize.name}
                        </p>
                        <p className="text-xs text-neutral-400 mt-0.5 tabular-nums">
                          GH₵ {item.selectedSize.priceGHS} each
                        </p>
                      </div>

                      {/* Quantity Modifier */}
                      <div className="flex items-center bg-black border border-neutral-800 rounded-lg p-0.5">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 flex items-center justify-center text-neutral-400 hover:text-white rounded hover:bg-neutral-800 font-bold cursor-pointer"
                        >
                          -
                        </button>
                        <span className="w-6 text-center text-xs font-black text-white tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center text-neutral-400 hover:text-white rounded hover:bg-neutral-800 font-bold cursor-pointer"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="p-2 text-neutral-500 hover:text-[#F5B800] transition-colors cursor-pointer"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Delivery & Contact Information */}
                <div className="pt-4 border-t border-neutral-800 space-y-4">
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#F5B800] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#F5B800]" /> Delivery Information in Accra
                  </h3>

                  <div>
                    <label className="text-xs font-bold text-neutral-300 block mb-1">Your Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Kwame Mensah"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#F5B800] focus:ring-1 focus:ring-[#F5B800]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-neutral-300 block mb-1">WhatsApp / Phone Number</label>
                    <input
                      type="tel"
                      placeholder="e.g. 055 099 9008"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#F5B800] focus:ring-1 focus:ring-[#F5B800]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-neutral-300 block mb-1">Accra Location / Neighborhood</label>
                    <select
                      value={deliveryArea}
                      onChange={(e) => setDeliveryArea(e.target.value)}
                      className="w-full bg-neutral-950 border border-neutral-800 text-white rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#F5B800] font-medium"
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
                    <label className="text-xs font-bold text-neutral-300 block mb-1">Landmark / Street Address</label>
                    <input
                      type="text"
                      placeholder="e.g. Near Shell filling station, House 12"
                      value={deliveryAddress}
                      onChange={(e) => setDeliveryAddress(e.target.value)}
                      className="w-full bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#F5B800] focus:ring-1 focus:ring-[#F5B800]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-neutral-300 block mb-1">Special Order Notes (Optional)</label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Extra caramel glaze or separate packaging"
                      value={orderNote}
                      onChange={(e) => setOrderNote(e.target.value)}
                      className="w-full bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-[#F5B800] focus:ring-1 focus:ring-[#F5B800]"
                    />
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Footer & Checkout CTA */}
          {cartItems.length > 0 && !orderPlacedSuccess && (
            <div className="p-6 border-t border-neutral-800 bg-neutral-950 space-y-4">
              <div className="space-y-1.5 text-xs text-neutral-300">
                <div className="flex justify-between">
                  <span className="text-neutral-400">Subtotal</span>
                  <span className="font-bold text-white tabular-nums">GH₵ {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Estimated Delivery</span>
                  <span className="font-bold text-white tabular-nums">
                    {isPickup ? 'FREE (Pickup)' : `GH₵ ${deliveryFee.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-neutral-800">
                  <span>Total Amount</span>
                  <span className="text-[#F5B800] font-display text-xl tabular-nums">GH₵ {grandTotal.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handleWhatsAppCheckout}
                className="w-full py-4 rounded-2xl bg-[#F5B800] hover:bg-[#FFC700] text-black font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-xl shadow-[#F5B800]/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-black text-[#F5B800]" />
                <span>Checkout via WhatsApp (+233 550 999 008)</span>
              </button>

              <p className="text-[11px] text-center text-neutral-400">
                ⚡ Instant WhatsApp ordering • Fast Accra courier dispatch • MoMo accepted
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
