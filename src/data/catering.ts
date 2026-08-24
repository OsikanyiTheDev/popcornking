import { CateringPackage } from '../types';

export const CATERING_PACKAGES: CateringPackage[] = [
  {
    id: 'live-vending-station',
    name: 'Live Vending Station',
    tagline: 'On-site live popping machine, 2 uniformed servers, custom cups',
    minGuests: 50,
    maxGuests: 1000,
    startingPriceGHS: 1500,
    popularFor: 'Weddings, Corporate Functions, Birthdays & Festivals',
    isBestSeller: true,
    features: [
      'On-site live popping machine with vintage glass cart display',
      '2 Professional, friendly uniformed servers & attendants',
      'Custom branded cups & packaging matching your event theme',
      'Continuous hot, fresh popping throughout your event duration',
      'Full selection of signature glazes (Classic Sea Salt, Sweet Caramel, Rich Chocolate, Milkyway, Vibrant Rainbow)',
      'Complete station delivery, setup, hygiene checks & cleanup handled in Accra',
    ],
    includedEquipment: [
      'Commercial Heated Glass Popping Machine & Royal Cart',
      'Aroma warmer bin & flavour shaker bar',
      '2x Uniformed Chef Attendants',
      'Custom event theme cups & napkins',
    ],
  },
  {
    id: 'bulk-party-boxes',
    name: 'Bulk Party Boxes & Crates',
    tagline: 'Pre-packaged branded bags/buckets delivered fresh to your venue',
    minGuests: 25,
    maxGuests: 5000,
    startingPriceGHS: 650,
    popularFor: 'Parties, Schools, Churches & Corporate Gifting',
    features: [
      'Pre-packaged branded bags or large party buckets delivered fresh',
      'Custom personalized stickers with event title, couple names or company logo',
      'Sealed freshness lock ensuring crispy crunch for days',
      'Mix & match signature flavors across your bulk order',
      'Flexible tier discounts for large school, church or corporate orders',
      'Scheduled direct delivery across Greater Accra',
    ],
    includedEquipment: [
      'Insulated transport party crates',
      'Full-color custom branded stickers & party tags',
    ],
  },
  {
    id: 'corporate-summit-vip',
    name: 'Corporate Summit & Mega Gala VIP Station',
    tagline: 'High-capacity dual stations for large conferences, festivals & brand activations',
    minGuests: 250,
    maxGuests: 2500,
    startingPriceGHS: 3500,
    popularFor: 'Conferences, Concerts, Brand Activations & End-of-Year Galas',
    features: [
      'Dual commercial high-capacity live popping stations with LED banner lighting',
      '3 Dedicated uniformed servers & attendants for up to 5 hours',
      'Unlimited gourmet servings for all VIP and registered delegates',
      'Full corporate branding on carts, cups, napkins and takeaway boxes',
      'Priority backup power setup for outdoor and hotel venues',
    ],
    includedEquipment: [
      '2x Industrial High-Output Popping Stations',
      'Custom corporate backdrop & branded cart skirts',
      '3x Trained event attendants',
    ],
  },
];

export const EVENT_TYPES = [
  'Wedding Reception',
  'Birthday Celebration',
  'Corporate Function / Summit',
  'School Fair / Sports Day',
  'Church Program / Convention',
  'Movie Night / Screening',
  'Festival / Music Concert',
  'Product Launch / Brand Activation',
  'Outdoor Picnic / Private Gathering',
  'Other Special Occasion',
];

export const ACCRA_AREAS = [
  'East Legon / Shiashie',
  'Airport Residential / Airport City',
  'Cantonments / Labone',
  'Osu / Ridge',
  'Dzorwulu / Roman Ridge',
  'Spintex Road / Baatsona',
  'Tema (Comm 1 - 25)',
  'Legon / Madina / Adenta',
  'Achimota / Dome / West Legon',
  'Dansoman / Latebiokorshie',
  'Kaneshie / Lapaz / Kwashieman',
  'Sakumono / Lashibi',
  'Other Greater Accra Location',
];
