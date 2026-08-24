import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, MapPin, Instagram, Facebook, Send, Clock, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('General Enquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch {
      // safe
    }

    const formattedMessage = `👑 *POPCORN KING WEBSITE CONTACT MESSAGE*\n\n` +
      `• Name: ${name || 'Prospective Customer'}\n` +
      `• Phone: ${phone || 'N/A'}\n` +
      `• Subject: ${subject}\n\n` +
      `*Message:*\n${message}\n\n` +
      `Sent from Popcorn King Ghana Website.`;

    const whatsappUrl = `https://wa.me/233550999008?text=${encodeURIComponent(formattedMessage)}`;
    window.open(whatsappUrl, '_blank');

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white relative border-t border-slate-200 text-slate-900">
      {/* Pattern */}
      <div className="absolute inset-0 bg-burst-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-black uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Get In Touch</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Contact Popcorn King
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4">
            We are always ready to answer your questions, prepare your fresh orders, and lock in dates for your special events in Accra.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contacts & Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary WhatsApp Card (Electric Coral) */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#FF4B3E] to-[#d63324] text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                  <MessageCircle className="w-7 h-7 fill-white" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-black">Direct WhatsApp Line</h3>
                  <p className="text-white/90 text-sm mt-1">
                    Direct chatting with our manager for orders, rapid pricing, and delivery confirmations in Accra.
                  </p>
                </div>
                <a
                  href="https://wa.me/233550999008?text=Hello%20Popcorn%20King,%20I%20would%20like%20to%20place%20an%20order%20or%20inquire%20about%20catering!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-[#0A192F] text-[#FFC800] font-black text-xs uppercase tracking-wider hover:bg-[#05101E] transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-[#FFC800]" />
                  <span>Chat: +233 55 099 9008</span>
                </a>
              </div>
            </div>

            {/* Other Contacts Box */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-5 shadow-sm">
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-200 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Phone Calls</p>
                  <a href="tel:+233550999008" className="text-base font-bold text-slate-900 hover:text-amber-800 transition-colors">
                    +233 55 099 9008
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">Mon - Sun: 8:00 AM - 9:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-200 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Email Address</p>
                  <a href="mailto:jillskillion@gmail.com" className="text-base font-bold text-slate-900 hover:text-amber-800 transition-colors">
                    jillskillion@gmail.com
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">Corporate enquiries & formal proposals</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-200 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Accra Production Hub</p>
                  <p className="text-base font-bold text-slate-900">
                    Accra, Greater Accra, Ghana
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">Dispatching across all Accra zones</p>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-5 border-t border-slate-200">
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-3">
                  Follow Popcorn King Online
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white hover:bg-slate-100 text-slate-700 hover:text-amber-800 border border-slate-200 transition-colors shadow-2xs"
                    title="Instagram @popcornking_gh"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 px-4 rounded-xl bg-white hover:bg-slate-100 text-slate-700 hover:text-amber-800 border border-slate-200 transition-colors font-bold text-xs flex items-center gap-1 shadow-2xs"
                    title="TikTok @popcornking_gh"
                  >
                    <span>TikTok</span>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61593377867403"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white hover:bg-slate-100 text-slate-700 hover:text-amber-800 border border-slate-200 transition-colors shadow-2xs"
                    title="Facebook Popcorn King"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7 bg-slate-50 rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="mb-6">
                <h3 className="font-display text-2xl font-black text-slate-900">Send Us a Quick Message</h3>
                <p className="text-slate-600 text-xs sm:text-sm mt-1">
                  Have a specific question or want us to call you back? Drop your message below.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900">Message Transferred!</h4>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    Your message has been opened directly on WhatsApp to +233 55 099 9008. We look forward to serving you!
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 bg-[#FFC800] text-[#0A192F] font-black rounded-xl text-xs uppercase tracking-wider shadow-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Samuel Osei"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-white border border-slate-200 text-slate-900 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 055 099 9008"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-white border border-slate-200 text-slate-900 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Subject
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full bg-white border border-slate-200 text-slate-900 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 font-medium"
                    >
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="Wedding / Party Catering">Wedding / Party Catering</option>
                      <option value="Corporate Bulk Order">Corporate Bulk Order</option>
                      <option value="Pop-Up Stand Request">Pop-Up Stand Request</option>
                      <option value="Feedback / Review">Feedback / Review</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Write your question, event details, or order request here..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-white border border-slate-200 text-slate-900 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#FF4B3E] hover:bg-[#ff3526] text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-[#FF4B3E]/25 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message via WhatsApp (+233 55 099 9008)</span>
                  </button>
                </form>
              )}
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200 text-xs text-slate-600 flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-700 shrink-0" />
              <span>Typical WhatsApp reply time: under 15 minutes during Accra operating hours.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
