import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

dotenv.config({ path: '.env.local' });
dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', time: new Date().toISOString() });
  });

  // Secure Gemini AI Route
  app.post('/api/gemini', async (req, res) => {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(503).json({
        error: 'GEMINI_API_KEY is not configured on the server. Please check your environment variables.',
        isMissingKey: true,
      });
    }

    try {
      const { prompt, systemInstruction } = req.body || {};

      if (!prompt || typeof prompt !== 'string') {
        return res.status(400).json({ error: 'Missing "prompt" string in request body.' });
      }

      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          },
        },
      });

      const defaultSystemInstruction =
        systemInstruction ||
        `You are the official AI Gourmet Flavour & Event Concierge for "Popcorn King Ghana" located in Accra, Ghana.
Brand Tagline: "Fresh popcorn. Big moments."
Contact & WhatsApp: +233 55 099 9008.

Official Menu & Flavours:
- Sweet Caramel: Golden caramelized sugar glaze (Snack Pack: GH₵ 10, Party Bucket: GH₵ 35, Jumbo Bag: GH₵ 25, Event Bags: GH₵ 25)
- Classic Sea Salt: Savory lightly salted Ghanaian corn kernels (Snack Pack: GH₵ 10, Party Bucket: GH₵ 35)
- Rich Chocolate: Decadent melted dark chocolate coat (Snack Pack: GH₵ 20, Party Bucket: GH₵ 35)
- Milkyway: Creamy chocolate drizzled with sweet milk notes (Snack Pack: GH₵ 10, Party Bucket: GH₵ 35)
- Vibrant Rainbow: Fun candied multi-color mix (Snack Pack: GH₵ 10, Party Bucket: GH₵ 35)

Event Catering Packages:
- Live Vending Station: GH₵ 1,499.99 (Ideal for 50 - 150 guests). Commercial glass cart, 2 uniformed attendants, unlimited hot batches.
- Bulk Party Boxes and Crates: GH₵ 699.99 (Ideal for 50 to 100 guests). Fresh pre-packaged branded bags/buckets.
- Corporate: GH₵ 3,499.99 (Ideal for 250 to 500 guests). Dual commercial live stations, 3 attendants.

Provide warm, polite, highly helpful, and expert catering and flavour guidance with concise formatting. Keep responses focused on Accra celebrations, weddings, school fairs, birthdays, and corporate events.`;

      // Use lightweight gemini-2.5-flash for free tier efficiency
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          systemInstruction: defaultSystemInstruction,
          temperature: 0.7,
        },
      });

      const text = response.text || '';
      return res.status(200).json({ text });
    } catch (error: any) {
      console.error('Gemini API Error:', error);

      // Handle 429 Rate Limit
      const isRateLimited =
        error?.status === 429 ||
        error?.statusCode === 429 ||
        error?.message?.includes('429') ||
        error?.message?.includes('Resource has been exhausted') ||
        error?.message?.includes('quota');

      if (isRateLimited) {
        return res.status(429).json({
          error: 'Free-tier rate limit reached. Please wait a moment before trying again.',
          isRateLimit: true,
          fallbackText:
            "Popcorn King AI is receiving high traffic on the free tier right now. For immediate live event bookings or instant quotes, feel free to chat directly with our team on WhatsApp at +233 55 099 9008!",
        });
      }

      return res.status(500).json({
        error: error?.message || 'Failed to generate response from Gemini AI.',
      });
    }
  });

  // Vite middleware setup
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Popcorn King server running on http://localhost:${PORT}`);
  });
}

startServer();
