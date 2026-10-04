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
        origin: { y: 0.7 },
        colors: ['#F5B800', '#FFFFFF', '#FFC700'],
      });
    } catch {
      // safe
    }

    const formattedMessage = `👑 *POPCORN KING GHANA WEBSITE MESSAGE*\n\n` +
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
    <section id="contact" className="py-24 bg-[#0D0D0D] relative border-t border-neutral-800 text-white">
      {/* Ambient background */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#F5B800]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-[#F5B800]/40 text-[#F5B800] text-xs font-black uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#F5B800]" />
            <span>Get In Touch</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
            Contact <span className="text-[#F5B800]">Popcorn King</span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg mt-4">
            We are always ready to answer your questions, prepare your fresh orders, and lock in dates for your special events in Accra.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contacts & Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary WhatsApp Card (Golden Cart Brand Accent) */}
            <div className="p-8 rounded-3xl bg-[#141414] border-2 border-[#F5B800] text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#F5B800]/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F5B800] text-black flex items-center justify-center font-bold">
                  <MessageCircle className="w-7 h-7 fill-black text-[#F5B800]" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-black text-white">Direct WhatsApp Hotline</h3>
                  <p className="text-neutral-300 text-sm mt-1">
                    Direct chatting with our team for orders, rapid pricing, delivery confirmations, and live cart bookings across Accra.
                  </p>
                </div>
                <a
                  href="https://wa.me/233550999008?text=Hello%20Popcorn%20King,%20I%20would%20like%20to%20place%20an%20order%20or%20inquire%20about%20catering!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-[#F5B800] hover:bg-[#FFC700] text-black font-black text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-black text-[#F5B800]" />
                  <span>Chat: +233 55 099 9008</span>
                </a>
              </div>
            </div>

            {/* Other Contacts Box */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#141414] border border-neutral-800 space-y-5 shadow-xl">
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 text-[#F5B800] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-neutral-400 font-bold uppercase tracking-wider">Phone Calls</p>
                  <a href="tel:+233550999008" className="text-base font-bold text-white hover:text-[#F5B800] transition-colors">
                    +233 55 099 9008
                  </a>
                  <p className="text-xs text-neutral-400 mt-0.5">Mon - Sun: 8:00 AM - 9:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-neutral-800">
                <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 text-[#F5B800] flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-neutral-400 font-bold uppercase tracking-wider">Email Address</p>
                  <a href="mailto:jillskillion@gmail.com" className="text-base font-bold text-white hover:text-[#F5B800] transition-colors">
                    jillskillion@gmail.com
                  </a>
                  <p className="text-xs text-neutral-400 mt-0.5">Corporate enquiries & formal proposals</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-neutral-800">
                <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 text-[#F5B800] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-neutral-400 font-bold uppercase tracking-wider">Accra Production Hub</p>
                  <p className="text-base font-bold text-white">
                    Accra, Greater Accra, Ghana
                  </p>
                  <p className="text-xs text-neutral-400 mt-0.5">Dispatching across all Accra zones</p>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-5 border-t border-neutral-800">
                <p className="text-xs text-neutral-400 font-bold uppercase tracking-wider mb-3">
                  Follow Popcorn King Online
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://instagram.com/popcornkingghana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-[#F5B800] border border-neutral-800 transition-colors"
                    title="Instagram @popcornkingghana"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 px-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-[#F5B800] border border-neutral-800 transition-colors font-bold text-xs flex items-center gap-1"
                    title="TikTok @popcornkingghana"
                  >
                    <span>TikTok</span>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61593377867403"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-[#F5B800] border border-neutral-800 transition-colors"
                    title="Facebook Popcorn King"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7 bg-[#141414] rounded-3xl border border-neutral-800 p-8 sm:p-10 shadow-xl flex flex-col justify-between">
            <div>
              <div className="mb-6">
                <h3 className="font-display text-2xl font-black text-white">Send Us a Quick Message</h3>
                <p className="text-neutral-400 text-xs sm:text-sm mt-1">
                  Have a specific question or want us to call you back? Drop your message below.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-neutral-900 text-[#F5B800] border border-[#F5B800]/40 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-black text-white">Message Transferred!</h4>
                  <p className="text-neutral-300 text-sm max-w-md mx-auto">
                    Your message has been opened directly on WhatsApp to +233 55 099 9008. We look forward to serving you!
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 bg-[#F5B800] text-black font-black rounded-xl text-xs uppercase tracking-wider shadow-md hover:bg-[#FFC700] transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-neutral-300 block mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Samuel Osei"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F5B800] focus:ring-1 focus:ring-[#F5B800]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-neutral-300 block mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 055 099 9008"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F5B800] focus:ring-1 focus:ring-[#F5B800]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-neutral-300 block mb-1.5">
                      Subject
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full bg-neutral-950 border border-neutral-800 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F5B800] font-medium"
                    >
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="Wedding / Party Catering">Wedding / Party Catering</option>
                      <option value="Corporate Bulk Order">Corporate Bulk Order</option>
                      <option value="Pop-Up Stand Request">Pop-Up Stand Request</option>
                      <option value="Feedback / Review">Feedback / Review</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-neutral-300 block mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Write your question, event details, or order request here..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F5B800] focus:ring-1 focus:ring-[#F5B800]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#F5B800] hover:bg-[#FFC700] text-black font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message via WhatsApp (+233 55 099 9008)</span>
                  </button>
                </form>
              )}
            </div>

            <div className="pt-6 mt-6 border-t border-neutral-800 text-xs text-neutral-400 flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#F5B800] shrink-0" />
              <span>Typical WhatsApp reply time: under 15 minutes during Accra operating hours.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
