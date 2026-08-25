// Instant intelligent fallback concierge knowledge engine
// Ensures AI concierge answers immediately, accurately, and reliably on static hosting (Firebase Hosting)
// and on server environments.

interface ConciergeContext {
  query: string;
}

export function generateLocalConciergeResponse(userQuery: string): string {
  const query = userQuery.toLowerCase().trim();

  // 1. Greetings
  if (query === 'hi' || query === 'hello' || query === 'hey' || query.startsWith('akwaaba') || query.startsWith('good morning') || query.startsWith('good afternoon')) {
    return `👑 **Akwaaba to Popcorn King Ghana!**

I am your **AI Gourmet Flavour & Event Concierge**. How can I assist with your celebration today?

Here are quick things you can ask me:
- 🍿 **Flavour recommendations** (e.g. *Sweet Caramel, Ghanaian Cocoa Chocolate, Milkyway, Rainbow, Cinema Sea Salt*)
- 🎪 **Live Event Cart Catering estimates** for weddings, birthdays, or corporate summits in Accra
- 📦 **Bulk branded packs & party favours**
- 💰 **Portion & budget calculations** for your guest count!

Feel free to ask any question or tap one of the suggested prompts below!`;
  }

  // 2. Pairings for cocktails / birthdays
  if (query.includes('cocktail') || query.includes('30th') || query.includes('birthday') || query.includes('drinks') || query.includes('bar')) {
    return `🍹 **Cocktail & Birthday Celebration Pairings:**

For an upscale birthday or cocktail party in Accra, our top recommended flavour combinations are:

1. **Sweet Caramel Glaze + Classic Sea Salt (The Royal Sweet & Salty Duo)**
   - *Why it works:* Cuts through acidic cocktails (Margaritas, Mojitos, Gin & Tonic) and provides a satisfying contrast to crisp champagne.
2. **Rich Ghanaian Cocoa Chocolate**
   - *Why it works:* Pairs divinely with dark spirits, Espresso Martinis, whiskey cocktails, or red wine.
3. **Milkyway Drizzle**
   - *Why it works:* A velvety crowd-pleaser that adds dessert luxury to sweet dessert cocktails and mocktails.

💡 **Pro Tip:** For a 30th birthday, our **Live Glass Popping Cart (GH₵ 1,499.99)** with custom stickers bearing the celebrant's name/hashtag creates a fantastic photo-op!`;
  }

  // 3. Wedding calculations (e.g. 120 guests, 100 guests, weddings)
  if (query.includes('wedding') || query.includes('120') || query.includes('reception') || query.includes('bride') || query.includes('groom')) {
    return `💍 **Wedding Reception Catering Guide (100 - 150 Guests):**

For a 120-guest wedding in Accra (e.g. Labadi Beach Hotel, Underbridge, or private gardens):

- **Recommended Setup:** **Live On-Site Cart Package (GH₵ 1,499.99)**
  - Includes: 1 Commercial heated glass kettle station, 2 uniformed attendants, unlimited hot popping for 3 hours, and branded cups.
- **Portion Recommendation:**
  - 120 - 150 individual snack servings (we recommend a 50/50 split of **Sweet Caramel** and **Classic Sea Salt**).
- **VIP Table Favors:**
  - Add pre-sealed personalized gold-foil bags with your wedding hashtag (*e.g. #TheKings2026*) placed at every seat.

📲 **Next Step:** Tap **"Book Event Catering"** to lock in your date or chat directly with our Accra team on WhatsApp (+233 55 099 9008)!`;
  }

  // 4. Custom colors (pink, gold, green, graduation, themes)
  if (query.includes('color') || query.includes('colour') || query.includes('pink') || query.includes('gold') || query.includes('green') || query.includes('theme') || query.includes('custom')) {
    return `🌈 **Custom Theme Colors & Branded Packaging:**

**Yes, absolutely!** We specialize in matching your party palette:

1. **Vibrant Rainbow Candied Popcorn:**
   - We can customize color distributions (e.g. pastel pink & gold for bridal showers; green, gold & red for national celebrations; or school colors for graduations).
2. **Custom Sticker Labels:**
   - Add your company logo, birthday photo, graduation banner, or wedding monogram to our food-grade tubs and foil bags.
3. **Packaging Formats:**
   - Single-serve round cups (GH₵ 10)
   - Gold-rimmed VIP banquet bags (GH₵ 25)
   - Shareable Party Buckets (GH₵ 35)

Send us your high-resolution artwork on WhatsApp at **+233 55 099 9008** and our design team will prepare sample mockups!`;
  }

  // 5. Corporate summit (Kempinski, 250 - 500 guests)
  if (query.includes('corporate') || query.includes('summit') || query.includes('kempinski') || query.includes('retreat') || query.includes('conference') || query.includes('350') || query.includes('500')) {
    return `🏢 **Corporate Summit & Conference Package (250 - 500 Guests):**

For high-level corporate gatherings (such as summits at Kempinski, Marriott Accra, or Movenpick):

- **Recommended Package:** **Corporate VIP Summit Station (GH₵ 3,499.99)**
  - **Setup:** Dual commercial high-capacity glass popping stations to eliminate queues.
  - **Staffing:** 3 polished, uniformed catering professionals.
  - **Branding:** Custom corporate logo branding on all popcorn cups and cart fascia.
  - **Flavours:** Classic Sea Salt (sugar-free corporate favorite) + Gourmet Caramel + Rich Cocoa Chocolate.
- **Invoicing & Payments:**
  - Official VAT invoices, corporate PO compliance, and direct bank transfers accepted.

Click **"Book Event Catering"** or email your RFP to **jillskillion@gmail.com**!`;
  }

  // 6. Pricing & menu inquiries
  if (query.includes('price') || query.includes('cost') || query.includes('menu') || query.includes('how much') || query.includes('ghc') || query.includes('cedi')) {
    return `🍿 **Popcorn King Official Pricing Overview (Accra):**

**Retail & Individual Portions:**
- **Classic Sea Salt:** GH₵ 10 (Light, crispy & airy)
- **Sweet Caramel Glaze:** GH₵ 10 (Golden amber crunch)
- **Milkyway Drizzle:** GH₵ 10 (Creamy milk + chocolate)
- **Vibrant Rainbow:** GH₵ 10 (Candied fruit medley)
- **Rich Cocoa Chocolate:** GH₵ 20 (Ghanaian melted cocoa)

**Party & Sharing Sizes:**
- **Party Bucket:** GH₵ 35 (Great for movie nights & small desks)
- **Jumbo Crate Box:** GH₵ 699.99 (Pre-packaged bulk bags for 50-100 guests)

**Live Event Cart Catering:**
- **Live Popping Cart (50 - 150 guests):** GH₵ 1,499.99
- **Corporate Dual Cart (250 - 500 guests):** GH₵ 3,499.99

All orders can be delivered anywhere in Accra via our swift rider network!`;
  }

  // 7. Delivery & Location (Accra, East Legon, Osu, Spintex, Airport)
  if (query.includes('delivery') || query.includes('deliver') || query.includes('location') || query.includes('where') || query.includes('accra') || query.includes('pickup') || query.includes('legon') || query.includes('osu')) {
    return `📍 **Delivery & Pickup Hubs across Accra:**

We deliver freshly prepared batches and cater live events across Greater Accra:

- **Pickup Hubs:** East Legon, Osu (Oxford Street area), Spintex Road, and Airport Residential.
- **Delivery Coverage:** East Legon, Cantonments, Dzorwulu, Labone, Ridge, Tema, Madina, Achimota, and beyond.
- **Delivery Times:** Same-day dispatch for retail orders placed before 3:00 PM; scheduled setup times for event catering.

Contact our dispatch hotline on WhatsApp: **+233 55 099 9008**!`;
  }

  // 8. Default intelligent assistance
  return `👑 **Popcorn King Concierge Recommendation:**

Thank you for your inquiry regarding *"${userQuery}"*!

Here is how **Popcorn King Ghana** can deliver an unforgettable popcorn experience:

- **Signature Flavours:** We offer handcrafted **Sweet Caramel, Classic Sea Salt, Rich Ghanaian Chocolate, Milkyway, and Vibrant Rainbow**.
- **Live Event Catering:** We provide full commercial carts with uniformed attendants across Accra starting at **GH₵ 1,499.99**.
- **Custom Branding:** We can print custom wedding monograms, birthday messages, or corporate logos on all packaging.

Would you like a detailed price quotation, flavour tasting kit, or date availability check? Tap **"Book Event Catering"** or chat directly on WhatsApp at **+233 55 099 9008**!`;
}
