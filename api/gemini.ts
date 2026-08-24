import { GoogleGenAI } from '@google/genai';

export default async function handler(req: any, res: any) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(503).json({
      error: 'GEMINI_API_KEY is not configured on the server. Please add GEMINI_API_KEY to your environment variables.',
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

    // Using lightweight gemini-2.5-flash for optimal free-tier rate limits and speed
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

    // Rate Limit (429) Handling
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
}
