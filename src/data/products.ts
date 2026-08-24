import { MenuItem } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  // ==========================================
  // SIGNATURE POPCORN
  // ==========================================
  {
    id: 'classic-sea-salt',
    name: 'Classic Sea Salt',
    category: 'signature',
    categoryLabel: 'SIGNATURE POPCORN',
    description: 'Light, airy, perfectly salted traditional style',
    priceGHS: 10,
    priceDisplay: 'GH₵ 10',
    unitLabel: 'Regular Portion',
    flavorNotes: ['Light & Airy', 'Pure Sea Salt', 'Cinema Traditional'],
    image: '/src/assets/images/sea_salt_flyer_1787530969931.jpg',
    badge: '🍿 Cinema Classic',
    isPopular: true,
    sizes: [
      { id: 'regular', name: 'Regular Portion', weightLabel: 'Single Serving', servings: '1 Person', priceGHS: 10, priceDisplay: 'GH₵ 10' },
      { id: 'party-bucket', name: 'Large Party Bucket', weightLabel: 'Party Share', servings: '3-4 People', priceGHS: 25, priceDisplay: 'GH₵ 25' },
      { id: 'event-bag', name: 'Sealed Event Bag', weightLabel: 'Fresh Snack Pouch', servings: '1-2 People', priceGHS: 15, priceDisplay: 'GH₵ 15' },
    ],
  },
  {
    id: 'sweet-caramel',
    name: 'Sweet Caramel',
    category: 'signature',
    categoryLabel: 'SIGNATURE POPCORN',
    description: 'Rich, crunchy golden glaze for serious sweet tooths',
    priceGHS: 10,
    priceDisplay: 'GH₵ 10',
    unitLabel: 'Regular Portion',
    flavorNotes: ['Golden Crunch', 'Rich Glaze', 'Caramel Butter'],
    image: '/src/assets/images/caramel_popcorn_flyer_1787530953937.jpg',
    badge: '👑 Best Seller',
    isPopular: true,
    sizes: [
      { id: 'regular', name: 'Regular Portion', weightLabel: 'Single Serving', servings: '1 Person', priceGHS: 10, priceDisplay: 'GH₵ 10' },
      { id: 'party-bucket', name: 'Large Party Bucket', weightLabel: 'Party Share', servings: '3-4 People', priceGHS: 25, priceDisplay: 'GH₵ 25' },
      { id: 'event-bag', name: 'Sealed Event Bag', weightLabel: 'Fresh Snack Pouch', servings: '1-2 People', priceGHS: 15, priceDisplay: 'GH₵ 15' },
    ],
  },
  {
    id: 'rich-chocolate',
    name: 'Rich Chocolate',
    category: 'signature',
    categoryLabel: 'SIGNATURE POPCORN',
    description: 'Indulgent cocoa glaze over crispy kernels',
    priceGHS: 20,
    priceDisplay: 'GH₵ 20',
    unitLabel: 'Regular Portion',
    flavorNotes: ['Ghanaian Cocoa', 'Crispy Glaze', 'Velvety Chocolate'],
    image: '/src/assets/images/chocolate_popcorn_flyer_1787530983913.jpg',
    badge: '🍫 Premium Cocoa',
    isPopular: true,
    sizes: [
      { id: 'regular', name: 'Regular Portion', weightLabel: 'Single Serving', servings: '1 Person', priceGHS: 20, priceDisplay: 'GH₵ 20' },
      { id: 'party-bucket', name: 'Large Party Bucket', weightLabel: 'Party Share', servings: '3-4 People', priceGHS: 35, priceDisplay: 'GH₵ 35' },
      { id: 'event-bag', name: 'Sealed Event Bag', weightLabel: 'Fresh Snack Pouch', servings: '1-2 People', priceGHS: 25, priceDisplay: 'GH₵ 25' },
    ],
  },
  {
    id: 'milkyway',
    name: 'Milkyway',
    category: 'signature',
    categoryLabel: 'SIGNATURE POPCORN',
    description: 'Creamy chocolate drizzled with sweet milk notes',
    priceGHS: 10,
    priceDisplay: 'GH₵ 10',
    unitLabel: 'Regular Portion',
    flavorNotes: ['Sweet Milk Drizzle', 'Creamy Chocolate', 'Silky Crunch'],
    image: '/src/assets/images/milkyway_popcorn_flyer_1787530999860.jpg',
    badge: '✨ Fan Favorite',
    isPopular: true,
    sizes: [
      { id: 'regular', name: 'Regular Portion', weightLabel: 'Single Serving', servings: '1 Person', priceGHS: 10, priceDisplay: 'GH₵ 10' },
      { id: 'party-bucket', name: 'Large Party Bucket', weightLabel: 'Party Share', servings: '3-4 People', priceGHS: 25, priceDisplay: 'GH₵ 25' },
      { id: 'event-bag', name: 'Sealed Event Bag', weightLabel: 'Fresh Snack Pouch', servings: '1-2 People', priceGHS: 15, priceDisplay: 'GH₵ 15' },
    ],
  },
  {
    id: 'vibrant-rainbow',
    name: 'Vibrant Rainbow',
    category: 'signature',
    categoryLabel: 'SIGNATURE POPCORN',
    description: 'Fun, colorful candied mix packed with flavor',
    priceGHS: 10,
    priceDisplay: 'GH₵ 10',
    unitLabel: 'Regular Portion',
    flavorNotes: ['Candied Colors', 'Fruity Pop', 'Joyful Sweetness'],
    image: '/src/assets/images/rainbow_popcorn_flyer_1787531014949.jpg',
    badge: '🌈 Party Hit',
    isNew: true,
    isPopular: true,
    sizes: [
      { id: 'regular', name: 'Regular Portion', weightLabel: 'Single Serving', servings: '1 Person', priceGHS: 10, priceDisplay: 'GH₵ 10' },
      { id: 'party-bucket', name: 'Large Party Bucket', weightLabel: 'Party Share', servings: '3-4 People', priceGHS: 25, priceDisplay: 'GH₵ 25' },
      { id: 'event-bag', name: 'Sealed Event Bag', weightLabel: 'Fresh Snack Pouch', servings: '1-2 People', priceGHS: 15, priceDisplay: 'GH₵ 15' },
    ],
  },

  // ==========================================
  // POPCORN PACKAGING
  // ==========================================
  {
    id: 'regular-round-cup',
    name: 'Regular Round Cup',
    category: 'packaging',
    categoryLabel: 'POPCORN PACKAGING',
    description: 'Perfect individual single-serve size',
    priceGHS: 10,
    priceDisplay: 'GH₵ 10',
    unitLabel: 'Single-Serve Cup',
    flavorNotes: ['Single-Serve', 'Convenient Cup', 'Easy Snacking'],
    image: '/src/assets/images/popcorn_cup_classic_logo_1787530651749.jpg',
    badge: '🥤 Individual Size',
    sizes: [
      { id: 'standard', name: 'Regular Round Cup', weightLabel: 'Single-Serve', servings: '1 Person', priceGHS: 10, priceDisplay: 'GH₵ 10' },
    ],
  },
  {
    id: 'large-party-bucket',
    name: 'Large Party Bucket',
    category: 'packaging',
    categoryLabel: 'POPCORN PACKAGING',
    description: 'Shareable tub for groups & movie nights',
    priceGHS: 25,
    priceDisplay: 'GH₵ 25',
    unitLabel: 'Shareable Tub',
    flavorNotes: ['Movie Night', 'Family Sharing', 'High Capacity'],
    image: '/src/assets/images/popcorn_caramel_gourmet_1787441086862.jpg',
    badge: '🎉 Best for Sharing',
    isPopular: true,
    sizes: [
      { id: 'bucket', name: 'Large Party Bucket', weightLabel: 'Party Size', servings: '3-4 People', priceGHS: 25, priceDisplay: 'GH₵ 25' },
    ],
  },
  {
    id: 'sealed-event-bag',
    name: 'Sealed Event Bag',
    category: 'packaging',
    categoryLabel: 'POPCORN PACKAGING',
    description: 'Compact, neat snack pouch for catering & bulk orders',
    priceGHS: 15,
    priceDisplay: 'GH₵ 15',
    unitLabel: 'Aroma-Sealed Pouch',
    flavorNotes: ['Aroma Sealed', 'Custom Sticker Ready', 'Freshness Lock'],
    image: 'https://images.unsplash.com/photo-1572177191856-3cde618dee1f?auto=format&fit=crop&w=800&q=80',
    badge: '📦 Event & Bulk',
    sizes: [
      { id: 'pouch', name: 'Sealed Event Bag', weightLabel: 'Sealed Pouch', servings: '1-2 People', priceGHS: 15, priceDisplay: 'GH₵ 15' },
    ],
  },

  // ==========================================
  // REFRESHMENTS
  // ==========================================
  {
    id: 'chilled-soft-drinks',
    name: 'Chilled Soft Drinks',
    category: 'refreshments',
    categoryLabel: 'REFRESHMENTS',
    description: 'Coke, Fanta, Sprite (500ml)',
    priceGHS: 10,
    priceDisplay: 'GH₵ 10',
    unitLabel: '500ml Bottle / Can',
    options: ['Coca-Cola', 'Fanta Orange', 'Sprite'],
    flavorNotes: ['500ml', 'Coke / Fanta / Sprite', 'Chilled Refreshment'],
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80',
    badge: '🥤 Chilled Soda',
    sizes: [
      { id: 'coke-500ml', name: 'Coca-Cola (500ml)', weightLabel: '500ml', servings: '1 Drink', priceGHS: 10, priceDisplay: 'GH₵ 10' },
      { id: 'fanta-500ml', name: 'Fanta (500ml)', weightLabel: '500ml', servings: '1 Drink', priceGHS: 10, priceDisplay: 'GH₵ 10' },
      { id: 'sprite-500ml', name: 'Sprite (500ml)', weightLabel: '500ml', servings: '1 Drink', priceGHS: 10, priceDisplay: 'GH₵ 10' },
    ],
  },
  {
    id: 'signature-milkshakes',
    name: 'Signature Milkshakes',
    category: 'refreshments',
    categoryLabel: 'REFRESHMENTS',
    description: 'Creamy Vanilla, Chocolate, or Strawberry (400ml)',
    priceGHS: 25,
    priceDisplay: 'GH₵ 25',
    unitLabel: '400ml Cup',
    options: ['Creamy Vanilla', 'Rich Chocolate', 'Sweet Strawberry'],
    flavorNotes: ['400ml', 'Vanilla / Chocolate / Strawberry', 'Thick & Creamy'],
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
    badge: '🍦 Creamy & Rich',
    isPopular: true,
    sizes: [
      { id: 'shake-vanilla', name: 'Creamy Vanilla Milkshake (400ml)', weightLabel: '400ml', servings: '1 Cup', priceGHS: 25, priceDisplay: 'GH₵ 25' },
      { id: 'shake-chocolate', name: 'Rich Chocolate Milkshake (400ml)', weightLabel: '400ml', servings: '1 Cup', priceGHS: 25, priceDisplay: 'GH₵ 25' },
      { id: 'shake-strawberry', name: 'Sweet Strawberry Milkshake (400ml)', weightLabel: '400ml', servings: '1 Cup', priceGHS: 25, priceDisplay: 'GH₵ 25' },
    ],
  },

  // ==========================================
  // EVENT PACKAGES
  // ==========================================
  {
    id: 'live-vending-station',
    name: 'Live Vending Station',
    category: 'event_packages',
    categoryLabel: 'EVENT PACKAGES',
    description: 'On-site live popping machine, 2 uniformed servers, custom cups',
    priceGHS: 0,
    priceDisplay: 'Quote on Request',
    isQuoteOnRequest: true,
    unitLabel: 'Live On-Site Experience',
    flavorNotes: ['Commercial Popping Machine', '2 Uniformed Servers', 'Custom Cups Included'],
    image: '/src/assets/images/live_event_station_1787527845374.jpg',
    badge: '👑 Full Live Experience',
    isPopular: true,
    sizes: [
      { id: 'live-station-booking', name: 'Live Vending Station (On-Site Live Cart)', weightLabel: 'Live Setup', servings: '50-1000+ Guests', priceGHS: 0, priceDisplay: 'Quote on Request' },
    ],
  },
  {
    id: 'bulk-party-boxes',
    name: 'Bulk Party Boxes',
    category: 'event_packages',
    categoryLabel: 'EVENT PACKAGES',
    description: 'Pre-packaged branded bags/buckets delivered fresh',
    priceGHS: 0,
    priceDisplay: 'Quote on Request',
    isQuoteOnRequest: true,
    unitLabel: 'Freshly Delivered Crate',
    flavorNotes: ['Pre-Packaged Freshness', 'Custom Branded Bags & Buckets', 'Delivered to Venue'],
    image: 'https://images.unsplash.com/photo-1572177191856-3cde618dee1f?auto=format&fit=crop&w=800&q=80',
    badge: '📦 Event & Corporate Delivery',
    sizes: [
      { id: 'bulk-boxes-booking', name: 'Bulk Party Boxes (Custom Delivered)', weightLabel: 'Custom Quantities', servings: '25-5000+ Packs', priceGHS: 0, priceDisplay: 'Quote on Request' },
    ],
  },
];

export const POPCORN_PRODUCTS = MENU_ITEMS;

export const SIGNATURE_FLAVORS_LIST = [
  { id: 'classic-sea-salt', name: 'Classic Sea Salt', desc: 'Light, airy, perfectly salted traditional style', price: 'GH₵ 10' },
  { id: 'sweet-caramel', name: 'Sweet Caramel', desc: 'Rich, crunchy golden glaze for serious sweet tooths', price: 'GH₵ 10' },
  { id: 'rich-chocolate', name: 'Rich Chocolate', desc: 'Indulgent cocoa glaze over crispy kernels', price: 'GH₵ 20' },
  { id: 'milkyway', name: 'Milkyway', desc: 'Creamy chocolate drizzled with sweet milk notes', price: 'GH₵ 10' },
  { id: 'vibrant-rainbow', name: 'Vibrant Rainbow', desc: 'Fun, colorful candied mix packed with flavor', price: 'GH₵ 10' },
];

export const OFFICIAL_FLAVOURS = [
  { id: 'classic-sea-salt', name: 'Classic Sea Salt', color: '#F9F6F0', desc: 'Light, airy, salted traditional style' },
  { id: 'sweet-caramel', name: 'Sweet Caramel', color: '#FFC800', desc: 'Rich, crunchy golden glaze' },
  { id: 'rich-chocolate', name: 'Rich Chocolate', color: '#854D0E', desc: 'Indulgent cocoa glaze over crispy kernels' },
  { id: 'milkyway', name: 'Milkyway', color: '#60A5FA', desc: 'Creamy chocolate with sweet milk notes' },
  { id: 'vibrant-rainbow', name: 'Vibrant Rainbow', color: '#EC4899', desc: 'Fun, colorful candied mix' },
];
