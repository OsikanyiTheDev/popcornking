import { MenuItem } from '../types';
import { PopcornImages } from '../assets/images';

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
    unitLabel: 'Signature Portion',
    flavorNotes: ['Light & Airy', 'Pure Sea Salt', 'Cinema Traditional'],
    image: PopcornImages.seaSaltFlyer,
    badge: '🍿 Cinema Classic',
    isPopular: true,
    sizes: [
      { id: 'standard', name: 'Signature Pack', weightLabel: 'Single Serving', servings: '1 Person', priceGHS: 10, priceDisplay: 'GH₵ 10' },
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
    unitLabel: 'Signature Portion',
    flavorNotes: ['Golden Crunch', 'Rich Glaze', 'Caramel Butter'],
    image: PopcornImages.caramelFlyer,
    badge: '👑 Best Seller',
    isPopular: true,
    sizes: [
      { id: 'standard', name: 'Signature Pack', weightLabel: 'Single Serving', servings: '1 Person', priceGHS: 10, priceDisplay: 'GH₵ 10' },
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
    unitLabel: 'Signature Portion',
    flavorNotes: ['Ghanaian Cocoa', 'Crispy Glaze', 'Velvety Chocolate'],
    image: PopcornImages.chocolateFlyer,
    badge: '🍫 Premium Cocoa',
    isPopular: true,
    sizes: [
      { id: 'standard', name: 'Signature Pack', weightLabel: 'Single Serving', servings: '1 Person', priceGHS: 20, priceDisplay: 'GH₵ 20' },
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
    unitLabel: 'Signature Portion',
    flavorNotes: ['Sweet Milk Drizzle', 'Creamy Chocolate', 'Silky Crunch'],
    image: PopcornImages.milkywayFlyer,
    badge: '✨ Fan Favorite',
    isPopular: true,
    sizes: [
      { id: 'standard', name: 'Signature Pack', weightLabel: 'Single Serving', servings: '1 Person', priceGHS: 10, priceDisplay: 'GH₵ 10' },
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
    unitLabel: 'Signature Portion',
    flavorNotes: ['Candied Colors', 'Fruity Pop', 'Joyful Sweetness'],
    image: PopcornImages.rainbowFlyer,
    badge: '🌈 Party Hit',
    isNew: true,
    isPopular: true,
    sizes: [
      { id: 'standard', name: 'Signature Pack', weightLabel: 'Single Serving', servings: '1 Person', priceGHS: 10, priceDisplay: 'GH₵ 10' },
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
    description: 'On-site live popping machine, 2 uniformed servers, custom cups (Ideal for 50 - 150 guests)',
    priceGHS: 1499.99,
    priceDisplay: 'GH₵ 1,499.99',
    unitLabel: 'Live On-Site Cart (50 - 150 guests)',
    flavorNotes: ['Live Popping Cart', '2 Uniformed Attendants', 'Ideal for 50 - 150 guests'],
    image: PopcornImages.liveEventStation,
    badge: '👑 Live Popcorn Cart',
    isPopular: true,
    sizes: [
      { id: 'live-station-booking', name: 'Live Vending Station (50 - 150 guests)', weightLabel: '50 - 150 Guests', servings: '50-150 Guests', priceGHS: 1499.99, priceDisplay: 'GH₵ 1,499.99' },
    ],
  },
  {
    id: 'bulk-party-boxes',
    name: 'Bulk Party Boxes and Crates',
    category: 'event_packages',
    categoryLabel: 'EVENT PACKAGES',
    description: 'Pre-packaged branded bags/buckets delivered fresh (Ideal for 50 to 100 guests)',
    priceGHS: 699.99,
    priceDisplay: 'GH₵ 699.99',
    unitLabel: 'Freshly Delivered Crate (50 to 100 guests)',
    flavorNotes: ['Pre-Packaged Freshness', 'Custom Branded Bags', 'Ideal for 50 to 100 guests'],
    image: 'https://images.unsplash.com/photo-1572177191856-3cde618dee1f?auto=format&fit=crop&w=800&q=80',
    badge: '📦 Party Boxes & Crates',
    sizes: [
      { id: 'bulk-boxes-booking', name: 'Bulk Party Boxes and Crates (50 to 100 guests)', weightLabel: '50 to 100 Guests', servings: '50-100 Packs', priceGHS: 699.99, priceDisplay: 'GH₵ 699.99' },
    ],
  },
  {
    id: 'corporate-package',
    name: 'Corporate',
    category: 'event_packages',
    categoryLabel: 'EVENT PACKAGES',
    description: 'Dual live high-output stations & VIP summit attendants (Ideal for 250 to 500 guests)',
    priceGHS: 3499.99,
    priceDisplay: 'GH₵ 3,499.99',
    unitLabel: 'Corporate Summit Station (250 to 500 guests)',
    flavorNotes: ['Dual Live Stations', '3 Uniformed Servers', 'Ideal for 250 to 500 guests'],
    image: PopcornImages.corporateRetreat,
    badge: '🏢 Corporate VIP Summit',
    sizes: [
      { id: 'corporate-package-booking', name: 'Corporate Package (250 to 500 guests)', weightLabel: '250 to 500 Guests', servings: '250-500 Guests', priceGHS: 3499.99, priceDisplay: 'GH₵ 3,499.99' },
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
