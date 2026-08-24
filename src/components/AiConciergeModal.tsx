import React, { useState, useRef, useEffect } from 'react';
import { X, Sparkles, Send, Bot, User, AlertCircle, RefreshCw, MessageSquareQuote } from 'lucide-react';

interface AiConciergeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking?: () => void;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
  isRateLimit?: boolean;
  isError?: boolean;
}

const QUICK_PROMPTS = [
  '🍿 What flavour pairs best with cocktails for a 30th birthday in Accra?',
  '🎪 How many bags or cart hours do I need for a 120-guest wedding reception?',
  '🌈 Can we create custom pink, gold & green bags for a graduation party?',
  '🏢 What package is best for a 350-guest corporate summit at Kempinski?',
];

export const AiConciergeModal: React.FC<AiConciergeModalProps> = ({ isOpen, onClose, onOpenBooking }) => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        'Akwaaba! 👑 I am the **Popcorn King AI Gourmet Concierge**.\n\nAsk me about custom flavor pairings, event packaging estimates, live vending carts, or personalized party ideas across Accra!',
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || input.trim();
    if (!query || loading) return;

    const userMessage: Message = { role: 'user', content: query };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/gemini', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: query }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 429 || data.isRateLimit) {
          setMessages((prev) => [
            ...prev,
            {
              role: 'assistant',
              content:
                data.fallbackText ||
                '⚠️ High traffic on the free tier! Please wait a few seconds and try again, or chat directly with our team on WhatsApp at +233 55 099 9008.',
              isRateLimit: true,
            },
          ]);
          return;
        }

        if (data.isMissingKey) {
          setMessages((prev) => [
            ...prev,
            {
              role: 'assistant',
              content:
                '⚙️ The `GEMINI_API_KEY` is not yet configured. Please set `GEMINI_API_KEY` in your environment variables (e.g. in Vercel or `.env.local`).',
              isError: true,
            },
          ]);
          return;
        }

        throw new Error(data.error || 'Failed to get response');
      }

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: data.text || 'Popcorn King is at your service!',
        },
      ]);
    } catch (err: any) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: `Something went wrong: ${err.message || 'Unable to connect'}. You can always contact our Accra team directly at +233 55 099 9008.`,
          isError: true,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white border border-slate-200 rounded-3xl max-w-2xl w-full h-[620px] max-h-[90vh] shadow-2xl relative flex flex-col overflow-hidden text-slate-900 animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 flex items-center justify-between border-b border-amber-600/20 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-slate-950 text-amber-400 flex items-center justify-center shadow-md">
              <Sparkles className="w-5 h-5 fill-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display font-black text-lg sm:text-xl text-slate-950">
                  AI Flavour & Event Concierge
                </h3>
                <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-slate-950 text-amber-400">
                  Gemini 2.5 Flash
                </span>
              </div>
              <p className="text-xs text-slate-900 font-medium">
                Gourmet pairings, guest portion calculators & custom event themes
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-950/10 hover:bg-slate-950/20 text-slate-950 transition-colors"
            aria-label="Close AI Concierge"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message History */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-slate-50">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.role === 'assistant' && (
                <div className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 font-black text-xs flex items-center justify-center shrink-0 shadow-xs">
                  👑
                </div>
              )}

              <div
                className={`max-w-[85%] rounded-2xl p-3.5 text-sm sm:text-base leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-slate-900 text-white rounded-tr-none'
                    : msg.isRateLimit
                    ? 'bg-amber-50 border border-amber-300 text-amber-950 rounded-tl-none'
                    : msg.isError
                    ? 'bg-rose-50 border border-rose-300 text-rose-950 rounded-tl-none'
                    : 'bg-white border border-slate-200 text-slate-900 rounded-tl-none shadow-xs'
                }`}
              >
                <div className="whitespace-pre-line prose prose-sm max-w-none">
                  {msg.content}
                </div>
              </div>

              {msg.role === 'user' && (
                <div className="w-8 h-8 rounded-xl bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex gap-3 justify-start">
              <div className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 font-black text-xs flex items-center justify-center shrink-0 animate-pulse">
                👑
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-none p-3.5 text-sm text-slate-600 flex items-center gap-2 shadow-xs">
                <RefreshCw className="w-4 h-4 animate-spin text-amber-500" />
                <span>Popcorn King AI is formulating the royal recommendation...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestion Pills */}
        <div className="p-3 bg-white border-t border-slate-200 overflow-x-auto whitespace-nowrap scrollbar-none flex gap-2">
          {QUICK_PROMPTS.map((prompt, i) => (
            <button
              key={i}
              onClick={() => handleSendMessage(prompt)}
              disabled={loading}
              className="text-xs bg-slate-100 hover:bg-amber-100 hover:text-amber-900 text-slate-700 px-3 py-1.5 rounded-full border border-slate-200 transition-colors shrink-0 disabled:opacity-50"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-white border-t border-slate-200 flex gap-2 items-center">
          <input
            type="text"
            placeholder="Ask about flavours, portion sizing, or event catering in Accra..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={loading}
            className="flex-1 bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-500"
          />
          <button
            onClick={() => handleSendMessage()}
            disabled={loading || !input.trim()}
            className="bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-slate-950 font-bold px-4 py-2.5 rounded-xl transition-all flex items-center gap-1.5 shadow-xs shrink-0"
          >
            <Send className="w-4 h-4" />
            <span className="hidden sm:inline">Ask AI</span>
          </button>
        </div>
      </div>
    </div>
  );
};
